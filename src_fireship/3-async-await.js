// Basic
const getFruit = async (name) => {
    const fruits = {
        pineapple: 'pineapple',
        peach: 'peach',
        strawberry: 'strawberry'
    }

    return fruits[name];
}

getFruit('peach').then(console.log);

// Async + Await
const makeSmoothie = async () => {
    const tick = Date.now();
    const a = await getFruit('pineapple');
    const b = await getFruit('strawberry');
    console.log(`makeSmoothie(): ${Date.now() - tick}ms`);

    return [a, b];
}

makeSmoothie().then(console.log);

const makeSmoothie2 = () => {
    let a;
    return getFruit('pineapple')
        .then(v => {
            a = v;
            return getFruit('strawberry')
        })
        .then(v => [v, a])
}

makeSmoothie2().then(console.log);