// Template Literal

const username = 'Zaskha Sasmita';
const password = '78979';

console.log(`username nya ${username}, passwordnya ${password}`);

let div = `
    <div>
        <p>takotnyeeee</p>
    </div>
`;

test = (strings, username) => {
    console.log(strings);
}

let output = test`nama saya adalah ${username}`

// console.log(div);