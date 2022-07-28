import {random} from "./useful.js"
import {game, gameValue} from "../index.js"

export default function ItensBehavior(name,time,top) {
    this.name = name
    this.time = time
    this.top = top
    this.initialTop = top
}

ItensBehavior.prototype.creation = function (){
    this.item = document.createElement(`div`)
    this.item.style.top = (`${this.top}%`)
    this.item.style.left = (`${random(80,18)}%`)
    this.item.className = (`${this.name}`)
    app.appendChild(this.item)
}

ItensBehavior.prototype.move = function(){
    const interval = setInterval(()=>{
        const position = this.item.getBoundingClientRect()

        const positionEvent = new CustomEvent ('position', {
            'detail':{ 'type': 'item', 'object': {
                'p1': {
                    'y': position.top,
                    'x': position.left 
                },
                'p2': {
                    'y': position.top,
                    'x': (position.left + position.width) 
                },
                'p3': {
                    'y': (position.top + position.height),
                    'x': position.left 
                },
                'p4': {
                    'y': (position.top + position.height),
                    'x': (position.left + position.width) 
                }
            } 
        }})

        document.dispatchEvent(positionEvent);

        if(game === true || this.top >= 100){
            app.removeChild(this.item)
            const finalMove = new CustomEvent ('restart', {
                'detail':{
                    'name': this.name,
                    'top': this.initialTop
                } 
            })
            document.dispatchEvent(finalMove);
            clearInterval(interval)
            return gameValue(false)
        } else{
            this.item.style.top = (`${this.top}%`)
            this.top++
        }
    },this.time)
}
