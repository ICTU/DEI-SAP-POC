/**
 * baseUrl variable & authorization type API Key
 * 
 * Personal Records Database (BRP)
 **/
const KeyNP = 'x-api-key'
const ValueNP = '<shared via Teams>'
const baseUrlNP = 'https://www.haalcentraal.nl/haalcentraal/api/brp';

/**
 * GET request Personal Records Database for finding:
 * - BSN
 * - Name
 * - Surname
 * - Date of birth
 */
fetch(baseUrlNP+'/ingeschrevenpersonen/:burgerservicenummer?fields=burgerservicenummer,naam,geboorte.datum', {
    method: 'GET'
});

/**
 * Example output for BSN = 999993872
 
 {
    "_links": {
        "self": {
            "href": "https://www.haalcentraal.nl/haalcentraal/api/brp/ingeschrevenpersonen/999993872"
        }
    },
    "geheimhoudingPersoonsgegevens": true,
    "naam": {
        "aanhef": "Geachte heer Van der Meijden",
        "aanschrijfwijze": "P. van der Meijden",
        "gebruikInLopendeTekst": "de heer Van der Meijden",
        "aanduidingNaamgebruik": "eigen",
        "voornamen": "Peter-Jan",
        "voorletters": "P.",
        "geslachtsnaam": "Meijden",
        "voorvoegsel": "van der"
    },
    "burgerservicenummer": "999993872",
    "geboorte": {
        "datum": {
            "datum": "1959-04-17",
            "jaar": 1959,
            "maand": 4,
            "dag": 17
        }
    }
}
*/

/**
 * GET request Personal Records Database for finding:
 * - BSN
 * - Date of birth
 */
 fetch(baseUrlNP+'/ingeschrevenpersonen/:burgerservicenummer?fields=burgerservicenummer,geboorte.datum', {
    method: 'GET'
});

/**
 * Example output for BSN = 999993872
 
{
    "_links": {
        "self": {
            "href": "https://www.haalcentraal.nl/haalcentraal/api/brp/ingeschrevenpersonen/999993872"
        }
    },
    "geheimhoudingPersoonsgegevens": true,
    "burgerservicenummer": "999993872",
    "geboorte": {
        "datum": {
            "datum": "1959-04-17",
            "jaar": 1959,
            "maand": 4,
            "dag": 17
        }
    }
}
*/

/**
 * baseUrl variable & authorization type API Key
 * 
 * Trade Register
**/
const KeyNNP = `apikey`
const ValueNNP = `<shared via Teams>`
const baseUrlNNP = `https://api.kvk.nl/api`

/**
 * GET request Trade Register for finding
 * - kvkNumber
 * - trade name
 * - address
 * - type
 */
 fetch(baseUrlNNP+'/v1/zoeken?kvkNummer=<string>', {
    method: 'GET'
});

/**
 * Example output for kvkNummer = 27198742
 
{
    "pagina": 1,
    "aantal": 10,
    "totaal": 1,
    "resultaten": [
        {
            "kvkNummer": "27198742",
            "handelsnaam": "Stichting ICTU",
            "straatnaam": "Wilhelmina van Pruisenweg",
            "plaats": "'s-Gravenhage",
            "type": "rechtspersoon",
            "_links": {
                "basisprofiel": {
                    "href": "https://api.kvk.nl/api/v1/basisprofielen/27198742"
                }
            }
        }
    ]
}
*/