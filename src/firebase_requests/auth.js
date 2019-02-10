import firebase from 'firebase';

const getUid = () =>
{
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      return user.uid
    } else {
      return "No user is signed in."
    }
  });
};

const loginUser = (user) =>
{
  return firebase.auth().signInWithEmailAndPassword(user.email, user.password);
};

const logoutUser = () =>
{
  return firebase.auth().signOut();
};

const registerUser = (user) =>
{
  return firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
};

const setUsername = (user) =>
{
  return firebase.auth().currentUser().updateProfile(
    {
      displayName: user.username,
    }).then().catch((err) => { console.error(err); });
};
export default {getUid, loginUser, logoutUser, registerUser, setUsername};