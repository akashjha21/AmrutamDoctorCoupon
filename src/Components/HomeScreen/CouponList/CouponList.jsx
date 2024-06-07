import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { CouponListCard } from '../../../Helpers/HomeScreen/CouponList/CouponListCard';

const cards = Array.from({length: 16}, (_, index) => ({
  id: index + 1,
  text: `${index + 1}`,
}));

const CouponList = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 2;
  const totalCards = cards.length;
  const totalScreens = Math.ceil(totalCards / cardsPerPage);

  const handleNext = () => {
    if (currentIndex < totalCards - cardsPerPage) {
      setCurrentIndex(currentIndex + cardsPerPage);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - cardsPerPage);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.counterText}>{`${
          currentIndex / cardsPerPage + 1
        }- of ${totalScreens}`}</Text>
        <FlatList
          data={cards.slice(currentIndex, currentIndex + cardsPerPage)}
          renderItem={({item}) => (
            <CouponListCard item={item} navigation={navigation} />
          )}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
        />
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={handlePrevious}
            disabled={currentIndex === 0}>
            <Image
              source={require('../../../assets/Images/CouponListLeftButton.png')}
              style={{height: 29, width: 25, resizeMode: 'contain'}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleNext}
            disabled={currentIndex >= totalCards - cardsPerPage}>
            <Image
              source={require('../../../assets/Images/CouponListRightButton.png')}
              style={{height: 29, width: 25, resizeMode: 'contain'}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default CouponList;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  counterText: {
    fontSize: 24,
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    color: '#9C9C9C',
    marginTop: 15,
  },
  card: {
    width: 330,
    height: 185, // Adjust the height as needed
    marginVertical: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderColor: '#E8E8E8',
    borderWidth: 1,
  },
  cardText: {
    color: '#fff',
    fontSize: 18,
  },
  buttonsContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '30%',
    marginTop: 13,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    opacity: 0.8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
