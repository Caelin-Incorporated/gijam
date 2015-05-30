var game = new Phaser.Game(1280, 720, Phaser.AUTO, 'GI Jam', {preload: preload, create: create, update: update});
var dung;
var buttonLeft, buttonRight;
var main;
var hpBar;
var hpText;

var states = {
	BUILD: 0,
	TRAPS: 1,
	MINIONS: 2,
	CHALLENGE: 3,
	INTRO: 4,
};
var state = states.BUILD;

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
	game.load.image('minions', "images/minions.png");
	game.load.image('trap', "images/trap.png");
	game.load.image('challenge', "images/challenge.png");
	game.load.image('hp', 'images/health.png');
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
	
	// Minions button
	buttonMin = main.create(940, 640, 'minions');
	buttonMin.anchor.setTo(0.5, 0.5);
	buttonMin.events.onInputUp.add(toMinion, this);
	
	hpBar = main.create(128, 10, 'hp');
	
	// Traps button
	buttonTrap = main.create(340, 640, 'trap');
	buttonTrap.anchor.setTo(0.5, 0.5);
	buttonTrap.events.onInputUp.add(toTraps, this);
	
	// Challenge a party! button
	buttonChal = main.create(640, 640, 'challenge');
	buttonChal.anchor.setTo(0.5, 0.5);
	
	hpText = game.add.text(10,10,"Health:", {fontSize: '32px', fill:"#FF0000"});
	main.add(hpText);
	buttonChal.events.onInputUp.add(toChallenge, this);
}

function toMinion (event, sprite) {
	
	
}

function toTraps (event, sprite) {
	
}

function toChallenge (event, sprite) {
	
}

function toBuild (event, sprite) {
	
}

function update(){
	if(state == states.BUILD){
		main.visible = true;
		hpBar.scale.x = (dung.boss.health/5);
	} else {
		main.visible = false;
	}
	
	if (game.input.activePointer.isDown) {
		if (game.input.activePointer.x) {
			
		}
	}
}
