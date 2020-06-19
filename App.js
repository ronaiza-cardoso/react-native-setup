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
        <Stack.Screen
          name="Feed"
          options={{
            headerStyle: {
              backgroundColor: '#333',
            },
            headerTintColor: '#eee',
          }}
          component={Feed}
        />
        <Stack.Screen name="Detail" component={Detail} />

        <Stack.Screen name="BottomTabs" children={CreateBottomTabs} />
        <Stack.Screen name="TopTabs" children={CreateTopTabs} />
      </Stack.Navigator>
    );
  }

  function CreateTopTabs() {
    return (
      <MaterialTopTabs.Navigator>
        <MaterialTopTabs.Screen name="Tab1" component={Tab1} />
        <MaterialTopTabs.Screen name="Tab2" component={Tab2} />
        <MaterialTopTabs.Screen name="Tab3" component={Tab3} />
      </MaterialTopTabs.Navigator>
    );
  }

  function CreateBottomTabs() {
    return (
      <MaterialBottomTabs.Navigator>
        <MaterialBottomTabs.Screen
          options={{ title: 'Tab 1' }}
          name="Tab1"
          component={Tab1}
        />
        <MaterialBottomTabs.Screen
          options={{ title: 'Tab 2' }}
          name="Tab2"
          component={Tab2}
        />
        <MaterialBottomTabs.Screen
          options={{ title: 'Tab 3 ' }}
          name="Tab3"
          component={Tab3}
        />
      </MaterialBottomTabs.Navigator>
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" children={CreateHomeStack} />
          <Drawer.Screen name="Contacts" component={Contacts} />
          <Drawer.Screen name="Favorites" component={Favorites} />
          <Drawer.Screen name="Settings" component={Settings} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
