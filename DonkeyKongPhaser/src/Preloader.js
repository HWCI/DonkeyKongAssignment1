//noinspection JSUnusedLocalSymbols
DK.Preloader = function(game) {


    this.ready = false;
};

DK.Preloader.prototype = {
    preload: function() {
        //Image
        this.load.image('barrel-0', 'img/barrel_1.png');
        this.load.image('barrel-90', 'img/barrel_2.png');
        this.load.image('barrel-180', 'img/barrel_3.png');
        this.load.image('barrel-270', 'img/barrel_4.png');
        this.load.image('barrel-fall', 'img/barrel_falling.png');
        this.load.image('barrel-stack', 'img/Barrel_Stack.png');
        this.load.image('heart-b', 'img/bheart.png');
        this.load.image('heart', 'img/heart.png');
        this.load.image('coin1', 'img/coin1.png');
        this.load.image('coin2', 'img/coin2.png');
        this.load.image('coin3', 'img/coin3.png');
        this.load.image('coin4', 'img/coin4.png');
        this.load.image('coin5', 'img/coin5.png');
        this.load.image('coin6', 'img/coin6.png');
        this.load.image('DK-barrel', 'img/dk_barrel.png');
        this.load.image('DK-normal', 'img/dk_default.png');
        this.load.image('DK-knockL', 'img/dk_l.png');
        this.load.image('DK-knockR', 'img/dk_r.png');
        this.load.image('DK-barrelR', 'img/dk_rb.png');
        this.load.image('DK-barrelL', 'img/dk_lb.png');
        this.load.image('flame-L1', 'img/flame_l1.png');
        this.load.image('flame-L2', 'img/flame_l2.png');
        this.load.image('flame-L3', 'img/flame_l3.png');
        this.load.image('flame-R1', 'img/flame_r1.png');
        this.load.image('flame-R2', 'img/flame_r2.png');
        this.load.image('flame-R3', 'img/flame_r3.png');
        this.load.image('sflame-L1', 'img/flame_sl1.png');
        this.load.image('sflame-L2', 'img/flame_sl2.png');
        this.load.image('sflame-L3', 'img/flame_sl3.png');
        this.load.image('sflame-R1', 'img/flame_sr1.png');
        this.load.image('sflame-R2', 'img/flame_sr2.png');
        this.load.image('sflame-R3', 'img/flame_sr3.png');
        this.load.image('floor_R', 'img/floor_1.png');
        this.load.image('floor_B', 'img/floor_2.png');
        this.load.image('floor_G', 'img/floor_3.png');
        this.load.image('stair','img/Stair.png');
        this.load.image('hammer', 'img/hammer.png');
        this.load.image('item-1','img/item_1.png');
        this.load.image('item-2','img/item_2.png');
        this.load.image('item-3','img/item_3.png');
        this.load.image('life','img/life_1.png');
        this.load.image('MR-climbing-1','img/mario_climb1.png');
        this.load.image('MR-climbing-2','img/mario_climb2.png');
        this.load.image('MR-deadL','img/mario_ld.png');
        this.load.image('MR-deadR','img/mario_rd.png');
        this.load.image('MR-hammer-Lup','img/mario_lh1.png');
        this.load.image('MR-hammer-Ldown','img/mario_lh2.png');
        this.load.image('MR-hammer-Rup','img/mario_rh1.png');
        this.load.image('MR-hammer-Rdown','img/mario_rh2.png');
        this.load.image('MR-hammer-jump-Lup','img/mario_lw1h1.png');
        this.load.image('MR-hammer-walk-Lup','img/mario_lw2h1.png');
        this.load.image('MR-hammer-jump-Ldown','img/mario_lw1h2.png');
        this.load.image('MR-hammer-walk-Ldown','img/mario_lw2h2.png');
        this.load.image('MR-hammer-jump-Rup','img/mario_rw1h1.png');
        this.load.image('MR-hammer-walk-Rup','img/mario_rw2h1.png');
        this.load.image('MR-hammer-jump-Rdown','img/mario_rw1h2.png');
        this.load.image('MR-hammer-walk-Rdown','img/mario_rw2h2.png');
        this.load.image('MR-idle-L','img/mario_ls.png');
        this.load.image('MR-idle-R','img/mario_rs.png');
        this.load.image('MR-jump-L','img/mario_lw1.png');
        this.load.image('MR-walk-L','img/mario_lw2.png');
        this.load.image('MR-jump-R','img/mario_rw1.png');
        this.load.image('MR-walk-R','img/mario_rw2.png');
        this.load.image('princess1','img/princess1.png');
        this.load.image('princess2','img/princess2.png');
        this.load.image('princess3','img/princess3.png');
        this.load.image('title-background','img/background.png');
        this.load.image('bg','img/bg.png');
        this.load.image('up','img/up.png');
        this.load.image('down','img/down.png');
        this.load.image('left','img/left.png');
        this.load.image('right','img/right.png');
        this.load.image('space','img/space.png');
        this.load.image('border','img/border.png');
        //Spritesheets
        this.load.spritesheet('Barrel-Roll','img/sprite/Barrel_Roll.png',24,20,4,0,8);
        this.load.spritesheet('DK-Full','img/sprite/dk_full.png',88,64,3,0,0);
        this.load.spritesheet('Flame-Full','img/sprite/flame_full.png',24,24,6,0,0);
        this.load.spritesheet('Princess','img/sprite/Princess_Scream.png',80,48,3,0,0);
        this.load.spritesheet('Mario-Full','img/sprite/Mario_full.png',30,32,12,0,0);
        this.load.spritesheet('Mario-Hammer','img/sprite/Mario_full-03.png',54,48,12,0,0);

        //Char Set
        this.load.image('A','img/char/ca.png');
        this.load.image('B','img/char/cb.png');
        this.load.image('C','img/char/cc.png');
        this.load.image('D','img/char/cd.png');
        this.load.image('E','img/char/ce.png');
        this.load.image('F','img/char/cf.png');
        this.load.image('G','img/char/cg.png');
        this.load.image('H','img/char/ch.png');
        this.load.image('I','img/char/ci.png');
        this.load.image('J','img/char/cj.png');
        this.load.image('K','img/char/ck.png');
        this.load.image('L','img/char/cl.png');
        this.load.image('M','img/char/cm.png');
        this.load.image('N','img/char/cn.png');
        this.load.image('O','img/char/co.png');
        this.load.image('P','img/char/cp.png');
        this.load.image('Q','img/char/cq.png');
        this.load.image('R','img/char/cr.png');
        this.load.image('S','img/char/cs.png');
        this.load.image('T','img/char/ct.png');
        this.load.image('U','img/char/cu.png');
        this.load.image('V','img/char/cv.png');
        this.load.image('W','img/char/cw.png');
        this.load.image('X','img/char/cx.png');
        this.load.image('Y','img/char/cy.png');
        this.load.image('Z','img/char/cz.png');
        //Audio;
        this.load.audio('audio-clear', ['audio/clear.mp3']);
        this.load.audio('audio-death', ['audio/death.wav']);
        this.load.audio('audio-fail', ['audio/fail.mp3']);
        this.load.audio('audio-gameover', ['audio/game_over.mp3']);
        this.load.audio('audio-hammer', ['audio/hammer.mp3']);
        this.load.audio('audio-hammer-get', ['audio/hammer.wav']);
        this.load.audio('audio-item-get', ['audio/itemget.wav']);
        this.load.audio('audio-jump', ['audio/jump.wav']);
        this.load.audio('audio-level', ['audio/level.mp3']);
        this.load.audio('audio-pause', ['audio/pause.mp3']);
        this.load.audio('audio-start', ['audio/start.mp3']);
        this.load.audio('audio-title', ['audio/title.mp3']);
        this.load.audio('audio-victory', ['audio/victory.mp3']);
        this.load.audio('audio-win', ['audio/death.wav']);


    },
    create: function() {
        this.game.state.start('MainMenu');
    }
};
