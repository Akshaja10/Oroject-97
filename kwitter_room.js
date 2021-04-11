// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCltdtNlcealUxPW4TU3GPI2UjQ8yEbFUI",
    authDomain: "project-96-e2a64.firebaseapp.com",
    projectId: "project-96-e2a64",
    storageBucket: "project-96-e2a64.appspot.com",
    messagingSenderId: "120953101142",
    appId: "1:120953101142:web:57fd8f5561a8ed9f8694f7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }
  

  function addUser()
  {
  user_name = document.getElementById ("user_name").value;
  localStorage.setItem ("user_name", user_name);
  window.location = "kwitter_page.html";
  }