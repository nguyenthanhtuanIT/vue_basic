new Vue({
    el: '#app',
    data: {
        playerHP: 100,
        monsterHP: 100,
        isStart: false
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
                this.isStart = false;
                return;
            }

            max = 10;
            min = 5;
            damage = Math.max(Math.floor(Math.random() * max) + 1, min);
            this.monsterHP -= damage;

            if (this.playerHP <= 0) {
                alert("You lost ^_^");
                this.isStart = false;
                return;
            }

            max = 12;
            min = 5;
            damage = Math.max(Math.floor(Math.random() * max) + 1, min);
            this.playerHP -= damage;


        }
    }
});