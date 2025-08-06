import type { HomepageData } from '../types'

export const useHomepage = async () => {
  const { data, error } = await useFetch<{
    success: boolean
    data: HomepageData[]
  }>('/api/homepage', {
    headers: {
      Authorization: 'Bearer abn12njk873vfv', // Replace with your actual token
    },
  })

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: `Couldn't fetch data.`,
    })
  }

  return {
    homepage: data.value.data ?? [],
    error,
  }
}
