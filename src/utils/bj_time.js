export const  getSec = (moment) => {
        return moment.hour() * 3600 + moment.minute() * 60;
}

//change day id according to corners data - days id from 1 to 7
export const getDayId = (moment) => {
    return moment.day() === 0 ? 7 : moment.day();
}

export const createDaysHours = () => {
    
    let x = 30; //minutes interval
    let times = []; // time array
    let tt = 0; // start time

    for (let i=0; tt<24*60; i++) {
        let hh = Math.floor(tt/60); 
        let mm = (tt%60); 
        let sec = (hh % 24) * 3600 + mm * 60;
        let string = ("0" + (hh % 24)).slice(-2) + ':' + ("0" + mm).slice(-2);
        times[i] = {sec, string}
    
        tt = tt + x;
    }
    
    return times;
    
}


