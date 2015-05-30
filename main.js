var game = new Phaser.Game(1280, 720, Phaser.AUTO, 'GI Jam', {preload: preload, create: create, update: update});
var dung;
var buttonLeft, buttonRight;
var main;

var states = {
	MAIN: 0,
	MENU: 1,
};
var state = states.MAIN;

function Dungeon(){
	this.boss = new Boss();
	this.cardboard = 0;
	this.souls = 0;
	this.rooms = [];
	this.minions = [];
	this.currentRoom = 0;
}

function Boss(){
	this.power = 10;
	this.health = 100;
}

function Minion(){
	this.power = 10;
	this.health = 100;
}

function Room(){
	this.sprite = null;
	this.monster = null;
	this.trap = null;
}

function preload(){
	game.load.image('room1', "images/room.png");
	game.load.image('arrow', "images/arrow.png");
}

function create(){
	main = game.add.group();
	dung = new Dungeon();
	var bossRoom = new Room();
	bossRoom.monster = dung.boss;
	bossRoom.sprite = main.create(128, 128, 'room1');
	dung.rooms.push(bossRoom);
	
	// clicky buttons
	buttonLeft = main.create(64, 360, 'arrow');
	buttonLeft.anchor.setTo(0.5, 0.5);
	buttonLeft.scale.x = -1;
	
	buttonRight = main.create(1216, 360, 'arrow');
	buttonRight.anchor.setTo(0.5, 0.5);
}

function update(){
	if(state == states.MAIN){
		main.visible = true;
	} else {
		main.visible = false;
	}
}
