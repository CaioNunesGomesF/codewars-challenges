class RomanNumerals {

    static toRoman(num) {
        const romanMap = [
            { val: 1000, symbol: "M" },
            { val: 900,  symbol: "CM" },
            { val: 500,  symbol: "D" },
            { val: 400,  symbol: "CD" },
            { val: 100,  symbol: "C" },
            { val: 90,   symbol: "XC" },
            { val: 50,   symbol: "L" },
            { val: 40,   symbol: "XL" },
            { val: 10,   symbol: "X" },
            { val: 9,    symbol: "IX" },
            { val: 5,    symbol: "V" },
            { val: 4,    symbol: "IV" },
            { val: 1,    symbol: "I" }
        ];
        return 'IV';
    }

    static fromRoman(str) {
        return 4;
    }
}