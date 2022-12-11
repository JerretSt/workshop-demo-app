import AsyncStorage from '@react-native-async-storage/async-storage'
// import EncryptedStorage from 'react-native-encrypted-storage'

type StorageAdapter = {
  getItem: (key: string) => Promise<string | null>
  setItem: (key: string, value: string) => Promise<void>
  removeItem: (key: string) => Promise<void>
  clear: () => Promise<void>
}

const createGetStorageValue =
  (storage: StorageAdapter) =>
  async <T>(key: string, defaultValue?: T): Promise<T | null> => {
    try {
      const value = await storage.getItem(key)

      if (value !== null) {
        return JSON.parse(value)
      }

      if (defaultValue !== undefined) {
        return defaultValue
      }

      return null
    } catch (e) {
      return null
    }
  }

export const getStorageValue = createGetStorageValue(AsyncStorage)
// export const getSecureStorageValue = createGetStorageValue(EncryptedStorage)

const createSetStorageValue =
  (storage: StorageAdapter) =>
  async (key: string, value: unknown): Promise<boolean> => {
    try {
      await storage.setItem(key, JSON.stringify(value))

      return true
    } catch (e) {
      return false
    }
  }

export const setStorageValue = createSetStorageValue(AsyncStorage)
// export const setSecureStorageValue = createSetStorageValue(EncryptedStorage)

export const createDeleteStorageValue =
  (storage: StorageAdapter) =>
  async (key: string): Promise<boolean> => {
    try {
      await storage.removeItem(key)

      return true
    } catch (e) {
      return false
    }
  }

export const deleteStorageValue = createDeleteStorageValue(AsyncStorage)
// export const deleteSecureStorageValue = createDeleteStorageValue(EncryptedStorage)

export const createClearStorage = (storage: StorageAdapter) => async () => {
  try {
    await storage.clear()

    return true
  } catch (e) {
    return false
  }
}

export const clearStorage = createClearStorage(AsyncStorage)
// export const clearSecureStorage = createClearStorage(EncryptedStorage)
