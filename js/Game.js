var Tiled = Tiled || {};

Tiled.Game = {
	create: function() {
		this.map = this.game.add.tilemap('castle');
		this.map.addTilesetImage('tiles', 'gameTiles');

		this.backgroundlayer = this.map.createLayer('backgroundLayer');
		this.blockedLayer = this.map.createLayer('blockedLayer');

		this.map.setCollisionBetween(1, 2000, true, 'blockedLayer');
		this.backgroundlayer.resizeWorld();

		this.createItems();

		var playerStart = this.findObjectsByType('playerStart', this.map, 'objectLayer')[0];

		this.player = this.game.add.sprite(playerStart.x, playerStart.y, 'player');


		this.game.physics.arcade.enable(this.player);
		this.player.body.collideWorldBounds = true;

		this.camera.follow(this.player);
		this.cursors = this.game.input.keyboard.createCursorKeys();

	},

	update: function() {
		this.player.body.velocity.x = 0;
		this.player.body.velocity.y = 0;

		if (this.cursors.up.isDown) this.player.body.velocity.y -= 50;
		if (this.cursors.down.isDown) this.player.body.velocity.y += 50;
		if (this.cursors.left.isDown) this.player.body.velocity.x -= 50;
		if (this.cursors.right.isDown) this.player.body.velocity.x += 50;

		this.game.physics.arcade.collide(this.player, this.blockedLayer);
		this.game.physics.arcade.overlap(this.player, this.items, this.collect, null, this);
	},

	collect: function(player, collectable) {
		console.log('Yum, ate an apple.');
		collectable.destroy();
	},

	createItems: function() {
		this.items = this.game.add.group();
		this.items.enableBody = true;

		var item;
		this.findObjectsByType('item', this.map, 'objectLayer').forEach(function(element) {
			this.createFromTiledObject(element, this.items);
		}.bind(this));
	},

	findObjectsByType: function(type, map, layer) {
		return map.objects[layer].map(function(element) {
			if (element.properties.type !== type) return null;
			element.y -= map.tileHeight;
			return element;
		}).filter(function(e) {return !!e;});
	},

	createFromTiledObject: function(element, group) {
		var sprite = group.create(element.x, element.y, element.properties.sprite);
		Object.keys(element.properties).forEach(function(key) {
			sprite[key] = element.properties[key];
		});
	}
};