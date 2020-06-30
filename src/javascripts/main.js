import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';
import navbar from './components/navbar/navbar';
import authData from './helpers/data/authData';
import 'bootstrap';
import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseConfig);
  authData.checkLoginStatus();
  navbar.navbar();
  navbar.logInEvent();
  navbar.logOutEvent();
};

init();
