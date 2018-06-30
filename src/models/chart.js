import { fakeChartData, basicCardData } from '../services/api';

export default {
  namespace: 'chart',

  state: {
    visitData: [],
    visitData2: [],
    salesData: [],
    searchData: [],
    offlineData: [],
    offlineChartData: [],
    salesTypeData: [],
    salesTypeDataOnline: [],
    salesTypeDataOffline: [],
    radarData: [],
    basic: {
      total_turnover: 0,  //总销售额
      total_reservation: 0, //总订单数
      total_payment: 0, //总完成订单数
      reservation_payment_ratio: 0 // 支付数/订单数
    },
    loading: false,
  },

  effects: {
    *fetch(_, { call, put }) {
      const { data } = yield call(fakeChartData);
      yield put({
        type: 'save',
        payload: data,
      });
      const { data: basicData } = yield call(basicCardData);
      yield put({
        type: 'save',
        payload: {
          basic: basicData
        }
      });
    },
    *fetchSalesData(_, { call, put }) {
      const { data } = yield call(fakeChartData);
      yield put({
        type: 'save',
        payload: {
          salesData: data.salesData,
        },
      });
    },
  },

  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    clear() {
      return {
        visitData: [],
        visitData2: [],
        salesData: [],
        searchData: [],
        offlineData: [],
        offlineChartData: [],
        salesTypeData: [],
        salesTypeDataOnline: [],
        salesTypeDataOffline: [],
        radarData: [],
      };
    },
  },
};
