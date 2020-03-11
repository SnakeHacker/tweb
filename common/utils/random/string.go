package random

import (
	"math/rand"
	"time"
)

// CharsetAlphaNumeric ...
const CharsetAlphaNumeric = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

// CharsetAlphaNumericLowerCase ...
const CharsetAlphaNumericLowerCase = "abcdefghijklmnopqrstuvwxyz0123456789"

// CharsetNumeric ...
const CharsetNumeric = "0123456789"

var seededRand = rand.New(rand.NewSource(time.Now().UnixNano()))

// String ...
func String(n int) string {
	b := make([]rune, n)
	for i := range b {
		b[i] = rune(seededRand.Intn(26) + 'a')
	}
	return string(b)
}

// StringWithCharset ...
func StringWithCharset(n int, charset string) string {
	b := make([]byte, n)
	for i := range b {
		b[i] = charset[seededRand.Intn(len(charset))]
	}
	return string(b)
}
