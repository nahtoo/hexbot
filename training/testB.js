function showMessage() {
    alert( 'Hello everyone!');
    document.getElementById("test").innerHTML = "hi";
  }

//problem with API request. Getting this error "Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https."
function getAPI() {
  var request = new XMLHttpRequest();
  request.open('GET','api.noopschallenge.com/hexbot',true);
  request.onload = function() {
  var data = JSON.parse(this.response);
  console.log(data);
  }
  request.send();
}