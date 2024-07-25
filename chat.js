document.getElementById('send-button').addEventListener('click', function () {
    handleUserInput();
});

document.getElementById('chat-input').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        handleUserInput();
    }
});

document.getElementById('voice-button').addEventListener('click', function () {
    startVoiceRecognition();
});

function handleUserInput() {
    const inputField = document.getElementById('chat-input');
    const userInput = inputField.value.trim();

    if (userInput === '') return;

    displayMessage(userInput, 'user');
    inputField.value = '';

    const response = getResponse(userInput);
    if (response) {
        displayBotMessage(response, 'bot');
    }
}

function displayMessage(message, sender) {
    const chatInterface = document.getElementById('chat-interface');
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message', sender);

    const icon = document.createElement('img');
    icon.classList.add('icon');
    icon.src = sender === 'user' ? 'user-icon.png' : 'bot-icon.png';
    icon.alt = sender === 'user' ? 'User Icon' : 'Bot Icon';

    const bubble = document.createElement('div');
    bubble.classList.add('bubble', 'fade-in');
    bubble.textContent = message;

    if (sender === 'user') {
        messageContainer.appendChild(bubble);
        messageContainer.appendChild(icon);
    } else {
        messageContainer.appendChild(icon);
        messageContainer.appendChild(bubble);
    }

    chatInterface.appendChild(messageContainer);
    chatInterface.scrollTop = chatInterface.scrollHeight;
}

