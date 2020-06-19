import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Provider } from 'react-redux';

import store from '~/store';

// ---- Drawer Screens
import Contacts from '~/screens/drawers/Contacts';
import Favorites from '~/screens/drawers/Favorites';
import Settings from '~/screens/drawers/Settings';

// ---- Tabs Screens
import Tab1 from '~/screens/tabs/Tab1';
import Tab2 from '~/screens/tabs/Tab2';
import Tab3 from '~/screens/tabs/Tab3';

// --- Main Pages
import Detail from '~/pages/Detail';
import Feed from '~/pages/Feed';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialTopTabNavigator();
const MaterialTopTabs = createBottomTabNavigator();

function App() {
  function CreateHomeStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={CreateHomeStack} />
          <Drawer.Screen name="Contacts" component={Contacts} />
          <Drawer.Screen name="Favorites" component={Favorites} />
          <Drawer.Screen name="Settings" component={Settings} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
