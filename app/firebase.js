import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAcd60mgT_lxbD5AbIYCcKezBy7JV6TCdo',
  authDomain: 'abakus-jubileum.firebaseapp.com',
  databaseURL: 'https://abakus-jubileum.firebaseio.com',
  storageBucket: 'abakus-jubileum.appspot.com'
};

firebase.initializeApp(config);
const database = firebase.database();
export const storage = firebase.storage();
export default database;
