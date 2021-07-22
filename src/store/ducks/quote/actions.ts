import { action } from 'typesafe-actions'
import { IQuote, QuoteTypes } from './types'

export const loadRequest = (search:string) => action(QuoteTypes.LOAD_REQUEST, { search })
export const loadSucess = (data: IQuote[]) => action(QuoteTypes.LOAD_SUCESS, { data })
export const loadFailure = () => action(QuoteTypes.LOAD_FAILURE)

