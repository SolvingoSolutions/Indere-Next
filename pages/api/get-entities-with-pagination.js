import { getEntitiesWithPagination } from '@teleporthq/cms-mappers/caisy'
export default async function handler(req, res) {
  try {
    const response = await getEntitiesWithPagination(req.body)
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).send('Something went wrong')
  }
}
      