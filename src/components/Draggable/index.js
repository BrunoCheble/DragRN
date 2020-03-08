//import liraries
import React from 'react';
import { Image, StyleSheet, PanResponder, Animated, Dimensions } from 'react-native';
// create a component

const styles = StyleSheet.create({
    logo: {
      height: Dimensions.get('window').height * 0.06,
      marginVertical: Dimensions.get('window').height * 0.06,
      width: Dimensions.get('window').height * 0.06 * (1950 / 662),
    },
});

const Draggable = ({url}) => {
    
    const mainPosition = new Animated.ValueXY();

    const mainPanResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([
            null, { dx: mainPosition.x, dy: mainPosition.y }
        ]),
        onPanResponderGrant: (event, gesture) => {
            mainPosition.setOffset({
                x: mainPosition.x._value,
                y: mainPosition.y._value
            });
        },
        onPanResponderRelease: (e, gesture) => {
            mainPosition.flattenOffset();
        }
    });

    
    return (<Animated.View
        {...mainPanResponder.panHandlers}
        style={{ ...styles.ball, ...mainPosition.getLayout() }}>
            
        <Image
            source={{
                uri: url,
            }}
            style={styles.logo}
            resizeMode="contain"
        />
    </Animated.View>);
}

export default Draggable;