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

var Roll_no, y17cs;
var roll, rolln, sem, tot;


$("#btn-login").click(function () {
    var email = $("#email").val();
    var pass = $("#pass").val();

    if (email != "" && pass != "") {
        var result = firebase.auth().signInWithEmailAndPassword(email, pass);

        result.catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            window.alert("Message : " + errorMessage);
        });
    } else {
        window.alert("Please fill all fields");
    }


});


$("#btn-logout").click(function () {
    firebase.auth().signOut();
});

$("#btn-signup").click(function () {
    var email1 = $("#email1").val();
    var pass1 = $("#pass1").val();
    var copass = $("#copass").val();

    if (email1 != "" && pass1 != "" && copass != "") {
        if (pass1 == copass) {
            var result = firebase.auth().createUserWithEmailAndPassword(email1, pass1);

            result.catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;

                window.alert("Message : " + errorMessage);
            });
            window.alert("Account created");
        } else {
            window.alert("Passwords not matched");
        }
    } else {
        window.alert("Form incomplete");
    }

});

function abc() {
    window.location.href = "index.html";
}

$("#btn-cancel").click(function () {
    window.location.href = "ui.html";
});

$("#btn-back").click(function () {
    window.location.href = "index.html";
});

$("#btn-reset").click(function () {
    var authen = firebase.auth();
    var email2 = $("#email2").val();

    if (email2 != "") {
        authen.sendPasswordResetEmail(email2).then(function () {
            window.alert("Check your mail")
        });
        authen.catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;

            window.alert("Message : " + errorMessage);
        });
    } else {
        window.alert("Enter email address");
    }
});

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



function mygender() {
    if (document.getElementById('Gender'.checked != true)) {
        alert("Please Select Gender");
    }
    var x = document.getElementsByName("gender");

    for (var i = 0; i < x.length; i++) {
        if (x[i].checked) {
            console.log(x[i].value)
            break;
        }
    }
    return x[i].value;
}

function mydept() {

    var y = document.getElementsByName("dept");
    for (var i = 0; i < y.length; i++) {
        if (y[i].checked) {
            console.log(y[i].value)
            break;
        }
    }
    return y[i].value;
}

function mydegree() {
    var z = document.getElementsByName("degree");
    for (var i = 0; i < z.length; i++) {
        if (z[i].checked) {
            console.log(z[i].value);
            break;
        }
    }
    return z[i].value;
}

function myyear() {
    var a = document.getElementsByName("yearadd");
    for (var i = 0; i < a.length; i++) {
        if (a[i].checked) {
            console.log(a[i].value);
            break;
        }
    }
    return a[i].value;
}

