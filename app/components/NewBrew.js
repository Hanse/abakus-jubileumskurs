import React, { PropTypes } from 'react';
import {
  Text,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';

import TextInput from '../elements/TextInput';
import Button from '../elements/Button';
import Slider from '../elements/Slider';
import Picker from '../elements/Picker';

import { pickImage } from './Camera';

import { brewTypes } from '../constants/brewTypes';

// Denne kan benyttes til å disable knappen for å registrere ny øl hvis skjemaet ikke er riktig utfylt
function validateNewBrew(brew) {
  const brewNameValid = brew.brewName && brew.brewName.trim().length > 0;
  const breweryValid = brew.brewery && brew.brewery.trim().length > 0;
  return !!brewNameValid && !!breweryValid;
}

export const NewBrew = props => {
  const {
    brewName,
    brewery,
    alcohol,
    brewType,
    image,
    rating
  } = props;
  const {
    onBrewNameChanged,
    onBreweryChanged,
    onAlcoholChanged,
    onBrewTypeChanged,
    onRatingChanged,
    onImageChanged
  } = props;

  const onAddBrewClick = () => {
    const newBrew = {
      brewName,
      brewery,
      alcohol,
      brewType,
      rating,
      image
    };

    props.onSaveBrew(newBrew);
    props.navigation.goBack();
  };

  return (
    // Steg 3: Her kan man legge inn de forskjellige input-elementene som trengs for å legge til en ny brew
    // Tips: Bruk komponentene TextInput, Slider og Picker fra / elements-mappen
    (
      <ScrollView>
        <TextInput
          label="Brew name"
          value={brewName}
          placeholder="E.g. Dahls Pils"
          onTextChange={onBrewNameChanged}
          required={true}
          errorMessage="Required"
        />

        <TextInput
          label="Brewery"
          value={brewery}
          placeholder="E.g. EC Dahls bryggeri"
          onTextChange={onBreweryChanged}
          required={true}
          errorMessage="Required"
        />

        <Slider
          label="ABV (%)"
          value={alcohol}
          onChange={onAlcoholChanged}
          min={0}
          max={100}
          step={0.5}
        />
        <Picker
          items={brewTypes}
          value={brewType}
          label="Brew Type"
          onChange={onBreweryChanged}
        />

        <Slider
          label="ABV (%)"
          value={rating}
          onChange={onRatingChanged}
          min={0}
          max={5}
          step={1}
        />

        <View style={{ padding: 10 }}>
          <Image
            source={{
              uri: image
            }}
            style={{ backgroundColor: '#ddd', width: 200, height: 100 }}
          />
        </View>

        <Button
          text="Pick Image"
          onPress={() => {
            pickImage()
              .then(image => {
                onImageChanged(image.source.uri);
              })
              .catch(error => Alert.alert(JSON.stringify(error)));
          }}
        />

        <Button text="Save" onPress={onAddBrewClick} />
      </ScrollView>
    )
  );
};

NewBrew.propTypes = {
  alcohol: PropTypes.number,
  brewery: PropTypes.string,
  brewName: PropTypes.string,
  brewType: PropTypes.string,
  image: PropTypes.string,
  rating: PropTypes.number,
  onAlcoholChanged: PropTypes.func.isRequired,
  onBreweryChanged: PropTypes.func.isRequired,
  onBrewNameChanged: PropTypes.func.isRequired,
  onBrewTypeChanged: PropTypes.func.isRequired,
  onImageChanged: PropTypes.func.isRequired,
  onRatingChanged: PropTypes.func.isRequired,
  onNavigateBack: PropTypes.func.isRequired,
  onSaveBrew: PropTypes.func.isRequired,
  navigation: PropTypes.any
};

export default NewBrew;
