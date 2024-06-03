import React from 'react'
import {TouchableOpacity, View, Image, Dimensions, StyleSheet, ScrollView} from 'react-native'
import Images from '../Screens/Images';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const Gallery = (props) => {
    return (

        <ScrollView style = {styles.scrollview}>
        <View>
            {
                Images.map((image, index) => (
                    <TouchableOpacity key = {index}
                    onPress= {()=> 
                        props.navigation.navigate('ExpandImage',{url: image.url})
                    }>
                        <Image source={image.url}
                        style = {styles.imgStyle}/>

                    </TouchableOpacity>
                ))
            }
        </View>

        </ScrollView>
    )
}


const styles = StyleSheet.create ({
    imgStyle: {
        height: deviceHeight/3,
        width: deviceWidth ,
        borderRadius : 10,
        margin: 5,
    }, 

    scrollview:{
        display : 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }

});

export default Gallery;
