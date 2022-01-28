// TODO: Declare any global variables we need


document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons

    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})


let numberOfHeads = 0
let numberOfTails = 0
let percentageHeads = 0
let percentageTails = 0
let totalFlips = numberOfHEads + numberOfHeads
let images = ["assets/images/penny-heads.jpg", "assets/images/penny-tails.jpg"]

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("flip").addEventListener('click', function() {
        let randomNumber =  (Math.random() * image.length)
        let randomImageSrc = images[randomNumber]

        document.getElementById("penny").setAttribute("src", randomImageSrc)
    
        if (randomNumber == 0)  {

            document.querySelector(".message-container").textContent = randomImage.message
        }
             console.log(images[randomNumber])
    })
})