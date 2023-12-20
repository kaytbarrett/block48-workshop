//Problem 1
//REACTO
//Restate: check that input string s has valid brackets and parentheses, as in all opening brackets/parentheses
//have closing brackets/parentheses and they all close in the correct order
//Ex: s = "()" would be true
//Ex: s = " ]] [[" would be false
//Ex: s = "there (may [be] text){between [y]o[u]r (brackets)}" would be true
//Approach: I will need a for loop to go through all characters of the string
//I will also need to create an empty stack first and an object containing the opening bracket characters
//with their corresponding closing characters
//I will use an if/then statement to check for opening brackets and compare them to their closing bracket
//If all brackets have a match, I will return true
//Code:

function isValidBrackets(s) {
    const stack = [];
    const bracketMap = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    for (const char of s) {
        if (bracketMap[char]) {
            stack.push(char);
        } else if (Object.values(bracketMap).includes(char)) {
            const topOfStack = stack.pop();
            if (bracketMap[topOfStack] !== char) {
                return false;
            }

        }
    }

    return stack.length === 0;

}

//Example:
console.log(isValidBrackets("()")); // Output: true
console.log(isValidBrackets("]] [[")); // Output: false
console.log(isValidBrackets("there (may [be] text){between [y]o[u]r (brackets)}")); //Output: true



//Problem 2:
//REACTO
//Restate: there is an array of ticket amounts, and each index represents one person who would like to buy
//that amount of tickets. calculate the time required for a person at a specific index (k) to buy all their tickets
//it takes one second to buy a ticket, then that person moves to the back of the line
//Ex: tickets = [2, 3, 2] k=2, to iterate through the line until person 3 (k=2 of a 0 index array) buys 2 tickets
//would be a time of 6 seconds
//Approach: i think a while loop, for while tickets[k] > 0 is necessary to loop through the array while that remains true
//within that while loop, I think a for loop to add time for each iteration through the array/line is needed
//Code: 

function ticketTime(tickets, k){
    const remainingTickets = [...tickets]
    let time = 0

    while (remainingTickets[k] > 0 ){
        for(let i = 0; i < remainingTickets.length; i++){
            if(remainingTickets[i] > 0) {
                remainingTickets[i]--;
                time++;
            }  
        }
    }

    return time;
}

// Example
const tickets = [2, 3, 2];
const k = 2;
const result = ticketTime(tickets, k);
console.log(result); // Output: 6



//Problem 3: 
//REACTO
//Restate: there is an array of students heights representing how the students are standing in a line from left to right
//faculty wants to arrange the students heights in ascending order
//write a function that determines the amount of students whose positions need to change in order to accomplish that line
//Ex: heights=[1,1,4,2,1,3] output:3
//Approach: sort the heights array in ascending order
//another step that compares the changes in that second array to the original, as in how many spots are different
//this step is going to need a for loop to loop through the sorted array and compare it to the original
//Code: 

function heightsChecker(heights){

    const sortedHeights = [...heights].sort((a,b) => a - b);
    let numberOfChanges = 0;

    for (let i = 0; i < sortedHeights.length; i++){
        if(sortedHeights[i] !== heights[i]){
            numberOfChanges++;
        }
    }

    return numberOfChanges;

}

heights = [1,1,4,2,1,3];

console.log(heightsChecker(heights));