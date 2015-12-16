var Tiled = Tiled || {};

Tiled.game = new Phaser.Game(600, 300, Phaser.AUTO);

Tiled.game.state.add('Boot', Tiled.Boot);
Tiled.game.state.add('Preload', Tiled.Preload);
Tiled.game.state.add('Game', Tiled.Game);

Tiled.game.state.start('Boot');