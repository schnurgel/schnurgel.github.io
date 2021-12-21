let timer1;
let firstTime;
let timer2;
if(firstTime==1){

}else{
    slideLeft();
}
function slideLeft(){
    firstTime=1;
    clearInterval(timer1);
    clearInterval(timer2);
    timer1 = setInterval(clickLeft,5000);
}
function slideRight(){
    clearInterval(timer2);
    clearInterval(timer1);
    timer2 = setInterval(clickRight,5000);
}
function clickLeft(){
    let temp = document.images[4].src;
    document.images[4].src = document.images[3].src;
    document.images[3].src = document.images[2].src;
    document.images[2].src = document.images[1].src;
    document.images[1].src = document.images[0].src;
    document.images[0].src = temp;
    slideLeft();
}
function clickRight(){
    let temp = document.images[0].src;
    document.images[0].src = document.images[1].src;
    document.images[1].src = document.images[2].src;
    document.images[2].src = document.images[3].src;
    document.images[3].src = document.images[4].src;
    document.images[4].src = temp;
    slideRight();
}
/*
let timer1;
let timer2;

function slideRigth{
    clearInterval(imer1);
    clearInterval


    let timer 1 = 
    set setInterval(slideLeft;500);
    slideLeft();
}*/





/*
fuction loadingRight(){
    for(let i = 0; i < 3;i++){
        images_tags[i].apt = images[i];
    }
}*/