import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';

import HeaderButton from '../elements/HeaderButton'
import BrewList from '../components/BrewList'

const BrewListContainer = props => <BrewList {...props} />;

BrewListContainer.navigationOptions = {
  title: 'Brew list',
  header: ({state, navigate}) => ({
    right: (
      // Steg 2: Her trenger vi en knapp som kaller på navigate('newBrew') for å gå til skjema for ny øl
      // Du kan skrive JSX-element direkte her. Tips: Se HeaderButton
      <HeaderButton
        title='New brew'
        onPress={() => navigate('newBrew')}
      />
    ),
  }),
};

const mapStateToProps = state => ({
  brewList: state.brewList.map(brew => brew.data)
});

const mapDispatchToProps = dispatch => ({
  navigateToNewForm: () => dispatch(NavigationActions.navigate({routeName: 'newBrew'})),
  navigateToBrew: (brewName, index) => dispatch(NavigationActions.navigate({
    routeName: 'brew',
    params: {brewName, index}
  }))
});

export default connect(mapStateToProps, mapDispatchToProps)(BrewListContainer);
