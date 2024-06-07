import { StyleSheet, Text, Modal, Pressable, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import SelectNumberBoxList from '../../Helpers/HomeScreen/CouponRequestCard/SelectNumberBoxList'
import SelectAppoinmentTypeBoxList from '../../Helpers/HomeScreen/CouponRequestCard/SelectAppoinmentTypeBoxList'

const ModalContainer = ({visible, setVisible}) => {
    const [numberlistVisible, setNumberListVisible] = useState(false);
    const [typeListVisible, setTypeListVisible] = useState(false);
    const [number, setNumber] = useState('');
    const [appoinment, setAppoinment] = useState('');
    
  return (
    <Modal transparent={true} visible={visible}>
        <Pressable onPress={() => setVisible(false)} style={styles.modalMainContainer}>
          <Pressable onPress={() => setVisible(true)} style={styles.box}>
            <Text style={styles.headingText}>"Coupon Name"</Text>
            <Text style={styles.redeemText}>
              Please Select the Number of Coupon you want to Redeem "Max
              Redemption 10"
            </Text>


            <View style={styles.textAreaBox}>
          <View style={styles.visibilityBoxText}>
            <Text style={{color:'black', fontSize: 14, fontFamily:'Nunito-Medium'}}>{number}</Text>
          </View>
        
        <TouchableOpacity onPress={() => setNumberListVisible(!numberlistVisible)}
          style={{height: '100%', justifyContent: 'center', alignItems:'center'}}
          >
          <Image style={{height:8, width:12, resizeMode:'contain'}} source={require('../../assets/Images/ArrowDown.png')} />
        </TouchableOpacity>
        <Text style={styles.boxAbsText}>
        Select Number <Text style={{color: 'red'}}>* </Text>
        </Text>
      </View>

      <View style={styles.textAreaBox}>
          <View style={styles.visibilityBoxText}>
            <Text style={{color:'black', fontSize: 14, fontFamily:'Nunito-Medium'}}>{appoinment}</Text>
          </View>
        
        <TouchableOpacity onPress={() => setTypeListVisible(!typeListVisible)}
          style={{height: '100%', justifyContent: 'center', alignItems:'center'}}
          >
          <Image style={{height:8, width:12, resizeMode:'contain'}} source={require('../../assets/Images/ArrowDown.png')} />
        </TouchableOpacity>
        <Text style={styles.boxAbsText}>
        Select Appoinment Type <Text style={{color: 'red'}}>* </Text>
        </Text>
      </View>

            
      <View style={styles.nextButtonContainer}>
      <Text style={{fontFamily:'Nunito-Bold', fontSize:16, color:'#FFFFFF'}}>Next</Text>
    </View>
            <SelectNumberBoxList numberlistVisible={numberlistVisible} setNumberListVisible={setNumberListVisible} number={number} setNumber={setNumber} />
            <SelectAppoinmentTypeBoxList typeListVisible={typeListVisible} appoinment={appoinment} setAppoinment={setAppoinment} setTypeListVisible={setTypeListVisible} />
            
          </Pressable>
        </Pressable>
      </Modal>
  )
}

export default ModalContainer

const styles = StyleSheet.create({
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
      },
      textAreaBox: {
        height: 55,
        borderWidth: 1,
        borderColor: '#D6D6D6',
        borderRadius: 16,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 28,
        width:'90%'
      },
      visibilityBoxText: {
        height: '100%',
        width: '88%',
        justifyContent: 'center',
        paddingLeft: 18,
        fontFamily:'Nunito-Regular',
        
      },
      boxAbsText: {
        position: 'absolute',
        top: -12,
        left: 11,
        backgroundColor: 'white',
        paddingHorizontal: 5,
        color: '#000',
        fontFamily:'Nunito-Medium',
        fontSize: 12,
      },
      secondContainer: {
        marginTop: 10,
      },
    
      private: {
        width: '100%',
        height: 57,
        borderColor: '#D6D6D6',
        borderWidth: 1,
        borderTopEndRadius: 17,
        borderTopLeftRadius: 17,
        
      },
      public: {
        width: '100%',
        height: 57,
        borderColor: '#D6D6D6',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderBottomEndRadius: 17,
        borderBottomLeftRadius: 17,
      },
      visibilityMainText: {
        color: '#000',
        fontSize: 14,
        fontFamily:'Nunito-Medium',
      },
      visibilityDescription: {
        fontSize: 10,
        marginTop: 4,
        color: '#B6B6B6',
        fontFamily:'Nunito-Medium',
      },
      publicPrivateContainer: {
        marginHorizontal: 23,
        height: '100%',
        justifyContent: 'center',
      },
      nextButtonContainer:{
        width:'90%',
        height:46,
        backgroundColor:'#3A643B',
        borderRadius:12,
        marginTop:20,
        alignItems:'center',
        justifyContent: 'center',

    },
})