import React from 'react'
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'

export const ViewDemoScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={[styles.item, { backgroundColor: 'goldenrod' }]} />
      <View style={[styles.item, { backgroundColor: 'skyblue' }]} />
      <View style={[styles.item, { backgroundColor: 'chocolate' }]} />
      <View style={[styles.item, { backgroundColor: 'cornflowerblue' }]} />
      <View style={[styles.item, { backgroundColor: 'crimson' }]} />
      <View style={[styles.item, { backgroundColor: 'darkkhaki' }]} />
      <View style={[styles.item, { backgroundColor: 'dodgerblue' }]} />
      <View style={[styles.item, { backgroundColor: 'lavender' }]} />
      <View style={[styles.item, { backgroundColor: 'moccasin' }]} />
      <View style={[styles.item, { backgroundColor: 'peru' }]} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    height: 200,
    // width: 300,
  },
})

const ITEMS = Array.from({ length: 10 }, (_, i) => i + 1).map((n) => `item ${n}`)

{
  /* <FlatList
      data={ITEMS}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <View>
          <Text>{item}</Text>
        </View>
      )}
    /> */
}
