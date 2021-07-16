import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'ChainGaurdians',
  description:
    'ChainGuardians Staking platform',
  image: 'https://chainguardians.io/app/themes/chainguardians/dist/images/brand-logo@2x_49525a94.png',
}

export const customMeta: { [key: string]: PageMeta } = {
  '/': {
    title: 'DEX Exchange',
  }
}
