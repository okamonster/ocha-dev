import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: 'ocha-dev-blog',
  apiKey: process.env.NEXT_PUBLIC_API_KEY as string,
})
