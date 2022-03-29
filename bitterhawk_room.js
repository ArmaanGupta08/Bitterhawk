
var firebaseConfig = {
      apiKey: "AIzaSyDM_PfVdSUdq5bZaSyerYy2HPPl6f7a8GU",
      authDomain: "bitterhawk-588a4.firebaseapp.com",
      databaseURL:"https://bitterhawk-588a4-default-rtdb.firebaseio.com/",
      projectId: "bitterhawk-588a4",
      storageBucket: "bitterhawk-588a4.appspot.com",
      messagingSenderId: "592717477892",
      appId: "1:592717477892:web:b4c795e2fc68fdf1aa1d51"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("username")
document.getElementById("welcome_name").innerHTML= "Welcome " + user_name

function add_room(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name yessir and you know it"
      });
      localStorage.setItem("room_name",room_name)
      window.location="bitterhawk_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log(Room_names)
      var row="<div class='room_name' id='"+Room_names+"' onclick='redirect_to_room_name(this.id)'>#"+Room_names+"</div><hr>"
      document.getElementById("output").innerHTML+=row
      });});}
getData();

function redirect_to_room_name(name8){
      console.log(name8)
      localStorage.setItem("room_name",name8)
      window.location="bitterhawk_page.html"
}

function Logout(){
      localStorage.removeItem("room_name")
      localStorage.removeItem("username")
      window.location="index.html"
}