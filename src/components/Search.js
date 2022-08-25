import React from 'react'
import { TextInput, TouchableOpacity, View, StyleSheet, Text} from 'react-native'

const Search = ({ getResults, setText, text, search}) => {
    return (
        <View style={styles.container}>
            <TextInput placeholder='search' style={styles.input}
                value={text}
                onChangeText={e => setText(e)} />

            <TouchableOpacity disabled={text===search} style={styles.btn} title='search' onPress={() => getResults(text)}>
                <Text style={{ color: 'black', fontWeight: 'bold' }}>search</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 15,
      marginBottom: 25,
      alignItems: 'center'
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