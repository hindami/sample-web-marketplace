//import { SuccessResult } from './../../../node_modules/nuxt-og-image/node_modules/execa/types/return/result.d'
import { readFile } from 'fs/promises'
import { join } from 'path'

export default defineEventHandler(async (event) => {
  const authHeader = getHeader(event, 'Authorization')

  if (authHeader !== 'Bearer abn12njk873vfv') {
    return {
      success: false,
      message: 'Unauthorized',
    }
  }

  const filePath = join(process.cwd(), 'server/data/homepage.json')
  const fileContent = await readFile(filePath, 'utf-8')
  const data = JSON.parse(fileContent)

  return {
    ...data,
  }
})
