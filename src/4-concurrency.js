const getFruit = async (name) => {
    const fruits = {
        pineapple: 'pineapple',
        peach: 'peach',
        strawberry: 'strawberry'
    }

    return fruits[name];
}

const makeSmoothieFaster = async () => {
    const tick = Date.now();
    const a = getFruit('pineapple');
    const b = getFruit('strawberry');
    const smoothie = Promise.all([a, b]);
    console.log(`makeSmoothieFaster(): ${Date.now() - tick}ms`);

    return smoothie;
}


const fruitRace = async () => {
    const tick = Date.now();
    const a = getFruit('pineapple');
    const b = getFruit('strawberry');
    const winner = await Promise.race([a, b])

    console.log(`fruitRace(): ${Date.now() - tick}ms`);

    return winner;
}

fruitRace().then(console.log)
fruitRace().then(console.log)
fruitRace().then(console.log)
fruitRace().then(console.log)
fruitRace().then(console.log)