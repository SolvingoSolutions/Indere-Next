import { revalidate } from '@teleporthq/cms-mappers/caisy/revalidate'

export default async function handler(req, res) {
  try {
    await revalidate(req, async (data, contentType) => {
      switch (contentType) {
        case 'a8a86a3f-573c-46f4-869e-c0bbc24279a8': {
          try {
            await res.revalidate(`/news/${data.slug}`)
          } catch (error) {
            console.log('Failed in clearing cache')
            console.log(error)
          }
          break
        }
        default:
          throw new Error('Invalid content typ, received', contentType)
      }
    })
    return res.status(200).json({
      revalidated: true,
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      revalidated: false,
    })
  }
}
