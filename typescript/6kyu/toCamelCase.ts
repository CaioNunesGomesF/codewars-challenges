export function toCamelCase(str:string):string{
    if (str === "") return ""; 
    return str.split(/[-_]/).map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1)).join("");
}

// Testando com underline
console.log(toCamelCase("the_stealth_warrior")); 
// theStealthWarrior

// Testando com traço (kebab-case)
console.log(toCamelCase("The-Stealth-Warrior")); 
// TheStealthWarrior

// Testando com uma mistura dos dois
console.log(toCamelCase("the_stealth-warrior"));
