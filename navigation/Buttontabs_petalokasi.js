import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontawesome6 from 'react-native-vector-icons/FontAwesome6';
import Portofolio from '../App';
import {ScrollView} from 'react-native';
import {WebView} from 'react-native-webview';
import Getjsonfile from '../Getjsonfile';
import GetDataObject from '../GetDataObject';
import {SafeAreaView} from 'react-native-safe-area-context';
// const webmap = require('../peta/map.html');

const Tab = createBottomTabNavigator();

//form input dari github pages
const forminput = 'https://aisyahnadiyah.github.io/pgpbl-12-NEW/';

//peta web dari github pages
const petaweb = 'https://aisyahnadiyah.github.io/pgpbl-12-NEW/map.html';


const ListCategories = () => {
  return (
    <View
      style={{
        marginTop: 70,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          height: 70,
          width: 110,
          backgroundColor: '#C23373',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
        }}>
        <Fontawesome5 name="futbol" size={25} color={'#22092C'} />
        <Text style={{textAlign: 'center', color: '#F3EEEA'}}>Lapangan Sepak Bola  </Text>
      </View>
      <View
        style={{
          height: 70,
          width: 110,
          backgroundColor: '#C23373',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
        }}>
        <Fontawesome5 name="golf-ball" size={25} color={'#22092C'} />
        <Text style={{textAlign: 'center', color: '#F3EEEA'}}>Lapangan Golf</Text>
      </View>
      <View
        style={{
          height: 70,
          width: 110,
          backgroundColor: '#C23373',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
        }}>
        <Fontawesome5 name="basketball-ball" size={25} color={'#22092C'} />
        <Text style={{textAlign: 'center', color: '#F3EEEA'}}> Lapangan Basket</Text>
      </View>
    </View>
  );
};

const ListCategories2 = () => {
  return (
    <View
      style={{
        marginTop: 40,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          height: 70,
          width: 110,
          backgroundColor: '#C23373',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
        }}>
        <Fontawesome5 name="volleyball-ball" size={25} color={'#22092C'} />
        <Text style={{textAlign: 'center', color: '#F3EEEA'}}> Lapangan Voli</Text>
      </View>
      <View
        style={{
          height: 70,
          width: 110,
          backgroundColor: '#C23373',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
        }}>
        <Fontawesome5 name="horse" size={25} color={'#22092C'} />
        <Text style={{textAlign: 'center', color: '#F3EEEA'}}> Lapangan Berkuda</Text>
      </View>
      <View
        style={{
          height: 70,
          width: 110,
          backgroundColor: '#C23373',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
        }}>
        <Fontawesome5 name="warehouse" size={25} color={'#22092C'} />
        <Text style={{textAlign: 'center', color: '#F3EEEA'}}> Gelangang Olahraga (GOR)</Text>
      </View>
    </View>
  );
};
const ListCategories3 = () => {
  return (
    <View
      style={{
        marginTop: 40,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          height: 70,
          width: 110,
          backgroundColor: '#C23373',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
        }}>
        <Fontawesome5 name="dumbbell" size={25} color={'#22092C'} />
        <Text style={{textAlign: 'center', color: '#F3EEEA'}}> Fitness</Text>
      </View>
      <View
        style={{
          height: 70,
          width: 110,
          backgroundColor: '#C23373',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
        }}>
        <Fontawesome5 name="baseball-ball" size={25} color={'#22092C'} />
        <Text style={{textAlign: 'center', color: '#F3EEEA'}}> Lapangan Tennis</Text>
      </View>
      <View
        style={{
          height: 70,
          width: 110,
          backgroundColor: '#C23373',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
        }}>
        <Fontawesome5 name="bullseye" size={25} color={'#22092C'} />
        <Text style={{textAlign: 'center', color: '#F3EEEA'}}> Lapangan Panahan</Text>
      </View>
    </View>
  );
};
const ListCategories4 = () => {
  return (
    <View
      style={{
        marginTop: 40,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          height: 70,
          width: 110,
          backgroundColor: '#C23373',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
        }}>
        <Fontawesome5 name="running" size={25} color={'#22092C'} />
        <Text style={{textAlign: 'center', color: '#F3EEEA'}}> Sport Park</Text>
      </View>
      <View
        style={{
          height: 70,
          width: 110,
          backgroundColor: '#C23373',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
        }}>
        <Fontawesome5 name="swimmer" size={25} color={'#22092C'} />
        <Text style={{textAlign: 'center', color: '#F3EEEA'}}> Kolam Renang</Text>
      </View>
      <View
        style={{
          height: 70,
          width: 110,
          backgroundColor: '#C23373',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
        }}>
        <Fontawesome5 name="walking" size={25} color={'#22092C'} />
        <Text style={{textAlign: 'center', color: '#F3EEEA'}}> Yoga</Text>
      </View>
    </View>
  );
};

