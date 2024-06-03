import {View, StyleSheet, Text,Image} from 'react-native';

const Webinar1 = () => {
 
        return (
            <View style = {styles.container}>
                <Text style = {styles.topic}> How To Conduct A Research </Text>
                <Image
                    source={require('../Assets/Images/research.png')}
                    style = {styles.img}/>
            
            <View style = {styles.bg2}>
                <Text style = {styles.subtopic}> Guess Lecture - Prof.Ruwan Abeysekara </Text>
                <Text style = {styles.subtopic}> Date - 29.04.2022</Text>
                <Text style = {styles.subtopic}> Time - 9.00 a.m</Text>
                </View>

                <Text style = {styles.body}> The Information and Communication Technology students’ Association of the University of Sri 
Jayewardenepura successfully organized an important and attractive webinar on “How to Conduct 
a Research” on 29th April 2022.
The guest speaker for the session was prof. Ruvan Abeynayaka is a well-educated certified trainer 
and the dean of the E-soft metro campus. As a result of it, a third-year student, the secretary of 
ICTSA, Dilakshi Abaysingha started the meeting and the president, sandaruwan Dahanayaka
handed over the session to the guest speaker after welcoming all. Students over 100 in the Information 
and Communication Technology department participated in the session. </Text>
               
               
               
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


export default Webinar1;