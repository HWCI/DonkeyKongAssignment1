DK.Gameover = function(game) {};
DK.Gameover.prototype = {
    create: function() {
        this.jumpButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.add.sprite(0, 0, 'bg');
        this.add.sprite(160, 160, 'Y');
        this.add.sprite(176, 160, 'O');
        this.add.sprite(192, 160, 'U');
        this.add.sprite(228, 160, 'L');
        this.add.sprite(244, 160, 'O');
        this.add.sprite(260, 160, 'S');
        this.add.sprite(276, 160, 'E');
        this.music = this.add.audio('audio-death');
        this.music.play('', 0, 0.3, true, true);
    },
    update: function(){
        if (this.jumpButton.isDown){
            this.startGame()
        }
    },
    startGame: function() {
        this.music.stop();
        this.game.state.start('MainMenu');
    }
};
