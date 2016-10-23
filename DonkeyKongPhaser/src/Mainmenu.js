DK.MainMenu = function(game) {};
DK.MainMenu.prototype = {
    create: function() {
        this.add.sprite(0, 0, 'title-background');
        this.music = this.add.audio('audio-title');
        this.music.play('', 0, 0.3, true, true);
        this.keys = this.game.input.keyboard.createCursorKeys();
        this.jumpButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    },
    update: function(){
        if (this.jumpButton.isDown){
            this.startGame()
        }
    },
    startGame: function() {
        this.music.stop();
        this.game.state.start('Howto');
    }
};
