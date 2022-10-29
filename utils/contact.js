import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'


export const contactform = ({item}) => {


    return (
        <View key={item.id} style={styles.contactcontainer}>
                <Image style={styles.image} source={require('../images/avatar.png')} />
                <View>
                    <Text style={styles.fullname}>{item.first_name} {item.last_name}</Text>
                    <Text style={styles.phonenum}>{item.phone}</Text>
                </View>
        </View>
        )
}

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