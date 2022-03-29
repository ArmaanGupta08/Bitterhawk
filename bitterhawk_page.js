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

    var username=localStorage.getItem("username")
    var roomname=localStorage.getItem("room_name")

    function send_message(){
          var message=document.getElementById("msg").value
          document.getElementById("msg").value=""
          firebase.database().ref(roomname).push({
                name_of_user:username,
                message:message,
                like:0
          });
    }
function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id)
         console.log(message_data)
         name2=message_data['name_of_user']
         message_kanda=message_data['message']
         liker=message_data['like']
         name_with_tag="<h4>"+name2+" <img src='tick.png' class='user_tick'> </h4>";
         message_with_tag="<h4 class='message_h4'>"+message_kanda+"</h4>"
         like_button="<button class='btn btn-warning' id='"+firebase_message_id+"' value='"+liker+"' onclick='updateLike(this.id)'>";
         span_with_tag="<span class='glyphicon glyphicon-thumbs-up'> Like: "+liker+"</span></button><hr>"
         row=name_with_tag+message_with_tag+like_button+span_with_tag
         document.getElementById("output").innerHTML+=row
      } });  }); }
getData();

function updateLike(lol){
console.log("clciked on the like button- "+lol)
button_id=lol
likes=document.getElementById(button_id).value
updated_likes=Number(likes)+1
console.log(updated_likes)
firebase.database().ref(roomname).child(lol).update({
      like:updated_likes
});
}

function Logout(){
      localStorage.removeItem("room_name")
      localStorage.removeItem("username")
      window.location="index.html"
}