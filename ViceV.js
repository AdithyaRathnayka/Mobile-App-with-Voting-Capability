
import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, ScrollView} from 'react-native';


const ViceV =() => {

  const [count, setCount] = React.useState(0);
  const [count1, setCount1] = React.useState(0);
  const [count2, setCount2] = React.useState(0);
  const [count3, setCount3] = React.useState(0);
  const [count4, setCount4] = React.useState(0);

  const btnClick = () => {
    if (count > 0) {
      alert("Only One Vote Can Be Given")

    } else {
      setCount(count + 1)
    }
  }

  const btnClick1 = () => {
    if (count1 > 0) {
      alert("Only One Vote Can Be Given")

    } else {
      setCount1(count1 + 1)
    }
  }

  const btnClick2 = () => {
    if (count2 > 0) {
      alert("Only One Vote Can Be Given")

    } else {
      setCount2(count2 + 1)
    }
  }

  const btnClick3 = () => {
    if (count3 > 0) {
      alert("Only One Vote Can Be Given")

    } else {
      setCount3(count3 + 1)
    }
  }

  const btnClick4 = () => {
    if (count4 > 0) {
      alert("Only One Vote Can Be Given")

    } else {
      setCount4(count4 + 1)
    }
  }

    return(
        <View style = {styles.container}>


        <Text style={styles.Textstyle}>Vice President</Text>

        <Text style={styles.Textstyle2}>ICTSA</Text>

        <Text style={styles.Textstyle3}>Voting Rate</Text>
        <ScrollView>

        <View style={{backgroundColor: 'white', height: 900, width: 435, borderTopLeftRadius: 70, 
        borderTopRightRadius: 70, marginTop: 50, borderTopRightRadius: 100, borderBottomWidth: 50,}}>

      

        <View style = {styles.touch}>
        <TouchableOpacity
         onPress = {btnClick}>
        <Text style={styles.Box1}>Teshini Liyara</Text>
        </TouchableOpacity>
        <View style={styles.CircleShape}>
             <Text style = {styles.txt2}>{count/100}% </Text>
             </View>
        </View>

        <View style = {styles.touch}>
        <TouchableOpacity  onPress = {btnClick1}>
        <Text style={styles.Box1}>Nishadya Perera</Text>
        </TouchableOpacity>
        <View style={styles.CircleShape}> 
        <Text style = {styles.txt2}> {count1/100}%</Text>
        </View>
        </View>

        <View style = {styles.touch}>
        <TouchableOpacity
        onPress={btnClick2}>
        <Text style={styles.Box1}>Jayami Sathsarani</Text>
        </TouchableOpacity>
        <View style={styles.CircleShape} >
        <Text style = {styles.txt2}>{count2/100}% </Text>
        </View>
        </View>

   <View style = {styles.touch}>
        <TouchableOpacity
        onPress={btnClick3}>
        <Text style={styles.Box1}>Nadun Iduwara</Text>
        </TouchableOpacity>
        <View style={styles.CircleShape} >
        <Text style = {styles.txt2}>{count3/100}%</Text>
        </View>
        </View>
       


        <View style = {styles.touch}>
        <TouchableOpacity
        onPress={btnClick4}>
        <Text style={styles.Box1}>Thinuk Methsahan</Text>
        </TouchableOpacity>
        <View style={styles.CircleShape}>
        <Text style = {styles.txt2}>{count4/100}%</Text>
      </View>
      </View>

<View>

        </View>
        </View>
        </ScrollView>

      

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
    marginTop: 30,
    backgroundColor: '#d3d3d3',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
    marginLeft: 30,
    alignItems: 'center',
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 20,
    width: 250,
    
  },

  CircleShape: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    backgroundColor: '#d3d3d3',
    alignItems: 'center',
    marginTop: 25,
    marginLeft: 30, 
    borderColor: '#191970',
    borderWidth: 5,
    marginBottom: 5,
  },

  touch: {
    flexDirection: 'row',
  }, 

  txt2: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 13,
  }


});

export default ViceV;
