export interface City {
  id: string
  name: string
  country: {
    isoCode: string
  }
}

export interface Tag {
  id: string
  name: string
  slug: string
}

export interface Job {
  id: number
  title: string
  slug: string
  company: {
    id: string
    name: string
    logoUrl: string
    slug: string
  }
  cities: Array<{
    id: string
    name: string
    country: {
      isoCode: string
    }
  }>
  tags: Tag[]
}

export interface JobsData {
  jobs: Job[]
}
