function howManyReindeers(reindeerTypes, gifts) {
    gifts.forEach(gift => {
        console.log(gift);
        let totalWeight = gift.weight;
        let reindeers = [];

        while(totalWeight > 0) {
            console.log("Inicio: " + totalWeight);
            reindeerTypes.forEach((reindeer, index, reindeerTypes) => {
                if (reindeer.weightCapacity == 1 && totalWeight == reindeer.weightCapacity) {
                    reindeers.push(reindeer);
                    totalWeight = totalWeight - reindeer.weightCapacity
                    console.log("Despues: " + totalWeight);
                }
                if( totalWeight >= reindeer.weightCapacity) {
                    console.log("true " + totalWeight + ">" + reindeer.weightCapacity);
                    reindeers.push(reindeer);
                    totalWeight = totalWeight - reindeer.weightCapacity
                    console.log("Despues: " + totalWeight);
                    
                }
            });
        }


        console.log(reindeers);
    });
    
    
    //return []
}

const reindeerTypes = [
    { type: 'Nuclear', weightCapacity: 50 },
    { type: 'Electric', weightCapacity: 10 },
    { type: 'Gasoline', weightCapacity: 5 },
    { type: 'Diesel', weightCapacity: 1 }
  ]
  
  const gifts = [
    { country: 'Spain', weight: 30 },
    { country: 'France', weight: 17 },
    { country: 'Italy', weight: 50 }
  ]
  
  console.log(howManyReindeers(reindeerTypes, gifts));
  // [{
  //   country: 'Spain',
  //   reindeers: [
  //     { type: 'Electric', num: 1 },
  //     { type: 'Gasoline', num: 3 },
  //     { type: 'Diesel', num: 5 }
  //   ]
  // }, {
  //   country: 'France',
  //   reindeers: [
  //     { type: 'Electric', num: 1 },
  //     { type: 'Gasoline', num: 1 },
  //     { type: 'Diesel', num: 2 }
  //   ]
  //  }, {
  //   country: 'Italy',
  //   reindeers: [
  //     { type: 'Electric', num: 3 },
  //     { type: 'Gasoline', num: 3 },
  //     { type: 'Diesel', num: 5 }
  //   ]
  // }]