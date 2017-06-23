/*
  Here is a guide for the steps you could take:
*/
console.log("firm handshake");
// 1. First select and store the elements you'll be working with
let searchArea = document.getElementById("searchArea");
let submitButton = document.getElementById("submitButton");
let userInput = "";

// console.log(artistSearch)

// 2. Create your `onSubmit` event for getting the user's search term
submitButton.addEventListener("click", getResults);
// console.log("button clicked");

function getResults() {
  let userInput = searchArea.value;
  // console.log(userInput);

   fetch("https://api.soundcloud.com/tracks?client_id=6d394f941827974ca06f3760a0741529" + userInput)
   .then(
      function(response) {
        if (response.status !== 200) {
          console.log("bad response: " + response.status);
          return;
        } else {
        response.json().then(function(data){
           results.innerHTML = "";
           for (let i = 0; i < data.length; i++) {
             let artwork = data[i].artwork_url;
             let title = data[i].title
             let music = data[i].stream_url;
            //  console.log(data);

      let markup = `
        <div class ="displayResults">
          <div class ="backgroundArt">

          </div>`


          results.innerHTML += markup;
        }
      })
        }
      }
    )
  };


// 4. Create a way to append the fetch results to your page


// 5. Create a way to listen for a click that will play the song in the audio play