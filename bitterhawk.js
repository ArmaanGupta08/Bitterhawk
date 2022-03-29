function Login(){
    username=document.getElementById("username").value;
    localStorage.setItem("username",username)
    window.location="bitterhawk_room.html"
}