import axios from 'axios';
import Utility from './Utility';
const ApiService = `${Utility.ApiService}`;

export default class Httphelper {
  static async __request({ method = 'get', url, headers, params, data, dispatch }) {
    try {
      if (!url) {
        Utility.Toast('url not found');
        return Promise.reject('url not found');
      }
      const _url = `${ApiService}${url}`;
      const token = Utility.Token;
      //       :authority:
      // :method: GET
      // :path: /event_report_by_date/ufc/2021-02-10?_=1612964088048
      // :scheme: https
      const headerBase = {
        // ':authority': 'io.oddsshark.com',
        // ':method': 'GET',
        // ':scheme': 'https',
        // ':path': '/event_report_by_date/ufc/2021-02-10?_=1612964088048',
        origin: 'https://www.oddsshark.com',
        // pragma: 'no-cache',
        referer: 'https://www.oddsshark.com/',
      };
      const _headers = Object.assign(headerBase, headers);
      if (token) {
        _headers.token = token;
      }
      const opt = { method, url: _url, headers: _headers, params, data };
      const response = await axios(opt);
      const { data: body } = response;
      return body.data || body;
    } catch (ex) {
      console.log(ex);
      const { response } = ex;
      const { data: errData, status, statusText } = response || {};
      const { msg } = errData || {};
      if (status === 401) {
        Utility.Token = null;
        Utility.UserInfo = null;
        alert(msg || statusText);

        if (dispatch) {
          // dispatch({type: TypeMap.USER_401, payload: ''});
        }
        // Utility.NotifyLogout.next({ isLogin: true });
        console.log(statusText);
        return Promise.reject(msg);
      }
      if (msg) {
        alert(msg);
      }
      console.log('status:', msg);
      return Promise.reject(msg);
    }
  }

  /**
   * post request
   *
   * @param {*} { url, headers, params, data }
   * @returns
   * @memberof Httphelper
   */
  static async onPost(url, { headers, params, data }, dispatch) {
    return this.__request({ method: 'post', url, headers, params, data, dispatch });
  }

  /**
   * put request
   *
   * @param {*} { url, headers, params, data }
   * @returns
   * @memberof Httphelper
   */
  static async onPut(url, { headers, params, data }, dispatch) {
    return this.__request({ method: 'put', url, headers, params, data, dispatch });
  }

  /**
   * delete request
   *
   * @param {*} { url, headers, params, data }
   * @returns
   * @memberof Httphelper
   */
  static async onDelete(url, { headers, params, data }, dispatch) {
    return this.__request({ method: 'delete', url, headers, params, data, dispatch });
  }

  /**
   *  get request
   *
   * @param {*} { url, headers, params }
   * @returns
   * @memberof Httphelper
   */
  static async onGet(url, { headers, params }, dispatch) {
    return this.__request({ method: 'get', url, headers, params, dispatch });
  }
}
