/* eslint-disable no-alert */

/***The line below allows us to access the data from the window object.
 * This comes from the data.js file***/
const data = window.data;

/***Before we can begin manipulating the DOM we need to gain access to two DOM Nodes***/
// 1. Declare a variable bigCoffee that holds reference to the element with id 'big_coffee'.
// your code here
const bigCoffee = document.querySelector("#big_coffee")
// 2. Declare a variable producerContainer that holds reference to the element with id 'producer_container'.
// your code here
const producerContainer = document.querySelector("#producer_container")
/***Don't worry about the specifics of the condition in this if statement for now.
 * Just follow the instructions in it to ensure the application has base functionality.
 * We'll discuss in depth later what process is, but it's not necessary just yet.***/
if (typeof process === 'undefined') {
  /********************`
   *   Event Listeners
   ********************/

  /* 1. Add a 'click' event listener to the bigCoffee element(giant coffee emoji) you referenced above.
   * It should call the clickCoffee function below and be passed the global data object.*/
  // your code here
"bigCoffee".addEventListener("click", clickCoffee)
  /* 2. Add a 'click' event listener to the producerContainer(Coffee Producers panel) you referenced above.
   * It should call the buyButtonClick function below and be passed the browser event and global data object.*/
  // your code here
"producerContainer".addEventListener("click", buyButtonClick)
  // You don't need to edit this line of code. It calls the tick function passing in the data object every 1000ms or 1s.
  setInterval(() => tick(data), 1000);
}

// Now you're ready to start running the tests. Good luck!

/**************
 *   SLICE 1
 **************/

function updateCoffeeView(coffeeQty) {
  let coffeeCounter = coffeeQty;
  document.querySelector("#coffee_counter").innerText = coffeeCounter;
  }


function clickCoffee(data) {
  data.coffee++;
  updateCoffeeView(data.coffee);
  }

/**************`
 *   SLICE 2
 **************/

function unlockProducers(producers, coffeeCount) {
  producers.forEach(producer => {
    if (coffeeCount >= producer.price / 2){
      producer.unlocked = true;
    }
  })
}

function getUnlockedProducers(data) {
  let unlockProducers = [];
  data.producers.forEach(producer => {
    if (producer.unlocked) {
      unlockProducers.push(producer);
    }
  })
  return unlockProducers
}

function makeDisplayNameFromId(id) {
  let words = id.split ('_');
  let caseWords = [];
  words.forEach(word => {
    caseWords.push(word.charAt(0).toUpperCase() + word.slice(1));
  })
  return caseWords.join(' ');
}


// You shouldn't need to edit this function-- its tests should pass once you've written makeDisplayNameFromId
function makeProducerDiv(producer) {
  const containerDiv = document.createElement('div');
  containerDiv.className = 'producer';
  const displayName = makeDisplayNameFromId(producer.id);
  const currentCost = producer.price;
  const html = `
  <div class="producer-column">
    <div class="producer-title">${displayName}</div>
    <button type="button" id="buy_${producer.id}">Buy</button>
  </div>
  <div class="producer-column">
    <div>Quantity: ${producer.qty}</div>
    <div>Coffee/second: ${producer.cps}</div>
    <div>Cost: ${currentCost} coffee</div>
  </div>
  `;
  containerDiv.innerHTML = html;
  return containerDiv;
}

function deleteAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function renderProducers(data) {
  let container = document.querySelector('#producer_container');
  unlockProducers(data.producers, data.coffee);
  let unlockedProducers = getUnlockedProducers(data);
  deleteAllChildNodes(container);
  unlockedProducers.forEach(producer => {
    let producerDiv = makeProducerDiv(producer);
    container.appendChild(producerDiv);
  })
}
/**************
 *   SLICE 3
 **************/

function getProducerById(data, producerId) {
  // your code here
}

function canAffordProducer(data, producerId) {
  // your code here
}

function updateCPSView(cps) {
  // your code here
}

function updatePrice(oldPrice) {
  // your code here
}

function attemptToBuyProducer(data, producerId) {
  // your code here
}

function buyButtonClick(event, data) {
  // your code here
}

function tick(data) {
  // your code here
}

/**********************************
 *  Congratulations! You did it!
 **********************************/

// You don't need to edit any of the code below
// If we aren't in a browser and are instead in node
// we'll need to export the code written here so we can import and
// run the tests in Mocha. More on this later.
// Don't worry if it's not clear exactly what's going on here.
if (typeof process !== 'undefined') {

  module.exports = {
    updateCoffeeView,
    clickCoffee,
    unlockProducers,
    getUnlockedProducers,
    makeDisplayNameFromId,
    makeProducerDiv,
    deleteAllChildNodes,
    renderProducers,
    updateCPSView,
    getProducerById,
    canAffordProducer,
    updatePrice,
    attemptToBuyProducer,
    buyButtonClick,
    tick,
  };
}
