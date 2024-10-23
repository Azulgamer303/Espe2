import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { View, StyleSheet } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScrenn';
import ProductListScreen from './src/screens/ProductListScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function DrawerScreens() {
  return (
    <View style={styles.container}>
      <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={{
            activeTintColor: '#869AB2',
            itemStyle: { marginVertical: 5 },
          }}
          drawerStyle={{
            backgroundColor: '#869AB2',
            width: 240,
          }}
        >
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Contactenos" component={AboutScreen} />

        </Drawer.Navigator>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DrawerScreens">
        <Stack.Screen
          name="DrawerScreens"
          component={DrawerScreens}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductList"
          component={ProductListScreen}
          options={{ headerTitle: 'Product List' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#869AB2', // Your desired background color
  },
});

export default App;