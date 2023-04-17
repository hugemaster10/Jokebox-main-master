import * as bootstrap from 'bootstrap'

Template.Home.onRendered(function() {
  const displayJoke = () => {
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        const jokeElement = document.querySelector('#joke');
        jokeElement.innerHTML = data.joke;
      })
      .catch(error => console.error(error));
  };

   const saveJoke = () => {
    const jokeName = document.querySelector('#jokeName').value;
    const joke = document.querySelector('#joke').innerHTML;
    // Here you can save the joke using a database or any other method you prefer
    console.log(`Saving joke "${jokeName}": ${joke}`);
  };

  document.querySelector('#addToCollection').addEventListener('click', saveJoke);

  displayJoke(); // display joke immediately
  setInterval(displayJoke, 900000); // fetch a new joke every 15 minutes (900000 ms)
});

Template.Home.events({
  'click #addToCollection': function(event, template) {
    var jokeName = template.find('#jokeName').value;
    var joke = template.find('#joke').innerHTML;
    console.warn(jokeName, joke)
    
    Jokes.insert({
      name: jokeName,
      joke: joke
    });
  

  Template.Home.helpers({
            s() {
        return likesdb.find()
    }
})

'click .myRating'(event); {
  // console.log(event.currentTarget)
  // console.log("rating: ", $("#" + event.currentTarget.id).data("userrating"))
  likesdb.update({
      "_id": event.currentTarget.id
  },{
      $set:{
          rating: $("#" + event.currentTarget.id).data("userrating")
      }
    })}}})
   

    