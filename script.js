let money = Number(localStorage.getItem("money")) || 0;
let xp = Number(localStorage.getItem("xp")) || 0;
let level = Number(localStorage.getItem("level")) || 1;
let income = Number(localStorage.getItem("income")) || 1;

const moneyEl = document.getElementById("money");
const xpEl = document.getElementById("xpText");
const levelEl = document.getElementById("level");
const xpFill = document.getElementById("xpFill");
const incomeEl = document.getElementById("income");

const launchButton = document.getElementById("launchButton");
const floatingContainer = document.getElementById("floatingContainer");

const shopButton = document.getElementById("shopButton");
const shopModal = document.getElementById("shopModal");
const closeShop = document.getElementById("closeShop");

function requiredXP() {
    return level * 100;
}

function saveGame() {
    localStorage.setItem("money", money);
    localStorage.setItem("xp", xp);
    localStorage.setItem("level", level);
    localStorage.setItem("income", income);
}

function updateUI() {
    moneyEl.textContent = Math.floor(money);
    xpEl.textContent = ${xp} / ${requiredXP()} XP;
    levelEl.textContent = LVL ${level};
    incomeEl.textContent = income;
    xpFill.style.width = (xp / requiredXP()) * 100 + "%";
    saveGame();
}

function levelUp() {
    while (xp >= requiredXP()) {
        xp -= requiredXP();
        level++;
        income++;
    }
}

launchButton.addEventListener("click", () => {
    const earned = income + Math.floor(Math.random() * 4);

    money += earned;
    xp += 10;

    levelUp();
    updateUI();
});

setInterval(() => {
    money += income;
    updateUI();
}, 1000);

shopButton.addEventListener("click", () => {
    shopModal.classList.remove("hidden");
});

closeShop.addEventListener("click", () => {
    alert("Close працює");
    shopModal.classList.add("hidden");
});

updateUI();
