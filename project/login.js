 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx6FiJprL4MyW2cRGflq57SVB-mGHInJ8",
  authDomain: "stoked-forest-300301.firebaseapp.com",
  databaseURL: "https://stoked-forest-300301-default-rtdb.firebaseio.com",
  projectId: "stoked-forest-300301",
  storageBucket: "stoked-forest-300301.appspot.com",
  messagingSenderId: "790814577040",
  appId: "1:790814577040:web:dc24d56d3fd6bb0f166315",
  measurementId: "G-SLDYFCBHK6"
};

  firebase.initializeApp(firebaseConfig);

  function logIn(){
      var _email = document.getElementById("email");
      console.log('In here');
      var _password = document.getElementById("password");
      firebase.auth().signInWithEmailAndPassword(_email.value, _password.value)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        sessionStorage.setItem('status','loggedIn');
        console.log('Status:',sessionStorage.getItem('status'));
        window.location.href ="home.html";
        // ...
      })
      .catch((error) => {
        alert("Incorrect Credentials")
        var errorCode = error.code;
        var errorMessage = error.message;
      });
 
  }