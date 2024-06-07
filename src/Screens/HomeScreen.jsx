import { StatusBar, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import NavBar from '../Components/HomeScreen/NavBar';
import SearchBar from '../Components/HomeScreen/SearchBar';
import CouponListsAndRequest from '../Components/HomeScreen/CouponListsAndRequest';
import CouponList from '../Components/HomeScreen/CouponList/CouponList';
import CouponRequest from '../Components/HomeScreen/CouponRequest/CouponRequest';
import ModalContainer from '../Components/HomeScreen/ModalContainer';

const HomeScreen = ({navigation}) => {
  const [selected, setSelected] = useState('Coupon List');
  const [visible, setVisible] = useState(false)

  return (
    <View style={styles.mainContainer}>
      <NavBar />
      <SearchBar />
      <CouponListsAndRequest selected={selected} setSelected={setSelected} />
      {selected === 'Coupon List' ? (
        <CouponList navigation={navigation} />
      ) : (
        <CouponRequest visible={visible} setVisible={setVisible} />
      )}

      <ModalContainer visible={visible} setVisible={setVisible} />
      <StatusBar backgroundColor={'#EAF2EA'} barStyle={'dark-content'} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  modalMainContainer: {
    flex: 1,
    backgroundColor: '#00000030',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: '90%',
    height: 355,
    backgroundColor: '#FFFFFF',
    borderRadius: 23,
    elevation: 3,
    alignItems: 'center',
  },
  headingText: {
    fontFamily: 'Poppins-Bold',
    fontWeight: 'bold', // remove when Poppins-Bold is imported
    fontSize: 20,
    color: '#2D7331',
    marginVertical: 20,
  },
  redeemText:{
    fontFamily:'Poppins-Medium',
    fontSize:14,
    color:'#000000',
    textAlign:'center'
  }
});
