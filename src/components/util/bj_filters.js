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
    
        return kitchenTypes.sort().map(type => {
            return {
                value: type,
                label: type
            }
        });
    }
}

export default bjFilters;