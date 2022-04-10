
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

    username = localStorage.getItem("Username")
    document.getElementById("user_name").innerHTML = "Welcome " + username + "!"

    function addRoom(){
      room_name = document.getElementById("room_name").value
      firebase.database().ref("/").child(room_name).update({
            purpose: "Adding Room"
      })
      localStorage.setItem("room_name", room_name)
      window.location = "kwitter_page.html"
}

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) {
            childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      row = "<div class'room_name' id=" + Room_names + "onclick ='redirectToRoomName(this.id)'>"+Room_names +"</div><hr>"
      document.getElementById("output").innerHTML += row;     
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name)
      localStorage.setItem("room_name", name)
      window.location = "kwitter_page.html"
}

function logout(){
      window.location = "index.html"
      localStorage.removeItem("room_name")
      localStorage.removeItem("Username")
}