$(document).ready(function(){
  $(".loginn").click(function(){
    $("#105").fadeToggle();
  });
});
/* registration form */

$(document).ready(function(){
  console.log("inside");
     $(".register").click(function(){
      console.log("toggle");
       $("#106").fadeToggle();
     });
    });
 /* login and registration form */
 $(document).ready(function(){
     $(".register").click(function(){
      none();
     });
  

 function  none() {
   document.getElementById('105').style.display='none';
 }

  $(".loginn").click(function(){
   none2();
  });
function none2() {
  document.getElementById('106').style.display='none';
}
$(document).ready(function(){
  $(".close").click(function(){
    x();
  });
function x() {
document.getElementById('106').style.display='none';  
}
 });
 $(document).ready(function(){
  $(".close").click(function(){
    v();
  });

  function v() {
    document.getElementById('105').style.display='none';  
    }
});
 })
 /*reservation*/
 $(document).ready(function(){
     $("#o").click(function(){
       $(".return").hide();
       $(".multicity").hide();
       $(".one").show();
     });

     $("#r").click(function(){
      $(".one").hide();
      $(".multicity").hide();
      $(".return").show();
    });

    $("#m").click(function(){
      $(".one").hide();
      $(".return").hide();
      $(".multicity").show();
    });
 });
 function select() {
   var text = "";
   var i ;
   for (i = 0; i < 5; i++) {
    text += i ;
   }
   document.getElementById('demo')=text;
  }
 /* reservation-form */
 function clearData() {
  document.getElementById("reserve").reset();
}
function fillOut() {
  var num = document.forms["reservationForm"]["num"].value;
  if (isNaN(num)) {
    alert("Invalid Contact Number");
    return false;
  }
}
/* Check out */
function out() {
  console.log("out");
  document.getElementById("clear").reset();
}
/* Flight Status */
function flightStatus() {
  document.getElementById("flightStatus").reset();
}
