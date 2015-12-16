var Tiled = Tiled || {};

Tiled.Preload = {
	preload: function() {
		this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloadbar');
		this.preloadBar.anchor.setTo(0.5);

		this.load.setPreloadSprite(this.preloadBar);

		this.load.tilemap('castle', 'my-assets/map-2.json', null, Phaser.Tilemap.TILED_JSON);
		this.load.image('gameTiles', 'my-assets/tilesheet.png');
		this.load.image('player', 'original/assets/images/player.png');
		this.load.image('goldenapple', 'my-assets/goldenapple.png');
	},

	create: function() {
		this.state.start('Game');
	}
};