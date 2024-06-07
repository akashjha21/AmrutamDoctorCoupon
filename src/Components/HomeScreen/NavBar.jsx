import { ImageBackground, StyleSheet, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

const NavBar = () => {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground source={require('../../assets/Images/CouponsNavBar.png')} style={styles.navImage}>
        <TouchableOpacity>
            <Image style={styles.leftArrow} source={require('../../assets/Images/LeftArrow.png')}  />
        </TouchableOpacity>
        
      </ImageBackground>
    </View>
  )
}

export default NavBar

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