import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as Animatable from 'react-native-animatable';
import {Colors} from '../../assets/Assets';
import {Card, AirbnbRating, Button} from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';

const NatBanking = ({couponPop, setCouponPop}) => {
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <AntDesign
          name="close"
          size={25}
          color={'red'}
          onPress={() => setCouponPop(!couponPop)}
        />
        <Animatable.Text
          animation="pulse"
          easing="ease-out"
          iterationCount="infinite"
          style={{textAlign: 'center', marginLeft: 60}}
        >
          <Text
            style={{
              color: 'green',
              fontSize: 25,
            }}
          >
            Apply Coupon ✔️
          </Text>
        </Animatable.Text>
      </View>
      <Card>
        <Image
          style={{
            width: 200,
            height: 100,
            resizeMode: 'cover',
            alignSelf: 'center',
          }}
          source={{
            uri:
              'https://t4.ftcdn.net/jpg/03/29/40/41/360_F_329404111_usfIQTAJBwiDEIdKek1OFHF7JWIvhgcS.jpg',
          }}
        />
        <Card.Title>Get Your Reward</Card.Title>
        <AirbnbRating
          count={11}
          reviewColor={'indigo'}
          ratingContainerStyle={{}}
          reviews={[
            '₹ 50',
            '₹ 100',
            '₹ 150',
            '₹ 200',
            '₹ 250',
            '₹ 300',
            '₹ 350',
            '₹ 400',
            '₹ 450',
            '₹ 500',
            '₹ 500',
          ]}
          defaultRating={10}
          size={20}
          selectedColor={'tomato'}
        />
        <Button
          ViewComponent={LinearGradient}
          linearGradientProps={{
            colors: ['#FF9800', '#F44336'],
            start: {x: 0, y: 0.5},
            end: {x: 1, y: 0.5},
          }}
          style={{marginTop: 20}}
          onPress={() => setCouponPop(false)}
        >
          Click Button
        </Button>
      </Card>
    </View>
  );
};

export default NatBanking;

const styles = StyleSheet.create({});
