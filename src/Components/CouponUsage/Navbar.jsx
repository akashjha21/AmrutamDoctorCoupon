import { Image, ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Navbar = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground style={styles.navImage} source={require('../../assets/Images/CouponUsage.png')}>
        <TouchableOpacity onPress={() => navigation.goBack()}><Image style={styles.leftArrow} source={require('../../assets/Images/LeftArrow.png')}/></TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

export default Navbar

const styles = StyleSheet.create({
    mainContainer: {
        height:185,
    },
    navImage: {
        resizeMode:'contain',
        flex:1,
    },
    leftArrow: {
        height:50,
        width:50,
        position:'absolute',
        top:30,
    },
})