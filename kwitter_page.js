var firebaseConfig = {
      apiKey: "AIzaSyC_ZhwSUyw0aFwtGFCHi66vA3W15sH3A6Y",
      authDomain: "kwitter-8fb1e.firebaseapp.com",
      databaseURL: "https://kwitter-8fb1e-default-rtdb.firebaseio.com",
      projectId: "kwitter-8fb1e",
      storageBucket: "kwitter-8fb1e.appspot.com",
      messagingSenderId: "988920777769",
      appId: "1:988920777769:web:7616221a8c17b24023e038"
    };
  
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
      name: user_name,
      message: msg,
      like: 0
      });
      
      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
