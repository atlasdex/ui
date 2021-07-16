import BigNumber from 'bignumber.js/bignumber'
import { BIG_TEN } from '../utils/bigNumber'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

export const DEFAULT_TOKEN_DECIMAL = BIG_TEN.pow(18)
