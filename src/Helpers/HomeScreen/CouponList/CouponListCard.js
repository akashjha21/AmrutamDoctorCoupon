import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export const CouponListCard = ({item, navigation}) => (
  <View style={styles.card}>
    <View style={{paddingHorizontal: 20, paddingVertical: 15}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontFamily: 'Nunito-Bold',
            fontSize: 16,
            color: '#000000',
          }}>
          AMR{item.text}0%OFF
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('CouponUsage')}>
          <Image
            style={{width: 24, height: 23}}
            source={require('../../../assets/Images/RightArrowButton.png')}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 15,
          marginBottom: 10,
        }}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Text
            style={{
              fontFamily: 'Nunito-Medium',
              fontSize: 12,
              color: '#000000',
            }}>
            Status :{' '}
          </Text>
          <Text
            style={{
              fontFamily: 'Nunito-Medium',
              fontSize: 12,
              color: '#3A643B',
            }}>
            Active
          </Text>
        </View>
        <Text
          style={{
            fontFamily: 'Nunito-Medium',
            fontSize: 12,
            color: '#000000',
          }}>
          Max Redemption: 4
        </Text>
      </View>

      <View
        style={{
          width: '100%',
          backgroundColor: '#2E37A407',
          borderRadius: 8,
          height: 35,
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'row',
          marginTop: 8,
        }}>
        <Image
          style={{width: 18, height: 18, marginRight: 10}}
          source={require('../../../assets/Images/Calendar.png')}
        />
        <Text
          style={{fontFamily: 'Nunito-Medium', fontSize: 13, color: '#595959'}}>
          Valid from 19th Oct, 2024
        </Text>
      </View>

      <View
        style={{
          width: '100%',
          backgroundColor: '#2E37A407',
          borderRadius: 8,
          height: 35,
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'row',
          marginTop: 8,
        }}>
        <Image
          style={{width: 18, height: 18, marginRight: 10}}
          source={require('../../../assets/Images/Calendar.png')}
        />
        <Text
          style={{fontFamily: 'Nunito-Medium', fontSize: 13, color: '#595959'}}>
          Valid till 24th Nov, 2024
        </Text>
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
});
