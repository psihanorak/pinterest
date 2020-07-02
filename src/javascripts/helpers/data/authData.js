import firebase from 'firebase/app';
import 'firebase/auth';
import boards from '../../components/boards/boards';
import home from '../../components/home/home';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      $('#login').hide();
      $('#logout').show();
      $('#boards').show(boards.createHeader);
      $('#home').show(home.homeHeader);
    } else {
      $('#login').show();
      $('#logout').hide();
      $('#boards').hide(boards.createHeader);
      $('#home').show(home.homeHeader);
    }
  });
};

export default { checkLoginStatus };
