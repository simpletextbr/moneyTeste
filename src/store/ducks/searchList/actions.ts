import { action } from 'typesafe-actions'
import { SearchListTypes } from './types'
import { IQuote } from '../quote/types'

export const addToSearchList = (data: IQuote) => action(SearchListTypes.ADD_TO_SEARCH_LIST, { data })

