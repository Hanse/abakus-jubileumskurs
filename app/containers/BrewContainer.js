import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import Brew from '../components/Brew';

class BrewContainer extends Component {
  componentWillReceiveProps(nextProps) {
    // If the brew has been deleted externally, we can't show it.
    if (!nextProps.brew) {
      this.props.navigation.goBack();
    }
  }

  render() {
    if (!this.props.brew) {
      return null;
    }

    return <Brew {...this.props} />;
  }
}

BrewContainer.navigationOptions = {
  // Steg 2:
  //   Når vi navigerer til denne komponenten sender vi med to parametre:
  //   - brewName
  //   - key
  //   Den første kan vi benytte her for å sette en relevant tittel for komponenten vi ser på.
  //   Disse parametrene er tilgjengelig i `state.params`-objektet.
  title: ({ state }) => (console.log(state), state.params.brewName.brewName)
};

const getBrew = (state, key) => {
  const brew = state.brewList.find(brew => brew.key === key);
  if (brew) {
    return {
      // Enforce defaults just in case someone screws up the distributed store
      alcohol: 4,
      brewery: 'Missing',
      brewName: 'Missing',
      brewType: 'Missing',
      rating: 2,

      // Transform state so we merge key and data of brew items
      ...brew.data,
      key: brew.key,

      // Default a image
      image: brew.data.image ||
        'https://pbs.twimg.com/media/CzW9RBZXUAAK43q.jpg'
    };
  }
};

const mapStateToProps = (state, ownProps) => ({
  brew: getBrew(state, ownProps.navigation.state.params.key)
});

const mapDispatchToProps = {
  onNavigateBack: NavigationActions.back
};

export default connect(mapStateToProps, mapDispatchToProps)(BrewContainer);
