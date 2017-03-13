import fb from '../firebase';
import hash from 'sha1';

export const ADD_BREW = 'brewList/ADD_BREW';
export const REMOVE_BREW = 'brewList/REMOVE_BREW';
export const UPDATE_BREW = 'brewList/UPDATE_BREW';

function uploadImage(uri) {
  let timestamp = (Date.now() / 1000 | 0).toString();
  let apiKey = '758728459169817';
  let apiSecret = 'xkjy6ucXMRyor9qn57UlRsuSJuY';
  let cloud = 'dsgwxcmjz';
  let signature = hash(`timestamp=${timestamp}${apiSecret}`);
  let uploadUrl = 'https://api.cloudinary.com/v1_1/' + cloud + '/image/upload';

  let formdata = new FormData();
  formdata.append('file', { uri: uri, type: 'image/png', name: 'upload.png' });
  formdata.append('timestamp', timestamp);
  formdata.append('api_key', apiKey);
  formdata.append('signature', signature);

  return fetch(uploadUrl, {
    method: 'POST',
    body: formdata
  }).then(response => {
    return response.json().then(json => {
      if (response.ok) {
        return json;
      }

      throw new Error('error');
    });
  });
}

export const addBrew = brew => dispatch => {
  uploadImage(brew.image).then(json => {
    console.log(json);
    const image = json.url;
    brew.image = image;
    fb.ref('/').push(brew);
  });
};

export const removeBrew = key => () => fb.ref(`/${key}`).remove();

export const updateBrew = (key, newBrew) =>
  () => fb.ref(`/${key}`).update(newBrew);

export const firebaseBrewAdded = (key, brew) => ({
  type: ADD_BREW,
  payload: {
    key,
    brew
  }
});

export const firebaseBrewRemoved = (key, brew) => ({
  type: REMOVE_BREW,
  payload: {
    key,
    brew
  }
});

export const firebaseBrewUpdated = (key, brew) => ({
  type: UPDATE_BREW,
  payload: {
    key,
    brew
  }
});
