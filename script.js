fetch('https://icanhazdadjoke.com/slack')
    .then(data => data.json())              //Converting to Json
    .then(jokeData =>{
        const jokeText = jokeData.attachments[0].text;          //Creating jokeText to store the text data from attachments Jon
        const jokeElement = document.getElementById('jokeElement'); // loading the tage which needs to be changed in jokeElemnts

        jokeElement.innerHTML = jokeText; // then using jokeElement to change to content on page with data fatched in jokeText varibale.
    })
