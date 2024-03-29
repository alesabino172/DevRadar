//Fórmula de Haversine
// A fórmula de Haversine é uma importante equação usada em navegação, fornecendo distâncias entre dois pontos 
// de uma esfera a partir de suas latitudes e longitudes. É um caso especial de uma fórmula mais geral de 
// trigonometria esférica, a lei dos Haversines, relacionando os lados a ângulos de uma esfera "triangular".

function deg2rad(deg) {
    return deg * (Math.PI/180);
}

module.exports = function getDistanceFromLatLonInKm(centerCoordinates, pointCoordinates) {
    const radius = 6371;

    const { latitude: lat1, longitude: lon1 } = centerCoordinates;
    const { latitude: lat2, longitude: lon2 } = pointCoordinates;


    const dLat = deg2rad(lat2-lat1);
    const dLon = deg2rad(lon2-lon1);

    const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dlon/2) * Math.sin(dlon/2)
    ;

    const center = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const distance = radius * center;

    return distance;
}