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

  function verifyUserLogin(){
      if (sessionStorage.getItem('status') == 'loggedIn'){
    //redirect to page
         console.log('Logged In');
        }
        else{
            //show validation message
            console.log('Status:',sessionStorage.getItem('status'));
            //alert('User Not Logged In');
            window.location.href = 'login.html';
        }
  }

  function logout(){
      sessionStorage.setItem('status', ' ');
      console.log('status',sessionStorage.getItem('status'));
      firebase.auth().signOut().then(() => {
          // Sign-out successful.
          window.history.forward();
          alert('Signed Out');
          window.location.href='login.html';
        }).catch((error) => {
          // An error happened.
        });
  }