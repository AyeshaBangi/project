var firebaseConfig = {
    apiKey: "AIzaSyBiripTFCx1T4bkxgxj7tyZuLtXLx8Vv4U",
    authDomain: "loginform-eef75.firebaseapp.com",
    projectId: "loginform-eef75",
    storageBucket: "loginform-eef75.appspot.com",
    messagingSenderId: "173415484990",
    appId: "1:173415484990:web:4b8c9c03ad75a384e80b6f",
    measurementId: "G-VEF8B1FNXR"
  };
  
// Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

firebase.auth.Auth.Persistence.LOCAL;

$("#btn-login").click(function(){
    var email = $("#email").val();
    var pass = $("#pass").val();
    
    if(email != "" && pass != ""){
        var result = firebase.auth().signInWithEmailAndPassword(email,pass);
                
        result.catch(function(error){
            var errorCode= error.code;
            var errorMessage = error.message;   
            window.alert("Message : " + errorMessage);
        });
    }
    else{
        window.alert("Please fill all fields");
    }
    
});


$("#btn-logout").click(function(){
    firebase.auth().signOut();
});

$("#btn-signup").click(function(){
    var email1 = $("#email1").val();
    var pass1 = $("#pass1").val();
    var copass = $("#copass").val();
    
    if(email1 != "" && pass1 != "" && copass != ""){
        if(pass1 == copass){
            var result = firebase.auth().createUserWithEmailAndPassword(email1, pass1);
            
            result.catch(function(error){
                var errorCode = error.code;
                var errorMessage = error.message;
                
                window.alert("Message : " + errorMessage);
            });
            window.alert("Account created");
        }
        else{
            window.alert("Passwords not matched");
        }
    }
    else{
        window.alert("Form incomplete");
    }
    
    
    
    
    
    /*    var Roll_no = $("#rno");
    var Degree = $("#degree").val();
    var Department = $("#dept").val();
    var Year_admission = $("#year").val();
    var Name = $("#name").val();
    var Semester = $("#semester").val();
    var Section_name = $("#section").val();
    var Father_name = $("#fname").val();
    var Mother_name = $("#mname").val();
    var Guardian_name = $("#gname").val();
    var Dob = $("#dob").val();
    var Blood_group = $("#bgrp").val();
    var Caste = $("#caste").val();
    var Category = $("#category").val();
    var Religion = $("#religion").val();
    var Aadhar_no = $("#adno").val();
    var Address = $("#address").val();
    var Email = $("#email4").val();
    var Phone_no1 = $("#phone1").val();
    var Phone_no2 = $("#phone2").val();
    var Phone_no3 = $("#phone3").val();
    
    var loginRef = firebase.database().ref().child("Users");
    var userID = firebase.auth().currentUser.uid;
    var usersRef = loginRef.child(userID);
    
    var userData = {
        "rno" : Roll_no,
        "degree" : Degree,
        "dept" : Department,
        "year" : Year_admission,
        "name" : Name,
        "semester" : Semester,
        "section" : Section_name,
        "fname" : Father_name,
        "mname" : Mother_name,
        "gname" : Guardian_name,
        "dob" : Dob,
        "bgrp" : Blood_group,
        "caste" : Caste,
        "religion" : Religion,
        "adno" : Aadhar_no,
        "address" : Address,
        "email4" : Email,
        "phone1" : Phone_no1,
        "phone2" : Phone_no2,
        "phone3" : Phone_no3
    };
    */

 });

function abc(){
        window.location.href="index.html";
    }

$("#btn-cancel").click(function(){
    window.location.href = "ui.html";
});

$("#btn-back").click(function(){
    window.location.href = "index.html";
});

$("#btn-reset").click(function(){
    var authen = firebase.auth();
    var email2 = $("#email2").val();
    
    if(email2 != ""){
        authen.sendPasswordResetEmail(email2).then(function(){
            window.alert("Check your mail")
        });
        authen.catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;
                
            window.alert("Message : " + errorMessage);
        });
    }
    else{
        window.alert("Enter email address");
    }
});

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}



$("#btn-update").click(function(){
    var Roll_no = $("#Roll_no").val();
    var Degree = $("#Degree").val();
    var Department = $("#Department").val();
    var Year_admission = $("#Year_admission").val();
    var Name = $("#Name").val();
    var Semester = $("#Semester").val();
    var Division = $("#Division").val();
    var Father_name = $("#Father_name").val();
    var Mother_name = $("#Mother_name").val();
    var Guardian_name = $("#Guardian_name").val();
    var Dob = $("#Dob").val();
    var Blood_group = $("#Blood_group").val();
    var Caste = $("#Caste").val();
    var Category = $("#Category").val();
    var Religion = $("#Religion").val();
    var Adhar_no = $("#Adhar_no").val();
    var Address = $("#Address").val();
    var Email = $("#Email").val();
    var Phone_no1 = $("#Phone_no1").val();
    var Phone_no2 = $("#Phone_no2").val();
    var Phone_no3 = $("#Phone_no3").val();
    var Gender = $("#Gender").val();
    var Pan_no =$("#Pan_no").val();
    
    var loginRef = firebase.database().ref().child("Users");
    var userID = firebase.auth().currentUser.uid;
    var usersRef = loginRef.child(userID);
    
    var userData = {
        "Roll_no" : Roll_no,
        "Degree" : Degree,
        "Department" : Department,
        "Year_admission" : Year_admission,
        "Name" : Name,
        "Semester" : Semester,
        "Division" : Division,
        "Father_name" : Father_name,
        "Mother_name" : Mother_name,
        "Guardian_name" : Guardian_name,
        "Dob" : Dob,
        "Blood_group" : Blood_group,
        "Caste" : Caste,
        "Category" : Category,
        "Religion" : Religion,
        "Adhar_no" : Adhar_no,
        "Address" : Address,
        "Email" : Email,
        "Phone_no1" : Phone_no1,
        "Phone_no2" : Phone_no2,
        "Phone_no3" : Phone_no3,
        "Gender" : Gender,
        "Pan_no" : Pan_no

    };
    
    usersRef.set(userData, function(error){
        if(error){
            var errorCode = error.code;
            var errorMessage = error.message;
                
            window.alert("Message : " + errorMessage);
        }
        else{
            window.location.href = "index.html";
        }
    });

});


$("#btn-a").click(function(){
    window.location.href = "index.html";
});


$("#btn-b").click(function(){
    window.location.href = "signup.html";
});

$("#main").click(function(){
    window.location.href = "form.html";
});