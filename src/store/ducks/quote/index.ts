import { Reducer } from 'redux'
import { QuoteState, QuoteTypes } from './types'

const initialState:QuoteState = {
  data: [],
  load: false,
  error: false,
}

const reducer:Reducer<QuoteState> = (state = initialState, action) => {
  switch (action.type){
  case QuoteTypes.LOAD_REQUEST:
    return { ...state, load: true }
  case QuoteTypes.LOAD_SUCESS:
    return { ...state, load: false, error: false, data: action.payload.data }
  case QuoteTypes.LOAD_FAILURE:
    return { ...state, load: false, error: true, data: [ ...state.data ]
    }
  default:
    return state
  }
}

export default reducer
