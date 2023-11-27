import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontawesome6 from 'react-native-vector-icons/FontAwesome6';
import Portofolio from '../App';
import { ScrollView } from 'react-native';
import WebView from 'react-native-webview';
import Getjsonfile from '../Getjsonfile';

const webmap = require('../peta/map.html');


const Tab = createBottomTabNavigator();


function HomeScreen() {
  return (
    <ScrollView>
        <Text style={styles.title}>List Peta</Text>
        <View style={styles.listitems}>
          <Image source={require('../Peta/Peta1.png')} style={styles.image} />
          <Text style={styles.caption}>Peta Batas Laut</Text>
        </View>
        <View style={styles.listitems}>
          <Image source={require('../Peta/Peta2.png')} style={styles.image} />
          <Text style={styles.caption}>Peta Geomorfologi</Text>
        </View>
        <View style={styles.listitems}>
          <Image source={require('../Peta/Peta1.png')} style={styles.image} />
          <Text style={styles.caption}>Peta Batas Laut</Text>
        </View>
        <View style={styles.listitems}>
          <Image source={require('../Peta/Peta1.png')} style={styles.image} />
          <Text style={styles.caption}>Peta Batas Laut</Text>
        </View>
        <View style={styles.listitems}>
          <Image source={require('../Peta/Peta1.png')} style={styles.image} />
          <Text style={styles.caption}>Peta Batas Laut</Text>
        </View>
        <View style={styles.listitems}>
          <Image source={require('../Peta/Peta1.png')} style={styles.image} />
          <Text style={styles.caption}>Peta Batas Laut</Text>
        </View>
    </ScrollView>
  );
}
function SettingsScreen() {
  return (
      <WebView
        source={{uri: 'https://sv.ugm.ac.id'}}
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
         <Tab.Screen
          name="Mahasiswa"
          component={mahasiswascreen}
          options={{
            tabBarLabel: 'Mahasiswa',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="users" color={color} size={size} />
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
  }
});
