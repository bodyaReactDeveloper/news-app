import React from 'react'
import { StyleSheet, View, Text } from 'react-native'


const Header = () => {
    return (
        <View style={styles.header}>

            <Text style={styles.title}>business news</Text>
        </View>
    )
}

export default Header


const styles = StyleSheet.create({
    header: {
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