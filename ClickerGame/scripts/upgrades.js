function checkUpgrades() {
    if(clicks === 100) {
        upgrades.classList.remove("hidden");
    }

    if(clicks >= 500) {
        upgrade2.classList.remove("hidden");
    }
}

updateUI = function () {
    points.innerHTML = clicks;
    clickingPower.innerHTML = `Click Power: ${clicksPower}`;
    checkUpgrades();
}