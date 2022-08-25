import { Link } from '@react-navigation/native'
import React, { memo, useContext } from 'react'
import { Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ItemContext } from '../Context'


const DetailItem = memo(({ navigation }) => {
    const { currentItem } = useContext(ItemContext)

    const OnPressHandler = () => {
        alert('you touched the screen :D')
    }
    if (currentItem) {
        return (
            <ScrollView style={{ flex: 1, margin: 10, padding:10, backgroundColor: '#c0c0c0'}}>

                <View >
                    <Text style={styles.title}>{currentItem.title}</Text>
                </View>

                <View>

                    <TouchableOpacity style={{marginBottom:20}} onPress={() => OnPressHandler()}>
                        <Image style={styles.image} source={{ uri: currentItem.urlToImage }} />
                    </TouchableOpacity>

                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Description: {currentItem.description}</Text>
                    </View>

                    <View style={styles.textContainer}>
                        <Text style={styles.text}>{currentItem.content}</Text>
                    </View>

                    <View>
                        <Text style={styles.sourceItem}><Text style={{fontWeight:'bold'}}>Author:</Text> {currentItem.author}</Text>
                        <Text style={styles.sourceItem}><Text style={{fontWeight:'bold'}}>Source:</Text> {currentItem.source.name}</Text>
                        <Text style={styles.sourceItem}><Text style={{fontWeight:'bold'}}>Souce's Link:</Text>{currentItem.url}</Text>
                        <Text style={styles.sourceItem}><Text style={{fontWeight:'bold'}}>Published at:</Text> {currentItem.publishedAt}</Text>
                        
                        
                    </View>

                </View>




                <View style={styles.btns}>
                    {/* <Button title='home' onPress={() => navigation.navigate('Home')} /> */}
                    <Button title='go back' onPress={() => navigation.navigate('Articles')} />

                </View>



            </ScrollView>
        )
    }
    return <Text>here's no article yet :(</Text>
}
)
const styles = StyleSheet.create({
    image: {
        height: 200,
        width: '100%',
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 5
    },
    btns: {
        width: '100%',
        padding: 20,
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    title: {
        fontSize: 24,
        fontWeight: '700'
    },
    text: {
        fontSize: 15,
        fontWeight:'500',
    },
    textContainer: {
        marginBottom: 10,
        marginTop: 10
    },
    sourceItem: {
        margin:5
    }

});


export default DetailItem