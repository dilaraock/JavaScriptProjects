const getJokes = async () => {
    const res = await fetch('https://api.chucknorris.io/jokes/random')
    const randomJoke = await res.json();
    document.getElementById('jokes').innerText = randomJoke.value;
    document.querySelector('small').style.display = 'none';
};