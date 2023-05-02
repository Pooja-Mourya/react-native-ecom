import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native';
import Banner from './Banner';
import Tour from './Tour';
import Header from '../Layout/Header';
import Offer from './Offer';
import Visit from './Visit';
import Additional from './Additional';
import Subscription from './Subscription';

const Home = () => {
  return (
    <>
      <Header />
      <ScrollView>
        <Banner />
        <Tour />
        {/* <Offer />
        <Visit />
        <Additional />
        <Subscription /> */}
      </ScrollView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
