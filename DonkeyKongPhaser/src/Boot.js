var DK = {
    _WIDTH: 800,
    _HEIGHT: 600
};
DK.Boot = function(game) {};
DK.Boot.prototype = {
    preload: function() {},
    create: function() {

        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
        this.game.state.start('Preloader');
    }
};
