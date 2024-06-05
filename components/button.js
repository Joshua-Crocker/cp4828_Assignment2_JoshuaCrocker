import React from 'react';
import { StyleSheet, View, Pressable, Text, Image } from 'react-native';

export default function Button({ imageSource, onPress }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
        <Image source={imageSource} style={styles.buttonIcon} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    backgroundColor: "#444",
  },
  button: {
    borderRadius: 40,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
});