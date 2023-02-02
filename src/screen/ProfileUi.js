import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Colors, fonts} from '../assets/Assets';
import DocumentPicker from 'react-native-document-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';

const ProfileUi = ({navigation}) => {
  const [avatar, setAvatar] = useState('');
  const [avatar1, setAvatar1] = useState('');
  const [getData, setGetData] = useState([]);

  //   const user = useSelector(e => e?.loginAuth?.loginUser?.payload?.data?.email);

  //   console.log('user', user);
  //   console.log('user', user);
  const selectImage = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: DocumentPicker.types.images,
      });
      //   console.log('res : ' + JSON.stringify(res));
      setAvatar(res);
      //   let myObject = {...avatar};
      let myOBJ = Object.assign({}, avatar.shift());

      setAvatar1(myOBJ);
      //   for (let i = 0; i = avatar.length; i++) {
      //     myObject[i] = avatar[i];
      //   }
      console.log('myOBJ', avatar1);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        alert('Canceled from single doc picker');
      } else {
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.mainContainer}>
        <Text
          onPress={() => navigation.navigate('FilterFunction')}
          //   onPress={() => navigation.navigate('Users', getData)}

          style={styles.EditUserProfile}
        >
          <AntDesign name="edit" color="white" size={30} />
        </Text>
      </View>
      <View style={styles.userContainer}>
        <View style={styles.userText}>
          {!avatar ? (
            <Text style={{marginLeft: 18, marginTop: -5}}>
              {' '}
              <FontAwesome name="user" size={152} color={'yellow'} />{' '}
            </Text>
          ) : (
            <Image style={styles.userImage} source={{uri: avatar1.uri}} />
          )}
        </View>
        <Text style={{marginTop: 105, marginRight: 90}}>
          <FontAwesome
            name="camera-retro"
            size={45}
            // color={'grey'}
            onPress={() => selectImage()}
          />
        </Text>

        <View>
          <Text style={styles.peter}>{getData.userName}</Text>
        </View>
      </View>

      <View style={{flex: 2.5}}>
        <View style={styles.userAboutContainer}>
          <Text style={styles.userAbout}>{getData.designation}</Text>
          <Text style={{fontFamily: fonts.regular}}>
            About Profile
            {/* ({getData.userType.label}) */}
          </Text>
        </View>
        <Entypo />
        {/* <View>
            <TouchableOpacity style={{backgroundColor: 'deeppink'}}>
              <Text style={{fontSize: 16}} onPress={() => uploadImageToServer()}>
                upload image to server
              </Text>
            </TouchableOpacity>
          </View> */}

        <View style={{paddingHorizontal: 20}}>
          <Text style={{fontWeight: '700', fontSize: 16, color: 'deeppink'}}>
            User: Alex
          </Text>
          <View style={{marginTop: 35}}>
            <Text style={styles.experience}>PRODUCT CATEGORY</Text>
          </View>
          <View style={styles.roTextStyle}>
            <View>
              <MaterialIcons
                name="control-point"
                color={Colors.black}
                size={20}
              />
            </View>
            <Text> </Text>
            <View>
              <Text style={styles.userAbout}>{getData.productCategory}</Text>
              <Text>First Product Category</Text>
            </View>
          </View>
          <View style={styles.roTextStyle}>
            <View>
              <MaterialIcons
                name="control-point"
                color={Colors.black}
                size={20}
              />
            </View>
            <Text> </Text>
            <View>
              <Text style={styles.userAbout}>{getData.productCategory}</Text>
              <Text>Second product category</Text>
            </View>
          </View>
          <View style={styles.roTextStyle}>
            <View>
              <MaterialIcons
                name="control-point"
                color={Colors.black}
                size={20}
              />
            </View>
            <Text> </Text>
            <View>
              <Text style={styles.userAbout}>{getData.productCategory}</Text>
              <Text>Third product category</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileUi;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'teal',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 30,
    position: 'absolute',
    marginTop: 100,
    marginLeft: 10,
  },
  userText: {
    borderWidth: 5,
    borderColor: Colors.white,
    borderRadius: 100,
    backgroundColor: 'tomato',
    width: 160,
    textAlign: 'center',
  },
  peter: {
    color: Colors.white,
    marginLeft: 135,
    marginTop: 50,
    fontFamily: fonts.boldItalic,
    fontSize: 16,
    textTransform: 'capitalize',
  },
  userAboutContainer: {
    marginTop: 10,
    alignItems: 'flex-end',
    marginHorizontal: 20,
  },
  userAbout: {
    fontFamily: fonts.bold,
    color: Colors.lightBlack,
    fontWeight: '900',
    fontSize: 18,
    textTransform: 'capitalize',
  },
  roTextStyle: {flexDirection: 'row', paddingVertical: 20},
  experience: {
    fontFamily: fonts.mediumItalic,
    color: Colors.darkPrimary,
    fontWeight: '600',
    fontSize: 16,
  },
  userImage: {
    width: 130,
    height: 130,
    borderRadius: 100,
    borderWidth: 2,
    position: 'absolute',
    alignSelf: 'center',
    marginTop: 5,
  },
  EditUserProfile: {
    marginLeft: 290,
    backgroundColor: Colors.shadowColorAndroidDefault,
    height: 50,
    padding: 10,
    borderRadius: 50,
    elevation: 0.8,
  },
});
