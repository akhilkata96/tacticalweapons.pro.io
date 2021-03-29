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

  function signUp(){
      var _email = document.getElementById("email");
      console.log('In here');
      var _password = document.getElementById("password");

    firebase.database().ref("user").set({
        email:_email.value,
        password:_password.value
    });

    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(_email.value, _password.value).then(function(user) {
	  var user = firebase.auth().currentUser;
	  alert("User Created");
	  window.location.href="login.html";
	});
    promise.catch( e => alert(e.message));
    //window.location.href = "login.html";
  }