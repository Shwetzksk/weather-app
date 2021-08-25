const getData = async function (woeid) {
    try {
        const res = await fetch(`https://cors-anywhere-venky.herokuapp.com/www.metaweather.com/api/location/${woeid}/`);
        const data = await res.json();
        return data;
    } catch (err) {
        throw err;
   } 
}


export async function searchLocationResult(location) {
    try {
        const res = await fetch(`https://cors-anywhere-venky.herokuapp.com/www.metaweather.com/api/location/search/?query=${location}`);
        const resdata = await res.json();
        const data = await getData(resdata[0].woeid);
        return data;
        
    } catch (err) {
        throw err;
   } 
}