import {View, StyleSheet, Text,Image} from 'react-native';

const CSR1 = () => {
 
        return (
            <View style = {styles.container}>
                <Text style = {styles.topic}> CSR Projects -ICTSA </Text>
                <Image
                    source={require('../Assets/Images/research.png')}
                    style = {styles.img}/>
            
            <View style = {styles.bg2}>
                <Text style = {styles.subtopic}> Dansala </Text>
                <Text style = {styles.subtopic}> Date - 07.11.2022</Text>
                <Text style = {styles.subtopic}> Time - 11.00 a.m</Text>
                <Text style = {styles.subtopic}> place - University Premises</Text>
                </View>

                <Text style = {styles.body}> The Information and Communication Technology students’ Association of the University of Sri 
Jayewardenepura successfully organized a "Dansala" on the poya day of November 2022 at the university premises. That was the first charity programme done by the Information and Communication Technology Student's Association. </Text>
               
               
               
                </View>
      
        )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white',
        alignContent: 'center',
        justifyContent: 'center',
    },

    bg2: {
        flex: 1,
        backgroundColor: 'rgb(207, 213, 238)',
        borderRadius: 8,
        padding: 6,
        margin: 10,
    },
    topic: {
        fontSize: 28,
        marginTop: 20,
        fontWeight: 'bold',
        color: 'black', 

    }, 

    img : {
        width:'100%',
        height: 200,
        resizeMode: 'contain',
        padding: 10,

    }, 
    subtopic : {
        fontSize: 20,
        fontWeight: '800',
        alignItems: 'center',
        justifyContent: 'center',

    }, 

    body :{
        fontSize: 16, 
        margin: 3, 
        padding : 12, 
        fontWeight: '500',
    }

});


export default CSR1;