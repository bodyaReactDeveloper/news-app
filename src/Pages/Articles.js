import React, { useContext, useEffect, useState } from 'react'

import { Button, FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import Item from '../components/Item';
import PeriodSetter from '../components/PeriodSetter';
import Search from '../components/Search';
import { POPULARITY, PUBLISHED_AT, REVELANCY } from '../Constants';
import { ItemContext } from '../Context';
import { API_DATA } from '../utils/fetchData';

function Bitcoin({ navigation }) {
  const [text, setText] = useState('bitcoin')
  const [search, setSearch] = useState()
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [mode, setMode] = useState(POPULARITY)
  const [count, setCount] = useState(0)


  const d = new Date()
  const month = (d.getMonth() + 1) < 10 ? '0' + (d.getMonth() + 1) : (d.getMonth() + 1)


  const [from, setFrom] = useState(`${d.getFullYear()}-${month}-${d.getDate()}`)
  const [to, setTo] = useState(`${d.getFullYear()}-${month}-${d.getDate()}`)

  useEffect(() => {
    async function fetchData() {
      let res
      if (mode === POPULARITY) {
        res = await API_DATA.getDataPopular(5, page, search, from, to)
      }
      if (mode === REVELANCY) {
        res = await API_DATA.getDataRelevancy(5, page, search, from, to)
      }
      if (mode === PUBLISHED_AT) {
        res = await API_DATA.getDataPublishedAt(5, page, search, from, to)
      }
      setData(data.concat(res.data.articles))
    }
    fetchData()

  }, [page, mode, search, from, to]);


  const handleMore = () => {
    setPage(page + 1)
  }

  const getResults = (text) => {
    setData([])
    setPage(1)
    setSearch(text)
  }

  function OnPressHandler(mode) {
    setMode(mode)
    setPage(1)
    setData([])
  }

  // console.log('from: ' + from)
  // console.log('to: ' + to)

  return (

    <View
      style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around', backgroundColor: '#3C3939' }}>

      <Search search={search} getResults={getResults} text={text} setText={setText} />


      {/* <Text style={{color:'white'}}>{page}</Text> */}

      <PeriodSetter
        setTo={setTo} setFrom={setFrom} setData={setData} setPage={setPage} />

      {data && <FlatList
        navigation={navigation}
        data={data}
        onEndReachedThreshold={0.5}
        onEndReached={handleMore}
        renderItem={({ item }) => <Item item={item} navigation={navigation} />}
        keyExtractor={(item, index) => index.toString()} />
      }
      {/* <Button onPress={() => navigation.navigate('Home')} title="Go back home" />
      {isFetching && <Text>LOADING...</Text>}  */}

      <View style={styles.container}>
        <Button disabled={mode === POPULARITY ? true : false} title="Popular" onPress={() => OnPressHandler(POPULARITY)} />
        <Button disabled={mode === REVELANCY ? true : false} title="relevancy" onPress={() => OnPressHandler(REVELANCY)} />
        <Button disabled={mode === PUBLISHED_AT ? true : false} title="the earliest" onPress={() => OnPressHandler(PUBLISHED_AT)} />
      </View>
    </View>
  );
}
export default Bitcoin


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
    marginBottom: 25,
    alignItems: 'center'
  },
  image: {
    height: 300,
    width: 300,
    marginTop: 10,
    marginBottom: 10
  },
  item: {
    marginBottom: 50
  },
  input: {
    borderColor: '#fff',
    backgroundColor: '#3C3939',
    height: 40,
    margin: 12,
    borderWidth: 2,
    color: '#fff',
    padding: 10,
    width: 210
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 65,
    height: 40,
    borderRadius: 5,
    backgroundColor: 'gold',
    color: 'white',
  },
});


