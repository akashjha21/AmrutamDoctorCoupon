import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const CouponListsAndRequest = ({selected, setSelected}) => {

  return (
    <View style={styles.mainContainer}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.singleContainer, selected==='Coupon List' ? {borderBottomColor:'#3A643B'} : {borderBottomColor:'#FFFFFF00'}]} onPress={() => setSelected('Coupon List')}>
          <Text style={[styles.text]}>
            Coupon List
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.singleContainer, selected==='Coupon Request' ? {borderBottomColor:'#3A643B'} : {borderBottomColor:'#FFFFFF00'}]} onPress={() => setSelected('Coupon Request')}>
          <Text style={[styles.text]}>
            Coupon Request
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.horizontalLine}></View>
    </View>
  )
}

export default CouponListsAndRequest

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 30,
  },
  buttonsContainer: {
    marginHorizontal: 34,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
    
    
    
  },
  singleContainer: {
    paddingHorizontal:10,
    borderBottomWidth: 2,
    borderRadius:2,
    height:30,
  },
  text: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 16,
    color: '#2F2F2F',
  },
  horizontalLine: {
    borderTopWidth: 2,
    borderTopColor: '#F4F4F4',
    marginTop: -2.5,
    zIndex:-1,
  },
});
