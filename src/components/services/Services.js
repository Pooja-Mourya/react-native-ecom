import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState, useCallback, useRef} from 'react';
import axios from 'axios';
import Colors from '../../assets/Colors';
import {FAB} from 'react-native-paper';

const Services = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [load, setLoad] = useState(false);
  const [isRefresh, setIsRefresh] = useState(false);
  const [contentVerticalOffset, setContentVerticalOffset] = useState(0);
  const CONTENT_OFFSET_THRESHOLD = 300;

  const getData = useCallback(async () => {
    setLoad(true);
    await fetch('https://rickandmortyapi.com/api/character?page=' + 1)
      .then(response => response.json())
      .then(resp => {
        setData(resp.results);
        setPage(page + 1);
        setLoad(false);
      })
      .catch(e => {
        console.log('error', e);
        setLoad(false);
      });
  }, []);

  useEffect(() => {
    (async () => {
      getData();
    })();
  }, [page]);

  const listRef = useRef(null);

  return (
    <SafeAreaView>
      <View style={styles.root}>
        <Text style={styles.heading}>Characters</Text>
        <FlatList
          ref={listRef}
          onScroll={event => {
            setContentVerticalOffset(event.nativeEvent.contentOffset.y);
          }}
          style={{marginBottom: 130}}
          onEndReached={getData}
          data={data}
          onEndReachedThreshold={1}
          renderItem={({item}) => {
            return (
              <View style={{justifyContent: 'center'}}>
                <Image
                  source={{uri: item.image}}
                  style={{width: 180, height: 230}}
                />
                <Text>{item.name}</Text>
              </View>
            );
          }}
          keyExtractor={(item, idx) => `${item.name}_${idx}`}
          refreshControl={
            <RefreshControl refreshing={isRefresh} onRefresh={getData} />
          }
          ListFooterComponent={
            <View>
              {isRefresh ? <ActivityIndicator color={'white'} /> : null}
            </View>
          }
        />
      </View>
      {contentVerticalOffset > CONTENT_OFFSET_THRESHOLD && (
        <FAB
          icon="arrow-up-thin"
          style={styles.fab}
          onPress={() => {
            listRef.current.scrollToOffset({offset: 0, animated: true});
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default Services;

const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.primary,
  },
  heading: {
    fontSize: 30,
    color: Colors.lightPrimary,
    fontWeight: '400',
    marginHorizontal: 10,
    marginVertical: 10,
  },

  fab: {
    position: 'absolute',
    margin: 15,
    right: 0,
    bottom: 50,
    borderRadius: 50,
  },
});
