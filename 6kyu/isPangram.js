function isPangram(string){
    const uniqueLyrics = new Set(string.toLowerCase().split("").filter(lyrics => lyrics >= 'a' && lyrics <= 'z'));
    if(uniqueLyrics.size === 26){
        return true;
    }
    return false;
    
}

console.log(isPangram('The quick brown fox jumps over the lazy dog'))