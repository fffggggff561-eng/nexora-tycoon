let money = Number(localStorage.getItem("money")) || 0;
let xp = Number(localStorage.getItem("xp")) || 0;
let level = Number(localStorage.getItem("level")) || 1;

let income = Number(localStorage.getItem("income")) || 1;

const moneyEl = document.getElementById("money");
const xpEl = document.getElementById("xpText");
const levelEl = document.getElementById("level");
const xpFill = document.getElementById("xpFill");
const incomeEl = document.getElementById("income");

const button = document.getElementById("launchButton");
const floating = document.getElementById("floatingContainer");
const shopModal = document.getElementById("shopModal");
const shopButton = document.getElementById("shopButton");
const closeShop = document.getElementById("closeShop");
function needXP(){
    return level*100;
}

function save(){

    localStorage.setItem("money",money);
    localStorage.setItem("xp",xp);
    localStorage.setItem("level",level);
    localStorage.setItem("income",income);

}

function update(){

    moneyEl.innerText=Math.floor(money).toLocaleString();

    incomeEl.innerText=income;

    levelEl.innerText="LVL "+level;

    xpEl.innerText=xp+" / "+needXP()+" XP";

    xpFill.style.width=(xp/needXP())*100+"%";

    save();

}

function levelUp(){

    while(xp>=needXP()){

        xp-=needXP();

        level++;

        income++;

        showFloat("⭐ LEVEL UP!");

    }

}

function showFloat(text){

    const div=document.createElement("div");

    div.className="floatMoney";

    div.innerText=text;

    div.style.left=(40+Math.random()*20)+"%";

    floating.appendChild(div);

    setTimeout(()=>{

        div.remove();

    },1100);

}

button.onclick=()=>{

    const earn=income+Math.floor(Math.random()*4);

    money+=earn;

    xp+=10;

    showFloat("+$"+earn);

    levelUp();

    update();

};

setInterval(()=>{

    money+=income;

    update();

},1000);

update();
shopButton.addEventListener("click", () => {
    shopModal.classList.remove("hidden");
});

closeShop.addEventListener("click", () => {
    shopModal.classList.add("hidden");
});
