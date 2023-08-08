const questions = [
    {
        'que': 'Which of the following is a markup Language',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'Javascript',
        'd': 'PHP',
        'correct': 'A'
    }, {
        'que': 'Which of the following is a Programming Language',
        'a': 'HTML',
        'b': 'C',
        'c': 'Javascript',
        'd': 'PHP',
        'correct': 'D'
    }, {
        'que': 'Which of the following is used for Styling',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'Javascript',
        'd': 'PHP',
        'correct': 'B'
    }
]
let index = 0;
let total = questions.length;
let right = 0, wrong = 0;
const quebox = document.getElementById("quebox");
const options = document.querySelectorAll('.option');
const loadQuestion = () => {
    if (index === total) {
        return end()
    }
    reset()
    const data = questions[index];
    console.log(data);
    quebox.innerText = `${index + 1})${data.que}`;
    options[0].nextElementSibling.innerText = data.a;
    options[1].nextElementSibling.innerText = data.b;
    options[2].nextElementSibling.innerText = data.c;
    options[3].nextElementSibling.innerText = data.d;

}
const submit = () => {
    const data = questions[index];
    const ans = getAnswer();
    if (ans === data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion()
    return;
}

const getAnswer = () => {
    let ans;
    options.forEach(
        (input) => {
            if (input.checked) {
                console.log(input.value)
                ans = input.value;
            }
        }
    )
    return ans;
}

const reset = () => {
    options.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const end = () => {
    document.getElementById("box").innerHTML = `
    <div 'style =text-align = center'>
        <h3>Thank You</h3>
        <h2>${right} / ${total} are Correct</h2>
    </div>`
}
loadQuestion();