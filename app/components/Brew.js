import React, { PropTypes } from 'react';
import { Text, View, Image } from 'react-native';

import Card from '../elements/Card';
import Icon from '../elements/Icon';
import icons from '../constants/icons';

function renderRating(rating) {
  return [1, 2, 3, 4, 5].map((i, index) => {
    const icon = {
      ...(i <= rating ? icons.STAR : icons.STAR_O),
      color: 'yellow'
    };
    return (
      <View style={{ width: 50, height: 50 }} key={index}>
        <Icon icon={icon} />
      </View>
    );
  });
}

const formatIdentity = x => x;
const formatPercentage = x => `${x}%`;

export const Brew = (
  { brew } // Steg 2: // Fyll inn View-elementet med et Card element som viser et bilde (brew.image), brewName, brewery, brewType, // alcohol og rating. Du kan bruke hjelpe-funksjonen renderRating(rating) for å representere rating som stjerner // PS: Wrap renderRating med et View stylet med flex for å få stjernene til å vises i en rad.
) => (
  <View>
    <Card image={brew.image ? brew.image.replace('http:', 'https:') : ''}>
      {[
        ['brewName', 'Name', formatIdentity],
        ['brewType', 'Type', formatIdentity],
        ['alcohol', 'Alkohol', formatPercentage]
      ].map(([attribute, label, format]) => (
        <Text key={attribute}>{label}: {format(brew[attribute])}</Text>
      ))}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 20
        }}
      >
        {renderRating(brew.rating)}
      </View>
    </Card>
  </View>
);

export const brewPropType = {
  alcohol: PropTypes.number.isRequired,
  brewery: PropTypes.string.isRequired,
  brewName: PropTypes.string.isRequired,
  brewType: PropTypes.string.isRequired,
  image: PropTypes.string,
  rating: PropTypes.number.isRequired
};

export const brewWithKeyPropType = {
  ...brewPropType,
  key: PropTypes.string.isRequired // ID in Firebase datastore
};

Brew.propTypes = {
  brew: PropTypes.shape(brewWithKeyPropType)
};

export default Brew;
