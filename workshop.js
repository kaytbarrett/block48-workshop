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

console.log(isValidBrackets("()")); // Output: true
console.log(isValidBrackets("]] [[")); // Output: false
console.log(isValidBrackets("there (may [be] text){between [y]o[u]r (brackets)}")); 