// import React from 'react';
// import { TouchableOpacity, StyleSheet, Text, View } from "react-native";


// export default function Button (props){
// return (
//     <TouchableOpacity onPress = {() => props.buttonClick()}>
//     < View style = {styles.ButtonContainer}>
//     <Text style ={styles.buttontext}>{props.buttontext}</Text></View>
//     </TouchableOpacity>
//    );
// }

// const styles = StyleSheet.create ({
//     ButtonContainer:{
//         backgroundColor: 'rgba(25, 33, 100, 1)',
//         width : 300,
//         height: 50,
//         padding : 15,
//         borderRadius: 20,
//         alignItems: 'center',
//         justifyContent: 'space-around',
//         alignSelf: 'center',
 
        
//     },

//     buttontext:{
//         color: 'white',
//         fontSize: 18,
//     }
// });


import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";


const Button  = ({buttontext, Alert, ...rest}) => {
return (
    <TouchableOpacity {...rest}
    style ={styles.ButtonContainer}>
    <Text style ={styles.buttontext}>{buttontext}</Text>
    </TouchableOpacity>
   );
}

const styles = StyleSheet.create ({
    ButtonContainer: {
        backgroundColor: 'rgb(0,0,100)',
        borderRadius: 100, 
        alignItems: 'center', 
        width: '80%',
        height:40, 
   },
   buttontext:{
           color: 'white', 
            fontSize: 22, 
            fontWeight: 'bold'
   },
  


});

export default Button;


