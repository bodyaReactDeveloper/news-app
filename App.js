
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/Pages/Home';
import Articles from './src/Pages/Articles';
import { ItemContext } from './src/Context';
import DetailItem from './src/Pages/Detail';




const Drawer = createDrawerNavigator();

export default function App() {
  const [currentItem, setCurrentItem] = React.useState(null)
  return (
    <>
      <ItemContext.Provider value={{currentItem, setCurrentItem}}>
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Articles" 
          screenOptions={{ headerTitle: 'App ', headerStyle: {backgroundColor: 'gold'} }}>
            {/* <Drawer.Screen name="Home"
              component={HomeScreen} /> */}

            <Drawer.Screen name="Articles"
              options={{
              }}
              component={Articles} />

            <Drawer.Screen name="current item"
              options={{
              }}
              component={DetailItem} />

          </Drawer.Navigator>

        </NavigationContainer>
      </ItemContext.Provider>

    </>
  );
}


// const styles = StyleSheet.create({
//   header: {
//       display: 'flex',
//       backgroundColor: '#008B8B',
//       height: 90,
//       width: '100%',
//       justifyContent: 'center',


//   },
//   title: {
//       color: '#fff',
//       textAlign: 'center',
//       textTransform: 'uppercase',
//       fontWeight: '700'
//   },
//   // burg: {
//   //     float: 'right'
//   // }
// });