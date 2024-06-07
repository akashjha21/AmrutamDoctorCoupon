import { StyleSheet, View } from 'react-native'
import React from 'react'
import Navbar from '../Components/CouponUsage/Navbar'
import SearchBar from '../Components/HomeScreen/SearchBar'
import CouponUsageList from '../Components/CouponUsage/CouponUsageList'

const CouponUsage = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <Navbar navigation={navigation} />
      <SearchBar/>
      <CouponUsageList />
    </View>
  )
}

export default CouponUsage

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        backgroundColor: 'white',
    }
})