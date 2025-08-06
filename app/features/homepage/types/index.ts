export type HomepageItem = {
  image: string
  url: string
  title?: string
}

export type HomepageData = {
  banners: Banner[]
  promotions: Promotion[]
  newProducts: Product[]
  favourites: Product[]
}

export type Product = {
  image: string
  url: string
  title: string
}

export type Banner = {
  image: string
  url: string
}

export type Promotion = {
  image: string
  url: string
}
