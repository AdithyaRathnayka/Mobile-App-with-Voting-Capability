import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, ScrollView, Image} from 'react-native';


const CSR =({navigation}) => {

    const csr1 = () => {
        navigation.navigate('CSR1')
    }


    return(
        <View style = {styles.container}>


        <Text style={styles.Textstyle}>CSR Projects</Text>

        <Text style={styles.Textstyle2}>ICTSA</Text>

        <View style={styles.background1}>
        


       
       <ScrollView style={styles.scrollView}>

       <TouchableOpacity
       onPress={csr1}>
        <View style = {styles.Box}>
       
        <Image
        source={require('../Assets/Images/charity.jpg')}
        style = {styles.boximg}/>
         <Text style = {styles.txt}>Alms Giving</Text>
        
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
    txt: {
        fontSize: 20,
        color: 'black' , 
        alignItems: 'center', 
        justifyContent: 'center',
        marginHorizontal: 110, 

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
        height: 220,
        color: '#000000',
        marginLeft: 20,
        marginRight: 50,
        marginTop: 20,
        backgroundColor: 'rgb(192, 192, 199)',
        borderRadius: 50,
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
        borderRadius: 50,

    }
});

export default CSR;