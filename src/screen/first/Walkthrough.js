import {
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import walkThrough from './Photo';
import Walkthrough1 from './Walkthough1';
import {ScrollView} from 'react-native';
// import Walkthrough2 from './Walkthough2';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const Walkthrough = ({navigation}) => {
  //   useState for Walkthrough2

  //   const [walk2Animated, setWalk2Animated] = useState(false);

  //   const viewAnimatedChange = React.useRef(({viewableItems, changed}) => {
  //     if (viewableItems[0].index == 1) {
  //       setWalk2Animated(true);
  //     }
  //   });
  const Dots = () => {
    const dotPosition = Animated.divide(scrollX, 250);
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {walkThrough.walkThrough.map((item, index) => {
          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: ['teal', 'cyan', 'teal'],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={index}
              style={{
                borderRadius: 5,
                marginHorizontal: 6,
                width: 10,
                height: 10,
                backgroundColor: dotColor,
              }}
            />
          );
        })}
      </View>
    );
  };
  function renderFooter() {
    return (
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: height * 0.2,
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          paddingVertical: 20,
        }}
      >
        <Dots />
        <View
          style={{
            justifyContent: 'space-between',

            flexDirection: 'row',
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              width: width / 2.5,
              borderRadius: 5,
              padding: 10,
            }}
            onPress={() => navigation.navigate('NotificationApp')}
          >
            <Text
              style={{
                color: 'teal',
                fontSize: 16,
                fontWeight: '700',
                textAlign: 'center',
              }}
            >
              Join now
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'teal',
              width: width / 2.5,
              //   marginHorizontal: 101,
              borderRadius: 5,
              padding: 10,
            }}
          >
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                fontWeight: '700',
                textAlign: 'center',
              }}
            >
              Log in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <>
      <Animated.FlatList
        style={{flex: 1}}
        data={walkThrough.walkThrough}
        keyExtractor={item => item.id}
        horizontal
        snapToInterval={250}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        // onViewableItemsChanged={viewAnimatedChange.current}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        renderItem={({item, index}) => {
          //   console.log('index', index);
          return (
            <View
              style={{
                flex: 1,
                width: width,
                justifyContent: 'space-between',
                height: height,
                backgroundColor: 'white',
              }}
            >
              {/* image section  */}
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  width: width,
                  height: 300,
                  alignItems: 'center',
                  zIndex: 2,
                }}
              >
                {index == 0 && <Walkthrough1 />}
                {/* {index == 1 && <Walkthrough2 animate={walk2Animated} />} */}
              </View>

              {/* title & description  */}
              <View
                style={{
                  flex: 1,
                  justifyContent: 'flex-start',
                  alignContent: 'center',
                  height: height * 0.35,
                  width: width,
                }}
              >
                <Text
                  style={{color: 'black', textAlign: 'center', fontSize: 16}}
                >
                  {item.title}
                </Text>
                <Text style={{textAlign: 'center', fontWeight: '700', top: 20}}>
                  {item.sub_title}
                </Text>
              </View>
            </View>
          );
        }}
      />
      {renderFooter()}
    </>
  );
};

export default Walkthrough;

const styles = StyleSheet.create({});
