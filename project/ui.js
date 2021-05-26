var progressCircles = document.querySelectorAll('.c-progress-circle');

setTimeout(function(){
  for(var i=0; i < progressCircles.length; i++) {
    var circle = progressCircles[i],
        val = Number(circle.getAttribute('data-percentage')),
        bar = circle.querySelectorAll('.c-progress-circle__bar')[0];

    if (isNaN(val)) {
      val = 100;
    }
    else {
      var r = bar.getAttribute('r');
      var c = Math.PI*(r*2);

      if (val < 0) { val = 0;}
      if (val > 100) { val = 100;}

      var pct = ((100-val)/100)*c;

      bar.style.strokeDashoffset = pct;
      bar.setAttribute('data-percentage', val);
    }
  }
}, 500);


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




$("#btn-logout").click(function(){
    firebase.auth().signOut();
});




