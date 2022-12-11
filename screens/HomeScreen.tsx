import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigation'

export const HomeScreen = ({ navigation }: NativeStackScreenProps<RootStackParamList, 'Home'>) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>React Native Workshop</Text>
      <View style={styles.buttons}>
        <Button title="View Demo" onPress={() => navigation.navigate('ViewDemo')} />
        <Button title="Button Demo" onPress={() => navigation.navigate('ButtonDemo')} />
        <Button title="TextInput Demo" onPress={() => navigation.navigate('InputDemo')} />
        <Button title="Styling Demo" onPress={() => navigation.navigate('StylingDemo')} />
        <Button title="Layout Demo" onPress={() => navigation.navigate('LayoutDemo')} />
        <Button title="Storage Demo" onPress={() => navigation.navigate('StorageDemo')} />
        <Button title="Platform Demo" onPress={() => navigation.navigate('PlatformDemo')} />
        <Button title="ColorScheme Demo" onPress={() => navigation.navigate('ColorSchemeDemo')} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headline: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
})
