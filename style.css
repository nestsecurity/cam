  $(document).ready(function() {
  clockUpdate();
  setInterval(clockUpdate, 1000);
})

function clockUpdate() {
  var date = new Date();
  $('.digital-clock').css({'color': '#FFF7FC', 'text-shadow': '0 0 6px #ced4da'});
  function addZero(x) {
    if (x < 10) {
      return x = '0' + x;
    } else {
      return x;
    }
  }

  function twelveHour(x) {
    if (x > 12) {
      return x = x - 12;
    } else if (x == 0) {
      return x = 12;
    } else {
      return x;
    }
  }

  var h = addZero(twelveHour(date.getHours()));
  var m = addZero(date.getMinutes());
  var s = addZero(date.getSeconds());

  $('.digital-clock').text(h + ':' + m + ':' + s)
}

$("#device").change( function(){
  let device = $("#device option:selected").val();
  if(device == 2|| device == 3){
    $("#config").show();
  } else {
    $("#config").hide();
  }
});

function formatDate(date) {
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return day + ' ' + monthNames[monthIndex] + ' ' + year;
}

$("#date").html((formatDate(new Date())));

$("#submit-btn").click(function(){
     $('html, body').animate({
        scrollTop: eval($("#buttons").offset().top-200)
    	}, 500);
    $("#copy-btn").show();
let fname = $("#fname").val();
let pnumber = $("#pnumber").val();
let eadd = $("#eadd").val();
let pcase = $("#pcase").val();
let issue = $("#issue").val();
let in1 = $("#in1").val();
let in2 = $("#in2").val();
let ts = $("#ts").val();
let config = $("#configuration").val();
let resolution = $("#resolution").val();
let ft = $("#ft").val();
let wiring = [];
let color = [];    
   $("#submit-case").remove();
$.each($('input[name="wiring"]:checked'),function(){
    wiring.push($(this).val());
});
    
$("input[name='color']").each(function(){
    let eachcolor = $(this).val();
    if(eachcolor.length != ''){
       let colorarray = color.push($(this).val());
    }       
});    
   $(".case").after("<textarea class='form-control mb-3' rows='30' id='submit-case'></textarea>");
   $("#submit-case").val("\n===== CUSTOMER INFO ===== \n Contact Name: " + fname + "\n Contact Phone: " + pnumber + "\n Contact E-mail: " + eadd + "\n Case Number: " + pcase + "\n\n===== CUSTOMER STATEMENT=====\n" + issue + "\n\n===== TIMELINE =====\n•Installed on: " + in1 + "\n•Issued since: " + in2 + "\n\n===== CONFIGURATION =====\n"+ config +"\n\n=====TROUBLESHOOTING =====\n" + ts + "\n\n ===== RESOLUTION =====\n" + "\n" + resolution);
});

$("#reset-btn").click(function(){ 
  $('html, body').animate({scrollTop:0}, '300');
  $('#myForm')[0].reset();
  $("#submit-case").remove();
  $("#copy-btn").hide();  
});
    
$("#ts").focus(function() {
    if(document.getElementById('ts').value === ''){
        document.getElementById('ts').value +='• ';
	}
});
$("#ts").keyup(function(event){
	var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        document.getElementById('ts').value +='• ';
	}
	var txtval = document.getElementById('ts').value;
	if(txtval.substr(txtval.length - 1) == '\n'){
		document.getElementById('ts').value = txtval.substring(0,txtval.length - 1);
	}
});
    
$("#issue").focus(function() {
    if(document.getElementById('issue').value === ''){
        document.getElementById('issue').value +='• ';
	}
});

$("#issue").keyup(function(event){
	var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        document.getElementById('issue').value +='• ';
	}
	var txtval = document.getElementById('issue').value;
	if(txtval.substr(txtval.length - 1) == '\n'){
		document.getElementById('issue').value = txtval.substring(0,txtval.length - 1);
	}
});

$("#configuration").focus(function() {
    if(document.getElementById('configuration').value === ''){
        document.getElementById('configuration').value +='• ';
	}
});

$("#configuration").keyup(function(event){
	var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        document.getElementById('configuration').value +='• ';
	}
	var txtval = document.getElementById('configuration').value;
	if(txtval.substr(txtval.length - 1) == '\n'){
		document.getElementById('configuration').value = txtval.substring(0,txtval.length - 1);
	}
});

$("#in4").focus(function() {
    if(document.getElementById('in4').value === ''){
        document.getElementById('in4').value +='• ';
	}
});
    
