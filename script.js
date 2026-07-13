let money = 0;
let level = 1;

const moneyText = document.querySelector(".money");
const levelText = document.querySelector("h2");
const workButton = document.getElementById("work");

const levels = [
    "Junior Affiliate",
    "Affiliate",
    "Senior Affiliate",
    "Team Lead",
    "Head of Affiliate",
    "NEXORA Legend"
];

function update() {
    moneyText.innerText = "💵 $" + money;

    if (money >= 1000 && level < 6) {
        level++;
        levelText.innerText = levels[level - 1];
    }

    localStorage.setItem("money", money);
    localStorage.setItem("level", level);
}

const savedMoney = localStorage.getItem("money");
const savedLevel = localStorage.getItem("level");

if (savedMoney) money = Number(savedMoney);
if (savedLevel) level = Number(savedLevel);

levelText.innerText = levels[level - 1];

update();

workButton.addEventListener("click", () => {

    money += 10;

    update();

});
