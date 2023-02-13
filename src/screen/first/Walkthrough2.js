import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {useDynamicAnimation, MotiImage} from 'moti';

const Walkthrough2 = () => {
  //   const motiImage1 = (useDynamicAnimation = () => ({
  //     top: '30%',
  //     left: '25%',
  //   }));
  //   const motiImage2 = (useDynamicAnimation = () => ({
  //     top: '40%',
  //     left: '35%',
  //   }));
  //   const motiImage3 = (useDynamicAnimation = () => ({
  //     top: '50%',
  //     left: '45%',
  //   }));
  //   const motiImage4 = (useDynamicAnimation = () => ({
  //     top: '60%',
  //     left: '50%',
  //   }));
  //   const motiImage5 = (useDynamicAnimation = () => ({
  //     top: '27%',
  //     left: '40%',
  //   }));
  return (
    <View style={{flex: 1, overflow: 'hidden'}}>
      <Image
        style={{
          top: 35,
          left: 35,
          width: 160,
          height: 161,
          zIndex: 1,
          flex: 1,
        }}
        // source={{
        //   uri:
        //     'https://png.pngtree.com/element_origin_min_pic/16/07/06/23577d1d403788d.jpg',
        // }}
        source={require('../../assets/images/walkthrough/walkthrough_02_01.png')}
      />
    </View>
  );
};

export default Walkthrough2;

const styles = StyleSheet.create({});
