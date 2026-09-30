import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StudentScreen from './src/screens/StudentScreen';
import ShowsScreen from './src/screens/ShowsScreen';
import { colors } from './src/theme/colors';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        initialRouteName="Student"
        screenOptions={{
          headerStyle: { backgroundColor: colors.surface },
          headerTintColor: colors.text,
          headerTitleStyle: { fontWeight: '700' },
          contentStyle: { backgroundColor: colors.background },
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen
          name="Student"
          component={StudentScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Shows"
          component={ShowsScreen}
          options={{ title: 'Series de TV' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
