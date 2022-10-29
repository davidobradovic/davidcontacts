import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import SimpleLottie from "../SimpleLottie";
import { StatusBar } from 'expo-status-bar';
import api from './api.json'
import { contactline } from '../utils/contactline';

const Home = () => {

    const [show, setShow] = useState(false)
    const [data,setData]=useState([]);
    const [searchedData, setSearchedData] = useState([])
    const [search, setSearch] = useState('');

    useEffect(() => {
        setTimeout(() => setShow(true), 7000)
    }, [])

    const navigation = useNavigation();

    const searchFilter = (text) => {
        if(text) {
            const newData = searchedData.filter((item) => {
                const itemData = item.first_name ? 
                                 item.first_name.toUpperCase() : 
                                 ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setData(newData);
            setSearch(text);
        } else {
            setData();
            setSearch(text);
        }
    }

    useEffect(() => {
        setSearchedData(api)
        setData();
    }, [])


    return (
        <View style={styles.container}>
            <StatusBar style='auto' />
            <Text style={styles.title}>Contacts</Text>
            <TextInput 
                style={styles.searchbar} 
                placeholder='Search contact'
                value={search}
                onChangeText={(text) => searchFilter(text)}
            />
            <FlatList 
                data={data}
                renderItem={contactline}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        margin: 20
    },
    title: {
        fontWeight: '600',
        fontSize: 30
    },
    searchbar: {
        backgroundColor: 'rgba(230,230,230,1)',
        padding: 10,
        fontSize: 14,
        borderRadius: 5,
        marginVertical: 15
    },
    contactcontainer: {
        borderBottomColor: 'rgba(40,40,40,0.35)',
        padding: 10,
        borderBottomWidth: 0.5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    fullname: {
        fontSize: 14,
        fontWeight: '500',
        paddingTop: 5,
    },
    phonenum: {
        color: 'rgba(50,50,50,0.4)',
        paddingVertical: 3,
        fontSize: 11
    },
    image: {
        width: 40,
        height: 40,
        marginRight: 10
    }
})