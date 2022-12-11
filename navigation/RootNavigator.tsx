import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import {
  ButtonDemoScreen,
  ColorSchemeDemoScreen,
  HomeScreen,
  InputDemoScreen,
  LayoutDemoScreen,
  PlatformDemoScreen,
  StorageDemoScreen,
  StylingDemoScreen,
  ViewDemoScreen,
} from '../screens'

export type RootStackParamList = {
  Home: undefined
  ViewDemo: undefined
  ButtonDemo: undefined
  InputDemo: undefined
  StylingDemo: undefined
  LayoutDemo: undefined
  StorageDemo: undefined
  PlatformDemo: undefined
  ColorSchemeDemo: undefined
}

const RootStack = createDrawerNavigator<RootStackParamList>()

export const RootNavigator = () => (
  <RootStack.Navigator screenOptions={{ headerTitleAlign: 'center', drawerStyle: { paddingTop: 48 } }}>
    <RootStack.Screen name="Home" component={HomeScreen} />
    <RootStack.Screen name="ViewDemo" component={ViewDemoScreen} options={{ title: 'View Demo' }} />
    <RootStack.Screen name="ButtonDemo" component={ButtonDemoScreen} options={{ title: 'Button Demo' }} />
    <RootStack.Screen name="InputDemo" component={InputDemoScreen} options={{ title: 'TextInput Demo' }} />
    <RootStack.Screen name="StylingDemo" component={StylingDemoScreen} options={{ title: 'Styling Demo' }} />
    <RootStack.Screen name="LayoutDemo" component={LayoutDemoScreen} options={{ title: 'Layout Demo' }} />
    <RootStack.Screen name="StorageDemo" component={StorageDemoScreen} options={{ title: 'Storage Demo' }} />
    <RootStack.Screen name="PlatformDemo" component={PlatformDemoScreen} options={{ title: 'Platform Demo' }} />
    <RootStack.Screen name="ColorSchemeDemo" component={ColorSchemeDemoScreen} options={{ title: 'ColorScheme Demo' }} />
  </RootStack.Navigator>
)
