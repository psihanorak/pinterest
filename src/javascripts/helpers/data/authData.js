import firebase from 'firebase/app';
import 'firebase/auth';
import boards from '../../components/boards/boards';
import boardList from '../../components/boardList/boardList';
import home from '../../components/home/home';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      $('#login').hide();
      $('#logout').show();
      $('#boards').show(boards.createHeader);
      $('#home').show(home.homeHeader);
      $('#wallBoard').show(boardList.createWallBoard);
    } else {
      $('#login').show();
      $('#logout').hide();
      $('#boards').hide(boards.createHeader);
      $('#home').show(home.homeHeader);
      $('#wallBoard').hide(boardList.createWallBoard);
    }
  });
};

export default { checkLoginStatus };
