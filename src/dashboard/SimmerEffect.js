import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);
const SimmerEffect = () => {
  return (
    <ScrollView>
      <View style={{flexDirection: 'row'}}>
        <View style={{margin: 20}}>
          <ShimmerPlaceholder
            style={{
              marginVertical: 10,
              height: 180,
              width: 150,
              borderRadius: 15,
            }}
          />
          <ShimmerPlaceholder
            style={{marginVertical: 5, height: 20, width: 150}}
          />
          <ShimmerPlaceholder
            style={{marginVertical: 0, height: 20, width: 150}}
          />
        </View>
        <View style={{margin: 20}}>
          <ShimmerPlaceholder
            style={{
              marginVertical: 10,
              height: 180,
              width: 150,
              borderRadius: 15,
            }}
          />
          <ShimmerPlaceholder
            style={{marginVertical: 5, height: 20, width: 150}}
          />
          <ShimmerPlaceholder
            style={{marginVertical: 0, height: 20, width: 150}}
          />
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{margin: 20}}>
          <ShimmerPlaceholder
            style={{
              marginVertical: 10,
              height: 180,
              width: 150,
              borderRadius: 15,
            }}
          />
          <ShimmerPlaceholder
            style={{marginVertical: 5, height: 20, width: 150}}
          />
          <ShimmerPlaceholder
            style={{marginVertical: 0, height: 20, width: 150}}
          />
        </View>
        <View style={{margin: 20}}>
          <ShimmerPlaceholder
            style={{
              marginVertical: 10,
              height: 180,
              width: 150,
              borderRadius: 15,
            }}
          />
          <ShimmerPlaceholder
            style={{marginVertical: 5, height: 20, width: 150}}
          />
          <ShimmerPlaceholder
            style={{marginVertical: 0, height: 20, width: 150}}
          />
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{margin: 20}}>
          <ShimmerPlaceholder
            style={{
              marginVertical: 10,
              height: 180,
              width: 150,
              borderRadius: 15,
            }}
          />
          <ShimmerPlaceholder
            style={{marginVertical: 5, height: 20, width: 150}}
          />
          <ShimmerPlaceholder
            style={{marginVertical: 0, height: 20, width: 150}}
          />
        </View>
        <View style={{margin: 20}}>
          <ShimmerPlaceholder
            style={{
              marginVertical: 10,
              height: 180,
              width: 150,
              borderRadius: 15,
            }}
          />
          <ShimmerPlaceholder
            style={{marginVertical: 5, height: 20, width: 150}}
          />
          <ShimmerPlaceholder
            style={{marginVertical: 0, height: 20, width: 150}}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SimmerEffect;

const styles = StyleSheet.create({});
