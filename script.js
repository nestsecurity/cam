  $(document).ready(function() {
  clockUpdate();
  setInterval(clockUpdate, 1000);
})

function clockUpdate() {
  var date = new Date();
  $('.digital-clock').css({'color': '#1D2D44', 'text-shadow': '0 0 6px #ced4da'});
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
let sn = $("#sn").val();
let issue = $("#issue").val();
let in1 = $("#in1").val();
let in2 = $("#in2").val();
let in3 = $("#in3").val();
let in4 = $("#in4").val();
let ts = $("#ts").val();
let rs = $("#rs option:selected").text();
let resolution = $("#resolution").val();
let ft = $("#ft").val();
let device = $("#device option:selected").text();
let devices = $("#device option:selected").val();
let battery = $("#battery").val();
let voc = $("#voc").val();
let vin = $("#vin").val();
let lin = $("#lin").val();
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

if(devices == 2|| devices == 3 &&   battery === null){    
   $(".case").after("<textarea class='form-control mb-3' rows='30' id='submit-case'></textarea>");
   $("#submit-case").val("\n===== CUSTOMER INFO ===== \n Full Name: " + fname + "\n Phone Number: " + pnumber + "\n E-mail Address: " + eadd + "\n Previous Case: " + pcase + "\n Serial Number: " + sn + "\n\n===== CUSTOMER STATEMENT=====\n •What's the issue? \n" + issue + "\n\n===== INVESTIGATION =====\n •When did the issue start? " + in1 + "\n•When was the Nest installed? " + in2 + "\n•Issue frequency: " + in3 + "\n•Further probing: \n" + in4 + "\n===== CONFIGURATION ===== \nDevice: " + device + "\n\nWiring and Color: \n" + wiring.join(", ") + "\n" + color.join(", ") + "\n\nPower Reading: \n" + "Battery: " + battery + "\nVOC: " + voc + "\nVIN: " + vin + "\nLIN " + lin + "\n\n=====TROUBLESHOOTING =====\n Troubleshooting steps and results: \n" + ts + "\n\n ===== RESOLUTION =====\n •Can you confirm/test if it's working now? (Y/N) " + rs + "\n •What resolved the issue: " + resolution + "\n\n ===== NOTES FOR THE NEXT AGENT ===== \n• Further troubleshooting steps: " + ft);
} else if(devices == 4) {
   $(".case").after("<textarea class='form-control mb-3' rows='30' id='submit-case'></textarea>");
   $("#submit-case").val("\n===== CUSTOMER INFO ===== \n Full Name: " + fname + "\n Phone Number: " + pnumber + "\n E-mail Address: " + eadd + "\n Previous Case: " + pcase + "\n Serial Number: " + "\n Device: " + device + sn + "\n\n===== CUSTOMER STATEMENT=====\n •What's the issue? \n" + issue + "\n\n===== INVESTIGATION =====\n •When did the issue start? " + in1 + "\n•When was the Nest installed? " + in2 + "\n•Issue frequency: " + in3 + "\n•Further probing: \n" + in4 + "\n\n=====TROUBLESHOOTING =====\n Troubleshooting steps and results: \n" + ts + "\n\n ===== RESOLUTION =====\n •Can you confirm/test if it's working now? (Y/N) " + rs + "\n •What resolved the issue: " + resolution + "\n\n ===== NOTES FOR THE NEXT AGENT ===== \n• Further troubleshooting steps: " + ft);
} else {
   $(".case").after("<textarea class='form-control mb-3' rows='30' id='submit-case'></textarea>");
   $("#submit-case").val("\n===== CUSTOMER INFO ===== \n Full Name: " + fname + "\n Phone Number: " + pnumber + "\n E-mail Address: " + eadd + "\n Previous Case: " + pcase + "\n Serial Number: " + sn + "\n\n===== CUSTOMER STATEMENT=====\n •What's the issue? \n" + issue + "\n\n===== INVESTIGATION =====\n •When did the issue start? " + in1 + "\n•When was the Nest installed? " + in2 + "\n•Issue frequency: " + in3 + "\n•Further probing: \n" + in4 + "\n\n=====TROUBLESHOOTING =====\n Troubleshooting steps and results: \n" + ts + "\n\n ===== RESOLUTION =====\n •Can you confirm/test if it's working now? (Y/N) " + rs + "\n •What resolved the issue: " + resolution + "\n\n ===== NOTES FOR THE NEXT AGENT ===== \n• Further troubleshooting steps: " + ft);
}

});

$("#battery").focus(function(){
   $(this).val("V");
});

$("#voc").focus(function(){
   $(this).val("V");
});

$("#vin").focus(function(){
   $(this).val("V");
});

$("#lin").focus(function(){
   $(this).val("mA");
});

$("#reset-btn").click(function(){ 
  $('html, body').animate({scrollTop:0}, '300');
  $('#myForm')[0].reset();
  $("#submit-case").remove();
  $("#copy-btn").hide();
  $("#config").hide();
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

$(document).ready(function () {
    $('input[name="wiring"]').on('click',function () {
        if ($('#y1').is(':checked')) {
          $("#input-y1").val("Yellow");  
        } else {
          $("#input-y1").val("");
        } 
        if ($('#y2').is(':checked')) {
          $("#input-y2").val("Yellow");
        } else {
          $("#input-y2").val("");
        }
        
        if ($('#g').is(':checked')) {
          $("#input-g").val("Green");
        } else {
          $("#input-g").val("");
        } 
        
        if ($('#ob').is(':checked')) {
          $("#input-ob").val("Orange");
        } else {
          $("#input-ob").val("");
        }
        
        if ($('#rc').is(':checked')) {
          $("#input-rc").val("Red");
        } else {
          $("#input-rc").val("");
        } 
        
        if ($('#w1').is(':checked')) {
          $("#input-w1").val("White");
        } else {
          $("#input-w1").val("");
        }
        
        if ($('#w2').is(':checked')) {
          $("#input-w2").val("Brown");
        } else {
          $("#input-w2").val("");
        }
        
        if ($('#g').is(':checked')) {
          $("#input-g").val("Green");
        } else {
          $("#input-g").val("");
        }
        
        if ($('#c').is(':checked')) {
          $("#input-c").val("Blue");
        } else {
          $("#input-c").val("");
        }
        
        if ($('#star').is(':checked')) {
          $("#input-star").val("Brown");
        } else {
          $("#input-star").val("");
        }
        
        if ($('#rh').is(':checked')) {
          $("#input-rh").val("Red");
        } else {
          $("#input-rh").val("");
        }
    });
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
