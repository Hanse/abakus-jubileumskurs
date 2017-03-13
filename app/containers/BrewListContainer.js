import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { Text } from 'react-native';

import { removeBrew } from '../actions/brewList';
import HeaderButton from '../elements/HeaderButton';
import BrewList from '../components/BrewList';

const BrewListContainer = props => <BrewList {...props} />;

BrewListContainer.navigationOptions = {
  title: 'Brew list',
  header: ({ state, navigate }) => ({
    right: (
      <HeaderButton
        title="Add new"
        onPress={() => navigate('newBrew') //<Text>Eksempel</Text> // Du kan skrive JSX-element direkte her. Tips: Se HeaderButton // Steg 3: Her trenger vi en knapp som kaller på navigate('newBrew') for å gå til skjema for ny øl
        }
      />
    )
  })
};

const mapStateToProps = state => ({
  brewList: state.brewList.map(brew => ({
    // Enforce defaults just in case someone screws up the distributed store
    alcohol: 4,
    brewery: 'Missing',
    brewName: 'Missing',
    brewType: 'Missing',
    image: '',
    rating: 2,

    // Transform state so we merge key and data of brew items
    ...brew.data,
    key: brew.key
  }))
});

const mapDispatchToProps = dispatch => ({
  navigateToNewForm: () =>
    dispatch(NavigationActions.navigate({ routeName: 'newBrew' })),
  navigateToBrew: (brewName, key) => dispatch(
    NavigationActions.navigate({
      routeName: 'brew',
      params: { brewName, key }
    })
  ),

  // Eksempel sletting av brew
  removeBrew: key => dispatch(removeBrew(key))
});

export default connect(mapStateToProps, mapDispatchToProps)(BrewListContainer);
