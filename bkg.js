function randomBot(){
    ranImg();
    const ran = Math.random()*10;
    console.log(ran);
    if(ran < 3.4 ) return 'batu';
    if(ran > 7.6) return 'kertas';
    return 'gunting';
}

function ranImg(){
    const imgBot = document.querySelector('section#com img');
    const listImg = ['gunting','batu','kertas'];
    let i = 0;
    const start = new Date().getSeconds();
    const interval = setInterval(function(){
        imgBot.setAttribute('src',listImg[i]+'.png');
        i++;
        if(i>2) i=0;
        if(new Date().getSeconds() - start == 1) clearInterval(interval);
    },100);
    
}

function chacheBot(bid, result){
    scorCounter(result);

    const imgBot = document.querySelector('section#com img');
    const h1 = document.querySelector('section#hasil h2');
    const scoreBot = document.querySelector('.boardBot p');
    const scorePlayer = document.querySelector('.boardPlayer p');

    imgBot.setAttribute('src',bid+'.png')
    h1.innerHTML = result;
    scoreBot.innerHTML = botScore;
    scorePlayer.innerHTML = playerScore;
}

function mulai(bid){
    const bidBot = randomBot();
    setTimeout(function(){
        if(bid == bidBot) return chacheBot(bidBot,'SERI');
    if(bid == 'batu' && bidBot == 'gunting') return chacheBot(bidBot,'MENANG'); 
    if(bid == 'kertas' && bidBot == 'batu') return chacheBot(bidBot,'MENANG'); 
    if(bid == 'gunting' && bidBot == 'kertas') return chacheBot(bidBot,'MENANG'); 
    return chacheBot(bidBot,'KALAH');
    },1000);
    

}

let botScore = 0;
let playerScore = 0;
function scorCounter(result){
    if(result == 'MENANG') return playerScore +=1;
    return botScore +=1;
}

const bkgPlayer = document.querySelectorAll('section#player img');

bkgPlayer[0].addEventListener('click',function(){
    mulai('batu');
});
bkgPlayer[1].addEventListener('click',function(){
    mulai('kertas');
});
bkgPlayer[2].addEventListener('click',function(){
    mulai('gunting');
});