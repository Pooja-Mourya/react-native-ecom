import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  FlatList,
  SafeAreaView,
  StatusBar,
  TextInput,
  Image,
  ScrollView,
  RefreshControl,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {Colors, fonts} from '../assets/Assets';
import Header from '../components/Layout/Header';
import PrimeUser from './PrimeUser';

const width = Dimensions.get('window').width;

const DATA = [
  {
    title: 'Steve Jobs',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/41dKkez-1rL._SX326_BO1,204,203,200_.jpg',
    author: 'Walter Isaacson',
    url: 'https://www.amazon.com/Steve-Jobs-Walter-Isaacson/dp/1451648537',
  },
  {
    title: 'Zero to One',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/4137OkbPQ4L._SX331_BO1,204,203,200_.jpg',
    author: 'Peter Thiel, Blake Masters',
    url: 'https://www.amazon.com/Zero-One-Notes-Startups-Future/dp/0804139296',
  },
  {
    title: 'The Pragmatic Programmer',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/51cUVaBWZzL._SX380_BO1,204,203,200_.jpg',
    author: 'David Thomas, Andrew Hunt',
    url:
      'https://www.amazon.com/Pragmatic-Programmer-journey-mastery-Anniversary/dp/0135957052',
  },
  {
    title: 'The Unicorn Project',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/51A4T36jisL._SX334_BO1,204,203,200_.jpg',
    author: 'Gene Kim',
    url:
      'https://www.amazon.com/Unicorn-Project-Developers-Disruption-Thriving/dp/1942788762',
  },
  {
    title: 'The Passionate Programmer',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/51m3yzmDFCL._SX331_BO1,204,203,200_.jpg',
    author: 'Chad Fowler',
    url:
      'https://www.amazon.com/Passionate-Programmer-Remarkable-Development-Pragmatic-ebook/dp/B00AYQNR5U',
  },
  {
    title: 'Hatching Twitter',
    image: 'https://m.media-amazon.com/images/I/51YUkI5ZQ-L.jpg',
    author: 'Nick Bilton',
    url:
      'https://www.amazon.com/Hatching-Twitter-Story-Friendship-Betrayal-ebook/dp/B00CDUVSQ0',
  },
  {
    title: 'Hatching Twitter',
    image: 'https://m.media-amazon.com/images/I/51YUkI5ZQ-L.jpg',
    author: 'Ashlee Vance',
    url:
      'https://www.amazon.com/Hatching-Twitter-Story-Friendship-Betrayal-ebook/dp/B00CDUVSQ0',
  },
  {
    title: 'How Google Works',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/31Xc+yFta0L._SX327_BO1,204,203,200_.jpg',
    author: 'Eric Schmidt, Jonathan Rosenberg',
    url: 'https://www.amazon.com/How-Google-Works-Eric-Schmidt/dp/1455582328',
  },
  {
    title: 'Elon Musk',
    image: 'https://m.media-amazon.com/images/I/51tw6UjHpDL.jpg',
    author: 'Ashlee Vance',
    url:
      'https://www.amazon.com/Elon-Musk-SpaceX-Fantastic-Future-ebook/dp/B00KVI76ZS',
  },
  {
    title: 'Six Easy Pieces',
    image: 'https://m.media-amazon.com/images/I/51E53HCUKVL.jpg',
    author: 'Richard P. Feynman',
    url:
      'https://www.amazon.com/Six-Easy-Pieces-Essentials-Explained-ebook/dp/B004OVEYNU',
  },
  {
    title: 'Sapiens',
    image: 'https://m.media-amazon.com/images/I/51Sn8PEXwcL.jpg',
    author: 'Yuval Noah Harari',
    url:
      'https://www.amazon.com/Sapiens-Humankind-Yuval-Noah-Harari-ebook/dp/B00ICN066A',
  },
  {
    title: 'Sapiens',
    image: 'https://m.media-amazon.com/images/I/51Sn8PEXwcL.jpg',
    author: 'Ashlee Vance',
    url:
      'https://www.amazon.com/Sapiens-Humankind-Yuval-Noah-Harari-ebook/dp/B00ICN066A',
  },
];

console.log('d', DATA.title);
const WelcomeScreen = ({navigation}) => {
  const [search, setSearch] = useState('Ashlee Vance');
  const [refresh, setRefesh] = useState(false);
  const obj = Object.assign({}, DATA.shift());

  const pullMe = () => {
    setRefesh(true);
    setTimeout(() => {
      setRefesh(false);
    }, 15000);
  };
  return (
    <View>
      {/* <PrimeUser /> */}
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl refreshing={refresh} onRefesh={() => pullMe()} />
        }
      >
        <FlatList
          data={DATA.filter(aim =>
            aim?.author?.toLowerCase().includes(search.toLowerCase()),
          )}
          keyExtractor={item => item.id}
          horizontal={true}
          refreshing={true}
          renderItem={({item}, index) => {
            return (
              <View
                key={index}
                style={{
                  flex: 1,
                  alignItems: 'center',
                  marginHorizontal: 20,
                  width: '100%',
                  //   borderWidth: 2,
                  borderRadius: 10,
                  //   height: 600,
                }}
              >
                <Image
                  style={{width: 300, height: 400, borderRadius: 10}}
                  source={{uri: item.image}}
                />
                <Text>{item.title}</Text>
                <Text>{item.author}</Text>
              </View>
            );
          }}
        />
      </ScrollView>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  menuIconStyle: {
    backgroundColor: '#e5e5e5',
    borderRadius: 10,
    padding: 3,
  },
  headerContainer: {
    width: width,
    height: width / 4 - 35,
    backgroundColor: 'white',
    elevation: 12,
    padding: 10,
  },
  headerFlex: {
    flexDirection: 'row-reverse',
  },
  container: {
    // flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    marginBottom: 200,
  },
});