function HomeScreen() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar translucent={false} backgroundColor={'#2B2A4C'} />
      <View style={styles.header}>
        <Text style={styles.title}></Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexgrow: 1}}>
        <View style={styles.head}>
          <View style={{flex: 1}}>
            <Text style={styles.headertitle}>SportyMap</Text>
            <Text style={styles.headertitle2}>
              Persebaran Sarana Olahraga di Kabupaten Sleman
            </Text>

            <View style={styles.input}>
              <Fontawesome5 name="search" color="#EEE2DE" size={20} />
              <TextInput
                placeholder="Cari tempat"
                style={{
                  flex: 1,
                  marginLeft: 8,
                  height: 35,
                  justifyContent: 'flex-start',
                }}
              />
            </View>
          </View>
        </View>
        <ListCategories />
        <ListCategories2/>
        <ListCategories3/>
        <ListCategories4/>
      </ScrollView>
    </SafeAreaView>

    //   <View style = {styles.container}>
    //   <Text style = {styles.title}>SportyMap</Text>
    //   <Icon name="basketball-ball" size={40} color="orange"/>
    //   </View>
    //   <View style = {styles.container}>
    //   <Text style={{textAlign: 'left'}}>Lapangan Tenis</Text>
    //   <Icon name="baseball-ball" size={40} color="green"/>
    //   </View>
    //   <View style = {styles.container}>
    //   <Text style={{textAlign: 'left'}}>Lapangan Golf</Text>
    //   <Icon name="golf-ball" size={40} color="black"/>
    //   </View>
    //   <View style = {styles.container}>
    //   <Text style={{textAlign: 'left'}}>Lapangan Voli</Text>
    //   <Icon name="volleyball-ball" size={40} color="black"/>
    //   </View>
    //   <View style = {styles.container}>
    //   <Text style={{textAlign: 'left'}}>Lapangan Sepak Bola</Text>
    //   <Icon name="futbol" size={40} color="black"/>
    //   </View>
    //   <View style = {styles.container}>
    //   <Text style={{textAlign: 'left'}}>Kolam Renang</Text>
    //   <Icon name="person-swimming" size={40} color="black"/>
    //   </View>
    // </View>
    // </SafeAreaView>
  );
}

function SettingsScreen() {
  return <WebView source={{uri: petaweb}} />;
}

function AddDataScreen() {
  return <WebView source={{uri: forminput}} />;
}

function Profile() {
  return (
    <View>
      <Portofolio />
    </View>
  );
}

function ListDataScreen() {
  return (
    <View>
      <GetDataObject>
        <GetDataObject />
      </GetDataObject>
    </View>

    
  );
}

