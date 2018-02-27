import _ from 'underscore';

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
    },
    getHHmm(sec) {
        const pad = (num) => ("0"+num).slice(-2);
        let minutes = Math.floor(sec / 60);
        sec = sec%60;
        let hours = Math.floor(minutes/60);
        minutes = minutes%60;
        return pad(hours) + ':' + pad(minutes);
    },
    //convert data hours object to display in corner detials
    getOpeningHours(data) {
        //helper functions
        const getString = (index, arr) => {
            let string = arr.find(day => parseInt(day[0], 10) === index);
            if(string) { 
                string = string[1].map(h => this.getHHmm(h[0]) + '-' + this.getHHmm(h[1]))
                return string.join(' , ');
            }
        }
        const getDays = (arr) => {
            let hours = [];
            arr[1].forEach(h => {hours.push(h.hour);});
            return hours;
        }
        
        let open = data.map(day => {
            return {
                day: day.dayOfWeek,
                hour: [day.fromInSeconds, day.toInSeconds]
            }
        }).sort((a,b) => a.day - b.day);

        open = _.groupBy(open, 'day');
        open = _.map(open, (value, key) => {
           return [key, value]; 
        });

        open = open.map(day => {
           return [day[0], getDays(day).sort((a,b) => a[0]-b[0])]
        });

        return {
            pon: getString(1, open),
            wt: getString(2, open),
            sr: getString(3, open),
            czw: getString(4, open),
            pt: getString(5, open),
            so: getString(6, open),
            nd: getString(7, open)
        } 
    }
    
}

export default bjFilters;


