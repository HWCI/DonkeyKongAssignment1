DK.Howto = function(game) {};
DK.Howto.prototype = {
    create: function() {
        this.jumpButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.add.sprite(0, 0, 'bg');
        this.add.sprite(160, 160, 'U');
        this.add.sprite(176, 160, 'S');
        this.add.sprite(192, 160, 'E');
        this.add.sprite(228, 160, 'C');
        this.add.sprite(244, 160, 'U');
        this.add.sprite(260, 160, 'R');
        this.add.sprite(276, 160, 'S');
        this.add.sprite(292, 160, 'O');
        this.add.sprite(308, 160, 'R');
        this.add.sprite(324, 160, 'S');
        this.add.sprite(360, 160, 'T');
        this.add.sprite(376, 160, 'O');
        this.add.sprite(412, 160, 'C');
        this.add.sprite(412+16, 160, 'O');
        this.add.sprite(16*2+412, 160, 'N');
        this.add.sprite(16*3+412, 160, 'T');
        this.add.sprite(16*4+412, 160, 'R');
        this.add.sprite(16*5+412, 160, 'O');
        this.add.sprite(16*6+412, 160, 'L');
        this.add.sprite(16*7+412+20, 160, 'M');
        this.add.sprite(16*8+412+20, 160, 'A');
        this.add.sprite(16*9+412+20, 160, 'R');
        this.add.sprite(16*10+412+20, 160, 'I');
        this.add.sprite(16*11+412+20, 160, 'O');
        this.add.sprite(160, 260, 'up');
        this.add.sprite(200, 260, 'down');
        this.add.sprite(240, 260, 'right');
        this.add.sprite(280, 260, 'left');
        this.add.sprite(320, 260, 'space');
        this.add.sprite(380, 260, 'MR-jump-R');
        this.add.sprite(160, 400, 'A');
        this.add.sprite(176, 400, 'V');
        this.add.sprite(16*2+160, 400, 'O');
        this.add.sprite(16*3+160, 400, 'I');
        this.add.sprite(16*4+160, 400, 'D');
        this.add.sprite(16*5+180, 400, 'B');
        this.add.sprite(16*6+180, 400, 'A');
        this.add.sprite(16*7+180, 400, 'R');
        this.add.sprite(16*8+180, 400, 'R');
        this.add.sprite(16*9+180, 400, 'E');
        this.add.sprite(16*10+180, 400, 'L');
        this.add.sprite(16*11+180, 400, 'S');
        this.add.sprite(16*12+200, 400, 'A');
        this.add.sprite(16*13+200, 400, 'N');
        this.add.sprite(16*14+200, 400, 'D');
        this.add.sprite(16*15+220, 400, 'F');
        this.add.sprite(16*16+220, 400, 'I');
        this.add.sprite(16*17+220, 400, 'R');
        this.add.sprite(16*18+220, 400, 'E');
        this.add.sprite(180, 480, 'barrel-0');
        this.add.sprite(200, 480, 'flame-L1');
    },
    update: function(){
        if (this.jumpButton.isDown){
            this.startGame()
        }
    },
    startGame: function() {
        this.game.state.start('Game');
    }
};
