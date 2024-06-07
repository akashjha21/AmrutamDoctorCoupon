import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const SelectNumberBoxList = ({numberlistVisible, number, setNumber, setNumberListVisible}) => {
  return (
    <>
    {numberlistVisible ? <ScrollView  style={styles.mainContainer} showsVerticalScrollIndicator={false}>
    <TouchableOpacity onPress={() => (setNumber(1), setNumberListVisible(false))} style={styles.eachContainer}>
      <Text style={{marginLeft:15,}}>1</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => (setNumber(2), setNumberListVisible(false))} style={styles.eachContainer}>
      <Text style={{marginLeft:15,}}>2</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => (setNumber(3), setNumberListVisible(false))} style={styles.eachContainer}>
      <Text style={{marginLeft:15,}}>3</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => (setNumber(4), setNumberListVisible(false))} style={styles.eachContainer}>
      <Text style={{marginLeft:15,}}>4</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => (setNumber(5), setNumberListVisible(false))} style={styles.eachContainer}>
      <Text style={{marginLeft:15,}}>5</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => (setNumber(6), setNumberListVisible(false))} style={styles.eachContainer}>
      <Text style={{marginLeft:15,}}>6</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => (setNumber(7), setNumberListVisible(false))} style={styles.eachContainer}>
      <Text style={{marginLeft:15,}}>7</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => (setNumber(8), setNumberListVisible(false))} style={styles.eachContainer}>
      <Text style={{marginLeft:15,}}>8</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => (setNumber(9), setNumberListVisible(false))} style={styles.eachContainer}>
      <Text style={{marginLeft:15,}}>9</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => (setNumber(10), setNumberListVisible(false))} style={styles.eachContainer}>
      <Text style={{marginLeft:15,}}>10</Text>
    </TouchableOpacity>
  </ScrollView> : <View></View>}
    </>
  );
};

export default SelectNumberBoxList;

const styles = StyleSheet.create({
  mainContainer: {
    height:200,
    width:'90%',
    backgroundColor:'#FFFFFF',
    position:'absolute',
    right:18,
    top:195,
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
});
