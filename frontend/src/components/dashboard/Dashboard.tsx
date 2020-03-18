import React from 'react';
import { DatePicker, Input, message } from 'antd';
import BaseComponent from 'components/Base';
import StockViewer from 'components/stock/Stock';
import { FetchStockDaily } from 'client/stock';
import {stock} from 'proto/stock';
import moment from 'moment';
import intl from 'react-intl-universal';
import locale from 'antd/es/date-picker/locale/zh_CN';

import './dashboard.less'

const { RangePicker } = DatePicker;
const { Search } = Input;

interface State{
    tsCode: string;
    startDate: number;
    endDate: number;
    dailys: number[][];
}

class Dashboard extends BaseComponent<{}, State> {
    state: Readonly<State> = {
        tsCode: "000001.SZ",
        startDate: 0,
        endDate: 0,
        dailys: [],
    };

    componentDidMount (){
    }

    fetchStockDaily = async (tsCode: string) => {
        const {startDate, endDate} = this.state;
        const req = stock.FetchStockDailyRequest.create({
            code: tsCode,
            start: startDate,
            end: endDate,
        });
        const resp = await FetchStockDaily(req);

        if (!this.checkHTTPResult(resp)) {
            return
        }

        let dailyData = [];

        for (let daily of resp.response?.dailys || []){
            // let tradeDate = moment(daily.trade_date||"", 'YYYYMMDD').unix()*1000
            let tradeDate = daily.trade_date;
            let open = daily.open;
            let high = daily.high;
            let low = daily.low;
            let close = daily.close;
            dailyData.push([tradeDate, open, close, low, high]);
        }

        dailyData.reverse();

        console.log("dashboard", dailyData as number[][])

        this.setState({
            dailys: dailyData as number[][]
        })
    }

    changeDate = (e: any) => {
        if (e){
            this.setState({
                startDate: e[0].unix(),
                endDate: e[1].unix(),
            })
        }else{
            this.setState({
                startDate: 0,
                endDate: 0,
            })
        }
    }

    onTsCodeSearch = (val: string)=> {
        if (!this.checkParams(val)){
            return
        }

        this.fetchStockDaily(val);
    }

    onTsCodeChange = (e: any)=> {
        this.setState({
            tsCode: e.target.value
        })
    }

    checkParams = (tsCode: string) =>{
        const {startDate, endDate} = this.state;
        if (startDate === 0 || endDate === 0){
            message.error(intl.formatMessage({id:"dateRangeIsEmpty"}));
            return false
        }

        if (!tsCode){
            message.error(intl.formatMessage({id:"tsCodeIsEmpty"}));
            return false
        }

        return true
    }

    render() {
        const {tsCode, startDate, endDate, dailys} = this.state;
        return (
            <div className="stock_viewer_wrapper">
                <div className="input_params">
                    <RangePicker
                        locale={locale}
                        format={'YYYY/MM/DD'}
                        onChange={this.changeDate}
                        style={{width: '300px', marginRight: '20px'}}
                    />

                    <Search
                    placeholder={intl.formatMessage({id: "inputTsCode"})}
                    onSearch={this.onTsCodeSearch}
                    value={tsCode}
                    style={{ width: 200 }}/>
                </div>
                <StockViewer
                    tsCode={tsCode}
                    dailys={dailys}
                    startDate={startDate}
                    endDate={endDate}
                />
            </div>
        )
    }
}

export default Dashboard;
