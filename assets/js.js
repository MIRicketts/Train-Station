
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
$("#train-form").on("submit", function(event) {
  event.preventDefault();
  var trainData = {
    
    trainName: $("#trainName-input").val().trim(),
    destination: $("#destination-input").val().trim(),
    trainArrival: $("#trainArrival-input").val().trim(),
    frequency: $("#frequency-input").val().trim()
  
  }
  
  
console.log(trainData)

// save info to firebase
database.ref().push(trainData);

});

database.ref().on("child_added", function (childSnapshot){


var trainDa = childSnapshot.val();

var dateConverted = moment(trainDa.trainArrival, "HH:mm"). subtract(1, "year");



var frequencyTime = moment ();

var $tr = $("<tr>")

var $tdtrainName = $("<td>").text(trainDa.trainName);
var $tddestination = $("<td>").text(trainDa.destination);
var $tdtrainArrival = $("<td>").text(trainDa.trainArrivalTime);
var $tdfrequency = $("<td>").text(trainDa.frequencyTime);


$tr.append($tdtrainName, $tddestination, $tdtrainArrival, $tdfrequency)

$("tbody").append($tr)

})

