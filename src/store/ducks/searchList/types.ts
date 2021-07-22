import { IQuote } from '../quote/types'

export enum SearchListTypes {
  ADD_TO_SEARCH_LIST = '@searchList/ADD_SEARCH_LIST',
}

export interface SearchListState {
 readonly data: IQuote[];
}
