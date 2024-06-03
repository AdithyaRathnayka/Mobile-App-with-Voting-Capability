import React from 'react'
import { ImageBackground, View, StyleSheet, Dimensions } from 'react-native';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const ExpandImage = (props) => {
    return (
        <View>
            <ImageBackground
                source={props.route.params.url}
                style={styles.fullImg}>

            </ImageBackground>


        </View>
    )
}

const styles = StyleSheet.create({
    fullImg: {
        height: deviceHeight,
        width: deviceWidth,
    },

})

export default ExpandImage; 