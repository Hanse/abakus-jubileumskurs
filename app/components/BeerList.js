import React from 'react'
import { StyleSheet, View } from 'react-native';

import Button from '../elements/Button';
import Card from '../elements/Card';
import List from '../elements/List';
import Icon from '../elements/Icon';
import Image from '../elements/Image';

export const BeerList = ({beerList, navigateToNewForm, navigateToBrew}) => (
  <View style={styles.container}>
    <List
      items={beerList}
      titleKey='brewName'
      onPress={index => navigateToBrew(index)}
    />
  </View>
);

BeerList.propTypes = {
  beerList: React.PropTypes.array.isRequired,
  navigateToNewForm: React.PropTypes.func.isRequired,
  navigateToBrew: React.PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  }
});

export default BeerList;