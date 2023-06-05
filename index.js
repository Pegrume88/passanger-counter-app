// innitialize the count as 0
// listen for clicks on icrement button
// increment the count variable when button is clicked
// change the count ell in the html to reflect the new count

// function increment(){
//     console.log("the button was clicked")
// }

 let saveEl = document.getElementById("save-el")
 let countEl = document.getElementById("count-el")
 let count = 0

 function increment() {
     count += 1
     countEl.textContent = count
     

 }

 function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
 }





