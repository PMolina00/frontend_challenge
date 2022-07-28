import { SAVE_TEXT } from './actions'

const initialState = []

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SAVE_TEXT:
      return [
        {
          text: payload.text,
          palindrome: payload.palindrome
        },
        ...state
      ]
    default:
      return state
  }
}

export default rootReducer
