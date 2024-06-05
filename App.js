import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import League from './components/league';
import Button from './components/button';
import sportsLeaguesData from './assets/sports.json';

const nhlImage = require('./assets/NHL_Logo.jpg');
const nflImage = require('./assets/NFL_Logo.jpg');
const mlbImage = require('./assets/MLB_Logo.jpg');

export default function App() {
  const [leagueIndex, setLeagueIndex] = useState(0);

  const handleLeaguePress = () => {
    setLeagueIndex((prevIndex) => (prevIndex + 1) % sportsLeagues.length);
  };

  const sportsLeagues = sportsLeaguesData.sportsLeagues;

  const imageList = [nhlImage, mlbImage, nflImage];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Top 3 Sport's Leagues</Text>
      <League leagues={sportsLeagues} imageList={imageList} leagueIndex={leagueIndex} />
      <Button label="Press" onPress={handleLeaguePress} />
      <Button label="Press" onPress={handleLeaguePress} />
      <Button label="Press" onPress={handleLeaguePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  text: {
    fontSize: 20,
    marginTop: 100,
  },
});
