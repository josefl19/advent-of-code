class Day02 {
    static manufacture(gifts, materials) {
        const regex = new RegExp(`[${materials}]`, 'gi');

        let validGifts = gifts.map(element => {
            let found = element.match(regex);
            if(found.length == element.length) return element;
        }).filter(x => x != undefined);
        
        return validGifts;
    }
}

module.exports = Day02;