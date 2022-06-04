/* 
  CIT281 Project 5
  Samuel Rutherford
*/



module.exports = class Monster{
  constructor({monsterName = 'Unknown',minimumLife = 0,currentLife = 100} = obj){
    this.monsterName = monsterName;
    this.minimumLife = minimumLife;
    this.currentLife = currentLife;
    this.currentLife >= this.minimumLife ? this.isAlive = true : this.isAlive = false;
  }
  updateLife(lifeChangeAmount){
    this.currentLife = this.currentLife - lifeChangeAmount;
    this.currentLife >= this.minimumLife ? this.isAlive = true : this.isAlive = false;
    this.currentLife <= 0 ? this.currentLife = 0 :this.currentLife;
  }
  randomLifeDrain(minimumLifeDrain,maximumLifeDrain){
    let randomInt = Math.floor(Math.random() * ( maximumLifeDrain - minimumLifeDrain) + minimumLifeDrain);
    this.updateLife(randomInt);
    console.log(`${this.monsterName} random power drain of ${randomInt}`)
  }
}



//monster1 = new Monster({monsterName: "King Kong", minimumLife: 10, currentLife: 150});
//monster1.updateLife(-141);
//monster1.randomLifeDrain(-200,100);

//console.log(monster1);

