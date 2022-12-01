import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/splash';
import Auth from '../screens/authentication';
import Notification from '../screens/notification';
// import { createDrawerNavigator } from 'react-navigation-drawer';



const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

// function Root() {
//   return (
//     <Drawer.Navigator
//       drawerContent={props => <DrawerContent {...props} />}
//       screenOptions={{
//         headerShown: false,
//         drawerStyle: {
//           backgroundColor: 'transparent',
//         },
//         drawerPosition:'right'
//       }}>
//       <Drawer.Screen name="Home" component={Home} />
//       <Drawer.Screen name="Notification" component={Notification} />
      
//     </Drawer.Navigator>
//   );
// }


export default function AppNavigator({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Splash'}>
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}