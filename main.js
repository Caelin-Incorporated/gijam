var game = new Phaser.Game(1280, 720, Phaser.AUTO, 'GI Jam', {preload: preload, create: create, update: update});
var dung;
var buttonLeft, buttonRight;

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
	dung = new Dungeon();
	var bossRoom = new Room();
	bossRoom.monster = dung.boss;
	bossRoom.sprite = game.add.sprite(128, 128, 'room1');
	dung.rooms.push(bossRoom);
	
	// clicky buttons
	buttonLeft = game.add.sprite(64, 360, 'arrow');
	buttonLeft.anchor.setTo(0.5, 0.5);
	buttonLeft.scale.x = -1;
	
}

function update(){
	for(var i=0; i < dung.rooms.length; ++i){
	}
}
