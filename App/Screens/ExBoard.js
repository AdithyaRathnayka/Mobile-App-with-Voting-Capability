import React from 'react';
import { View, Image, StyleSheet, Text, ScrollView } from 'react-native';



const ExBoard = () => {


    return (
        <View style={styles.container}>


            <Text style={styles.Textstyle}>Executive Board</Text>

            <Text style={styles.Textstyle2}>ICTSA</Text>

            <View style={{
                backgroundColor: 'white', height: 700, width: 435, borderTopLeftRadius: 70,
                borderTopRightRadius: 70, marginTop: 50, borderTopRightRadius: 100, borderBottomWidth: 50,
            }}>
                <ScrollView>
                    <View style={styles.contentBox}>
                        <Text style={styles.presidentText}>President</Text>
                        <View style={styles.viewboox}>
                            <Image
                                style={styles.presidentImage}
                                source={require('../Assets/Images/president.jpg')} />
                            <Text style={styles.text2}>Sandaruwan Dahanayaka who is a third year student, is the first president of the ICTSA association</Text>
                        </View>
                    </View>

                    <View style={styles.contentBox}>
                        <Text style={styles.presidentText}>Secretary</Text>
                        <View style={styles.viewboox}>
                            <Image
                                style={styles.presidentImage}
                                source={require('../Assets/Images/secretary.jpg')}
                            />
                            <Text style ={styles.text2}> Dilakshi Abenayaka, who is a hardwork third year student is the first secretary of the ICTSA association.  </Text>
                        </View>
                    </View>


                    <View style={styles.contentBox}>
                        <Text style={styles.presidentText}>Vice President</Text>
                        <View style={styles.viewboox}>
                        <Image
                            style={styles.presidentImage}
                            source={require('../Assets/Images/VicePresident.jpg')}
                        />
                        <Text style = {styles.text2}>Kavya Lokuge who is a second year student, provides her contribution as the vice president of the association </Text>
                        </View>
                   </View>

                    <View style={styles.contentBox}>
                        <Text style={styles.presidentText}>Assistent Secretary</Text>
                        <View style={styles.viewboox}>
                            <Image
                                style={styles.presidentImage}
                                source={require('../Assets/Images/AssistentSecretary.jpg')}
                            />
                            <Text style = {styles.text2}> Adithya RAthnayaka who is a second year student, gives her contribution as the assistent secretary of the association</Text>
                        </View>
                    </View>

                    <View style={styles.contentBox}>
                        <Text style={styles.presidentText}>Junior Tresurer</Text>
                        <View style={styles.viewboox}>
                            <Image
                                style={styles.presidentImage}
                                source={require('../Assets/Images/juniorTresurer.jpg')}
                            />
                            <Text style = {styles.text2}> Dilanya Samarakoon who is a third year student, gives her contribution as the junior tresurer of the association.</Text>
                        </View>
                    </View>


                    <View style={styles.contentBox}>
                        <Text style={styles.presidentText}>Editor</Text>
                        <View style={styles.viewboox}>
                            <Image
                                style={styles.presidentImage}
                                source={require('../Assets/Images/Editor.jpg')}
                            />
                            <Text style = {styles.text2}> Sajitha Rasanga who is a third year student gives his contribution as the chief editor of the association.</Text>
                        </View>
                    </View>

                    </ScrollView>

                </View>

           </View>

     

    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
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

    contentBox: {
        flex: 1,
        width: 360,
        height: 190,
        color: '#000000',
        marginLeft: 20,
        marginRight: 50,
        marginTop: 20,
        backgroundColor: 'rgb(192, 192, 199)',
        borderRadius: 20,

    },

    viewboox: {
        flex: 1,
        flexDirection: 'row',
    },

    presidentText: {
        fontSize: 21,
        alignItems: 'center',
        fontWeight: 'bold',
        marginTop: 5,
        marginLeft: 10,
        color: 'black',
    },

    presidentImage: {
        height: 140,
        width: 100,
        marginVertical: 10,
        marginHorizontal: 10,
        borderRadius: 15,
    },

    text2: {
        fontSize: 20,
        fontWeight: '800',
        width: 230,
        marginTop: 10,

    }



});




export default ExBoard;