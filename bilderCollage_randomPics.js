let contentBild = document.getElementById('content');

for (let i = 0; i < 15; i++) {
    
    if(i%3==0){
        contentBild.innerHTML += `<br>`;    
    }
    contentBild.innerHTML += `<img src="https://picsum.photos/500?random=${i}" alt="galeriebild"></img>`;    
}
