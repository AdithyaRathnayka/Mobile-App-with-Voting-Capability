import {View, StyleSheet, Text,Image} from 'react-native';

const Webinar1 = () => {
 
        return (
            <View style = {styles.container}>
                <Text style = {styles.topic}> Comienso 2022 </Text>
                <Image
                    source={require('../Assets/Images/meetupD.jpg')}
                    style = {styles.img}/>
            
            <View style = {styles.bg2}>
                <Text style = {styles.subtopic}> Chief Guest - Mr.Shirantha Heenkenda </Text>
                <Text style = {styles.subtopic}> Date - 10.05.2022</Text>
                <Text style = {styles.subtopic}> Time - 9.00 a.m</Text>
                </View>

                <Text style = {styles.body}> The Information and Communication Technology students’ Association of the University of Sri 
Jayewardenepura successfully organized the anual meetup.Here the first meetup is called as "Comienso'22". It was arranged with many games and funny events. The chief guest of the meetup was the Dean of the faculty of Humanities and Social Sciences, Mr.Shirantha Heenkenda and the Head of the Information and Commucication Technology, Mrs.B.W.R. Damayanthi. All the styudents of the department of ICT and all the lecturers of the department participated in this occation.</Text>
               
               
               
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