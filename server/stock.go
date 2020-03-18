package server

import (
	"net/http"
	"time"

	"github.com/SnakeHacker/tweb/common"
	"github.com/SnakeHacker/tweb/common/utils/web"
	"github.com/SnakeHacker/tweb/server/proto"
	"github.com/SnakeHacker/tweb/tushare"
	"github.com/golang/glog"
	"github.com/gorilla/mux"
)

func (s *Server) handleStock(router *mux.Router) {
	router.HandleFunc("/stocks/daily/", s.fetchStockDaily).Methods("POST")
}

func (s *Server) fetchStockDaily(w http.ResponseWriter, r *http.Request) {
	var req proto.FetchStockDailyRequest

	if err := web.ReadJSONBody(r.Body, &req); err != nil {
		glog.Error(err)
		web.BadRequest(w, err)
		return
	}

	if req.Code == "" {
		err := common.ErrTushareCodeEmpty
		glog.Error(err)
		web.BadRequest(w, err)
		return
	}

	start := time.Unix(req.Start, 0)
	end := time.Unix(req.End, 0)

	tResp, err := s.TuShare.Daily([]string{req.Code}, start, end)
	if err != nil {
		glog.Error(err)
		web.InternalError(w, err)
		return
	}

	var resp proto.FetchStockDailyResponse

	glog.Info(tResp.Data.Fields)
	glog.Info(tResp.Data.Items)

	dailys, err := convertStockDailys(tResp)
	if err != nil {
		glog.Error(err)
		web.InternalError(w, err)
		return
	}

	resp.Dailys = dailys

	web.RespondJSON(w, &resp)
}

func convertStockDailys(tResp tushare.TushareHttpResponse) (dailys []*proto.StockDaily, err error) {
	headerTsCodeIdx,
		headerTradeDateiDx,
		headerOpenIdx,
		headerHighIdx,
		headerLowIdx,
		headerCloseIdx,
		headerPreCloseIdx,
		headerChangeIdx,
		headerPctChgIdx,
		headerVolIdx,
		headerAmountIdx,
		err := tushare.StockDailyHeaderIdx(tResp.Data.Fields)
	if err != nil {
		glog.Error(err)
		return
	}

	for _, fields := range tResp.Data.Items {
		if len(fields) != len(tResp.Data.Fields) {
			err = common.ErrTushareStockFieldsLen
			glog.Error(err)
			return
		}

		dailys = append(dailys, &proto.StockDaily{
			TsCode:    fields[headerTsCodeIdx].(string),
			TradeDate: fields[headerTradeDateiDx].(string),
			Open:      fields[headerOpenIdx].(float64),
			High:      fields[headerHighIdx].(float64),
			Low:       fields[headerLowIdx].(float64),
			Close:     fields[headerCloseIdx].(float64),
			PreClose:  fields[headerPreCloseIdx].(float64),
			Change:    fields[headerChangeIdx].(float64),
			PctChg:    fields[headerPctChgIdx].(float64),
			Vol:       fields[headerVolIdx].(float64),
			Amount:    fields[headerAmountIdx].(float64),
		})
	}

	return
}
