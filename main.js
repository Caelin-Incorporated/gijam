<<<<<<< HEAD
=======
var game = new Phaser.Game(1024, 768, Phaser.AUTO, 'GI Jam', {preload: preload, create: create, update: update});

function preload(){
	game.load.image('guy', "images/test.png");
}

function create(){
	game.add.sprite(0,0, 'guy');
}

function update(){
	
}
>>>>>>> b68dcebe16fcb6b1643565ba04905c6635ee3775
