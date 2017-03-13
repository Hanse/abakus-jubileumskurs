import React, { PropTypes } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card as ElementsCard } from 'react-native-elements';

/**
 * Denne komponenten kan benyttes til å lage et "kort" som består av et bilde
 * og valgfritt data.
 *
 * Eksempel:
 *
 * <Card image='https://my.cool/image.png'>
 *   <Text>Some cool thing</Text>
 *   <Text>I have made</Text>
 * </Card>
 */
const Card = ({ image, children }) => (
  <ElementsCard
    wrapperStyle={styles.card}
    image={image ? { uri: image } : null}
    imageStyle={styles.image}
  >
    {children}
  </ElementsCard>
);

Card.propTypes = {
  image: PropTypes.string, // URL to image
  children: PropTypes.node
};

Card.defaultProps = {
  image: 'https://pbs.twimg.com/media/CzW9RBZXUAAK43q.jpg'
};

const styles = StyleSheet.create({
  card: {
    minHeight: 250,
    marginBottom: 10
  },
  image: { flex: null }
});

export default Card;