$("#in4").keyup(function(event){
	var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        document.getElementById('in4').value +='• ';
	}
	var txtval = document.getElementById('in4').value;
	if(txtval.substr(txtval.length - 1) == '\n'){
		document.getElementById('in4').value = txtval.substring(0,txtval.length - 1);
	}
});
    
$("#copy-btn").click(function(){
  let copyText = $("#submit-case");
  copyText.select();
  document.execCommand("copy");
});
          $(function(){
            $("#menu-toggle").click(function(e) {
                e.preventDefault();
                $("#wrapper").toggleClass("toggled");
            });

            $(window).resize(function(e) {
              if($(window).width()<=768){
                $("#wrapper").removeClass("toggled");
              }else{
                $("#wrapper").addClass("toggled");
              }
            });
          });
          
// intervalID to ensure only one interval runs at a tim
let intervalID = 0;

// function zero-padding the integer passed as argument
const zeroPad = num => (num < 10 ? `0${num}` : num);


// function showing the countdown in the selected element
// accepting a number of seconds and displaying the number of minutes and seconds
function showTimer(seconds) {
  // target the container in which to show the countdown and apply a class to slightly update the visual
  const appTimer = document.querySelector('.app__timer');
  appTimer.classList.add('active');

  // compute the number of minutes and of seconds
  const minutes = Math.floor(seconds / 60);
  // using the modulo operator to consider the remainder past the 60s marker
  const remainingSeconds = seconds % 60;

  // add the information in the main heading
  appTimer.querySelector('h1').textContent = `${zeroPad(minutes)}:${zeroPad(remainingSeconds)}`;
}


// function creating the timer
// accepting as argument a number of seconds, setting up an interval to update the UI every second as to show the passage of time
function timer(seconds) {
  // immediately clear any, if existing, intervals
  clearInterval(intervalID);

  // create two dates instances, one for the moment in which the timer begins, one for the moment in which it should end
  const now = Date.now();
  const then = new Date(now + seconds * 1000);

  // compute the number of seconds between the two SVGElementInstanceList, and immediately call the function to highlight the amount of time
  const totalSeconds = Math.round((then - now) / 1000);
  // immediately show the timer for the number of seconds
  showTimer(totalSeconds);

  // change the text of the sub-heading to show the time at which the timer will end
  const appTimer = document.querySelector('.app__timer');
  // based on the number of hours and minutes of the `then` instance
  appTimer.querySelector('h3').textContent = `Back at ${then.getHours()}:${zeroPad(then.getMinutes())}`;

  // set up the interval
  intervalID = setInterval(() => {
    // compute the number of seconds between the current instance and the instance represented by `then`
    const missingSeconds = Math.round((then - Date.now()) / 1000);
    showTimer(missingSeconds);

    // when reaching 0 clear the interval and remove the arbitrary class
    if (missingSeconds <= 0) {
      appTimer.classList.remove('active');
      clearInterval(intervalID);
      alert("Time is up!");
    }
  }, 1000);
  
  $("#stop").click(function(){
    $("#time").text("00:00");
    $("#addtimer").text("Add timer");
    appTimer.classList.remove('active');
    clearInterval(intervalID);
  });
}


// target the buttons which allow to run a timer for a prescribed amount of time
const buttons = document.querySelectorAll('button');

// function called in response to a click event on one of the buttons
function handleClick() {
  // retrieve the number of seconds described in the data.time attribute
  // ! use the parse function to store a reference to the value as an integer
  const seconds = parseInt(this.getAttribute('data-time'), 10);
  // start the timer for the selected number of seconds
  timer(seconds);
}
// attach an event listener on each button for a click event
buttons.forEach(button => button.addEventListener('click', handleClick));


// target the form detailing an integer for a selected number of minutes
// ! it is possible to call an element by name through `document.name`
const form = document.customTimer;

// function called in response to the submit event being fired on the form
function handleSubmit(e) {
  // prevent the default behavior
  e.preventDefault();

  // retrieve the value detailed in the input element
  /* minutes is the name of the input element, which means that
      this.minutes.value
    targets the same element as
      this.querySelector('input[name="minutes"])
  */
  const minutes = parseInt(this.minutes.value, 10);
  // start the timer for the selected number of minutes
  timer(minutes * 60);

  // clear the form of any value
  this.reset();
}

// listen for the submit event on the entire form
form.addEventListener('submit', handleSubmit);
