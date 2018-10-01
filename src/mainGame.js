const pathToAssets = '../assets/';

var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

var game = new Phaser.Game(config);

function preload() {
  this.load.image('sky',  '../assets/sky.png');
  this.load.image('ground', pathToAssets +'platform.png');
  this.load.image('star',pathToAssets + 'star.png');
  this.load.spritesheet('dude',pathToAssets + 'dude.png', {
    frameWidth: 32,
    frameHeight: 48
  });
}

function create() {
  this.add.image(400, 300, 'sky');
}

function update() {}
