import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

// --- Tab Home 1 ----
import Contacts from '~/pages/Contacts';
import Detail from '~/pages/Detail';

// --- Tab Home 2 ----
import ActionsList from '~/pages/ActionsList';
import ActionDetails from '~/pages/ActionDetails';

// --- Drawer ----
import Settings from '~/pages/Settings';

const ContactsStack = createStackNavigator();
const ContactsStackScreen = () => (
  <ContactsStack.Navigator>
    <ContactsStack.Screen
      name="ContactsList"
      component={Contacts}
      options={{
        headerTitle: 'Contacts',
      }}
    />
    <ContactsStack.Screen
      name="ContactDetails"
      component={Detail}
      options={({ route }) => {
        return {
          headerTitle: `${route.params.contact.name.first} ${route.params.contact.name.last}`,
        };
      }}
    />
  </ContactsStack.Navigator>
);

const ActionsStack = createStackNavigator();
const ActionsStackScreen = () => (
  <ActionsStack.Navigator>
    <ActionsStack.Screen name="ActionsList" component={ActionsList} />
    <ActionsStack.Screen name="ActionDetails" component={ActionDetails} />
  </ActionsStack.Navigator>
);

const AppDrawer = createDrawerNavigator();
const AppDrawerScreen = () => (
  <AppDrawer.Navigator>
    <AppDrawer.Screen name="Tabs" component={AppTabsScreen} />
    <AppDrawer.Screen name="Settings" component={Settings} />
  </AppDrawer.Navigator>
);

const AppTabs = createBottomTabNavigator();
const AppTabsScreen = () => (
  <AppTabs.Navigator>
    <AppTabs.Screen name="Contacts" component={ContactsStackScreen} />
    <AppTabs.Screen name="Actions" component={ActionsStackScreen} />
  </AppTabs.Navigator>
);

export default () => (
  <NavigationContainer>
    <AppDrawerScreen />
  </NavigationContainer>
);
