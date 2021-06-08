/*var firebaseConfig = {
    apiKey: "AIzaSyBiripTFCx1T4bkxgxj7tyZuLtXLx8Vv4U",
        authDomain: "loginform-eef75.firebaseapp.com", projectId: "loginform-eef75",
    storageBucket: "loginform-eef75.appspot.com",
    messagingSenderId: "173415484990",
    appId: "1:173415484990:web:4b8c9c03ad75a384e80b6f",
    measurementId: "G-VEF8B1FNXR"
  };
  
// Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

firebase.auth.Auth.Persistence.LOCAL;*/


var progressCircles = document.querySelectorAll('.c-progress-circle');

setTimeout(function () {
    for (var i = 0; i < progressCircles.length; i++) {
        var circle = progressCircles[i],
            //val = 89,
            val = Number(circle.getAttribute('datapercentage')),
            bar = circle.querySelectorAll('.c-progress-circle__bar')[0];

        if (isNaN(val)) {
            val = 100;
        } else {
            var r = bar.getAttribute('r');
            var c = Math.PI * (r * 2);

            if (val < 0) {
                val = 0;
            }
            if (val > 100) {
                val = 100;
            }

            var pct = ((100 - val) / 100) * c;

            bar.style.strokeDashoffset = pct;
            bar.setAttribute('datapercentage', val);
        }
    }
}, 500);


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
    if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}




$("#btn-logout").click(function () {
    firebase.auth().signOut();
});

/*var ref = firebase.database().ref();
ref.once("value")
  .then(function(snapshot) {
    var name = snapshot.child("Classroom").child("EN17FECS5").child("Attendance").val(); 
   });*/



    
   
