/**
 * baseUrl variable for identity
 */
const baseUrl = 'https://www.haalcentraal.nl/haalcentraal/api/brp';

/**
 * authorization type API Key
 */
const Key = 'x-api-key'
const Value = '<shared via Teams>'

/**
 * GET request for finding BSN via basUrl
 */
fetch(baseUrl+'/ingeschrevenpersonen/:burgerservicenummer?fields=burgerservicenummer,naam,geboorte.datum', {
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
