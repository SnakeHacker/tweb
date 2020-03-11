package random

import (
	"math"
	"math/rand"
	"sync"
)

// Exponential https://en.wikipedia.org/wiki/Exponential_distribution#Generating_exponential_variates
// yields the time between two consecutive Poisson process events
func Exponential(lambda float64) float64 {
	u := rand.Float64()
	/*
		for u == 0.0 {
			u = rand.Float64()
		}
	*/
	return -math.Log(u) / lambda
}

// Zipf https://en.wikipedia.org/wiki/Zipf%27s_law
func Zipf(mean float64) int {
	// s = 1
	N := 1
	for float64(N)/harmonicNumber(N) < mean {
		N++
	}
	// Inverse CDF; yields k in {1, 2, ... N} under Zipf distribution
	u := rand.Float64()
	k := 1
	for harmonicNumber(k)/harmonicNumber(N) < u {
		k++
	}
	return k
}

var harmonicNumberCache sync.Map

func harmonicNumber(n int) float64 {
	i := n
	var val float64
	for {
		temp, ok := harmonicNumberCache.Load(i)
		if ok {
			val = temp.(float64)
			break
		} else if i == 0 {
			val = 0.0
			break
		} else {
			i--
		}
	}
	if i == n {
		return val
	}
	for i++; i <= n; i++ {
		val += 1.0 / float64(i)
	}
	harmonicNumberCache.Store(n, val)
	return val
}
