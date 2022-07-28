export default class CharacterBehavior {
    constructor(x,y){
        this.positionX = x;
        this.positionY = y;
        this.points = 0
    }

    get foward() {
        if(this.positionY > 0){
           this.positionY = this.positionY - 2 
        }
        return hero.style.top = (`${this.positionY}%`)
    }

    get back() {
        if(this.positionY < 96){
            this.positionY = this.positionY + 2
        }
        return hero.style.top = (`${this.positionY}%`)
    }

    get right() {
        if(this.positionX < 96){
            this.positionX = this.positionX + 2
        }
        return hero.style.left = (`${this.positionX}%`)
    }

    get left() {
        if(this.positionX > 0){
            this.positionX = this.positionX - 2
        }
        return hero.style.left = (`${this.positionX}%`)
    }

    get score() {
        console.log('ponto')
        this.points++
        return document.querySelector('#points').textContent = (`${this.points}`)
    }

}


