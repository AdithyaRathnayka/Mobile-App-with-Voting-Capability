import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';


const Precentage =() => {
    return(
        <View style = {styles.container}>


        <Text style={styles.Textstyle}>President</Text>

        <Text style={styles.Textstyle2}>ICTSA</Text>

        <Text style={styles.Textstyle3}>Voting Rate</Text>

        <View style={{backgroundColor: 'white', height: 700, width: 435, borderTopLeftRadius: 70, 
        borderTopRightRadius: 70, marginTop: 50, borderTopRightRadius: 100, borderBottomWidth: 50,}}>

        <View style={styles.CircleShape} />

        <Text style={styles.Textstyle4}>Heighest Precentage</Text>

        <TouchableOpacity>
        <Text style={styles.Box}>Name 01</Text>
        </TouchableOpacity>

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

    Textstyle3: {
      color: '#ffffff',
      textAlign: 'center',
      marginTop: 1,
      fontSize: 18,
  },

  Textstyle4: {
    color: '#191970',
    textAlign: 'center',
    marginTop: 5,
    fontSize: 20,
    alignItems: 'center',
    marginBottom: 20,
    
    
  },

  CircleShape: {
    width: 320,
    height: 320,
    borderRadius: 320 / 2,
    backgroundColor: '#d3d3d3',
    alignItems: 'center',
    marginTop: 30,
    marginLeft: 45,
    borderColor: '#191970',
    borderWidth: 15,
    marginBottom: 20,
  },

  Box: {
    color: '#000000',
    marginLeft: 10,
    marginTop: 10,
    fontSize: 18,
    backgroundColor: '#d3d3d3',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 60,
    marginLeft: 60,
    alignItems: 'center',
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 20,
    
   
  },

});

export default Precentage;