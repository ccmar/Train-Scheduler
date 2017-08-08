<!DOCTYPE html>
<html>
<head>
    <title>Train Scheduler</title>
</head>
<body>
<div id="name">Hello world</div>
<button>Increase Count</button>
<script
  src="http://code.jquery.com/jquery-3.2.1.js"
  integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE="
  crossorigin="anonymous"></script>
<script src="https://www.gstatic.com/firebasejs/4.2.0/firebase.js"></script>
<script>

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAxaOJYadEJh9zYtU1xD_SGZncRHIGouGs",
    authDomain: "train-schedules-b2610.firebaseapp.com",
    databaseURL: "https://train-schedules-b2610.firebaseio.com",
    projectId: "train-schedules-b2610",
    storageBucket: "train-schedules-b2610.appspot.com",
    messagingSenderId: "550400090051"
  };
  firebase.initializeApp(config);
  var database = firebase.database();

  var count;


  database.ref().set({ //set will set data in the database, but it overwrites what is already there
    name: "colton",
    count: 0
  });


  database.ref().on('value', function(snapshot) { // on will read the data in the database with snapshot.val()
    count = snapshot.val().count;
    $("#name").html(snapshot.val().count)

  });

  $("button").on("click", function(){
    database.ref().update({ //update will update data in the database, and will NOT overwrite other stuff
        count: count++
    })
  })


</script>
</body>
</html>