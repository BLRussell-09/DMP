import constants from '../src/constants';
import firebase from 'firebase';

const firebaseApp = () =>
{
  firebase.initializeApp(constants.firebaseConfig);
};

export default firebaseApp;