let body = document.querySelector("body");
let spacedone = [];
function degree(){
    let deg = Math.floor(Math.random()*360);
    if(deg % 45 == 0) {
        console.log(deg);
        return deg;
    } else {
        return degree();
    }
}
function locationLeft(){
    let left = Math.floor(Math.random()*100);
    spacedone.push(left);
    for(let i = 0;i < spacedone.length; i++){
        if(spacedone[i] == left){
            return locationLeft();
        }else{
            return left + "%";
        }
    }
}
for(let i = 0; i < 20; i++) {
    let glowStick = document.createElement("div");
    glowStick.className = "depth";
    glowStick.style.position = "fixed";
    glowStick.style.height = "3000px";
    glowStick.style.top = "50%";
    glowStick.style.left = locationLeft();
    glowStick.style.transform = `translate(-50%,-50%) rotate(${degree()}deg)`;
    body.prepend(glowStick);
}
//console.log(BadalKapoor)
