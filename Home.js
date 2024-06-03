import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, ScrollView, Image} from 'react-native';


const Home =({navigation}) => {


    const events = () =>{
        navigation.navigate('Event');
    }

    const  executive = () =>{
        navigation.navigate('ExBoard');
    }

    const gallery = ()=> {
        navigation.navigate('Gallery')
    }

    return(
        <View style = {styles.container}>


        <Text style={styles.Textstyle}>Home</Text>

        <Text style={styles.Textstyle2}>ICTSA</Text>

        <View style={{backgroundColor: 'white', 
        height: 550, 
        width: 425, 
        borderTopLeftRadius: 70, 
        borderTopRightRadius: 100, 
        marginTop: 50,  
        paddingRight:18,
        }}>
        
        <View>
       <TouchableOpacity>
        <Image
                source={{uri:'https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-productivity-analysis-business-growth-development_516790-964.jpg?w=2000'}}
                style={{width:'100%', height: 200, resizeMode: 'contain',}}/>
        </TouchableOpacity>
       </View>

       
       <ScrollView style={styles.scrollView}>

        
        <TouchableOpacity>
        <Text style={styles.Box}>Committee Member Selection</Text>
        </TouchableOpacity>

       
        
        <TouchableOpacity 
        onPress= {events}>
        <Text style={styles.BoxOne}>Main Events</Text>
        </TouchableOpacity>

        <TouchableOpacity>
        <Text style={styles.BoxTwo}>Event Calender</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={executive}>
        <Text style={styles.BoxThree}>ICTSA Executive Board</Text>
        </TouchableOpacity>

        <TouchableOpacity
           onPress= {gallery}>

        <Text style={styles.BoxFour}>Gallery</Text>
        </TouchableOpacity>

        <TouchableOpacity>
        <Text style={styles.BoxFive}></Text>
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
        color: '#000000',
        marginLeft: 20,
        marginTop: 20,
        fontSize: 18,
        backgroundColor: '#00008b',
        paddingHorizontal: 60,
        paddingVertical: 60,
        borderRadius: 20,
        marginRight: 40,
        color: '#ffffff',
        fontSize: 19,
        fontWeight: 'bold',
        borderColor: '#00ffff',
        borderWidth: 7,
    },
    
       
    BoxOne: {
        color: '#000000',
        marginLeft: 20,
        marginTop: 20,
        fontSize: 18,
        backgroundColor: '#00008b',
        paddingHorizontal: 60,
        paddingVertical: 60,
        borderRadius: 20,
        marginRight: 40,
        color: '#ffffff',
        fontSize: 19,
        fontWeight: 'bold',
        borderColor: '#00ffff',
        borderWidth: 7,
    },

    BoxTwo: {
        color: '#000000',
        marginLeft: 20,
        marginTop: 20,
        fontSize: 18,
        backgroundColor: '#00008b',
        paddingHorizontal: 60,
        paddingVertical: 60,
        borderRadius: 20,
        marginRight: 40,
        color: '#ffffff',
        fontSize: 19,
        fontWeight: 'bold',
        borderColor: '#00ffff',
        borderWidth: 7,
    },
    

    BoxThree: {
        color: '#000000',
        marginLeft: 20,
        marginTop: 20,
        fontSize: 18,
        backgroundColor: '#00008b',
        paddingHorizontal: 60,
        paddingVertical: 60,
        borderRadius: 20,
        marginRight: 40,
        color: '#ffffff',
        fontSize: 19,
        fontWeight: 'bold',
        borderColor: '#00ffff',
        borderWidth: 7,
    },

    BoxFour: {
        color: '#000000',
        marginLeft: 20,
        marginTop: 20,
        fontSize: 18,
        backgroundColor: '#00008b',
        paddingHorizontal: 60,
        paddingVertical: 60,
        borderRadius: 20,
        marginRight: 40,
        color: '#ffffff',
        fontSize: 19,
        fontWeight: 'bold',
        borderColor: '#00ffff',
        borderWidth: 7,
    },

    BoxFive: {
        color: '#000000',
        marginLeft: 20,
        marginTop: 20,
        fontSize: 18,
        backgroundColor: '#00008b',
        paddingHorizontal: 60,
        paddingVertical: 60,
        borderRadius: 20,
        marginRight: 40,
        marginBottom: 30,
        borderColor: '#00ffff',
        borderWidth: 7,
    },

});

export default Home;