let yess = 0;
let nos = 0;
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");

flipBtn.addEventListener("click", () => {
    let i = Math.floor(Math.random() * 2);
    coin.style.animation = "none";
    if(i){
        setTimeout(function(){
            coin.style.animation = "spin-yess 2s forwards";
        }, 100);
        yess++;
    }
    else{
        setTimeout(function(){
            coin.style.animation = "spin-nos 2s forwards";
        }, 100);
        nos++;
    }
    setTimeout(updateStats, 2000);
    disableButton();
});
function updateStats(){
    document.querySelector("#yess-count").textContent = `Yes: ${yess}`;
    document.querySelector("#nos-count").textContent = `No: ${nos}`;
}
function disableButton(){
    flipBtn.disabled = true;
    setTimeout(function(){
        flipBtn.disabled = false;
    },2000);
}
resetBtn.addEventListener("click",() => {
    coin.style.animation = "none";
    yess = 0;
    nos = 0;
    updateStats();
});