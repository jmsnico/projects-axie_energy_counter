
const used = {
    buttonAdd: document.querySelector('#energy-used-add'),
    buttonSub: document.querySelector('#energy-used-sub'),
    display: document.querySelector('#used-energy'),
    energy: 0

}
const gained = {
    buttonAdd: document.querySelector('#energy-gain-add'),
    buttonSub: document.querySelector('#energy-gain-sub'),
    display: document.querySelector('#gained-energy'),
    energy: 0

}
const destroyed = {
    buttonAdd: document.querySelector('#energy-destroy-add'),
    buttonSub: document.querySelector('#energy-destroy-sub'),
    display: document.querySelector('#destroyed-energy'),
    energy: 0
}


let totalEnergy = document.querySelector('#total-energy');
const roundDisplay = document.querySelector('#round-num');
const endTurnBtn = document.querySelector('#end-turn');
const resetButton = document.querySelector('#reset');

let round = 1;




//--------------------------------------
//-----------BUTTON COUNTER------------
//--------------------------------------

used.buttonAdd.addEventListener('click', () => {
    used.energy++;
    used.display.innerText = used.energy;
});



used.buttonSub.addEventListener('click', () => {
    //if energy is negative then it will display 0 because it will automatically add 1 on it
    if (used.energy === -used.energy) {
        used.energy++;
    }
    used.energy--;
    used.display.innerText = used.energy;
});

gained.buttonAdd.addEventListener('click', () => {
    gained.energy++;
    gained.display.innerText = gained.energy;
});



gained.buttonSub.addEventListener('click', () => {
    //if energy is negative then it will display 0 because it will automatically add 1 on it
    if (gained.energy === -gained.energy) {
        gained.energy++;
    }
    gained.energy--;
    gained.display.innerText = gained.energy;
});

destroyed.buttonAdd.addEventListener('click', () => {
    destroyed.energy++;
    destroyed.display.innerText = destroyed.energy;
});



destroyed.buttonSub.addEventListener('click', () => {

    //if energy is negative then it will display 0 because it will automatically add 1 on it
    if (destroyed.energy === -destroyed.energy) {
        destroyed.energy++;
    }
    destroyed.energy--;
    destroyed.display.innerText = destroyed.energy;
});


//--------------------------------------
//------------END TURN BUTTON------------
//--------------------------------------


// let total = 2;


endTurnBtn.addEventListener('click', endTurn);

resetButton.addEventListener('click', reset);


function endTurn() {

    const add = parseInt(totalEnergy.innerText) + gained.energy;
    const sub = (destroyed.energy + used.energy);
    let result = add - sub;
    if (result < 0) {
        result = 0;
        totalEnergy.innerText = result + 2;
        round++;
        roundDisplay.innerText = round;
    } else {
        totalEnergy.innerText = result + 2;
        round++;
        roundDisplay.innerText = round;
    }

    //looping through the objects i define above because they have the same values
    for (let energy of [used, gained, destroyed]) {
        energy.energy = 0;
        energy.display.innerText = 0;
    }


}

function reset() {
    //looping through the objects i define above because they have the same values
    for (let energy of [used, gained, destroyed]) {
        energy.energy = 0;
        energy.display.innerText = 0;
    }
    totalEnergy.innerText = 3;
    roundDisplay.innerText = 1;
    round = 1;

};
