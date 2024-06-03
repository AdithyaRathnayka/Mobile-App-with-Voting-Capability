import {View, StyleSheet, Text,Image} from 'react-native';

const Webinar2 = () => {
 
        return (
            <View style = {styles.container}>
                <Text style = {styles.topic}> How To Conduct A Research </Text>
                <Image
                    source={require('../Assets/Images/linkedIn.png')}
                    style = {styles.img}/>
            
            <View style = {styles.bg2}>
                <Text style = {styles.subtopic}> Guess Lecture -  Mrs. Sarada Jayagoda Widyaratne </Text>
                <Text style = {styles.subtopic}> Date -  27th of May 2022.</Text>
                <Text style = {styles.subtopic}> Time - 9.00 a.m</Text>

                </View>
                <Text style = {styles.body}> The information and Communication Technology Students’ Association of the University of Sri 
Jayewardenepura successfully organized a valuable and attractive webinar on “Unlocking the Power of 
LinkedIn” on 27th of May 2022.
The guest speaker for the webinar was Mrs. Sarada Jayagoda Widyaratne. It was a very informative and 
important webinar about creating and maintaining a better LinkedIn profile. The webinar session was 
hosted by second-year students. Accordingly, the vice president of ICTSA who represents the second year students started the session by welcoming all and handed over it to the guest speaker. Participants 
over 300 participated in this session. </Text>
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


export default Webinar2;