
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAKtRyA3hFno4FfcQrbya-1HBFad4r0CnM",
    authDomain: "mars-21626.firebaseapp.com",
    databaseURL: "https://mars-21626.firebaseio.com",
    projectId: "mars-21626",
    storageBucket: "mars-21626.appspot.com",
    messagingSenderId: "964799723826"
  };
  firebase.initializeApp(config);

var database = firebase.database();

// create variable for data and put all data together. use {} to hold set of info 


// Create function to store train info
$("#submit-btn").on("click", function(event) {
  event.preventDefault();

  var trainNameVal = $("#trainName-input").val().trim()
  var destinationVal = $("#destination-input").val().trim()
  var arrivalVal = $("#trainArrival-input").val().trim()
  var frequencyVal = $("#frequency-input").val().trim()


  var trainData = {

    trainName: trainNameVal,
    destination: destinationVal,
    trainArrival: arrivalVal,
    frequency: frequencyVal
  
  }
  
  
console.log(trainData)

// save info to firebase
database.ref().push(trainData);

$("#trainName-input").val("");
$("#destination-input").val("");
$("#trainArrival-input").val("");
$("#frequency-input").val("");

});

database.ref().on("child_added", function (childSnapshot){


var trainDa = childSnapshot.val();

var dateConverted = moment(trainDa.trainArrival, "HH:mm"). subtract(1, "year");



var frequencyTime = moment (trainDa.frequency,);

var $tr = $("<tr>")

var $tdtrainName = $("<td>").text(trainDa.trainName);
var $tddestination = $("<td>").text(trainDa.destination);
var $tdtrainArrival = $("<td>").text(dateConverted);
var $tdfrequency = $("<td>").text(trainDa.frequency);


$tr.append($tdtrainName, $tddestination, $tdtrainArrival, $tdfrequency)

$("tbody").append($tr)

})

