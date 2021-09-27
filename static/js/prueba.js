alert("hola desde prueba")
document.getElementById('sensor_1').innerHTML='Sensor 1';
document.getElementById('sensor_2').innerHTML='Sensor 2';

function LED1_On(){
	document.getElementById('sensor_1').innerHTML='Led Prendido';
console.log('Se presiono el boton 1')
;}
function LED1_Off(){
	document.getElementById('sensor_2').innerHTML='Led Apagado';
console.log('Se presiono el boton 2')
;}
function Reiniciar1(){
	document.getElementById('sensor_1').innerHTML='Reiniciando....';
document.getElementById('sensor_2').innerHTML='Reiniciando....';
console.log('Reiniciando...')
;}