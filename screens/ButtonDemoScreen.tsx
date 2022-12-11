import React from 'react'
import { Button, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export const ButtonDemoScreen = () => {
  return (
    <View style={styles.container}>
      <Button title="Button" />

      <View style={styles.spacer} />

      <TouchableOpacity>
        <Text>Button</Text>
      </TouchableOpacity>

      <View style={styles.spacer} />

      <Pressable>
        <Text>Button</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  spacer: {
    height: 16,
  },
})
