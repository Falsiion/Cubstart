document.addEventListener("DOMContentLoaded", () => { //loads a joke when the page is loaded
  updateJoke(); 
});





  document.querySelector('.button-getJoke').addEventListener('click', function() { //this updates the joke when we click on the update joke button
      console.log('Button clicked!');
      updateJoke(); 
  });




    document.querySelector('.button-save').addEventListener('click', async () => {
      const jokeText = document.getElementById('joke').innerText;
      if (jokeText == 'Click the button to get a joke!') {
        alert('No joke to save!');
        return;
      }
      try {
        const response = await fetch('http://localhost:5000/api/jokes', { //when we click on the save button, we send the joke text to our custom api
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: jokeText })
        });
        if (response.ok) {
          alert('Joke saved successfully!'); //I used the alert function because i thought it was better for debuging, might change it later
        } else {
          alert('Failed to save joke');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error saving joke');
      }
    });

//this is the function that updates the joke by making an API call to https://icanhazdadjoke.com/
function updateJoke() {
    // We define the API URL
    const apiUrl = 'https://icanhazdadjoke.com/';

    // We make a GET request
    fetch(apiUrl,{
        headers: {
            'Accept': 'application/json', //we define the expected format of the data in the header of the api call
            'User-Agent' : 'Homework - jujudu33700@live.fr' //the api creators asks for the users to make a user-agent header for contact and analysis purposes
      }})
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById("joke").innerText = `"${data.joke}"`; // here we update the text joke with the data we received from the API call
    })
    .catch(error => {
        console.error('Error:', error);
    });
}