import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import Octicons from 'react-native-vector-icons/dist/Octicons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Feather from 'react-native-vector-icons/dist/Feather';
import LinearGradient from 'react-native-linear-gradient';


const Forgot = ({ navigation }) => {
    const [newPassword, setNewPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [passwordVisibility, setPasswordVisibility] = useState(true);

    const handlePasswordVisibility = () => {
        setPasswordVisibility(!passwordVisibility);
    };


    const submit = ({ navigation }) => {
        if (lastName && password) {
            Alert.alert('Login success fully')
        }
    }


    return (
        <>
            <Image source={require('../assets/img/Group21.png')} />
            <Image
                style={styles.nrtLogo}
                source={require('../assets/img/logo.png')}
            />
            <View>
                <View style={styles.container}>
                    <View>
                        <View>
                            <View style={styles.inputStyle}>
                                <TextInput
                                    value={newPassword}
                                    placeholder='New Password'
                                    onChangeText={(e) => setNewPassword(e)}
                                    mode='outline'
                                    passwordVisibility
                                    rightIcon
                                    handlePasswordVisibility
                                />
                            </View>
                            <Text style={styles.circle}></Text>
                            <ImageBackground>
                                <Text style={{
                                    position: 'absolute',
                                    left: 38,
                                    top: 70,
                                    zIndex: 2
                                }}>
                                    <MaterialIcons name="card-travel" size={30} color="#FFFFFF" />
                                </Text>
                            </ImageBackground>
                            <Feather onPress={handlePasswordVisibility} style={styles.eyeIcon} name={passwordVisibility ? 'eye-off' : 'eye'} size={30} color="#696767" />
                        </View>
                        <View>
                            <View style={styles.inputStyle}>
                                <TextInput
                                    value={confirmPassword}
                                    placeholder='Confirm Password'
                                    secureTextEntry={true}
                                    onChangeText={(e) => setConfirmPassword(e)}
                                    mode='outline'
                                    passwordVisibility
                                    rightIcon
                                    handlePasswordVisibility
                                />
                            </View>
                            <Text style={styles.circle}></Text>
                            <ImageBackground>
                                <Text style={{
                                    position: 'absolute',
                                    left: 38,
                                    top: 70,
                                    zIndex: 2
                                }}>
                                    <MaterialIcons name="card-travel" size={30} color="#FFFFFF" />
                                </Text>
                            </ImageBackground>
                            <Feather style={styles.eyeIcon} name="eye-off" size={30} color="#696767" />
                        </View>
                    </View>

                    <LinearGradient colors={['#FFAD33', '#FF9B36']} style={styles.button} >
                        <TouchableOpacity onPress={submit} >
                            <Text onPress={() => { navigation.navigate('Login') }} style={styles.LoginButton}>Submit</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </View>

        </>
    )
}

export default Forgot

const styles = StyleSheet.create({


    nrtLogo: {
        position: 'absolute',
        width: 220,
        height: 89,
        left: 97,
        top: 243,
    },
    container: {
        alignItem: 'center',
        fontFamily: 'Poppins-Black',
    },
    inputStyle: {
        width: 360,
        height: 51,
        left: 27,
        top: 120,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#696767',
        borderRadius: 50,
        marginVertical: 10,
        paddingHorizontal: 70,
        zIndex: 2,
    },

    button: {
        position: 'absolute',
        width: 360,
        height: 51,
        left: 27,
        top: 280,
        borderRadius: 50,
        backgroundColor: '#FFAD33'
    },
    circle: {
        borderBottomRightRadius: 900,
        borderTopRightRadius: 900,
        borderTopLeftRadius: 900,
        transform: [{ rotate: '-135deg' }],
        position: 'absolute',
        width: 51,
        height: 51,
        left: 27,
        top: 130,
        zIndex: 2,
        backgroundColor: '#696767'
    },
    spaceBetween: {
        flexDirection: 'row',
        marginTop: 125,
        justifyContent: 'space-between'
    },
    LoginButton: {
        textAlign: 'center',
        fontSize: 18,
        padding: 10,
        color: 'white',
    },
    icons: {
        transform: [{ rotate: '-55deg' }],
        transform: [{ translateX: -50 }],
        width: 500,
        height: 500,
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        padding: 15,
    },
    eyeIcon: {
        position: 'absolute',
        left: 330,
        top: 140,
        flex: 1,
        zIndex: 2
    }

})

