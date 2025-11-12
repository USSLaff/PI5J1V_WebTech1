const fs = require('fs').promises;

async function readFiles() {
    try {
        // garage.json olvasása
        const garageData = await fs.readFile('./library.json', 'utf8');
        const garage = JSON.parse(garageData);
        console.log('Garage:', garage);

    } catch (err) {
        console.error('Hiba a fájl olvasása során:', err);
    }
}

readFiles()