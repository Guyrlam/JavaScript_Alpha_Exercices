export default class CharacterBehavior {
    constructor(x,y){
        this.positionX = x;
        this.positionY = y;
        this.hp = 10
        this.dano = 1
    }

    foward() {
        if(this.positionY > 0){
           this.positionY = this.positionY - 2 
        }
        return hero.style.top = (`${this.positionY}%`)
    }

    back() {
        if(this.positionY < 96){
            this.positionY = this.positionY + 2
        }
        return hero.style.top = (`${this.positionY}%`)
    }

    right() {
        if(this.positionX < 96){
            this.positionX = this.positionX + 2
        }
        return hero.style.left = (`${this.positionX}%`)
    }

    left() {
        if(this.positionX > 0){
            this.positionX = this.positionX - 2
        }
        return hero.style.left = (`${this.positionX}%`)
    }

    get attack() {
        return this.dano
    }

    set suffered(value){
        return this.hp = this.hp - value 
    }



}


