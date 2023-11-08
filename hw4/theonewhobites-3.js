/*
My codewars: https://www.codewars.com/users/DaraKolm
Github: https://github.com/DaraKolm/DevSchool2023*/
/*Task 3 The Greatest Warrior
https://www.codewars.com/kata/5941c545f5c394fef900000c
 */
class Warrior{
    #level; //1 to 100, ups every 100 XP
    #rank ; //ups every 10 lvls (1-9, 10-19,....)
    #experience; //if lvl===100, exp stops at 10 000
    #achievements = [];
    rangeOfRanks=["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"];

    rankIndex(){
        return Math.floor(this.level()/10);
    }
    //=this.rangeOfRanks.indexOf(this.rank);

    constructor() {
        this.#level = 1; //1 to 100, ups every 100 XP
        this.#rank = "Pushover"; //ups every 10 lvls (1-9, 10-19,....)
        this.#experience=100; //if lvl===100, exp stops at 10 000
    }

    level(){
        return this.#level;
    }
    rank(){
        return this.#rank;
    }
    experience(){
        return this.#experience;
    }
    achievements(){
        return this.#achievements;
    }



    battle(enemyLvl){
        if(enemyLvl>100 || enemyLvl<1) return "Invalid level";
        else{
            if(!this.isWinnable(enemyLvl)){
                return "You've been defeated";
            }else{
                this.increaseExp(this.countBattleGain(enemyLvl));
                if(this.level()>=enemyLvl+2){
                    this.updateLvlAndRank();
                    return "Easy fight";}
                else if(this.level()===enemyLvl+1 || this.level()===enemyLvl){
                    this.updateLvlAndRank();
                    return "A good fight";
                }else if(this.level()<enemyLvl){
                    this.updateLvlAndRank();
                    return "An intense fight";}
            }
        }
    }

    training(arr){
        if(this.level()>=arr[2]){
            this.increaseExp(parseInt(arr[1]));
            this.updateLvlAndRank();
            this.updateAchievements(arr[0]);
            return arr[0].toString();
        }else return "Not strong enough";
    }

    //helpers methods
    increaseExp(xp){
        if (this.experience()+xp<=10000){
            this.#experience+=xp;
        }else this.#experience=10000;
    }

    isWinnable(enemyLvl){
        let enemyRankIndex = Math.floor(enemyLvl/10);
        return !(this.level() + 5 <= enemyLvl &&  this.rankIndex() < enemyRankIndex);
    }

    updateLvlAndRank(){
        this.#level = Math.floor(this.experience()/100);
        //this.rankIndex = Math.floor(this.level/10);
        this.#rank = this.rangeOfRanks[this.rankIndex()];
    }
    updateAchievements(str){
        this.#achievements.push(str);
    }

    countBattleGain(enemyLvl){
        let expGain;
        if(this.level()===enemyLvl)expGain=10;
        else if(this.level()-1===enemyLvl)expGain=5;
            else if(this.level()<enemyLvl) expGain=20*(enemyLvl-this.level())*(enemyLvl-this.level());
                else expGain = 0;
        return expGain;
    }

}

/*let ourWarrior = new Warrior();
console.log(ourWarrior.battle(7));
console.log("Exp: " + ourWarrior.experience()+"\nRank: "+ ourWarrior.rank()+"\nRankIndex: "+ ourWarrior.rankIndex());

console.log(ourWarrior.battle(12));
console.log("Exp: " + ourWarrior.experience()+"\nRank: "+ ourWarrior.rank()+"\nRankIndex: "+ ourWarrior.rankIndex());

console.log(ourWarrior.battle(17));
console.log("Exp: " + ourWarrior.experience()+"\nRank: "+ ourWarrior.rank()+"\nRankIndex: "+ ourWarrior.rankIndex());

console.log(ourWarrior.level());*/

let bruce_lee = new Warrior();
console.log(bruce_lee.level());        // => 1
console.log(bruce_lee.experience());   // => 100
console.log(bruce_lee.rank());         // => "Pushover"
console.log(bruce_lee.achievements()); // => []
console.log(bruce_lee.training(["Defeated Chuck Norris", 9000, 1])); // => "Defeated Chuck Norris"
console.log(bruce_lee.experience());   // => 9100
console.log(bruce_lee.level());        // => 91
console.log(bruce_lee.rank());         // => "Master"
console.log(bruce_lee.battle(90));     // => "A good fight"
console.log(bruce_lee.experience());   // => 9105
console.log(bruce_lee.achievements()); // => ["Defeated Chuck Norris"]
