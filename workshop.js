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

