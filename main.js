var game = new Phaser.Game(1280, 720, Phaser.AUTO, 'GI Jam', {preload: preload, create: create, update: update});
var dung;


function Dungeon(){
	this.boss = new Boss();
	this.cardboard = 0;
	this.souls = 0;
	this.rooms = [];
	this.minions = [];
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
	game.load.image('guy', "images/test.png");
}

function create(){
	dung = new Dungeon();
	var bossRoom = new Room();
	bossRoom.monster = dung.boss();
	dung.rooms.push(bossRoom);
	game.add.sprite(0,0, 'guy');
	
}

function update(){
	
}
