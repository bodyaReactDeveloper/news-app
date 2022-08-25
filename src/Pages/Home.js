import React, { useEffect, useState } from 'react'
import { Button, Image, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { API_DATA } from '../utils/fetchData';

function HomeScreen({ navigation }) {

  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const res = await API_DATA.getData(8,1);
      setData(res.data.articles)
    }
    fetchData()
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>


      <ScrollView>
        {data.map((i, index) => (
          <View key={index}>
            <Image style={{ height: 100, width: 150 }} source={{ uri: i.urlToImage }} />
            <Text>{i.content}</Text>
          </View>

        ))}
      </ScrollView>

      <Button
        onPress={() => navigation.navigate('Articles')}
        title="Go to Articles"
      />


    </View>
  );
}
export default HomeScreen
