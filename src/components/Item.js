import React, { memo, useContext } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ItemContext } from '../Context'


const Item = (({ item, navigation }) => {
    const { setCurrentItem } = useContext(ItemContext)
    const OnPressHandler = () => {
      setCurrentItem(item)
      navigation.navigate('current item')
    }
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item.title}</Text>
        <TouchableOpacity style={styles.img_container} onPress={() => OnPressHandler()}>
          <Image style={styles.img} source={{ uri: item.urlToImage }} />
        </TouchableOpacity>
        <Text style={styles.text}>{item.description}</Text>
      </View>
    )
  }
)
  const styles = StyleSheet.create({
    img: {
      height: 300,
      width: 300,
    },
    img_container: {
        // marginBottom:10,
        // marginTop:10
    },
    item: {
      margin: 50,
      paddingBottom:15,
      borderBottomWidth:2,
      borderBottomColor:'white'
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10,
        textTransform: 'capitalize'
    },
    text: {
        marginTop: 15,
        color: '#DAA520',
        
    }
})
  export default Item