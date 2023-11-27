import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontawesome6 from 'react-native-vector-icons/FontAwesome6';
import Portofolio from '../App';
import { ScrollView } from 'react-native';
import {WebView} from 'react-native-webview';
import Getjsonfile from '../Getjsonfile';

const webmap = require('../peta/map.html');


const Tab = createBottomTabNavigator();

//form input dari github pages
const forminput = 'https://aisyahnadiyah.github.io/pgpbl-12-NEW/';

//peta web dari github pages
const petaweb = 'https://aisyahnadiyah.github.io/pgpbl-12-NEW/map.html';


function HomeScreen() {
  return (
    <View>
      <Text style = {styles.title}>APLIKASI PETA LOKASI OBJEK</Text>
      <Text style={{textAlign: 'center'}}>Aplikasi ini punya yayak </Text>
      <View style = {styles.container}>
      <Text>Stack:</Text>
      <Text>1. React Native</Text>
      <Text>2. HTML</Text>
      <Text>3. LeafletJS</Text>
      <Text>4. Google Sheets</Text>
      <Text>5. App Script</Text>
      <Text>6. FontAwesome5</Text>
      <Text>7. github</Text>
      </View>
    </View>
  );
}
function SettingsScreen() {
  return (
      <WebView
        source={{uri: petaweb }}
      />
  );
}

function AddDataScreen() {
    return (
        <WebView
          source={{uri: forminput}}
        />
    );
  }

function Profile() {
  return (
    <View>
      <Portofolio />
    </View>
  );
}

function mahasiswascreen() {
  return (
    <View>
      <Getjsonfile />
    </View>
  );
}



function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Map"
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Map',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="plus-square" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Add Data"
          component={AddDataScreen}
          options={{
            tabBarLabel: 'Add Data',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="map-marked-alt" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="user-circle" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;

const styles = StyleSheet.create({
  image: {
    width: 350,
    height: 250,
    resizeMode: 'stretch',
  },
  listitems: {
    padding: 20,
    alignItems: 'center',
  },
  caption: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  container: {
    marginTop: 20,
    marginHorizontal: 20,
    padding:20,
    backgroundColor: '#fff',
    marginButtom: 20
  }
});
