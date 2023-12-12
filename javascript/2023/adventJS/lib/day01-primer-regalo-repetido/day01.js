class Day01 {
    static findFirstRepeated(gifts) {
        let firstIndexRepeated = -1;
    
        gifts.forEach((g, index) => {
            let subGifts = gifts.slice(index+1);
            let elementRepeated = subGifts.indexOf(g) != -1 ? subGifts.indexOf(g) + (index + 1) : -1;
    
            if(firstIndexRepeated == -1 && elementRepeated != -1) firstIndexRepeated = elementRepeated;
            if(elementRepeated != -1) {
                if(elementRepeated < firstIndexRepeated) firstIndexRepeated = elementRepeated
            }
        });
     
        return firstIndexRepeated != -1 ? gifts[firstIndexRepeated] : -1;
    }
}

module.exports = Day01;
