function isValidWalk(walk) {

    if(walk.length !== 10){
        return false;
    }
    const n =  walk.filter(direcion => direcion === 'n').length;
    const s =  walk.filter(direcion => direcion === 's').length;
    const e =  walk.filter(direcion => direcion === 'e').length;
    const w =  walk.filter(direcion => direcion === 'w').length;

    if(n !== s || e !== w){
        return false;
    }

    return true;
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']))