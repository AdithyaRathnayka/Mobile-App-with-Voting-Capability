import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, ScrollView, Image} from 'react-native';


const CSR =() => {


    return(
        <View style = {styles.container}>


        <Text style={styles.Textstyle}>CSR Projects</Text>

        <Text style={styles.Textstyle2}>ICTSA</Text>

        <View style={styles.background1}>
        


       
       <ScrollView style={styles.scrollView}>

       <TouchableOpacity>
        <View style = {styles.Box}>
        <Image
        source={require('../Assets/Images/img5.jpg')}
        style = {styles.boximg}/>
        </View>
        </TouchableOpacity>
       
      
        
    
        </ScrollView>

        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#191970',
    },

    Textstyle: {
        color: '#ffffff',
        textAlign: 'center',
        marginTop: 23,
        fontSize: 35,
    },

    Textstyle2: {
        color: '#ffffff',
        textAlign: 'center',
        marginTop: 2,
        fontSize: 18,
    },

    Box: {
        flex: 1,
        width: 360,
        height: 190,
        color: '#000000',
        marginLeft: 20,
        marginRight: 50,
        marginTop: 20,
        backgroundColor: 'rgb(192, 192, 199)',
        borderRadius: 40,
    },

    img: {
        height: 240,
        width: 390,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },

    background1: {
        backgroundColor: 'white', 
        height: 700, 
        width: 425, 
        borderTopLeftRadius: 80,  
        marginTop: 50,  
        paddingRight:18,
    },

    boximg:{
        width: 360,
        height: 190,
        borderRadius: 40,

    }
});

export default CSR;