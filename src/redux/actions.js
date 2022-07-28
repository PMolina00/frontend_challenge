import axios from 'axios'

const BASE_URL = 'https://backend-restapi-challenge.herokuapp.com'

export const SAVE_TEXT = 'SAVE_TEXT'

export const sendText = (text) => {
  return function (dispatch) {
    axios.get(`${BASE_URL}/iecho?text=${text}`).then(r => {
      dispatch({
        type: SAVE_TEXT,
        payload: r.data
      })
    })
  }
}
