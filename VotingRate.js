import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, ScrollView} from 'react-native';


const VotingRate =() => {
    return(
        <View style = {styles.container}>


        <Text style={styles.Textstyle}>President</Text>

        <Text style={styles.Textstyle2}>ICTSA</Text>

        <Text style={styles.Textstyle3}>Voting Rate</Text>

        <View style={{backgroundColor: 'white', height: 900, width: 435, borderTopLeftRadius: 70, 
        borderTopRightRadius: 70, marginTop: 50, borderTopRightRadius: 100, borderBottomWidth: 50,}}>

        

        
        <ScrollView>
        

        <TouchableOpacity>
        <Text style={styles.Box1}>Name 01</Text>
        </TouchableOpacity>

        <View style={styles.CircleShape} />


        <TouchableOpacity>
        <Text style={styles.Box2}>Name 02</Text>
        </TouchableOpacity>

        <View style={styles.CircleShape2} />

        <TouchableOpacity>
        <Text style={styles.Box3}>Name 03</Text>
        </TouchableOpacity>

        <View style={styles.CircleShape3} />

        <TouchableOpacity>
        <Text style={styles.Box4}>Name 04</Text>
        </TouchableOpacity>

        <View style={styles.CircleShape4} />

        <TouchableOpacity>
        <Text style={styles.Box5}>Name 05</Text>
        </TouchableOpacity>

        <View style={styles.CircleShape5} />

        <Text style={styles.Textstyle4}>Heighest Precentage</Text>

        <TouchableOpacity>
        <Text style={styles.Box6}>Name 03</Text>
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
    marginBottom: 30,
    
    
  },

  

  Box1: {
    color: '#000000',
    marginLeft: 10,
    marginTop: 30,
    fontSize: 18,
    backgroundColor: '#d3d3d3',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 110,
    marginLeft: 30,
    alignItems: 'center',
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 20,
    
  },

  CircleShape: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    backgroundColor: '#d3d3d3',
    alignItems: 'center',
    marginTop: 15,
    marginLeft: 330,
    borderColor: '#191970',
    borderWidth: 5,
    marginBottom: 5,
  },

 


  Box2: {
    color: '#000000',
    marginLeft: 10,
    marginTop: 10,
    fontSize: 18,
    backgroundColor: '#d3d3d3',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 110,
    marginLeft: 30,
    alignItems: 'center',
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  CircleShape2: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    backgroundColor: '#d3d3d3',
    alignItems: 'center',
    marginTop: 15,
    marginLeft: 330,
    borderColor: '#191970',
    borderWidth: 5,
    marginBottom: 5,
  },

  Box3: {
    color: '#000000',
    marginLeft: 10,
    marginTop: 10,
    fontSize: 18,
    backgroundColor: '#d3d3d3',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 110,
    marginLeft: 30,
    alignItems: 'center',
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  CircleShape3: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    backgroundColor: '#d3d3d3',
    alignItems: 'center',
    marginTop: 15,
    marginLeft: 330,
    borderColor: '#191970',
    borderWidth: 5,
    marginBottom: 5,
  },

  Box4: {
    color: '#000000',
    marginLeft: 10,
    marginTop: 10,
    fontSize: 18,
    backgroundColor: '#d3d3d3',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 110,
    marginLeft: 30,
    alignItems: 'center',
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  CircleShape4: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    backgroundColor: '#d3d3d3',
    alignItems: 'center',
    marginTop: 15,
    marginLeft: 330,
    borderColor: '#191970',
    borderWidth: 5,
    marginBottom: 5,
  },

  Box5: {
    color: '#000000',
    marginLeft: 10,
    marginTop: 10,
    fontSize: 18,
    backgroundColor: '#d3d3d3',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 110,
    marginLeft: 30,
    alignItems: 'center',
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 40,
  },

  CircleShape5: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    backgroundColor: '#d3d3d3',
    alignItems: 'center',
    marginTop: 5,
    marginLeft: 330,
    borderColor: '#191970',
    borderWidth: 5,
    marginBottom: 5,
  },

  Box6: {
    color: '#000000',
    marginLeft: 10,
    marginTop: 3,
    fontSize: 18,
    backgroundColor: '#d3d3d3',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 110,
    marginLeft: 90,
    alignItems: 'center',
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 295,
  },


});

export default VotingRate;