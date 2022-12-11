import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'

export const StorageDemoScreen = () => {
  const [text, setText] = useState<string>('')
  const [value, setValue] = useState<string>('')

  const getStorageValue = (key: string) => AsyncStorage.getItem(key)
  const setStorageValue = (key: string, value: string) => AsyncStorage.setItem(key, value)
  const deleteStorageValue = (key: string) => AsyncStorage.removeItem(key)
  const clear = () => {
    AsyncStorage.clear()
    setText('')
    setValue('')
  }

  return (
    <ScrollView style={styles.container}>
      <TextInput style={styles.input} value={text} onChangeText={(text) => setText(text)} />
      <Button
        title="Save"
        onPress={() => {
          setStorageValue('value', text)
        }}
      />

      <View style={styles.spacer} />

      <Button
        title="Load"
        onPress={async () => {
          const storedValue = await getStorageValue('value')
          if (storedValue) {
            setValue(storedValue)
          } else {
            setValue('')
          }
        }}
      />

      <View style={styles.spacer} />

      <Button
        title="Remove"
        onPress={() => {
          deleteStorageValue('value')
        }}
      />

      <View style={styles.spacer} />

      <Button title="Clear" onPress={clear} />

      <View style={styles.result}>
        <Text>Local: "{text}"</Text>
        <Text>Storage: "{value}"</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 48,
    marginBottom: 16,
    paddingHorizontal: 12,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 4,
  },
  spacer: {
    height: 8,
  },
  result: {
    marginTop: 32,
  },
})