$("#btn-update").click(function () {
    //var Roll_no = $("#Roll_no").val();
    var Degree = mydegree();
    var Department = mydept();
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
    //var Religion = $("#Religion").val();
    var Adhar_no = $("#Adhar_no").val();
    var Address = $("#Address").val();
    var Email = $("#Email").val();
    var Phone_no1 = $("#Phone_no1").val();
    var Phone_no2 = $("#Phone_no2").val();
    //var Phone_no3 = $("#Phone_no3").val();
    // var Gender = $("#Gender").val();
    var Gender = mygender();
    var Pan_no = $("#Pan_no").val();
    var Year_add = myyear();

    var loginRef = firebase.database().ref().child("Users");
    var userID = firebase.auth().currentUser.uid;
    var usersRef = loginRef.child(userID);
    console.log(userID);



    /* if(Degree!="" && Department!="" && Year_admission!="" && Name!="" && Semester!="" && Division!="" && Father_name!="" && Mother_name!="" && Guardian_name!="" && Dob!="" && Blood_group!="" && Caste!="" && Category!="" && Adhar_no!="" && Address!="" && Email!="" && Phone_no1!="" && Phone_no2!="" && Gender!="" && Pan_no!="" && Year_add!=""){*/

    if (Degree != "" && Department != "" && Year_add != "" && Year_admission != "") {
        var userData = {
            //"Roll_no" : Roll_no,
            "Degree": Degree,
            "Department": Department,
            "Year_admission": Year_admission,
            "Name": Name,
            "Semester": Semester,
            "Division": Division,
            "Father_name": Father_name,
            "Mother_name": Mother_name,
            "Guardian_name": Guardian_name,
            "Dob": Dob,
            "Blood_group": Blood_group,
            "Caste": Caste,
            "Category": Category,
            //"Religion" : Religion,
            "Adhar_no": Adhar_no,
            "Address": Address,
            "Email": Email,
            "Phone_no1": Phone_no1,
            "Phone_no2": Phone_no2,
            //"Phone_no3" : Phone_no3,
            "Gender": Gender,
            "Pan_no": Pan_no,
            "Year_add": Year_add,
        };

    } else {
        alert("Please Enter Degree/Department/Year of admission/Year Admitted");
    }
    switch (Degree) {
        case "Engineering":
            var roll1 = "EN";
            break;
        case "Polytechnic":
            var roll1 = "Po";
            break;
        case "MBA":
            var roll1 = "Mb";
            break;
    }
    console.log(roll1);
    switch (Department) {
        case "Computer":
            var roll4 = "CS";
            break;
        case "IT":
            var roll4 = "IT";
            break;
        case "Mechanical":
            var roll4 = "MEC";
            break;
        case "Civil":
            var roll4 = "CIV";
            break;
        case "Electrical":
            var roll4 = "ELE";
            break;
        case "E&TC":
            var roll4 = "E&TC";
            break;
    }
    console.log(roll4);
    switch (Year_add) {
        case "FE":
            var roll3 = "FE";
            break;
        case "DSE":
            var roll3 = "DSE";
            break;
    }
    console.log(roll3);

    var roll2 = Year_admission;
    console.log(roll2);

    var roll = roll1 + roll2 + roll3 + roll4;
    console.log(roll);

        var dept = Department;
    console.log(dept);
        
        Year_admission = 20+Year_admission;
        console.log(Year_admission);
        firebase.database().ref().child("Counter").child(Year_admission).child(dept).once('value').then(function(snapshot){
            var a = snapshot.val();
            console.log(a);
            roll = roll+a;
            console.log(roll);
            a++;
            console.log(a);

        usersRef.update(userData, function (error) {
            if (error) {
                var errorCode = error.code;
                var errorMessage = error.message;

                window.alert("Message : " + errorMessage);
            }
            /* else{
                 window.location.href = "form.html";
             }*/
        });
        usersRef.update({
            "Roll_no": roll
        });
        
        firebase.database().ref().child("Counter").child(Year_admission).update({
            [dept]:a
        })
        })

        /*var userID = firebase.auth().currentUser.uid;
        var a1 = firebase.database().ref().child('Users/' + userID).once('value').then(function (snapshot) {
            var curuser = snapshot.val();
            console.log(curuser.Roll_no);
            document.getElementById("Roll_no").innerHTML = curuser.Roll_no;
            var attendance = curuser.Attendance;
            console.log(attendance);
            var sem = curuser.Semester;
            console.log(sem)

            var a2 = firebase.database().ref().child('Academics/' + sem).once('value').then(function (snapshot) {
                var tot = snapshot.val().Totallecnow;
                console.log(tot);
                var a3 = firebase.database().ref().child('Academics').once('value').then(function (snapshot) {
                    var grand = snapshot.val().Grandtotal;
                    console.log(grand)

                    var total2 = ((attendance * 100) / tot);
                    var total = total2.toFixed(2);
                    console.log(total);
                    var lecatt = ((grand * 75) / 100) - attendance;
                    console.log(lecatt);
                    var lecleft = (grand - tot);
                    console.log(lecleft);
                    
                    const div1 = document.getElementById("circle");
                    //div1.setAttribute('data-percentage',total);
                    
                    //document.getElementByDatapercentage("87").innerHTML= lecleft;
                    document.getElementsByName("data-percentage").innerHTML = total;
                    
                    var notice = firebase.database().ref().child('Notice/'+ sem +'/Fy').once('value').then(function(snapshot){
                        var fy = snapshot.forEach(function(Fy){
                            console.log(Fy.key+":"+Fy.val());
                        }) 
        })
                })
            })
        })*/
    

});


$("#btn-a").click(function () {
    window.location.href = "index.html";
});


$("#btn-b").click(function () {
    window.location.href = "signup.html";
});

$("#main").click(function () {
    window.location.href = "form.html";
});


/*var demo = firebase.database().ref().child('Academics/').on('value', (snapshot)=>{
   // console.log(snapshot.val());
    var dem = snapshot.val();
})
console.log(demo.dem)
var loginRef = firebase.database().ref().child("Users");
    var userID = firebase.auth().currentUser.uid;
    var usersRef = loginRef.child(userID);
console.log(userID);*/
