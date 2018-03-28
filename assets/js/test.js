//current energy consumption update picture
function update_member_profit(key,status) {
  if (key == 'member_profit') {
      $("#member_profit").text(String(status));
  } else if (key == 'orders') {
        $("#orders").text(String(status));
  } else if (key == 'issue_reports') {
        $("#issue_reports").text(String(status));
   } else if (key == 'ipo_margin') {
         $("#ipo_margin").text(String(status));
    } else if (key == 'payments') {
         $("#payments").text(String(status));
   } else if (key == 'logistics') {
         $("#logistics").text(String(status));
   } else if (key == 'orders2') {
         $("#orders2").text(String(status));
   } else if (key == 'transactions') {
         $("#transactions").text(String(status));
   } else if (key == 'revenue') {
        $("#revenue").text(String(status));
  } else {
      console.log("need to parse this key " + data.key)
  }
    //$("#member_profit").text(String(status));
}

function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}


$( document ).ready(function() {
    console.log("starting documentdsaasds!!!!");

    // Initialize Firebase
    console.log("Initialize Firebase");
    var config = {
      apiKey: "AIzaSyDytJNEPvKf5vnEvAcs4pr0u79kPqNhHSU",
      authDomain: "anon-project-fb15f.firebaseapp.com",
      databaseURL: "https://anon-project-fb15f.firebaseio.com",
      projectId: "anon-project-fb15f",
      storageBucket: "anon-project-fb15f.appspot.com",
      messagingSenderId: "966608228277"
    };
    firebase.initializeApp(config);

    var member_profitRef = firebase.database().ref("member");

    member_profitRef.on("child_changed", function(data) {
        console.log(data.key);
        console.log(data.val());

        // function writeUserData('userId', 'name', 'email','http://www.1000za.com/wp-content/uploads/2016/12/sadasd.png')

         if(data.key == "1PV221445K1200100") {
             total_load_activePower  = data.val().load_activePower;
         } else if (data.key == 'member_profit') {
             update_member_profit(data.key,parseInt(data.val()));
         } else if (data.key == 'orders') {
               update_member_profit(data.key,parseInt(data.val()));
         } else if (data.key == 'issue_reports') {
               update_member_profit(data.key,parseInt(data.val()));
          } else if (data.key == 'ipo_margin') {
                update_member_profit(data.key,parseInt(data.val()));
           } else if (data.key == 'payments') {
                update_member_profit(data.key,parseInt(data.val()));
          } else if (data.key == 'logistics') {
                update_member_profit(data.key,parseInt(data.val()));
          } else if (data.key == 'orders2') {
                update_member_profit(data.key,parseInt(data.val()));
          } else if (data.key == 'transactions') {
                update_member_profit(data.key,parseInt(data.val()));
          } else if (data.key == 'revenue') {
                update_member_profit(data.key,parseInt(data.val()));
         } else {
             console.log("need to parse this key " + data.key)
         }
    });

    var testRef = firebase.database().ref("test");

    testRef.on("child_changed", function(data) {
        console.log(data.key);
        console.log(data.val());
    });

});
