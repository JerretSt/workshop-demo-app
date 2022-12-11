import React, { useState } from 'react'
import { ScrollView, StyleSheet, TextInput, View } from 'react-native'

export const InputDemoScreen = () => {
  const [text, setText] = useState<string>('')

  return (
    <ScrollView style={styles.container}>
      <TextInput style={styles.input} value={text} onChangeText={(text) => setText(text)} />
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
})
