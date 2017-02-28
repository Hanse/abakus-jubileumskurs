import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Button from './elements/Button';
import Card from './elements/Card';
import List from './elements/List';
import Icon from './elements/Icon';

const items = [
  {title: 'Rad 1'},
  {title: 'Rad 2'},
  {title: 'Rad 3'}
];

class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Card title={'Selected beer'} />
        <Icon />
        <Button text={'Add beer'}
                onClick={() => {}} />
        <List items={items} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 25
  }
});

export default App;
