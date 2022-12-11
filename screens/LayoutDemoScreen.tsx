import React from 'react'
import { StyleSheet, View } from 'react-native'

export const LayoutDemoScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.item, { backgroundColor: 'goldenrod' }]} />
      <View style={[styles.item, { backgroundColor: 'skyblue' }]} />
      <View style={[styles.item, { backgroundColor: 'chocolate' }]} />
      <View style={[styles.item, { backgroundColor: 'cornflowerblue' }]} />
      <View style={[styles.item, { backgroundColor: 'crimson' }]} />
      {/* <View style={[styles.item, { backgroundColor: 'darkkhaki' }]} />
      <View style={[styles.item, { backgroundColor: 'dodgerblue' }]} />
      <View style={[styles.item, { backgroundColor: 'lavender' }]} />
      <View style={[styles.item, { backgroundColor: 'moccasin' }]} />
      <View style={[styles.item, { backgroundColor: 'peru' }]} /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    height: 100,
    width: 100,
  },
})
