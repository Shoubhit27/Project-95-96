
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAX6HlhVnWVJNjeRL97BOxCGuj5JWE2shA",
      authDomain: "project-kwitter-702df.firebaseapp.com",
      databaseURL: "https://project-kwitter-702df-default-rtdb.firebaseio.com",
      projectId: "project-kwitter-702df",
      storageBucket: "project-kwitter-702df.appspot.com",
      messagingSenderId: "370764853283",
      appId: "1:370764853283:web:b0f0163ab6b82a1a6ac196",
      measurementId: "G-J0QE0QZR2R"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    room_name= localStorage.getItem("room_name")
    user_name= localStorage.getItem("Username")

function send(){
      msg = document.getElementById("message").value
      firebase.database().ref(room_name).push({
            name : user_name, 
            message : msg,
            like : 0
      })

      document.getElementById("message").value = ""
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
