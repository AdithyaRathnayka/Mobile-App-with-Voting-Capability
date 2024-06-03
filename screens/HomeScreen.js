import React,{Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../App/Component/Header';
import Footer from '../App/Component/Footer';

class HomeScreen extends Component{
    render (

    )
    {
        return(
            <View style = {styles.contain}>
            <Header></Header>
            <Text style={styles.Textstyle}>Vote for President & Secretary </Text>

            <Text style={styles.HeaderOne}>President</Text>

            <View
  style={{
    borderBottomColor: '#800000',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomEndRadius: 60,
    borderBottomStartRadius: 80,
  }}

  />
            <Text style={styles.NameOne}>Thashini Chenaya</Text>

            <Text style={styles.NameTwo}>Nuwindi Liyasha</Text>

            <Text style={styles.NameThree} >Kethmi Bhagya</Text>

            <Text style={styles.NameFour} >Shanudi Ogithma</Text>

            <Text style={styles.HeaderTwo} >Secretary</Text>

            <View
  style={{
    borderBottomColor: '#800000',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomEndRadius: 60,
    borderBottomStartRadius: 80,
  }}
/>
            <Text style={styles.NameOne} >Rithumi Omaya</Text>

            <Text style={styles.NameTwo} >Minuli Pabasara</Text>

            <Text style={styles.NameThree} >Oshadi Shawindya</Text>

            <Text style={styles.NameFour} >Upeksha Sandamali</Text>

            <Text style={styles.SubmitButton} >Submit Your Vote</Text>

            </View>
        )
    }
}
const styles = StyleSheet.create ({
    contain: {
        flex:2,
        backgroundColor: 'white',
    },
    
    Textstyle: {
        fontSize: 26,
        alignItems: 'center',
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 60,
        color: '#000000',
        
    },

    HeaderOne: {
        fontSize: 22,
        alignItems: 'center',
        fontWeight: 'bold',
        justifyContent: 'center',
        lineHeight: 45,
        marginLeft: 5,
        color: '#000000',
        
        
    },

    NameOne: {
        fontSize: 18,
        alignContent: 'center',
        fontWeight: 'bold',
        textAlign: 'left',
        lineHeight: 45,
        marginLeft: 15,
        color: '#000000',
       
    },

    NameTwo: {
        fontSize: 18,
        alignContent: 'center',
        fontWeight: 'bold',
        justifyContent: 'center',
        lineHeight: 45,
        marginLeft: 15,
        color: '#000000',
    },

    NameThree: {
        fontSize: 18,
        alignContent: 'center',
        fontWeight: 'bold',
        justifyContent: 'center',
        lineHeight: 45,
        marginLeft: 15,
        color: '#000000',
    },

    NameFour: {
        fontSize: 18,
        alignContent: 'center',
        fontWeight: 'bold',
        justifyContent: 'center',
        lineHeight: 45,
        marginLeft: 15,
        color: '#000000',
    },

    HeaderTwo: {
        fontSize: 22,
        alignContent: 'center',
        fontWeight: 'bold',
        justifyContent: 'center',
        lineHeight: 45,
        marginLeft: 5,
        color: '#000000',
    },

    SubmitButton: {
        fontSize: 23,
        alignContent: 'center',
        fontWeight: 'bold',
        justifyContent: 'center',
        textAlign: 'center',
        lineHeight: 150,
        color: '#000000',
    },

});





export default HomeScreen;