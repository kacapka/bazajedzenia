export const isAddressInWarsaw = (place) => {
    let isInWarsaw, con;

    isInWarsaw = place.address_components.some((e) => e.long_name === 'Warszawa');

    if(!isInWarsaw) {
        con = window.confirm('Serwis zawiera lokale wyłącznie dla Warszawy, Twoje położenie znajduję się poza granicami miasta. Czy chcesz kontynuować?');
    } else {
        con = true;
    }

    return con;
}
    
export const getUserLocation = (callback) => {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(callback);
    } else {
        alert('Twoja przeglądarka nie obsługuję wykrywania lokalizacji');
    }
}
    



