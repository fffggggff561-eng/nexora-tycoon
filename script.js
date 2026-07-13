// =====================
// NEXORA TYCOON
// CORE SYSTEM
// =====================

let money = Number(localStorage.getItem("money")) || 0;
let xp = Number(localStorage.getItem("xp")) || 0;
let level = Number(localStorage.getItem("level")) || 1;
let income = Number(localStorage.getItem("income")) || 1;

let totalEarned = Number(localStorage.getItem("totalEarned")) || 0;
let launches = Number(localStorage.getItem("launches")) || 0;

// UI

const moneyEl = document.getElementById("money");
const xpEl = document.getElementById("xpText");
const levelEl = document.getElementById("level");
const xpFill = document.getElementById("xpFill");
const incomeEl = document.getElementById("income");

const launchButton = document.getElementById("launchButton");
const floatingContainer = document.getElementById("floatingContainer");

// Shop

const shopButton = document.getElementById("shopButton");
const shopModal = document.getElementById("shopModal");
const closeShop = document.getElementById("closeShop");

// Staff

const staffButton = document.getElementById("staffButton");
const staffModal = document.getElementById("staffModal");
const closeStaff = document.getElementById("closeStaff");

// Countries

const countriesButton = document.getElementById("countriesButton");
const countriesModal = document.getElementById("countriesModal");
const closeCountries = document.getElementById("closeCountries");

// Statistics

const statsButton = document.getElementById("statsButton");
const statsModal = document.getElementById("statsModal");
const closeStats = document.getElementById("closeStats");

function needXP(){

    return level * 100;

}

function saveGame(){

    localStorage.setItem("money",money);
    localStorage.setItem("xp",xp);
    localStorage.setItem("level",level);
    localStorage.setItem("income",income);

    localStorage.setItem("totalEarned",totalEarned);
    localStorage.setItem("launches",launches);

}

function updateUI(){

    moneyEl.textContent=Math.floor(money).toLocaleString();

    incomeEl.textContent=income;

    levelEl.textContent="LVL "+level;

    xpEl.textContent=xp+" / "+needXP()+" XP";

    xpFill.style.width=(xp/needXP())*100+"%";

    saveGame();

}

function levelUp(){

    while(xp>=needXP()){

        xp-=needXP();

        level++;

        income++;

        showFloat("⭐ LEVEL UP");

    }

}

function showFloat(text){

    const div=document.createElement("div");

    div.className="floatMoney";

    div.innerText=text;

    div.style.left=(42+Math.random()*16)+"%";

    floatingContainer.appendChild(div);

    setTimeout(()=>{

        div.remove();

    },1000);

}
// =====================
// GAMEPLAY
// =====================

launchButton.addEventListener("click", () => {

    const earn = income + Math.floor(Math.random() * 4);

    money += earn;
    totalEarned += earn;
    launches++;

    xp += 10;

    showFloat("+$" + earn);

    levelUp();

    updateUI();

});

// Пасивний дохід

setInterval(() => {

    money += income;
    totalEarned += income;

    updateUI();

},1000);


// =====================
// SHOP
// =====================

shopButton.addEventListener("click",()=>{

    shopModal.classList.remove("hidden");

});

closeShop.addEventListener("click",()=>{

    shopModal.classList.add("hidden");

});


// =====================
// STAFF
// =====================

staffButton.addEventListener("click",()=>{

    staffModal.classList.remove("hidden");

});

closeStaff.addEventListener("click",()=>{

    staffModal.classList.add("hidden");

});


// =====================
// COUNTRIES
// =====================

countriesButton.addEventListener("click",()=>{

    countriesModal.classList.remove("hidden");

});

closeCountries.addEventListener("click",()=>{

    countriesModal.classList.add("hidden");

});


// =====================
// STATISTICS
// =====================

statsButton.addEventListener("click",()=>{

    document.getElementById("statsContent").innerHTML=`

<div>💰 Total Earned: $${Math.floor(totalEarned).toLocaleString()}</div>

<div>🚀 Launches: ${launches}</div>

<div>⭐ Level: ${level}</div>

<div>💵 Income/sec: $${income}</div>

`;

    statsModal.classList.remove("hidden");

});

closeStats.addEventListener("click",()=>{

    statsModal.classList.add("hidden");

});

updateUI();
