import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const SelectAppoinmentTypeBoxList = ({typeListVisible, appoinment, setAppoinment, setTypeListVisible}) => {
  return (
    <>
    {typeListVisible ? <ScrollView  style={styles.mainContainer} showsVerticalScrollIndicator={false}>
    <TouchableOpacity onPress={() => (setTypeListVisible(false), setAppoinment('All'))} style={styles.eachContainer}>
      <Text style={styles.textStyle}>All</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => (setTypeListVisible(false), setAppoinment('Offline'))} style={styles.eachContainer}>
      <Text style={styles.textStyle}>Offline</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => (setTypeListVisible(false), setAppoinment('Chat'))} style={styles.eachContainer}>
      <Text style={styles.textStyle}>Chat</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => (setTypeListVisible(false), setAppoinment('Audio'))} style={styles.eachContainer}>
      <Text style={styles.textStyle}>Audio</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => (setTypeListVisible(false), setAppoinment('Video'))} style={styles.eachContainer}>
      <Text style={styles.textStyle}>Video</Text>
    </TouchableOpacity>
  </ScrollView> : <View></View>}
    </>
  );
};

export default SelectAppoinmentTypeBoxList;

const styles = StyleSheet.create({
  mainContainer: {
    height:200,
    width:'90%',
    backgroundColor:'#FFFFFF',
    position:'absolute',
    right:18,
    top:280,
    elevation:3,
    borderRadius:12,
    zIndex:2,
  },
  eachContainer:{
    height:40,
    borderBottomWidth:1,
    borderBottomColor:'#D6D6D6',
    justifyContent: 'center',
  },
  textStyle:{
    marginLeft:15,
    fontFamily:"Nunito-Regular",
    fontSize:14,
    color:'#484848'
  }
});
