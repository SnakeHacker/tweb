import React from 'react';
import BaseComponent from 'components/Base';
import ReactEcharts from 'echarts-for-react';

import './stock.less'

interface Props{
    tsCode: string
    startDate: number
    endDate: number
    dailys: any[][]
}

interface State{
}


class StockViewer extends BaseComponent<Props, State> {

    componentDidMount (){
    }

    getOption=()=>{
        var rawData = this.props.dailys;
        var dates = rawData.map((item: number[]) => {
            return item[0];
        });

        var data = rawData.map((item: number[]) => {
            return [item[1], item[2], item[3], item[4]];
        });

        return {
            backgroundColor: 'black',
            legend: {
                data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30'],
                inactiveColor: '#777',
                textStyle: {
                    color: '#fff'
                }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    animation: false,
                    type: 'cross',
                    lineStyle: {
                        color: '#376df4',
                        width: 2,
                        opacity: 1
                    }
                }
            },
            xAxis: {
                type: 'category',
                data: dates,
                axisLine: { lineStyle: { color: '#8392A5' } }
            },
            yAxis: {
                scale: true,
                axisLine: { lineStyle: { color: '#8392A5' } },
                splitLine: { show: false }
            },
            grid: {
                bottom: '10%'
            },
            series: [
                {
                    type: 'candlestick',
                    name: '日K',
                    data: data,
                    itemStyle: {
                        color: 'transparent',
                        color0: '#00f901',
                        borderColor: 'red',
                        borderColor0: 'green'
                    },
                    markPoint: {
                        label: {
                            normal: {
                                formatter: (param: any)=> {
                                    return param != null ? Math.round(param.value) : '';
                                }
                            }
                        },
                        data: [
                            {
                                name: 'XX标点',
                                coord: ['20200310', 14.0],
                                value: 14.0,
                                itemStyle: {
                                    color: 'red'
                                }
                            },
                            {
                                name: 'highest value',
                                type: 'max',
                                valueDim: 'highest'
                            },
                            {
                                name: 'lowest value',
                                type: 'min',
                                valueDim: 'lowest'
                            }
                        ],
                        tooltip: {
                            formatter: (param: any) => {
                                return param.name + '<br>' + (param.data.coord || '');
                            }
                        }
                    },
                }
            ]
        }
    }

    render() {
        const{dailys} = this.props;
        return (
            <div 
                className="stock-chart" 
                hidden={dailys.length === 0}
            >
                <ReactEcharts
                    option={this.getOption()}
                    notMerge={true}
                    lazyUpdate={true}/>
            </div>
        )
    }
}

export default StockViewer;