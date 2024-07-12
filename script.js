// script.js
document.getElementById('submit').addEventListener('click', function() {
    const question = document.getElementById('question').value.trim();
    const userAnswer = document.getElementById('user-answer').value.trim();
    let referenceAnswer = '';
    let score = 0;
    let relatedQuestion = '';

    // 处理特定输入并返回特定输出
    switch(question) {
        case 'What is your name?':
            referenceAnswer = 'My name is John Doe.';
            score = 5; // 评分为5
            relatedQuestion = 'How old are you?'; // 串题
            break;
        case 'Where are you from?':
            referenceAnswer = 'I am from Beijing, China.';
            score = 4; // 评分为4
            relatedQuestion = 'Can you tell me more about your hometown?'; // 串题
            break;
        case 'What do you do?':
            referenceAnswer = 'I am a student preparing for IELTS.';
            score = 4.5; // 评分为4.5
            relatedQuestion = 'Why are you preparing for IELTS?'; // 串题
            break;
        default:
            referenceAnswer = 'Sorry, I don\'t understand your question.';
            score = 0; // 未知问题评分为0
            relatedQuestion = ''; // 无串题
    }

    document.getElementById('reference-answer').innerText = referenceAnswer;
    document.getElementById('user-answer-display').innerText = userAnswer;
    document.getElementById('score').innerText = score;
    document.getElementById('related-question').innerText = relatedQuestion;
});
