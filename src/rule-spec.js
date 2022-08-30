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

/**
 * baseUrl variable & authorization type API Key
 * 
 * Dutch Land Registry (BRK)
**/
const KeyBRK = `x-api-key`
const ValueBRK = `<shared via Teams>`
const baseUrlBRK = `https://api.brk.kadaster.nl/esd-eto-apikey/bevragen/v1`

/**
 * GET request Dutch Land Registry (BRK) for finding
 * - onject identification
 * - cadastral designation
 * - postcal code
 * - mortgage identifications
 */
 fetch(baseUrlBRK+'/kadastraalonroerendezaken?fields=identificatie,kadastraleAanduiding,adressen,hypotheekIdentificaties&nummeraanduidingIdentificatie=<string>', {
    method: 'GET'
});

/**
 * Example output for number designation identification = 0200200000003732

{
    "_links": {
        "self": {
            "href": "/kadastraalonroerendezaken?fields=identificatie,kadastraleAanduiding,adressen,hypotheekIdentificaties&nummeraanduidingIdentificatie=0200200000003732"
        }
    },
    "_embedded": {
        "kadastraalOnroerendeZaken": [
            {
                "identificatie": "76870482670000",
                "domein": "NL.IMKAD.KadastraalObject",
                "type": "perceel",
                "kadastraleAanduiding": "Beekbergen K 4826",
                "adressen": [
                    {
                        "straat": "Atalanta",
                        "huisnummer": 25,
                        "postcode": "7361EW",
                        "woonplaats": "Beekbergen",
                        "nummeraanduidingIdentificatie": "0200200000003732",
                        "adresregel1": "Atalanta 25",
                        "adresregel2": "7361EW Beekbergen",
                        "koppelingswijze": {
                            "code": "ADM_GEO",
                            "waarde": "administratief en geometrisch"
                        },
                        "adresseerbaarObjectIdentificatie": "0200010000132504"
                    }
                ],
                "hypotheekIdentificaties": [
                    "1000002150",
                    "35139325"
                ],
                "_links": {
                    "self": {
                        "href": "/kadastraalonroerendezaken/76870482670000"
                    }
                }
            }
        ]
    }
}
*/

