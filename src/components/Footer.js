import React from 'react'
import { StyleSheet, View, Text } from 'react-native'


const Footer = ({navigation}) => {
    return (
        <View style={styles.footer}>

            <Text style={styles.title}>Pagination</Text>
        </View>
    )
}

export default Footer


const styles = StyleSheet.create({
    footer: {
        display: 'flex',
        backgroundColor: '#008B8B',
        height: 90,
        width: '100%',
        justifyContent: 'center',


    },
    title: {
        color: '#fff',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: '700'
    },
    // burg: {
    //     float: 'right'
    // }
});