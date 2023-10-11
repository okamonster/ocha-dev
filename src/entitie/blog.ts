export interface Blog {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  content: string
  OGP: {
    url: string
    height: number
    width: number
  }
  tag: string
}
