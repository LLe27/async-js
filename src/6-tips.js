global.fetch = require("node-fetch");

const getFruit = async (name) => {
    const fruits = {
        pineapple: 'pineapple',
        peach: 'peach',
        strawberry: 'strawberry'
    }

    return fruits[name];
}

const fruits = ['peach', 'pineapple', 'strawberry'];

const fruitLoop = async () => {
    for (const f of fruits) {
        const emoji = await getFruit(f);
        console.log(emoji);
    }
};

const fruitInspection = async () => {
    if ((await getFruit('peach')) === '🍑') {
        console.log('looks peachy!');
    }
};

const getTodo = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');

    const {
        title,
        userId,
        body
    } = await res.json();

    console.log(title, userId, body);
};

fruitLoop();
fruitInspection();
getTodo();