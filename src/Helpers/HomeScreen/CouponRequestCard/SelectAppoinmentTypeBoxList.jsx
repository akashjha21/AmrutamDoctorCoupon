import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const appointmentTypes = ['All', 'Offline', 'Chat', 'Audio', 'Video'];

const SelectAppoinmentTypeBoxList = ({ typeListVisible, appoinment, setAppoinment, setTypeListVisible }) => {
  return (
    <>
      {typeListVisible ? (
        <ScrollView style={styles.mainContainer} showsVerticalScrollIndicator={false}>
          {appointmentTypes.map((type) => (
            <TouchableOpacity 
              key={type} 
              onPress={() => { setTypeListVisible(false); setAppoinment(type); }} 
              style={styles.eachContainer}
            >
              <Text style={styles.textStyle}>{type}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      ) : (
        <View></View>
      )}
    </>
  );
};

export default SelectAppoinmentTypeBoxList;

const styles = StyleSheet.create({
  mainContainer: {
    height: 200,
    width: '90%',
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    right: 18,
    top: 280,
    elevation: 3,
    borderRadius: 12,
    zIndex: 2,
  },
  eachContainer: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#D6D6D6',
    justifyContent: 'center',
  },
  textStyle: {
    marginLeft: 15,
    fontFamily: "Nunito-Regular",
    fontSize: 14,
    color: '#484848'
  }
});
