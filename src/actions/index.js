import HttpHelper from '../utility/HttpHelper';
// import Utility from '../utility/Utility';

const TypeMap = {
  EVENT_GET_LIST: 'EVENT_GET_LIST',
};

export const eventList = (date) => {
  return async (dispatch) => {
    const url = `https://io.oddsshark.com/event_report_by_date/ufc/2021-02-10?_=${new Date().getTime()}`;
    const result = await HttpHelper.onGet(url, dispatch);
    dispatch({ type: TypeMap.EVENT_GET_LIST, payload: result });
    return result;
  };
};
