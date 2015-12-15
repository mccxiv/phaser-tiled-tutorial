var Tiled = Tiled || {};

Tiled.Boot = {
	preload: function() {
		this.load.image('preloadbar', 'original/assets/images/preloader-bar.png');
	},

	create: function () {
		this.game.stage.backgroundColor = 'white';

		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;

		this.game.physics.startSystem(Phaser.Physics.ARCADE);

		this.state.start('Preload');
	}
};