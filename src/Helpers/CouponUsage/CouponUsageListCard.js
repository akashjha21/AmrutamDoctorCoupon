import { View, Text, StyleSheet } from 'react-native';

export const CouponUsageListCard = ({item, navigation}) => (
  <View style={styles.card}>
    <View style={{paddingHorizontal: 16, paddingVertical: 15}}>
      <View style={{paddingHorizontal: 4}}>
        <Text
          style={{
            fontFamily: 'Nunito-Bold',
            fontSize: 16,
            color: '#000000',
          }}>
          AMR{item.text}0%OFF
        </Text>
      </View>
      <View
        style={{
          marginTop: 5,
          marginBottom: 10,
          paddingHorizontal: 4,
        }}>
        <Text
          style={{
            fontFamily: 'Nunito-Medium',
            fontSize: 12,
            color: '#000000',
            alignItems: 'center',
          }}>
          Redemption of Coupon : 20
        </Text>
      </View>
      <View style={{marginTop: 15, width: '100%', borderWidth: 1, borderColor: '#ECECEC', height:32, borderRadius:8, display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
        <Text style={styles.text}>Offline - 0</Text>
        <Text style={styles.text}>Video Chat - 3</Text>
        <Text style={styles.text}>Chat - 4</Text>
      </View>
      <View style={{marginTop: 15, width: '100%', borderWidth: 1, borderColor: '#ECECEC', height:32, borderRadius:8, display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
        <Text style={styles.text}>Total used - 7</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    width: 330,
    height: 185, // Adjust the height as needed
    marginVertical: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderColor: '#E8E8E8',
    borderWidth: 1,
  },
  text:{
    fontFamily:'Nunito-Medium',
    fontSize:12,
    color:'#595959'
  },
});
