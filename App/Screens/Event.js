import React from 'react';
import { View, Image, StyleSheet, Dimensions, ScrollView,Text, TouchableOpacity } from 'react-native';


let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const Event = () => {
    return (

        <View style={styles.topScreen}>

            <Image style={styles.topImage}
                source={require('../Assets/Images/mainevents.jpg')} />
               
            <ScrollView>

            <TouchableOpacity>
                <View style={styles.v1}>
                    <Image style={styles.img1}
                        source={require('../Assets/Images/workshop.jpg')} />
                         <Text style = {styles.t1}> Monthly Webinar</Text>


                </View>
                </TouchableOpacity>

                <TouchableOpacity>
                <View style={styles.v1}>
                    <Image style={styles.img1}
                        source={require('../Assets/Images/charity.jpg')} />
                         <Text style = {styles.t1}> CSR Projects</Text>


                </View>
                </TouchableOpacity>

                <TouchableOpacity>
                <View style={styles.v1}>
                    <Image style={styles.img1}
                        source={require('../Assets/Images/meetup.jpg')} />
                     <Text style = {styles.t1}> Annual Meetup</Text>

                </View>
                </TouchableOpacity>

            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    topScreen: {
        flex: 1,
        backgroundColor: '#191970',
        height: deviceHeight / 2,
        width: deviceWidth,
    },

    screen: {
        backgroundColor: 'white',
        height: 300,
        width: deviceWidth,
        borderBottomLeftRadius: 80,
        borderBottomRightRadius: 80,


    },

    topImage: {
        height: 280,
        width: 390,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },

    img1: {
        width: 100,
        height: 100,
        borderBottomLeftRadius: 90,
        borderBottomRightRadius: 90,
        borderTopLeftRadius: 90,
        borderTopRightRadius: 90,
        borderColor: 'rgb(25, 92, 240)',
        borderWidth: 4,


    },

    v1: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        marginTop: 30,
        borderRadius: 50,
        width: 380,

    },

    t1:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#191970',
        marginTop : 25,
    }

});


export default Event;