new Vue({
    el: '#app',
    data: {
        playerHP: 100,
        monsterHP: 100,
        isStart: false,
        process: []
    },
    methods: {
        newGame: function() {
            this.isStart = true;
            this.playerHP = 100;
            this.monsterHP = 100;
        },
        attack: function() {
            if (this.monsterHP <= 0) {
                alert("You win ^_^");
                this.monsterHP = 0;
                this.isStart = false;
                return;
            }

            max = 10;
            min = 5;
            damage = Math.max(Math.floor(Math.random() * max) + 1, min);
            this.monsterHP -= damage;
            this.process.unshift({
                isPlayer: true,
                content: "Player hits monster for " + damage
            });

            if (this.playerHP <= 0) {
                alert("You lost ^_^");
                this.playerHP = 0;
                this.isStart = false;
                return;
            }

            max = 12;
            min = 5;
            damage = Math.max(Math.floor(Math.random() * max) + 1, min);
            this.playerHP -= damage;
            this.process.unshift({
                isPlayer: false,
                content: "Monster hits player for " + damage
            });
        },
        spAttack: function(max, min) {
            if (this.monsterHP > this.playerHP) {
                this.monsterHP -=  Math.max(Math.floor(Math.random() * max) + 1, min);
                this.process.unshift({
                    isPlayer: true,
                    content: "Player hits monster for " + damage
                });
            }
        },
        heal: function() {
            if (this.playerHP > 50) {
                return false;
            }else if (this.playerHP <= 50) {
                this.playerHP += 10
            }else {
                this.playerHP = 50;
            }
        },
        lost: function() {
            this.isStart = false;
            alert('End game');
            this.playerHP = this.monsterHP = 100;
            this.process = [];
        }
    }
});