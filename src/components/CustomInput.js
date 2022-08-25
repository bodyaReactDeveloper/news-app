import React from 'react'
import { View, Text, TextInput, StyleSheet, } from 'react-native'
import { Controller } from 'react-hook-form'


const CustomInput = ({ constrol, name, defaultValue, rules, setIsAnyErrorT0, setIsAnyErrorFrom}) => {
    return (
        <View style={styles.container}>
            <Controller
                rules={rules}
                control={constrol}
                name={name}
                render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => {
                    if(error?.message) {
                        name === 'to'?setIsAnyErrorT0(true):setIsAnyErrorFrom(true) 
                    } else {
                        name === 'to'?setIsAnyErrorT0(false):setIsAnyErrorFrom(false) 
                    }
                    return (<View>
                        {error && <Text style={{color: 'red'}}>{error?.message || "Error"}</Text>}
                        <TextInput
                            defaultValue={defaultValue}
                            value={value}
                            onChangeText={onChange}
                            placeholder="2022-08-24"
                            onBlur={onBlur}
                            style={styles.input}
                            keyboardType="numeric"
                        />
                    </View>


                )}} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        // backgroundColor: 'white',
        width: '100%',
        maxWidth: 191
    },
    // input: {
    //     backgroundColor: 'rgba(169, 169, 169, 0.5)',
    //     height: 40,
    //     margin: 12,
    //     borderWidth: 1,
    //     padding: 10,
    //     maxWidth: 180

    // },
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
})

export default CustomInput