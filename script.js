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
    if (type === 'laptop' && gameState.balance >= 100) {
        gameState.balance -= 100;
        gameState.multiplier += 0.2;
    } else if (type === 'assistant' && gameState.balance >= 500) {
        gameState.balance -= 500;
        gameState.incomePerSecond += 5;
    } else {
        alert("Недостатньо коштів!");
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
