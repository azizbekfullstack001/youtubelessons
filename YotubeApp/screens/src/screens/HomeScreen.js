import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {colors} from '../constants/theme';
import MainHeader from '../components/MainHeader';
import ScreenHeader from '../components/ScreenHeader';
import TopPlacesCarousel from '../components/TopPlacesCarousel';
import {PLACES, TOP_PLACES} from '../data';
import SectionHeader from '../components/SectionHeader';
import TripsList from '../components/TripsList';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <MainHeader title="DevDive with AZIZBEK" />
      <ScreenHeader mainTitle="Free courses" secondTitle="Frontend" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopPlacesCarousel list={TOP_PLACES} />
        <SectionHeader
          title="Popular courses"
          buttonTitle="See All"
          onPress={() => {}}
        />
        <TripsList list={PLACES} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
});

export default HomeScreen;
