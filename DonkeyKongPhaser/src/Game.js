DK.Game = function(game) {
};
//noinspection JSUnusedLocalSymbols
DK.Game.prototype = {
        create: function () {
            this.add.sprite(0, 0, 'bg');
            this.game.renderer.renderSession.roundPixels = true;
            this.physics.startSystem(Phaser.Physics.ARCADE);
            this.fontBig = {font: "24px Arial", fill: "#e4beef"};
            this.score = 0;
            this.ishurttimer = 0;
            this.level = 1;
            this.life = 3;
            this.maxLevels = 3;
            this.MRspeed = 80;
            this.BRspeed = 80;
            this.FEspeed = 50;
            this.MRStartPos = {x: DK._WIDTH * 0.5, y: DK._HEIGHT - 50};
            this.scoreText = this.game.add.text(15, 15, "Score: " + this.score, this.fontBig);
            this.lifeText = this.game.add.text(650, 15, "Lifes: " + this.life, this.fontBig);
            this.random = 0;
            this.jumpTimer = 0;
            this.hammerTime = 0;
            this.havehammer = false;
            this.barreltimer = 0;
            this.flametimer = 0;
            this.floors = this.add.physicsGroup();
            this.flames = this.add.physicsGroup();
            this.barrels = this.add.physicsGroup();
            this.music = this.add.audio('audio-level');
            this.music.play('', 0, 0.8, true, true);
            this.hammermusic = this.add.audio('audio-hammer');
            this.stairs = this.add.physicsGroup();

            this.Princess = this.add.sprite(DK._WIDTH * 0.3, 60, 'Princess');
            this.physics.enable(this.Princess, Phaser.Physics.ARCADE);
            this.Princess.anchor.set(0.5);
            this.Princess.body.setSize(80, 48);
            this.Princess.animations.add('Idle', [2, 1, 0, 1], 1, true);
            this.Princess.animations.play('Idle');
            this.Princess.body.allowGravity = false;
            this.Princess.body.immovable = true;

            this.donkey = this.add.sprite(DK._WIDTH * 0.4, 20, 'DK-Full');
            this.donkey.animations.add('Throw-Left', [0, 1], 1, false);
            this.donkey.animations.add('Throw-Right', [0, 2], 1, false);


            this.mario = this.add.sprite(this.MRStartPos.x, this.MRStartPos.y, 'Mario-Full');
            this.physics.enable(this.mario, Phaser.Physics.ARCADE);
            this.mario.anchor.set(0.5);
            this.mario.body.gravity.y = 500;
            this.mario.body.collideWorldBounds = true;
            this.mario.body.setSize(10, 16, 9, 16);
            this.mario.animations.add('left', [0, 2], 2, true);
            this.mario.animations.add('left-jump', [1], 2, true);
            this.mario.animations.add('right', [3, 5], 2, true);
            this.mario.animations.add('right-jump', [4], 2, true);
            this.mario.animations.add('climb', [6, 7], 2, true);
            this.mario.animations.add('lefthammer',[8,10], 2, true);
            this.mario.animations.add('righthammer',[9,11], 2, true);

            this.initLevel();
            this.initflame();
            this.inithammer();
            this.keys = this.game.input.keyboard.createCursorKeys();
            this.jumpButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
            this.jumpSound = this.game.add.audio('audio-jump');
            this.hurtSound = this.game.add.audio('audio-fail');
            this.borderGroup = this.add.group();
            this.borderGroup.physicsBodyType = Phaser.Physics.ARCADE;
            this.borderGroup.enableBody = true;
            this.borderGroup.create(0, 0, 'border');
            this.borderGroup.create(DK._WIDTH - 2, 0, 'border');
            this.borderGroup.setAll('body.immovable', true);
            //this.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);

        },
        initLevel: function () {
            this.ladder(140, 88, 'stair');
            this.ladder(450, 88, 'stair');
                    for (var tmp1 = 0; tmp1 < 785;) {
                        this.platform(tmp1,600 - 15 );
                        tmp1 = tmp1 + 15;
                    }
                    for (var tmp2 = 165; tmp2 <= 435;) {
                        this.platform(tmp2, 88);
                        tmp2 = tmp2 + 15;
                    }
                    for (var v1 = 600 - 15 - 71; v1 >= 159;) {
                        var h1 = 0;
                        var ladnum = 0;
                        for (h1 = 0; h1 < 770;) {
                            var random = (Math.floor(1 + Math.random() * 8));
                            if (random != 2 && random != 3 && random != 4) {
                                this.platform(h1,v1);
                            }
                            if (random == 2 || random == 3){
                                h1 += 30;
                                this.platform(h1,v1);
                            }
                            if (random == 4){
                                this.ladder(h1,v1);
                                ladnum++;
                                h1 +=15;
                                this.platform(h1,v1)
                                }    h1 = h1 + 15;
                            }
                        if(ladnum == 0){
                            this.ladder(h1,v1)
                        }            v1 = v1 - 71;
                    }


        },
    platform: function(x, y){
        if(this.level==1) {
            this.floor = this.add.sprite(x, y, 'floor_R');
        }
        if(this.level==2) {
            this.floor = this.add.sprite(x, y, 'floor_B');
        }
        if(this.level==3) {
            this.floor = this.add.sprite(x, y, 'floor_G');
        }
        this.floors.add(this.floor);
        this.physics.enable(this.floor, Phaser.Physics.ARCADE);
        this.floor.body.setSize(15,15);
        this.floor.body.allowGravity = false;
        this.floor.body.immovable = true;
    },

    ladder: function(x, y){
        this.stair = this.add.sprite(x, y, 'stair');
        this.stairs.add(this.stair);
        this.physics.enable(this.stair, Phaser.Physics.ARCADE);
        this.stair.body.setSize(15,71);
        this.stair.body.allowGravity = false;
        this.stair.body.immovable = true;
    },
        initflame: function () {
            this.flame = this.add.sprite(DK._WIDTH * 0.5, 90, 'Flame-Full');
            this.flames.add(this.flame);
            this.physics.enable(this.flame, Phaser.Physics.ARCADE);
            this.flame.body.collideWorldBounds = true;
            this.flame.anchor.set(0.5);
            this.flame.body.gravity.y = 500;
            this.flame.body.velocity.x = this.FEspeed;
            this.flame.body.setSize(6, 6, 10, 18);
            this.flame.body.bounce.set(1, 0);
            this.flame.animations.add('leftfire', [0, 1, 2], 6, true);
            this.flame.animations.add('rightfire', [3, 4, 5], 6, true);
        },
        initbarrel: function () {
            var random = (Math.floor(1 + Math.random() * 2));
            if (random == 1) {
                this.donkey.animations.play('Throw-Left');
                this.barrel = this.add.sprite(DK._WIDTH * 0.4 - 20, 40, 'Barrel-Roll');
                this.barrels.add(this.barrel);
                this.physics.enable(this.barrel, Phaser.Physics.ARCADE);
                this.barrel.body.collideWorldBounds = true;
                this.barrel.body.velocity.x = 0 - this.BRspeed;
                this.barrel.anchor.set(0.5);
                this.barrel.body.gravity.y = 500;
                this.barrel.body.setSize(10, 11, 5, 11);
                this.barrel.body.bounce.set(1, 0);
                this.barrel.animations.add('rolling', [0, 1, 2, 3], 10, true);
                this.barrel.animations.play('rolling')
            }
        if(random == 2)
        {
        this.donkey.animations.play('Throw-Right');
        this.barrel = this.add.sprite(DK._WIDTH * 0.4 + 20, 40, 'Barrel-Roll');
        this.barrels.add(this.barrel);
            this.physics.enable(this.barrel, Phaser.Physics.ARCADE);
        this.barrel.body.collideWorldBounds = true;
        this.barrel.body.velocity.x = this.BRspeed;
    this.barrel.anchor.set(0.5);
    this.barrel.body.gravity.y = 500;
    this.barrel.body.setSize(20, 22);
    this.barrel.body.bounce.set(1, 0);
    this.barrel.animations.add('rolling', [0, 1, 2, 3], 10, true);
    this.barrel.animations.play('rolling')
}
},
    hurt: function(mario, mob) {
        if(!this.havehammer) {
            if (this.time.time > this.ishurttimer) {
                this.ishurttimer = this.time.time + 1000;
                this.hurtSound.play();
                this.life -= 1;
                if (this.life <= 0) {
                    this.music.stop();
                    this.game.state.start('Gameover');
                }
            }
        } else{
            mob.kill();
            this.score += 500;
        }
    },
    inithammer: function(){
        this.hammers = this.add.group();
        for(var hnum = 2; hnum>=0; hnum--){
            var rany = (Math.floor(1 + Math.random() * 7))-1;
            var ranx = (Math.floor(1 + Math.random() * 10));
            rany = (600 - 50 - (70*rany));
            ranx = (60*ranx);
                this.hammer = this.add.sprite(ranx, rany, 'hammer');
                this.hammers.add(this.hammer);
                this.physics.enable(this.hammer, Phaser.Physics.ARCADE);
                this.hammer.anchor.set(0.5);
                this.hammer.body.immovable = true;
                    }
    },
    collhammer: function(mario, hammer) {
        this.havehammer = true;
        this.hammermusic.play('', 0, 0.8, false, false);
        this.hammerTime = this.time.time + 8000;
        hammer.kill();
    },
   // fireCling: function(fire, stair){
    //    if(fire.x == stair.x){
     //       return true;
     //   }else {
     //       return false;
     //   }
   // },
    fireup: function(flame, stairs){
      flame.body.velocity.y = -300;
          },
    updateCounter: function() {
        this.scoreText.setText("Score: "+this.score);
        this.lifeText.setText("Life: "+this.life);
    },
    update: function() {
        this.physics.arcade.collide(this.flames, this.floors);
        this.physics.arcade.collide(this.flames, this.borderGroup);
        this.physics.arcade.overlap(this.flames, this.mario, this.hurt, null, this);
        this.physics.arcade.overlap(this.barrels, this.mario, this.hurt, null, this);
        this.physics.arcade.overlap(this.hammers, this.mario, this.collhammer, null, this);
        this.physics.arcade.collide(this.mario, this.floors);
        this.physics.arcade.collide(this.barrels, this.floors);
        this.physics.arcade.collide(this.barrels, this.borderGroup);
        this.physics.arcade.overlap(this.mario, this.Princess, this.finishLevel, null, this);
        this.physics.arcade.overlap(this.mario, this.stairs, null, null, this);
        var standing = this.mario.body.blocked.down || this.mario.body.touching.down;
        var climbing = this.physics.arcade.overlap(this.mario, this.stairs, null, null, this);
        this.physics.arcade.overlap(this.flames, this.stairs, this.fireup, this.fireCling, this);
        this.updateCounter();

        this.mario.body.velocity.x = 0;
        this.flame.body.gravity.y = 500;
        if(this.hammerTime < this.time.time ){
            this.havehammer = false;
            this.hammermusic.stop();
        }

        if(this.keys.left.isDown) {
            this.mario.body.velocity.x = 0-this.MRspeed;
            if (this.facing !== 'left' && this.havehammer == false)
            {
                this.mario.play('left');
                this.facing = 'left';
            }
            if (this.facing !== 'left' && this.havehammer == true) {
                this.mario.play('lefthammer');
                this.facing = 'left';

            }
        }
        else if(this.keys.right.isDown) {
            this.mario.body.velocity.x = this.MRspeed;
            if (this.facing !== 'right' && this.havehammer == false) {
                this.mario.play('right');
                this.facing = 'right';
            }
            if (this.facing !== 'right' && this.havehammer == true) {
                this.mario.play('righthammer');
                this.facing = 'right';

            }
        }
        if(this.jumpButton.isDown){
            if (standing && this.jumpButton.isDown && this.time.time > this.jumpTimer)
            {
                this.mario.body.velocity.y = -200;
                this.jumpTimer = this.time.time + 750;
                this.jumpSound.play();
            }
        }
        if(this.keys.up.isDown) {
            if(climbing) {
                this.mario.body.velocity.y = 0 - this.MRspeed;
                this.mario.play('climb');
            }
        }
        if(this.keys.down.isDown) {
            if(climbing) {
                this.mario.body.velocity.y = this.MRspeed;
                this.mario.play('climb');

            }
        }
        if (this.time.time > this.flametimer) {
            this.initflame();
            this.flametimer = this.time.time + 8000;
        }
        if(this.time.time > this.barreltimer) {
            this.initbarrel();
            this.barreltimer = this.time.time + 4000;
        }
        if(this.flame.body.velocity.x < 0){
            this.flame.animations.play('leftfire');
        }else{this.flame.animations.play('rightfire');}
    },
    finishLevel: function() {
        if (this.level >= this.maxLevels) {
            this.score += 10000;
            this.music.stop();
            this.game.state.start('Win');
        } else {
            this.level++;
            this.score += 10000;
            this.mario.body.x = this.MRStartPos.x;
            this.mario.body.y = this.MRStartPos.y;
            this.mario.body.velocity.x = 0;
            this.mario.body.velocity.y = 0;
            this.barrels.destroy(true,true);
            this.flames.destroy(true,true);
            this.floors.destroy(true, true);
            this.stairs.destroy(true,true);
            this.hammers.destroy(true,true);
            this.initLevel();
            this.initflame();
            this.inithammer();
            }
    }
};