function getResponse(userInput) {
    const responses = {
        'hello': 'Hi there! How can I assist you today?',
        'how are you?': 'I am just a bot, but I am here to help you!',
        'what is ielts?': 'IELTS is the International English Language Testing System.',
        "Yes, I'm ready. What topic would you like me to talk about?": `Great! Please Describe a place you visited where the air was polluted. You should say:
Where the place is
When you visited there
Why the air was not good
And explain how you felt about the place
You have one minute to prepare your thoughts, and then you'll have two minutes to speak continuously. Ready? Begin when you're set.
Alright, you may start your speech now.`,
        "I wanna talk about my hometown, Anyang in Henan. It's a place with bad air. It's one of the dirtiest cities in China. I grew up there, but now I go back just to see family.When I was little and at school, the air was really bad.The sky was gray and everything looked dusty.I used to cough a lot and my eyes would water.My nose hurt too.A lot of people there had lung problems.Anyang has lots of big factories outside the city.I think they made the air dirty.There were steel factories, coal places, and paper mills.They put bad stuff in the air from their big chimneys.But when I was a kid, the rules for the environment weren't good, so the factories could do what they wanted.I love Anyang, but the air was too bad for me, so I moved.I don't think it's right to make cities better by hurting the air.That's not good for the future.":`This essay effectively conveys the speaker's personal experience with air pollution in their hometown. The language is accessible, and the concerns raised about urban development and environmental impact are thoughtful. 
Here's a revised version of the essay with some additional details and finer language:
I'd like to talk about my hometown Anyang City in Henan Province. It is a city with heavy air pollution and is ranked among the most polluted cities in China. I grew up there, and now I go back there to visit my relatives every year.
When I was in elementary school, the air pollution in Anyang was particularly severe. The sky was always grey and the buildings appeared to be covered in some sort of dust. I remember I always coughed as a kid, and sometimes the air was so bad that I felt my eyes watering and my nose felt uncomfortable. According to statistics, people in Anyang also had a high incidence of lung disease.
Anyang had developed heavy industry, and there were many different large factories in the suburbs. I believe those factories were responsible for polluting the air, including steel factories, coal plants, and paper mills, which all belonged to high-polluting industries. Their chimneys emitted a lot of harmful gas into the air. Because the environmental law was not that advanced in my childhood, there was limited regulation of those factories, which made the situation worse.
Although Anyang is my hometown, I couldn't bear the awful air there and chose to move to another city. I don't think urban development should come at the cost of the environment. It won't be sustainable.
I hope my answer is helpful. Okay, so shall we continue practicing now.`,
        "Sure. Let's continue":`Next, please describe a noisy place you have been to. You should say:
What it is
When you went there
What you did there
And explain why you feel it's a noisy place
You have one minute to prepare your thoughts, and then you'll have two minutes to speak continuously. Ready? Begin when you're set
Alright, you may start your speech now.`,
        "I wanna talk 'bout a rock concert I went to. It was the loudest place ever! It was summer break when I was a freshman. There was this band, Tang Dynasty, that Cindy, my bestie, loved. They came to Shanghai for a show. Cindy was so happy, she tried hard to get tickets and finally got two. She asked me to go with her. I'd never been to a concert, not even a rock one. It sounded cool, so I said yes right away.It was super hot that day. When I got inside, it felt like a furnace with all those people. I started sweating like crazy. More and more people came in and the music blasted. The cheering was so loud, it made me dizzy. But the music, oh boy, it hurt my ears. I couldn't stand all the racket. I wanted to tell Cindy, but I had to shout or she wouldn't hear.Even though I was excited, I didn't like it much. I couldn't enjoy the music. It was too noisy and I couldn't focus. By the end, my head hurt so bad! I don't think I'll ever go to another rock concert again.":`Your description of the rock concert was engaging, though somewhat simplistic in vocabulary. Your enthusiasm and personal experience shone through, making it relatable. Keep practicing vocabulary to enrich your narrative.
Here's a revised version of the essay with some additional details and finer language:
I'd like to talk about a rock concert I went to, which was the noisiest place I've ever visited. It was during the summer vacation of my freshman year. A band called Tang Dynasty, which was the favorite rock brand of my best friend Cindy, came to Shanghai to hold a concert. Cindy was so thrilled that she spent lots of time scrambling for tickets , and finally managed to buy two of them.
Cindy invited me to go along with her .At that time, I had never been to a concert before, let alone a rock concert. I was very excited about the idea of this concert so I said yes immediately.
It was a hot summer and as soon as I came into the studio, I felt a wave of heat emanating from the crowd. I began to sweat as more and more people poured in and the music started playing. The sound of people cheering had already made me dizzy, but I didn't expect the penetrating sound of the music. It was very painful for me to sit there and bear the noise from everyone. I wanted to complain to my friend Cindy, but I had to shout or she wouldn't have been able to hear me.
Despite my excitement, I thought the concert was a noisy place because I couldn't appreciate the live rock music. The noise was very off-putting and I couldn't concentrate.
By the time I left I had a splitting headache! I don't think I'll go to rock concerts anymore.
I hope my answer is helpful. Okay, so shall we continue practicing now.`,
        "OK. Let's continue":`Next, please describe a new law you would like to introduce. You should say
What law it is
What changes this law has
Whether this new law will be popular
How you came up with the new law
And explain how you feel about this new law
You have one minute to prepare your thoughts, and then you'll have two minutes to speak continuously. Ready? Begin when you're set
Alright, you may start your speech now.`,
        "I have a new law idea. It's called the 'Garbage Sorting and Cleaning Act.' It wants to make waste better and keep the earth clean. People have to put their trash in different piles, like recycle stuff, food scraps, and bad stuff that hurts the planet. If you don't do it, you'll get in trouble and have to pay money. Some people might not like it at first, but I think those who care about the earth will like it. I saw how bad it is when people just throw trash everywhere. It hurts the water, soil, and animals. I really want this law because it's good for the planet. When we sort our trash and get punished if we don't, we'll do better and help the earth. It's for our kids and grandkids, and it'll make people care more about taking care of the planet.":`Your explanation of the proposed law is straightforward and uses simple language, making it accessible. However, it lacks depth and could benefit from more elaboration on the law's potential impact and personal motivation. Keep working on expanding your ideas.
Here's a revised version of the essay with some additional details and finer language:
The law I propose is the "Comprehensive Garbage Classification and Management Act" which aims to improve waste management practices and reduce environmental pollution. This law would mandate the implementation of a comprehensive garbage classification system, requiring citizens to separate their waste into different categories such as recyclables, organic waste, and hazardous materials.
Additionally, the law would introduce penalties for violations of garbage classification regulations, including fines for individuals and businesses who fail to comply with the requirements. While this new law may face initial resistance from some members of the public who are accustomed to traditional waste disposal methods, I believe it will ultimately be popular among environmentally conscious citizens and policymakers who recognize the importance of sustainable waste management practices. I came up with the idea for this law after witnessing the negative impact of uncontrolled waste disposal on the environment, including pollution of waterways, soil degradation, and harm to wildlife. Personally, I feel strongly about this new law as it addresses a pressing environmental issue and promotes responsible citizenship. By implementing garbage classification and penalties for violations, we can encourage individuals and businesses to adopt more sustainable behaviors and reduce their ecological footprint. I believe that this law will not only help protect the environment for future generations but also foster a greater sense of environmental stewardship and community responsibility.
I hope my answer is helpful. Okay, so shall we continue practicing now.`,
        "Sure. Let's continue.":`Okay, then describe an unusual meal you had. You should say:
When you had it Where you had it
Whom you had it with And explain why it was unusual
You have one minute to prepare your thoughts, and then you'll have two minutes to speak continuously. Ready? Begin when you're set
Alright, you may start your speech now.`,
        "On my first night at work, I had an unusual dinner experience. My boss, wanting to get to know me better, invited me out for a meal. Since it was late, we ended up at her hotel. She's not from our city, just flies in for work a couple of days a week. I was a bit nervous, having never dined alone with a boss before. Plus, she's French, and her accent made me worry about understanding her. But to my surprise, she was relaxed and chatty, sharing details about her family, even showing me pictures of her two children. We indulged in delicious food, sipped on wine, and she even ventured into my personal life, discussing relationships and marriage. It was an odd yet enjoyable evening that brought us closer together.":`Your response was well-structured, with good use of vocabulary and smooth transitions. The story was engaging and effectively conveyed the unexpected bond forged over dinner. 
Here's a revised version of the essay with some additional details and finer language:
The most unusual meal for me was my first night at work when my boss took me out to dinner just to get to know me.
Since we didn't finish working until after seven o'clock in the evening that day, we ate at the hotel where she was staying. My boss is not a resident of our city. She just flies here one or two days a week and works from home the rest of the time. To be honest, I was nervous when she told me she wanted to take me out to dinner. Since this is my first job, I've never had a private meal with any boss at work, and I didn't know what topics I should avoid so as not to disturb her privacy or bring up something that might offend her. Another thing was that my boss is French. Although she speaks very good English, she has a very strong French accent, and I was worried about whether I would understand her.
But to my surprise, she was very relaxed and chatted with me about her personal life. She shared details about her family and personal life and even showed me pictures of her two children. We had delicious food and enjoyed two glasses of wine together. She also asked about my relationship status and shared with me her thoughts on relationships and marriage. I felt like the distance between us had narrowed suddenly.
I thought the meal was unusual because it was the first time my boss and I were alone, and it helped me get to know her better.
I hope my answer is helpful. Okay, so shall we continue practicing now.`,
        "No, thank you. Let's practice next time.":`Okay. Combined with your practice today, I can provide you with a more convenient way to memorize. According to the three themes of today's practice, you can combine them to memorize if you want. 
Here is the joint version I organized for you:
During the Chinese New Year, my family and I went on a trip to a seaside city. We had brunch at a restaurant there, and the food was delicious.
However, the people at the next table kept smoking, ruining the taste of our meal.
I went over to ask them politely to stop smoking, but they ignored me. So, I had to find a waiter and complain about it. I told them that smoking indoors was illegal and was disturbing my meal, and they should enforce the rules.
The waiter apologized and went to talk to the people at the next table again. This time, they stopped without saying anything. It just shows how the law is not strict enough. While smoking indoors is illegal in China, there are no specific penalties, so some people don't realize they're breaking the law or don't care about others' health.
I hope the government will implement stricter penalties soon, like fines. I remember traveling to another country where they fined people 5,000 yuan for smoking indoors. China's government should act quickly to enforce proper penalties.
By the way, the restaurant was also very noisy because it's a popular spot on a local food app, and it was a public holiday that day, so there were tons of people. While we were eating, there were babies crying, people chatting loudly, and servers talking while delivering dishes. They also had promotional videos for their dishes playing in the background, so there was a mix of all kinds of sounds. But it didn't really affect our meal because, you know, most bustling restaurants are like that.`,
        "OK":`It's been a pleasure to have you as a candidate. Your enthusiasm and engagement throughout the practice session have been admirable. Remember to continue practicing and incorporating the feedback we discussed today. I have no doubt that you'll do well in your actual IELTS speaking test. Good luck, and keep up the excellent work!`        
    };

    const normalizedInput = userInput.trim();

    for (let key in responses) {
        const regex = new RegExp('^' + key.replace(/[-[\]{}()*+?.,\\^$|]/g, '\\$&') + '$', 'i');
        if (regex.test(normalizedInput)) {
            return responses[key].replace(/<br>/g, '\n'); // Replace <br> tags with newline characters
        }
    }

    return responses[userInput.toLowerCase()] || 'I am sorry, I do not understand that.';
}

function displayBotMessage(message) {
    const chatInterface = document.getElementById('chat-interface');
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message', 'bot');

    const icon = document.createElement('img');
    icon.classList.add('icon');
    icon.src = 'bot-icon.png';
    icon.alt = 'Bot Icon';

    const bubble = document.createElement('div');
    bubble.classList.add('bubble', 'fade-in');

    messageContainer.appendChild(icon);
    messageContainer.appendChild(bubble);
    chatInterface.appendChild(messageContainer);
    chatInterface.scrollTop = chatInterface.scrollHeight;

    let index = 0;

    function typeCharacter() {
        if (index < message.length) {
            bubble.textContent += message.charAt(index);
            index++;
            chatInterface.scrollTop = chatInterface.scrollHeight;
            setTimeout(typeCharacter, 50);
        }
    }

    typeCharacter();
}

function startVoiceRecognition() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();

    recognition.onresult = function (event) {
        const transcript = event.results[0][0].transcript;
        displayMessage(transcript, 'user');

        const response = getResponse(transcript);
        if (response) {
            displayMessage(response, 'bot');
        }
    };

    recognition.onerror = function (event) {
        console.error('Speech recognition error', event.error);
    };
}
