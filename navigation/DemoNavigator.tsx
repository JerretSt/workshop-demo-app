import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack'

export type DemoStackParamList = {
  Home: undefined
}

const DemoStack = createNativeStackNavigator<DemoStackParamList>()

export const DemoNavigator = () => {
  return (
    <DemoStack.Navigator>
      <DemoStack.Screen name="Home" component={HomeScreen} />
    </DemoStack.Navigator>
  )
}

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  )
}
