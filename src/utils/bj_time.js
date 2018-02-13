const bjTime = {
    getSec: (moment) => {
        return moment.hour() * 3600 + moment.minute() * 60;
    },
    //change day id according to corners data - days id from 1 to 7
    getDayId: (moment) => {
       return moment.day() === 0 ? 7 : moment.day();
    }
}

export default bjTime;