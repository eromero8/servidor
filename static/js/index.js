

function valores() {
  //alert("led on");
  console.log("valores");
  //document.getElementById("sensor").innerHTML="led on";
  message = new Paho.MQTT.Message("BOTON1");
      message.destinationName = "efromero.fie@unach.edu.ec/t1";
      client.send(message);
	
function historial(){  
  //alert("hostorial");
  console.log("led off");
  message = new Paho.MQTT.Message("BOTON2");
      message.destinationName = "efromero.fie@unach.edu.ec/t1";
      client.send(message);
	

  







// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "efromero.fie@unach.edu.ec",
    password: "eromero8",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("efromero.fie@unach.edu.ec/t2");
    message = new Paho.MQTT.Message("");
    message.destinationName = "efromero.fie@unach.edu.ec/t2";
    client.send(message);
	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
	  document.getElementById("sensor").innerHTML=message.payloadString;
  }
