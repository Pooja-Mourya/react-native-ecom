import React, {useState, useRef} from 'react';
import {View, Image, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Photo, {secondRowPhoto, firstRowPhoto} from './Photo';
const item_width = 120;

function Walkthrough1() {
  const [firstRow, setFirstRow] = useState({
    ...Photo.firstRowPhoto,
    ...Photo.firstRowPhoto,
  });
  const [currentRow1, setCurrentRow1] = useState('0');
  const [secondRow, setSecondRow] = useState({
    ...Photo.secondRowPhoto,
    ...Photo.secondRowPhoto,
  });
  const [currentRow2, setCurrentRow2] = useState('0');

  //ref

  const row1FlatListRef = React.useRef();
  const row2FlatListRef = React.useRef();

  React.useEffect(() => {
    let positionTimer;

    const timer = () => {
      positionTimer = setTimeout(() => {
        //increment scroll position

        //slider 1
        setCurrentRow1(prePosition => {
          const position = Number(prePosition) + 1;
          row1FlatListRef?.current?.scrollToOffset({
            offset: position,
            animated: false,
          });

          const maxOffset = firstRowPhoto.length * item_width;

          if (prePosition > maxOffset) {
            const offset = prePosition - maxOffset;

            row1FlatListRef?.current?.scrollToOffset({
              offset,
              animated: false,
            });
            return offset;
          } else {
            return position;
          }
        });
        //slider 2
        timer();
      }, 32);
    };
  });

  //   console.log('Data', ...Photo.firstRowPhoto, ...Photo.firstRowPhoto);

  return (
    <View style={{}}>
      <FlatList
        scrollEnabled={true}
        style={{width: '100%', height: '100%'}}
        ref={row1FlatListRef}
        decelerationRate="fast"
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        listKey={'Slider1'}
        keyExtractor={(_, index) => `Slider_${index}`}
        data={Object.assign([], firstRow)}
        renderItem={({item, index}) => {
          // console.log('item', item);
          return (
            <View
              style={{
                width: item_width,
                alignContent: 'center',
                alignItems: 'center',
                borderRadius: 8,
                top: 50,
              }}
            >
              <Image
                style={{width: 110, height: 110, borderRadius: 10}}
                // source={{uri: item?.url}}
                source={item}
              />
            </View>
          );
        }}
      />
      <FlatList
        scrollEnabled={true}
        style={{width: '100%', height: '100%'}}
        ref={row2FlatListRef}
        decelerationRate="fast"
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        listKey={'Slider1'}
        keyExtractor={(_, index) => `Slider_${index}`}
        data={Object.assign([], secondRow)}
        renderItem={({item, index}) => {
          // console.log('item', item);
          return (
            <View
              style={{
                width: item_width,
                alignContent: 'center',
                alignItems: 'center',
                borderRadius: 8,
                top: 20,
              }}
            >
              <Image
                style={{width: 110, height: 110, borderRadius: 10}}
                // source={{uri: item?.url}}
                source={item}
              />
            </View>
          );
        }}
      />
    </View>
  );
}

export default Walkthrough1;
