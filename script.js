// ms: number of milliseconds
// returns a Promise that is resolved after ms milliseconds
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
} 

console.log(delay(1000))   //return a fulfilled promise



/////////////////////////////////////////////////////////////////
// el: element node object
// moves the element to the right by 100px over a duration of 1 second
function animateRight(el) {
    setTimeout(()=> el.style.right = `${parseInt(el.style.right, 10) - 100}px`, 1000)
} 

const elToBeMoved = document.getElementById('right')  //div element"Hello World" rightEl.style.right was 200px
animateRight(elToBeMoved)  //moved "Hello World to the right by 100px"  Now rightEl.style.right is 100px



////////////////////////////////////////////////////////////////
// xs: array
// returns: a new array, with unique items
function removeDuplicates(xs) {
    return xs.filter((item, i, arr)=> arr.indexOf(item) === i)
} 

console.log(removeDuplicates([2, 3, 4, 5, 6, 7, 7, 8, 8]))  //return [2, 3, 4, 5, 6, 7, 8] 