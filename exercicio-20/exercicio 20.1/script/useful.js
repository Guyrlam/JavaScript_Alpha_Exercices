function random(max,min){
    return Math.floor(Math.random() * (max - min)) + min;
}

function trackMoviment(){
    const track = document.querySelector('#track')
    let i = 0;

    function moviment(){
        switch(i){
            case 0:
                track.style.top = `-10%`
                i++
            break;
            case 1:
                track.style.top = `-5%`
                i++
            break;
            case 2:
                track.style.top = `0%`
                i++
            break;
            case 3:
                track.style.top = `-5%`
                i = 0
            break;
        }
    }

    return moviment

} 


export {random, trackMoviment}