function Galeri() {
  return (
    <ScrollView>
        <Text style={styles.title}>List Peta</Text>
        <View style={styles.listitems}>
          <Image source={require('../Peta/GOR_Lembah_UGM.jpg')} style={styles.image} />
          <Text style={styles.caption}>GOR Lembah UGM</Text>
        </View>
        <View style={styles.listitems}>
          <Image source={require('../Peta/Lapangan_Bola_FIKK_UNY.jpg')} style={styles.image} />
          <Text style={styles.caption}>Lapangan Sepak Bola FIKK UNY</Text>
        </View>
        <View style={styles.listitems}>
          <Image source={require('../Peta/Golf.jpeg')} style={styles.image} />
          <Text style={styles.caption}>Hyatt Regency Golf</Text>
        </View>
        <View style={styles.listitems}>
          <Image source={require('../Peta/basket.jpeg')} style={styles.image} />
          <Text style={styles.caption}>Lapangan Basket Swakarya </Text>
        </View>
        <View style={styles.listitems}>
          <Image source={require('../Peta/voli.jpg')} style={styles.image} />
          <Text style={styles.caption}>GOR MINI KALPIKA</Text>
        </View>
        <View style={styles.listitems}>
          <Image source={require('../Peta/kuda.jpg')} style={styles.image} />
          <Text style={styles.caption}>PM Stable (Pucuk Matahari Stable)</Text>
        </View>
        <View style={styles.listitems}>
          <Image source={require('../Peta/fit.jpg')} style={styles.image} />
          <Text style={styles.caption}>The Fit Lab</Text>
        </View>
        <View style={styles.listitems}>
          <Image source={require('../Peta/tenis.jpeg')} style={styles.image} />
          <Text style={styles.caption}>Lapangan Tenis Sinduadi</Text> 
        </View>
        <View style={styles.listitems}>
          <Image source={require('../Peta/panah.jpeg')} style={styles.image} />
          <Text style={styles.caption}>Lapangan Panahan Kenari</Text>
        </View>
        <View style={styles.listitems}>
          <Image source={require('../Peta/wisdom.jpeg')} style={styles.image} />
          <Text style={styles.caption}>Wisdom Park UGM</Text>
        </View>
        <View style={styles.listitems}>
          <Image source={require('../Peta/renang.jpeg')} style={styles.image} />
          <Text style={styles.caption}>Kolam Renang FIK UNY</Text>
        </View>
    </ScrollView>
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
          name="Galeri"
          component={Galeri}
          options={{
            tabBarLabel: 'Galeri',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="images" color={color} size={size} />
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
          name="Add Data"
          component={AddDataScreen}
          options={{
            tabBarLabel: 'Add Data',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="plus-circle" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="List Data"
          component={ListDataScreen}
          options={{
            tabBarLabel: 'List Data',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="list-alt" color={color} size={size} />
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

const styles = StyleSheet.create(
  {
    headertitle: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
      fontFamily: 'Arial',
      textAlign: 'center',
    },
    headertitle2: {
      color: 'white',
      fontSize: 17,
      fontFamily: 'Arial',
      textAlign: 'center',
    },
    header: {
      paddingVertical: 10,
      paddingHorizontal: 10,
      backgroundColor: '#79155B',
    },
    head: {
      backgroundColor: '#79155B',
      height: 120,
      paddingHorizontal: 20,
    },
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
      padding: 20,
      backgroundColor: '#fff',
      marginButtom: 20,
      flexDirection: 'row',
      padding: 20,
      borderRadius: 30,
      backgroundColor: 'white',
      shadowColor: '#000',
      shadowOffset: {
        width: 1,
        height: 1,
      },
      iconsContainer: {
        height: 60,
        width: 60,
        backgroundColor: '#C8DBBE',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      },
      kategori: {
        marginTop: 60,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      categoryContainer: {
        marginTop: 60,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      categoryIcons: {
        marginTop: 60,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    },
    // flexDirection: 'right', // Set the flexDirection to 'row'
    // textAlign:"left"
  },
  // icon: {
  //   marginRight: 10, // Adjust the margin as needed
  // },
);
