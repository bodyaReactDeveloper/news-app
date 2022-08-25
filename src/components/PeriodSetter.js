import React, { memo, useState } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useForm } from 'react-hook-form';
import CustomInput from './CustomInput'
import { DATE_PATTERN } from '../Constants';

const PeriodSetter = ( ({ setTo, setFrom, setData, setPage}) => {

    const {
        control,
        handleSubmit,
        formState: {errors}
    } = useForm()

    function onPressed(data) {
        setData([])
        setPage(1)
        setTo(`${data.to}`)
        setFrom(`${data.from}`)
        setShowTime(false)
    }

    // function checkDate(date) {
    //     let count = data.match(/-/gi)
    //     if (count.length < 2) {
    //         throw console.error('period is incorect');
    //         return undefined
    //     }
    
    //     // const arr = data.replace(/-/gi, ' ').split(' ')
    
    //     // if (arr[0] != 2022) throw console.error('error ' + arr[0]);
    //     // if (arr[1] > 12) throw console.error('error ' + arr[1]);
    //     // if (arr[2] > 31) throw console.error('error ' + arr[2]);
    
    //     return date
    // }

    const [showTime, setShowTime] = useState(false)
    const [isAnyErrorFrom, setIsAnyErrorFrom] = useState(false)
    const [isAnyErrorTo, setIsAnyErrorT0] = useState(false)

    // console.log(isAnyError)
    if (showTime) return (
        <View style={styles.btns_container}>


            <View style={styles.container}>

                <View>
                    <Text style={styles.Text}>from</Text>
                    <Text style={styles.Text}>to</Text>

                </View>

                <View style={styles.form}>
                    <CustomInput rules={{
                        pattern: {
                            value: DATE_PATTERN,
                            message: 'Please, try do it like it shown in example'
                        },
                        minLength: {value: 10, message: 'oops'}, 
                        maxLength: {value: 10, message: 'oops'},
                    }} name={"from"} constrol={control} setIsAnyErrorFrom={setIsAnyErrorFrom} setIsAnyErrorT0={setIsAnyErrorT0}/>
                    <CustomInput rules={{
                        pattern: {
                            value: DATE_PATTERN,
                            message: 'oops'
                        },
                        minLength: {value: 10, message: 'oops'}, 
                        maxLength: {value: 10, message: 'oops'},
                    }} name={"to"} constrol={control} setIsAnyErrorFrom={setIsAnyErrorFrom} setIsAnyErrorT0={setIsAnyErrorT0}/>
                </View>

            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity disabled={isAnyErrorTo || isAnyErrorFrom } style={styles.btnOK} title='ok' onPress={handleSubmit(onPressed)} >
                    <Text style={styles.TextBtn}>ok</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} title='hide settings' onPress={() => setShowTime(false)} >
                    <Text style={{color:'white'}}>hide settings</Text>
                </TouchableOpacity>
            </View>


        </View>

    )
    else return <TouchableOpacity style={styles.btn} title='set period' onPress={() => setShowTime(true)} >
        <Text style={{color:'white'}}>set period</Text>
    </TouchableOpacity>

})

export default PeriodSetter


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'space-around',
        marginBottom: 25,
        alignItems: 'center',
    },
    btns_container: {
        justifyContent: 'space-around',
        marginBottom: 25,
        alignItems: 'center',
    },
    btnOK: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 95,
        height: 40,
        marginRight: 30,
        borderRadius: 5,
        backgroundColor: 'gold',
        color: 'white',
    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center',

        width: 95,
        height: 40,
        marginLeft: 30,
        marginBottom: 20,
        borderRadius: 5,
        borderBottomWidth: 2,
        borderColor: 'white',

        backgroundColor: '#3C3939',
        color: 'white',

    },
    TextBtn: {
        color: 'black'
    },
    Text: {
        margin: 30,
        textAlign: 'center',
        color: '#fff',
        fontWeight: '500',
    },
    form: {
        flexDirection: 'column',
        alignItems: 'center',

    }
});