// --- NEXORA TYCOON CORE SCRIPT ---

// 1. СТАН ГРИ
let gameState = {
    balance: 0,
    xp: 0,
    level: 1,
    incomePerSecond: 0,
    multiplier: 1
};

// 2. ІНІЦІАЛІЗАЦІЯ ТА ЗБЕРЕЖЕННЯ
function loadGame() {
    const saved = localStorage.getItem('nexoraSave');
    if (saved) gameState = JSON.parse(saved);
}

function saveGame() {
    localStorage.setItem('nexoraSave', JSON.stringify(gameState));
}

// 3. ІГРОВА ЛОГІКА
function updateUI() {
    document.getElementById('balance').innerText = $${Math.floor(gameState.balance)};
    document.getElementById('level').innerText = LVL ${gameState.level};
    saveGame();
}

function launchOffer() {
    gameState.balance += (10 * gameState.multiplier);
    gameState.xp += 10;
    if (gameState.xp >= gameState.level * 100) {
        gameState.level++;
        alert("Level Up! Поточний рівень: " + gameState.level);
    }
    updateUI();
}

function buyUpgrade(type) {
    if (type === 'laptop') {
        const cost = 100;
        if (gameState.balance >= cost) {
            gameState.balance -= cost;
            gameState.multiplier += 0.2;
            alert("Апгрейд куплено!");
        } else {
            alert("Недостатньо коштів! Потрібно $100");
        }
    } else if (type === 'assistant') {
        const cost = 500;
        if (gameState.balance >= cost) {
            gameState.balance -= cost;
            gameState.incomePerSecond += 5;
            alert("Асистент найнятий!");
        } else {
            alert("Недостатньо коштів! Потрібно $500");
        }
    }
    updateUI();
}

function toggleShop(open) {
    document.getElementById('shop-modal').style.display = open ? 'block' : 'none';
}

// 4. ЦИКЛИ ТА ЗАПУСК
setInterval(() => {
    if (gameState.incomePerSecond > 0) {
        gameState.balance += gameState.incomePerSecond;
        updateUI();
    }
}, 1000);

window.onload = () => {
    loadGame();
    updateUI();
};
