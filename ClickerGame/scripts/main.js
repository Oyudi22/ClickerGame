let clicks = 0;
let clicksPower = 1;

const button = document.getElementById('buttonPoints');
const points = document.getElementById('points');
const clickingPower = document.getElementById('clickPower');
const upgrade1 = document.getElementById('upgrade1');
const upgrade2 = document.getElementById('upgrade2');

let upgrade1Price = 100;
let upgrade1Level = 1;
let upgrade2Price = 500;
let upgrade2Level = 1;

function updateUI(){
    points.textContent = Math.round(clicks.toFixed(1));
    clickingPower.textContent = `Click Power: ${Math.round(clicksPower.toFixed(1))}`;
    
    //upgrade1.innerHTML = `+${2 + (upgrade1Level - 1) * 2} points per click <br><p>(Lvl ${upgrade1Level} - ${upgrade1Price} points)</p>`;
    //upgrade2.innerHTML = `Multiply ${(1.5 + (upgrade2Level - 1) * 0.1).toFixed(2)} Click Power <br><p>(Lvl ${upgrade2Level} - ${upgrade2Price} points)</p>`;
    document.getElementById('upgrade1').innerHTML = `+${2 + (upgrade1Level - 1) * 2} points per click <br><p>(Lvl ${upgrade1Level} - ${upgrade1Price} points)</p>`;
    document.getElementById('upgrade2').innerHTML = `Multiply ${Math.round(1.5 + (upgrade2Level - 1) * 0.1).toFixed(2)} Click Power <br><p>(Lvl ${upgrade2Level} - ${upgrade2Price} points)</p>`;

    checkUpgrades();
}

button.addEventListener('click', () => {
    clicks += clicksPower;
    updateUI();
});

upgrade1.addEventListener('click', () => {
    if(clicks >= upgrade1Price) {
        clicks -= upgrade1Price;
        clicksPower += 2 + (upgrade1Level - 1) * 2;
        upgrade1Level++;
        upgrade1Price = Math.floor(upgrade1Price * 1.2);

        updateUI();
    }
});

upgrade2.addEventListener('click', () => {
    if(clicks >= upgrade2Price){
        clicks -= upgrade2Price;
        clicksPower *= 1.5 + (upgrade2Level - 1) * 0.5;
        upgrade2Level++;
        upgrade2Price = Math.floor(upgrade2Price * 1.2);

        updateUI();
    }
});