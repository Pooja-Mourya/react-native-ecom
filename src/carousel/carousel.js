import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'

const images = [
    require('../img/img1.jpg'),
    require('../img/img3.jpg'),
    require('../img/img3.jpg'),
    require('../img/img3.jpg'),
    require('../img/img3.jpg')
]

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const carousel = () => {

    const [imgActive, setImgActive] = useState();

    onchange = (nativeEvent) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
            if (slide != imgActive) {
                setImgActive(slide);
            }
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrap}>
                <ScrollView
                    onScroll={({ nativeEvent }) => onchange(nativeEvent)}
                    showsVerticalScrollIndicator={false}
                    horizontal
                    style={styles.wrap}
                // pagingEnable
                // scrollEnabled
                // snapToAlignment='center'
                // scrollEventThrottle={16}
                // showsHorizontalScrollIndicator={false}
                >
                    {
                        images.map((e, index) =>
                            <Image
                                key={e}
                                resizeMode='stretch'
                                style={styles.wrap}
                                source={e}
                            />
                        )
                    }
                </ScrollView>
                <View style={styles.wrapDot}>
                    {
                        images.map((e, index) =>
                            <Text
                                key={e}
                                style={imgActive == e ? styles.dotActive : styles.dot}
                            >
                                ●
                            </Text>
                        )
                    }
                </View>
            </View>
        </SafeAreaView>
    )
}

export default carousel

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    wrap: {
        width: WIDTH,
        height: HEIGHT * 0.60,
    },
    wrapDot: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center'
    },
    dotActive: {
        margin: 3,
        color: 'white'
    },
    dot: {
        margin: 3,
        color: '#888'
    },
})