
### Closure

1. In your own words, define closure (1-2 sentences).
 _Closure is when a function uses a variable that is not declared inside the function but in the surroundings of the function._
2. Study the following code, then answer the questions below.

```js
function personalDice(name){
  return function(){
      // generate random number between 1 and 6
    const newRoll = Math.floor(Math.random() * 6);
    console.log(`${name} rolled a ${newRoll}`)
  }
}

const dansRoll = personalDice("Dan");

const zoesRoll = personalDice("Zoe");


dansRoll();
dansRoll();
```

* a. Where is closure used in this code? How can you tell? _In the function on line 10, that on line 13 uses the name declared outside the function, on line 9._
* b. Compare and contrast calling `dansRoll` the first and second time. What is always the same? What could change? _newRoll is random and can change, Dan is declared on line 17 and doesn't change._
* c. What is the lexical scope of `newRoll`? this might help https://stackoverflow.com/questions/1047454 
_What is inside the function personalDice._


3. Write a function that would allow you to do this using a closure.

```js
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
```
### Solution
```js
function createBase(input){
    return function(number){     
        console.log(number + input)
    }
}

var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
```