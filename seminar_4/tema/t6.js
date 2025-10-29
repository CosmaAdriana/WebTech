const fetch = require('node-fetch');

async function getObjectFromUrl(url) {
    const response = await fetch(url);
    const text = await response.text();
    return JSON.parse(text);
}

async function getCountryBounds(county) {
   const object  =await getObjectFromUrl(`https://nominatim.openstreetmap.org/search?country=Romania&format=json`)
    return {
        minLatitude: object[0].boundingbox[0],
        maxLatitude: object[0].boundingbox[1],
        minLongitude: object[0].boundingbox[2],
        maxLongitude: object[0].boundingbox[3],
    }
}

async function getPlanes() {
  const bounds = await getCountryBounds();

  const url = `https://opensky-network.org/api/states/all?lamin=${bounds.minLatitude}&lomin=${bounds.minLongitude}&lamax=${bounds.maxLatitude}&lomax=${bounds.maxLongitude}`;

  const response = await fetch(url);
  const data = await response.json();

  return data.states;
}

async function main() {
  const planes = await getPlanes();

  console.log(`S-au găsit ${planes.length} avioane deasupra României:\n`);

  for (let i = 0; i < planes.length; i++) {
    console.log(planes[i][0]);
  }
}

main();
