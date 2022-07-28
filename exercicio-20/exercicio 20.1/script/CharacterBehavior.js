export default function CharacterBehavior(x,y) {
    this.positionX = x;
    this.positionY = y;
    this.points = 0
}

CharacterBehavior.prototype.foward = function() {
    if(this.positionY > 0){
        this.positionY = this.positionY - 2 
    }
    return hero.style.top = (`${this.positionY}%`)
}

CharacterBehavior.prototype.back = function() {
    if(this.positionY < 96){
        this.positionY = this.positionY + 2
    }
    return hero.style.top = (`${this.positionY}%`)
}

CharacterBehavior.prototype.right = function() {
    if(this.positionX < 96){
        this.positionX = this.positionX + 2
    }
    return hero.style.left = (`${this.positionX}%`)
}

CharacterBehavior.prototype.left = function() {
    if(this.positionX > 0){
        this.positionX = this.positionX - 2
    }
    return hero.style.left = (`${this.positionX}%`)
}

CharacterBehavior.prototype.score = function() {
    this.points++
    return document.querySelector('#points').textContent = (`${this.points}`)
}




