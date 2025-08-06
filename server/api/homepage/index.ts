//import { SuccessResult } from './../../../node_modules/nuxt-og-image/node_modules/execa/types/return/result.d'
import { readFile } from 'fs/promises'
import { join } from 'path'

export default defineEventHandler(async (event) => {
  const authHeader = getHeader(event, 'authorization')

  if (authHeader !== 'abn12njk873vfv') {
    return {
      success: false,
      message: 'Unauthorized',
    }
  }

  const filePath = join(process.cwd(), 'server/data/products.json')
  const fileContent = await readFile(filePath, 'utf-8')
  const data = JSON.parse(fileContent)

  console.log(data)

  // return [
  //   { id: 1, name: 'Cool Shirt', price: 29.99 },
  //   { id: 2, name: 'Trendy Jeans', price: 59.99 },
  // ]

  return {
    success: false,
    data: 'Unauthorized',
  }
})
