import { useEffect, useState } from "react";
import { 
    StyleSheet, 
    SafeAreaView, 
    TextInput, 
    ActivityIndicator, 
    View, 
    FlatList, 
    Image
} from "react-native";

const API_ENDPOINT = 'https://randomuser.me/api/?results=30';

export default function App() {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [fullData, setFulData] = useState([]);
    const [searchQuery, setSeacrhQuery] = useState("");

    useEffect(() => {
        setIsLoading(true);
        fetchData(API_ENDPOINT);
    }, []);

    const fetchData = async(url) => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            setData(json.results);

            console.log(json.results);
  
            setIsLoading(false);

        }   catch(error) {
            setError(error);
            console.log(error);
        }
    }

    const handleSearch = (query) => {
        setSeacrhQuery(query);
    };

    if (isLoading) {
        return (
         <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
         <ActivityIndicator size={'large'} color="#5500dc"/>
         </View>
        );
    }

    if ( error) {
        return (
            <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
                <Text>
                    Error in fecting data ... Please check yout internet connection!
                </Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, marginHorizontal: 20}}>
            <TextInput
                placeholder="Search"
                clearButtonMode="always"
                style={style.searchBox}
                autoCapitalize="none"
                autoCorrect={false}
                value={searchQuery}
                onChangeText={(query) => handleSearch(query)}
            />

            <FlatList 
            data={data}
            keyExtractor={(item) => item.login.username}
            renderItem={({iten}) (
                <View>
                    <Image source={{uri: item.picture.thumbnail}} />
                    <View>
                        <Text>{item.name.first} {item.name.last}</Text>
                    </View>
                </View>
            )}
            />
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    searchBox: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 8,
 },
});