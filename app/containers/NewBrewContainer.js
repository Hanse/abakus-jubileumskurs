import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import {
  setAlcohol,
  setBrewery,
  setBrewName,
  setBrewType,
  setImage,
  setRating,
  resetForm
} from '../actions/newBrew';
import { addBrew } from '../actions/brewList';
import NewBrew from '../components/NewBrew';

const NewBrewContainer = props => <NewBrew {...props} />;

NewBrewContainer.navigationOptions = {
  title: 'New brew'
};

const mapStateToProps = state => ({
  ...state.newBrew
});

const mapDispatchToProps = dispatch => ({
  onNavigateBack: () => dispatch(NavigationActions.back()),
  onAlcoholChanged: value => dispatch(setAlcohol(value)),
  onBreweryChanged: value => dispatch(setBrewery(value)),
  onBrewNameChanged: value => dispatch(setBrewName(value)),
  onBrewTypeChanged: value => dispatch(setBrewType(value)),
  onImageChanged: value => dispatch(setImage(value)),
  onRatingChanged: value => dispatch(setRating(value)),
  onSaveBrew: brew => {
    dispatch(addBrew(brew));
    dispatch(resetForm());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(NewBrewContainer);
