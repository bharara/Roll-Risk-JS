
function Player(name, g, r) {
  this.name = name;
  this.gscore = 0;
  this.rscore = 0;
  this.g = g;
  this.r = r;
}

function roll () {
	var num = Math.floor(Math.random() * 6) + 1;
	if (num == 1) {
		curr.rscore = 0;
		document.getElementById(curr.r).innerHTML = curr.rscore;
		pass ()
	}
	else {
		curr.rscore += num;
		document.getElementById(curr.r).innerHTML = curr.rscore;
	}
	document.getElementById("dice").innerHTML = num;
}

function pass () {
	if (curr.name == "Player1"){
		curr = p2;}
	else{
		curr = p1;}
	document.getElementById("Turn").innerHTML = curr.name;
}

function hold () {
	curr.gscore += curr.rscore;
	curr.rscore = 0;
	document.getElementById(curr.g).innerHTML = curr.gscore;
	document.getElementById(curr.r).innerHTML = curr.rscore;
	pass ();
}

var p1 = new Player ("Player1", "gs1", "rs1");
var p2 = new Player ("Player2", "gs2", "rs2");
var curr = p1;
document.getElementById("gs1").innerHTML = 0;
document.getElementById("gs2").innerHTML = 0;
document.getElementById("rs1").innerHTML = 0;
document.getElementById("rs2").innerHTML = 0;
document.getElementById("dice").innerHTML = 0;
document.getElementById("Turn").innerHTML = curr.name;