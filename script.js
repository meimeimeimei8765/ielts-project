// script.js
document.getElementById('submit').addEventListener('click', function() {
    const question = document.getElementById('question').value.trim();
    let answer = '';

    // 处理特定输入并返回特定输出
    switch(question) {
        case 'What is your name?':
            answer = 'My name is John Doe.';
            break;
        case 'Where are you from?':
            answer = 'I am from Beijing, China.';
            break;
        case 'What do you do?':
            answer = 'I am a student preparing for IELTS.';
            break;
        default:
            answer = 'Sorry, I don\'t understand your question.';
    }

    document.getElementById('answer').innerText = answer;
});
