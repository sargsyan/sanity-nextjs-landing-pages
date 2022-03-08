import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: 'b0v75nt5',
  dataset: 'production',
  useCdn: false, // `false` if you want to ensure fresh data
  apiVersion: '2022-01-31',
})

export default client
