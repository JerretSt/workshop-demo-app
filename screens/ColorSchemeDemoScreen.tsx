import React from 'react'
import { StyleSheet, Text, useColorScheme, View } from 'react-native'

export const ColorSchemeDemoScreen = () => {
  const colorScheme = useColorScheme()
  return (
    <View style={styles.container}>
      <Text>ColorScheme: "{colorScheme}"</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
