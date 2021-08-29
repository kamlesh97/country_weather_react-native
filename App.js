// In App.js in a new project

// import * as React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Search from './screens/Search';
// import Detail from './screens/Detail';



// const Stack = createNativeStackNavigator();



// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Search" component={Search} />
//         <Stack.Screen name="Main" component={Detail} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;


// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import LoginScreen from './screen/LoginScreen';
// import Home from './screen/Home';
import Search from './screens/Search';
import Detail from './screens/Detail';
import Weather from './screens/Weather';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Search} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Weather" component={Weather} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;