import { create } from 'zustand'
import { getCategories, getUrls, Urls } from '../utils/data'

interface dataStore {
  urls: Urls[]
  categories: string[]
}

export const useDataStore = create<dataStore>(() => ({
  urls: [],
  categories: []
}))

const initData = (): void => {
  const urls = getUrls()
  const categories = getCategories()
  useDataStore.setState({ urls, categories })
}

initData()
