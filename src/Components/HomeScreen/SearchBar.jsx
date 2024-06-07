import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const SearchBar = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.textInputArea}>
        <Image style={styles.searchIcon} source={require("../../assets/Images/SearchIcon.png")}/>
        <TextInput
          style={styles.textInput}
          placeholder='Search here'
          placeholderTextColor={'#28643B50'}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Image style={{height:17, width:17}} source={require('../../assets/Images/Arrows.png')} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image style={{width:24, height:24}} source={require('../../assets/Images/Funnel.png')} />
      </TouchableOpacity>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  textInputArea: {
    flexDirection: 'row',
    width: 250,
    height: 38,
    alignItems: 'center',
    borderRadius: 11,
    backgroundColor: '#2E37A407',
    paddingHorizontal: 10, 
  },
  searchIcon: {
    height: 20,
    width: 20,
    marginRight: 5,
    marginTop:-2,
  },
  textInput: {
    flex: 1, 
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#28643B',
    // Ensure the text color is not too transparent
  },
  button: {
    width: 38,
    height: 38,
    backgroundColor: '#2E37A407',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 11.5,
  },
})
