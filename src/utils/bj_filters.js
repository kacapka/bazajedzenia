const bjFilters = {
    getKitchenTypes: (corners) => {
        let kitchenTypes = [];
        corners.forEach(corner => {
            corner.cornerTypes.forEach(el => {
                if(kitchenTypes.indexOf(el.foodType.name) === -1) {
                    kitchenTypes.push(el.foodType.name);
                }
            })
        });
    
        return kitchenTypes.sort();
    },
    filterByTime: (corners, seconds, dayId) => {
        return corners.filter(corner => {
            return corner.dayRanges.find(day => {
                
                if(day.dayOfWeek === dayId || dayId === null) {
                    if(day.fromInSeconds <= seconds && day.toInSeconds >= seconds) {
                        return corner;
                    };    
                }; 
                
            });    
        });
    }
}

export default bjFilters;


