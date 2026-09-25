const apiURL = "https://api.hyrule-compendium.com/v3/compendium/all";

async function getData() {

    const response = await fetch(apiURL);

if (!response.ok) {
        throw new Error("Kunde inte hitta data från API:t");
    }

    const data = await response.json();

    return data;
}

export { getData };