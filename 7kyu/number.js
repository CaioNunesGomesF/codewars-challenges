var number = function(busStops){
    let people = 0;

    for(let i = 0; i < busStops.length; i++){
        const enter = busStops[i][0];
        const leave = busStops[i][1];
        console.log(enter, leave)

        people = people + enter - leave;
    }

    return people;
}

console.log(number([[10, 0], [3, 5], [5, 2]]))