import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const SelectNumberBoxList = ({ numberlistVisible, number, setNumber, setNumberListVisible }) => {
  return (
    <>
      {numberlistVisible ? (
        <ScrollView style={styles.mainContainer} showsVerticalScrollIndicator={false}>
          {numbers.map((num) => (
            <TouchableOpacity
              key={num}
              onPress={() => { setNumber(num); setNumberListVisible(false); }}
              style={styles.eachContainer}
            >
              <Text style={styles.textStyle}>{num}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      ) : (
        <View></View>
      )}
    </>
  );
};

export default SelectNumberBoxList;

const styles = StyleSheet.create({
  mainContainer: {
    height: 200,
    width: '90%',
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    right: 18,
    top: 195,
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
  }
});
