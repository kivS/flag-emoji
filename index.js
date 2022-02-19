class FlagEmoji extends HTMLElement{

    static emojis = {
        "AC": {
            "country_name": "Ascension Island",
            "emoji": "🇦🇨",
            "unicode": "U+1F1E6 U+1F1E8"
        },
        "AD": {
            "country_name": "Andorra",
            "emoji": "🇦🇩",
            "unicode": "U+1F1E6 U+1F1E9"
        },
        "AE": {
            "country_name": "United Arab Emirates",
            "emoji": "🇦🇪",
            "unicode": "U+1F1E6 U+1F1EA"
        },
        "AF": {
            "country_name": "Afghanistan",
            "emoji": "🇦🇫",
            "unicode": "U+1F1E6 U+1F1EB"
        },
        "AG": {
            "country_name": "Antigua & Barbuda",
            "emoji": "🇦🇬",
            "unicode": "U+1F1E6 U+1F1EC"
        },
        "AI": {
            "country_name": "Anguilla",
            "emoji": "🇦🇮",
            "unicode": "U+1F1E6 U+1F1EE"
        },
        "AL": {
            "country_name": "Albania",
            "emoji": "🇦🇱",
            "unicode": "U+1F1E6 U+1F1F1"
        },
        "AM": {
            "country_name": "Armenia",
            "emoji": "🇦🇲",
            "unicode": "U+1F1E6 U+1F1F2"
        },
        "AO": {
            "country_name": "Angola",
            "emoji": "🇦🇴",
            "unicode": "U+1F1E6 U+1F1F4"
        },
        "AQ": {
            "country_name": "Antarctica",
            "emoji": "🇦🇶",
            "unicode": "U+1F1E6 U+1F1F6"
        },
        "AR": {
            "country_name": "Argentina",
            "emoji": "🇦🇷",
            "unicode": "U+1F1E6 U+1F1F7"
        },
        "AS": {
            "country_name": "American Samoa",
            "emoji": "🇦🇸",
            "unicode": "U+1F1E6 U+1F1F8"
        },
        "AT": {
            "country_name": "Austria",
            "emoji": "🇦🇹",
            "unicode": "U+1F1E6 U+1F1F9"
        },
        "AU": {
            "country_name": "Australia",
            "emoji": "🇦🇺",
            "unicode": "U+1F1E6 U+1F1FA"
        },
        "AW": {
            "country_name": "Aruba",
            "emoji": "🇦🇼",
            "unicode": "U+1F1E6 U+1F1FC"
        },
        "AX": {
            "country_name": "Åland Islands",
            "emoji": "🇦🇽",
            "unicode": "U+1F1E6 U+1F1FD"
        },
        "AZ": {
            "country_name": "Azerbaijan",
            "emoji": "🇦🇿",
            "unicode": "U+1F1E6 U+1F1FF"
        },
        "BA": {
            "country_name": "Bosnia & Herzegovina",
            "emoji": "🇧🇦",
            "unicode": "U+1F1E7 U+1F1E6"
        },
        "BB": {
            "country_name": "Barbados",
            "emoji": "🇧🇧",
            "unicode": "U+1F1E7 U+1F1E7"
        },
        "BD": {
            "country_name": "Bangladesh",
            "emoji": "🇧🇩",
            "unicode": "U+1F1E7 U+1F1E9"
        },
        "BE": {
            "country_name": "Belgium",
            "emoji": "🇧🇪",
            "unicode": "U+1F1E7 U+1F1EA"
        },
        "BF": {
            "country_name": "Burkina Faso",
            "emoji": "🇧🇫",
            "unicode": "U+1F1E7 U+1F1EB"
        },
        "BG": {
            "country_name": "Bulgaria",
            "emoji": "🇧🇬",
            "unicode": "U+1F1E7 U+1F1EC"
        },
        "BH": {
            "country_name": "Bahrain",
            "emoji": "🇧🇭",
            "unicode": "U+1F1E7 U+1F1ED"
        },
        "BI": {
            "country_name": "Burundi",
            "emoji": "🇧🇮",
            "unicode": "U+1F1E7 U+1F1EE"
        },
        "BJ": {
            "country_name": "Benin",
            "emoji": "🇧🇯",
            "unicode": "U+1F1E7 U+1F1EF"
        },
        "BL": {
            "country_name": "St. Barthélemy",
            "emoji": "🇧🇱",
            "unicode": "U+1F1E7 U+1F1F1"
        },
        "BM": {
            "country_name": "Bermuda",
            "emoji": "🇧🇲",
            "unicode": "U+1F1E7 U+1F1F2"
        },
        "BN": {
            "country_name": "Brunei",
            "emoji": "🇧🇳",
            "unicode": "U+1F1E7 U+1F1F3"
        },
        "BO": {
            "country_name": "Bolivia",
            "emoji": "🇧🇴",
            "unicode": "U+1F1E7 U+1F1F4"
        },
        "BQ": {
            "country_name": "Caribbean Netherlands",
            "emoji": "🇧🇶",
            "unicode": "U+1F1E7 U+1F1F6"
        },
        "BR": {
            "country_name": "Brazil",
            "emoji": "🇧🇷",
            "unicode": "U+1F1E7 U+1F1F7"
        },
        "BS": {
            "country_name": "Bahamas",
            "emoji": "🇧🇸",
            "unicode": "U+1F1E7 U+1F1F8"
        },
        "BT": {
            "country_name": "Bhutan",
            "emoji": "🇧🇹",
            "unicode": "U+1F1E7 U+1F1F9"
        },
        "BV": {
            "country_name": "Bouvet Island",
            "emoji": "🇧🇻",
            "unicode": "U+1F1E7 U+1F1FB"
        },
        "BW": {
            "country_name": "Botswana",
            "emoji": "🇧🇼",
            "unicode": "U+1F1E7 U+1F1FC"
        },
        "BY": {
            "country_name": "Belarus",
            "emoji": "🇧🇾",
            "unicode": "U+1F1E7 U+1F1FE"
        },
        "BZ": {
            "country_name": "Belize",
            "emoji": "🇧🇿",
            "unicode": "U+1F1E7 U+1F1FF"
        },
        "CA": {
            "country_name": "Canada",
            "emoji": "🇨🇦",
            "unicode": "U+1F1E8 U+1F1E6"
        },
        "CC": {
            "country_name": "Cocos (Keeling) Islands",
            "emoji": "🇨🇨",
            "unicode": "U+1F1E8 U+1F1E8"
        },
        "CD": {
            "country_name": "Congo - Kinshasa",
            "emoji": "🇨🇩",
            "unicode": "U+1F1E8 U+1F1E9"
        },
        "CF": {
            "country_name": "Central African Republic",
            "emoji": "🇨🇫",
            "unicode": "U+1F1E8 U+1F1EB"
        },
        "CG": {
            "country_name": "Congo - Brazzaville",
            "emoji": "🇨🇬",
            "unicode": "U+1F1E8 U+1F1EC"
        },
        "CH": {
            "country_name": "Switzerland",
            "emoji": "🇨🇭",
            "unicode": "U+1F1E8 U+1F1ED"
        },
        "CI": {
            "country_name": "Côte d’Ivoire",
            "emoji": "🇨🇮",
            "unicode": "U+1F1E8 U+1F1EE"
        },
        "CK": {
            "country_name": "Cook Islands",
            "emoji": "🇨🇰",
            "unicode": "U+1F1E8 U+1F1F0"
        },
        "CL": {
            "country_name": "Chile",
            "emoji": "🇨🇱",
            "unicode": "U+1F1E8 U+1F1F1"
        },
        "CM": {
            "country_name": "Cameroon",
            "emoji": "🇨🇲",
            "unicode": "U+1F1E8 U+1F1F2"
        },
        "CN": {
            "country_name": "China",
            "emoji": "🇨🇳",
            "unicode": "U+1F1E8 U+1F1F3"
        },
        "CO": {
            "country_name": "Colombia",
            "emoji": "🇨🇴",
            "unicode": "U+1F1E8 U+1F1F4"
        },
        "CP": {
            "country_name": "Clipperton Island",
            "emoji": "🇨🇵",
            "unicode": "U+1F1E8 U+1F1F5"
        },
        "CR": {
            "country_name": "Costa Rica",
            "emoji": "🇨🇷",
            "unicode": "U+1F1E8 U+1F1F7"
        },
        "CU": {
            "country_name": "Cuba",
            "emoji": "🇨🇺",
            "unicode": "U+1F1E8 U+1F1FA"
        },
        "CV": {
            "country_name": "Cape Verde",
            "emoji": "🇨🇻",
            "unicode": "U+1F1E8 U+1F1FB"
        },
        "CW": {
            "country_name": "Curaçao",
            "emoji": "🇨🇼",
            "unicode": "U+1F1E8 U+1F1FC"
        },
        "CX": {
            "country_name": "Christmas Island",
            "emoji": "🇨🇽",
            "unicode": "U+1F1E8 U+1F1FD"
        },
        "CY": {
            "country_name": "Cyprus",
            "emoji": "🇨🇾",
            "unicode": "U+1F1E8 U+1F1FE"
        },
        "CZ": {
            "country_name": "Czechia",
            "emoji": "🇨🇿",
            "unicode": "U+1F1E8 U+1F1FF"
        },
        "DE": {
            "country_name": "Germany",
            "emoji": "🇩🇪",
            "unicode": "U+1F1E9 U+1F1EA"
        },
        "DG": {
            "country_name": "Diego Garcia",
            "emoji": "🇩🇬",
            "unicode": "U+1F1E9 U+1F1EC"
        },
        "DJ": {
            "country_name": "Djibouti",
            "emoji": "🇩🇯",
            "unicode": "U+1F1E9 U+1F1EF"
        },
        "DK": {
            "country_name": "Denmark",
            "emoji": "🇩🇰",
            "unicode": "U+1F1E9 U+1F1F0"
        },
        "DM": {
            "country_name": "Dominica",
            "emoji": "🇩🇲",
            "unicode": "U+1F1E9 U+1F1F2"
        },
        "DO": {
            "country_name": "Dominican Republic",
            "emoji": "🇩🇴",
            "unicode": "U+1F1E9 U+1F1F4"
        },
        "DZ": {
            "country_name": "Algeria",
            "emoji": "🇩🇿",
            "unicode": "U+1F1E9 U+1F1FF"
        },
        "EA": {
            "country_name": "Ceuta & Melilla",
            "emoji": "🇪🇦",
            "unicode": "U+1F1EA U+1F1E6"
        },
        "EC": {
            "country_name": "Ecuador",
            "emoji": "🇪🇨",
            "unicode": "U+1F1EA U+1F1E8"
        },
        "EE": {
            "country_name": "Estonia",
            "emoji": "🇪🇪",
            "unicode": "U+1F1EA U+1F1EA"
        },
        "EG": {
            "country_name": "Egypt",
            "emoji": "🇪🇬",
            "unicode": "U+1F1EA U+1F1EC"
        },
        "EH": {
            "country_name": "Western Sahara",
            "emoji": "🇪🇭",
            "unicode": "U+1F1EA U+1F1ED"
        },
        "ER": {
            "country_name": "Eritrea",
            "emoji": "🇪🇷",
            "unicode": "U+1F1EA U+1F1F7"
        },
        "ES": {
            "country_name": "Spain",
            "emoji": "🇪🇸",
            "unicode": "U+1F1EA U+1F1F8"
        },
        "ET": {
            "country_name": "Ethiopia",
            "emoji": "🇪🇹",
            "unicode": "U+1F1EA U+1F1F9"
        },
        "EU": {
            "country_name": "European Union",
            "emoji": "🇪🇺",
            "unicode": "U+1F1EA U+1F1FA"
        },
        "FI": {
            "country_name": "Finland",
            "emoji": "🇫🇮",
            "unicode": "U+1F1EB U+1F1EE"
        },
        "FJ": {
            "country_name": "Fiji",
            "emoji": "🇫🇯",
            "unicode": "U+1F1EB U+1F1EF"
        },
        "FK": {
            "country_name": "Falkland Islands",
            "emoji": "🇫🇰",
            "unicode": "U+1F1EB U+1F1F0"
        },
        "FM": {
            "country_name": "Micronesia",
            "emoji": "🇫🇲",
            "unicode": "U+1F1EB U+1F1F2"
        },
        "FO": {
            "country_name": "Faroe Islands",
            "emoji": "🇫🇴",
            "unicode": "U+1F1EB U+1F1F4"
        },
        "FR": {
            "country_name": "France",
            "emoji": "🇫🇷",
            "unicode": "U+1F1EB U+1F1F7"
        },
        "GA": {
            "country_name": "Gabon",
            "emoji": "🇬🇦",
            "unicode": "U+1F1EC U+1F1E6"
        },
        "GB": {
            "country_name": "United Kingdom",
            "emoji": "🇬🇧",
            "unicode": "U+1F1EC U+1F1E7"
        },
        "GD": {
            "country_name": "Grenada",
            "emoji": "🇬🇩",
            "unicode": "U+1F1EC U+1F1E9"
        },
        "GE": {
            "country_name": "Georgia",
            "emoji": "🇬🇪",
            "unicode": "U+1F1EC U+1F1EA"
        },
        "GF": {
            "country_name": "French Guiana",
            "emoji": "🇬🇫",
            "unicode": "U+1F1EC U+1F1EB"
        },
        "GG": {
            "country_name": "Guernsey",
            "emoji": "🇬🇬",
            "unicode": "U+1F1EC U+1F1EC"
        },
        "GH": {
            "country_name": "Ghana",
            "emoji": "🇬🇭",
            "unicode": "U+1F1EC U+1F1ED"
        },
        "GI": {
            "country_name": "Gibraltar",
            "emoji": "🇬🇮",
            "unicode": "U+1F1EC U+1F1EE"
        },
        "GL": {
            "country_name": "Greenland",
            "emoji": "🇬🇱",
            "unicode": "U+1F1EC U+1F1F1"
        },
        "GM": {
            "country_name": "Gambia",
            "emoji": "🇬🇲",
            "unicode": "U+1F1EC U+1F1F2"
        },
        "GN": {
            "country_name": "Guinea",
            "emoji": "🇬🇳",
            "unicode": "U+1F1EC U+1F1F3"
        },
        "GP": {
            "country_name": "Guadeloupe",
            "emoji": "🇬🇵",
            "unicode": "U+1F1EC U+1F1F5"
        },
        "GQ": {
            "country_name": "Equatorial Guinea",
            "emoji": "🇬🇶",
            "unicode": "U+1F1EC U+1F1F6"
        },
        "GR": {
            "country_name": "Greece",
            "emoji": "🇬🇷",
            "unicode": "U+1F1EC U+1F1F7"
        },
        "GS": {
            "country_name": "South Georgia & South Sandwich Islands",
            "emoji": "🇬🇸",
            "unicode": "U+1F1EC U+1F1F8"
        },
        "GT": {
            "country_name": "Guatemala",
            "emoji": "🇬🇹",
            "unicode": "U+1F1EC U+1F1F9"
        },
        "GU": {
            "country_name": "Guam",
            "emoji": "🇬🇺",
            "unicode": "U+1F1EC U+1F1FA"
        },
        "GW": {
            "country_name": "Guinea-Bissau",
            "emoji": "🇬🇼",
            "unicode": "U+1F1EC U+1F1FC"
        },
        "GY": {
            "country_name": "Guyana",
            "emoji": "🇬🇾",
            "unicode": "U+1F1EC U+1F1FE"
        },
        "HK": {
            "country_name": "Hong Kong SAR China",
            "emoji": "🇭🇰",
            "unicode": "U+1F1ED U+1F1F0"
        },
        "HM": {
            "country_name": "Heard & McDonald Islands",
            "emoji": "🇭🇲",
            "unicode": "U+1F1ED U+1F1F2"
        },
        "HN": {
            "country_name": "Honduras",
            "emoji": "🇭🇳",
            "unicode": "U+1F1ED U+1F1F3"
        },
        "HR": {
            "country_name": "Croatia",
            "emoji": "🇭🇷",
            "unicode": "U+1F1ED U+1F1F7"
        },
        "HT": {
            "country_name": "Haiti",
            "emoji": "🇭🇹",
            "unicode": "U+1F1ED U+1F1F9"
        },
        "HU": {
            "country_name": "Hungary",
            "emoji": "🇭🇺",
            "unicode": "U+1F1ED U+1F1FA"
        },
        "IC": {
            "country_name": "Canary Islands",
            "emoji": "🇮🇨",
            "unicode": "U+1F1EE U+1F1E8"
        },
        "ID": {
            "country_name": "Indonesia",
            "emoji": "🇮🇩",
            "unicode": "U+1F1EE U+1F1E9"
        },
        "IE": {
            "country_name": "Ireland",
            "emoji": "🇮🇪",
            "unicode": "U+1F1EE U+1F1EA"
        },
        "IL": {
            "country_name": "Israel",
            "emoji": "🇮🇱",
            "unicode": "U+1F1EE U+1F1F1"
        },
        "IM": {
            "country_name": "Isle of Man",
            "emoji": "🇮🇲",
            "unicode": "U+1F1EE U+1F1F2"
        },
        "IN": {
            "country_name": "India",
            "emoji": "🇮🇳",
            "unicode": "U+1F1EE U+1F1F3"
        },
        "IO": {
            "country_name": "British Indian Ocean Territory",
            "emoji": "🇮🇴",
            "unicode": "U+1F1EE U+1F1F4"
        },
        "IQ": {
            "country_name": "Iraq",
            "emoji": "🇮🇶",
            "unicode": "U+1F1EE U+1F1F6"
        },
        "IR": {
            "country_name": "Iran",
            "emoji": "🇮🇷",
            "unicode": "U+1F1EE U+1F1F7"
        },
        "IS": {
            "country_name": "Iceland",
            "emoji": "🇮🇸",
            "unicode": "U+1F1EE U+1F1F8"
        },
        "IT": {
            "country_name": "Italy",
            "emoji": "🇮🇹",
            "unicode": "U+1F1EE U+1F1F9"
        },
        "JE": {
            "country_name": "Jersey",
            "emoji": "🇯🇪",
            "unicode": "U+1F1EF U+1F1EA"
        },
        "JM": {
            "country_name": "Jamaica",
            "emoji": "🇯🇲",
            "unicode": "U+1F1EF U+1F1F2"
        },
        "JO": {
            "country_name": "Jordan",
            "emoji": "🇯🇴",
            "unicode": "U+1F1EF U+1F1F4"
        },
        "JP": {
            "country_name": "Japan",
            "emoji": "🇯🇵",
            "unicode": "U+1F1EF U+1F1F5"
        },
        "KE": {
            "country_name": "Kenya",
            "emoji": "🇰🇪",
            "unicode": "U+1F1F0 U+1F1EA"
        },
        "KG": {
            "country_name": "Kyrgyzstan",
            "emoji": "🇰🇬",
            "unicode": "U+1F1F0 U+1F1EC"
        },
        "KH": {
            "country_name": "Cambodia",
            "emoji": "🇰🇭",
            "unicode": "U+1F1F0 U+1F1ED"
        },
        "KI": {
            "country_name": "Kiribati",
            "emoji": "🇰🇮",
            "unicode": "U+1F1F0 U+1F1EE"
        },
        "KM": {
            "country_name": "Comoros",
            "emoji": "🇰🇲",
            "unicode": "U+1F1F0 U+1F1F2"
        },
        "KN": {
            "country_name": "St. Kitts & Nevis",
            "emoji": "🇰🇳",
            "unicode": "U+1F1F0 U+1F1F3"
        },
        "KP": {
            "country_name": "North Korea",
            "emoji": "🇰🇵",
            "unicode": "U+1F1F0 U+1F1F5"
        },
        "KR": {
            "country_name": "South Korea",
            "emoji": "🇰🇷",
            "unicode": "U+1F1F0 U+1F1F7"
        },
        "KW": {
            "country_name": "Kuwait",
            "emoji": "🇰🇼",
            "unicode": "U+1F1F0 U+1F1FC"
        },
        "KY": {
            "country_name": "Cayman Islands",
            "emoji": "🇰🇾",
            "unicode": "U+1F1F0 U+1F1FE"
        },
        "KZ": {
            "country_name": "Kazakhstan",
            "emoji": "🇰🇿",
            "unicode": "U+1F1F0 U+1F1FF"
        },
        "LA": {
            "country_name": "Laos",
            "emoji": "🇱🇦",
            "unicode": "U+1F1F1 U+1F1E6"
        },
        "LB": {
            "country_name": "Lebanon",
            "emoji": "🇱🇧",
            "unicode": "U+1F1F1 U+1F1E7"
        },
        "LC": {
            "country_name": "St. Lucia",
            "emoji": "🇱🇨",
            "unicode": "U+1F1F1 U+1F1E8"
        },
        "LI": {
            "country_name": "Liechtenstein",
            "emoji": "🇱🇮",
            "unicode": "U+1F1F1 U+1F1EE"
        },
        "LK": {
            "country_name": "Sri Lanka",
            "emoji": "🇱🇰",
            "unicode": "U+1F1F1 U+1F1F0"
        },
        "LR": {
            "country_name": "Liberia",
            "emoji": "🇱🇷",
            "unicode": "U+1F1F1 U+1F1F7"
        },
        "LS": {
            "country_name": "Lesotho",
            "emoji": "🇱🇸",
            "unicode": "U+1F1F1 U+1F1F8"
        },
        "LT": {
            "country_name": "Lithuania",
            "emoji": "🇱🇹",
            "unicode": "U+1F1F1 U+1F1F9"
        },
        "LU": {
            "country_name": "Luxembourg",
            "emoji": "🇱🇺",
            "unicode": "U+1F1F1 U+1F1FA"
        },
        "LV": {
            "country_name": "Latvia",
            "emoji": "🇱🇻",
            "unicode": "U+1F1F1 U+1F1FB"
        },
        "LY": {
            "country_name": "Libya",
            "emoji": "🇱🇾",
            "unicode": "U+1F1F1 U+1F1FE"
        },
        "MA": {
            "country_name": "Morocco",
            "emoji": "🇲🇦",
            "unicode": "U+1F1F2 U+1F1E6"
        },
        "MC": {
            "country_name": "Monaco",
            "emoji": "🇲🇨",
            "unicode": "U+1F1F2 U+1F1E8"
        },
        "MD": {
            "country_name": "Moldova",
            "emoji": "🇲🇩",
            "unicode": "U+1F1F2 U+1F1E9"
        },
        "ME": {
            "country_name": "Montenegro",
            "emoji": "🇲🇪",
            "unicode": "U+1F1F2 U+1F1EA"
        },
        "MF": {
            "country_name": "St. Martin",
            "emoji": "🇲🇫",
            "unicode": "U+1F1F2 U+1F1EB"
        },
        "MG": {
            "country_name": "Madagascar",
            "emoji": "🇲🇬",
            "unicode": "U+1F1F2 U+1F1EC"
        },
        "MH": {
            "country_name": "Marshall Islands",
            "emoji": "🇲🇭",
            "unicode": "U+1F1F2 U+1F1ED"
        },
        "MK": {
            "country_name": "Macedonia",
            "emoji": "🇲🇰",
            "unicode": "U+1F1F2 U+1F1F0"
        },
        "ML": {
            "country_name": "Mali",
            "emoji": "🇲🇱",
            "unicode": "U+1F1F2 U+1F1F1"
        },
        "MM": {
            "country_name": "Myanmar (Burma)",
            "emoji": "🇲🇲",
            "unicode": "U+1F1F2 U+1F1F2"
        },
        "MN": {
            "country_name": "Mongolia",
            "emoji": "🇲🇳",
            "unicode": "U+1F1F2 U+1F1F3"
        },
        "MO": {
            "country_name": "Macau SAR China",
            "emoji": "🇲🇴",
            "unicode": "U+1F1F2 U+1F1F4"
        },
        "MP": {
            "country_name": "Northern Mariana Islands",
            "emoji": "🇲🇵",
            "unicode": "U+1F1F2 U+1F1F5"
        },
        "MQ": {
            "country_name": "Martinique",
            "emoji": "🇲🇶",
            "unicode": "U+1F1F2 U+1F1F6"
        },
        "MR": {
            "country_name": "Mauritania",
            "emoji": "🇲🇷",
            "unicode": "U+1F1F2 U+1F1F7"
        },
        "MS": {
            "country_name": "Montserrat",
            "emoji": "🇲🇸",
            "unicode": "U+1F1F2 U+1F1F8"
        },
        "MT": {
            "country_name": "Malta",
            "emoji": "🇲🇹",
            "unicode": "U+1F1F2 U+1F1F9"
        },
        "MU": {
            "country_name": "Mauritius",
            "emoji": "🇲🇺",
            "unicode": "U+1F1F2 U+1F1FA"
        },
        "MV": {
            "country_name": "Maldives",
            "emoji": "🇲🇻",
            "unicode": "U+1F1F2 U+1F1FB"
        },
        "MW": {
            "country_name": "Malawi",
            "emoji": "🇲🇼",
            "unicode": "U+1F1F2 U+1F1FC"
        },
        "MX": {
            "country_name": "Mexico",
            "emoji": "🇲🇽",
            "unicode": "U+1F1F2 U+1F1FD"
        },
        "MY": {
            "country_name": "Malaysia",
            "emoji": "🇲🇾",
            "unicode": "U+1F1F2 U+1F1FE"
        },
        "MZ": {
            "country_name": "Mozambique",
            "emoji": "🇲🇿",
            "unicode": "U+1F1F2 U+1F1FF"
        },
        "NA": {
            "country_name": "Namibia",
            "emoji": "🇳🇦",
            "unicode": "U+1F1F3 U+1F1E6"
        },
        "NC": {
            "country_name": "New Caledonia",
            "emoji": "🇳🇨",
            "unicode": "U+1F1F3 U+1F1E8"
        },
        "NE": {
            "country_name": "Niger",
            "emoji": "🇳🇪",
            "unicode": "U+1F1F3 U+1F1EA"
        },
        "NF": {
            "country_name": "Norfolk Island",
            "emoji": "🇳🇫",
            "unicode": "U+1F1F3 U+1F1EB"
        },
        "NG": {
            "country_name": "Nigeria",
            "emoji": "🇳🇬",
            "unicode": "U+1F1F3 U+1F1EC"
        },
        "NI": {
            "country_name": "Nicaragua",
            "emoji": "🇳🇮",
            "unicode": "U+1F1F3 U+1F1EE"
        },
        "NL": {
            "country_name": "Netherlands",
            "emoji": "🇳🇱",
            "unicode": "U+1F1F3 U+1F1F1"
        },
        "NO": {
            "country_name": "Norway",
            "emoji": "🇳🇴",
            "unicode": "U+1F1F3 U+1F1F4"
        },
        "NP": {
            "country_name": "Nepal",
            "emoji": "🇳🇵",
            "unicode": "U+1F1F3 U+1F1F5"
        },
        "NR": {
            "country_name": "Nauru",
            "emoji": "🇳🇷",
            "unicode": "U+1F1F3 U+1F1F7"
        },
        "NU": {
            "country_name": "Niue",
            "emoji": "🇳🇺",
            "unicode": "U+1F1F3 U+1F1FA"
        },
        "NZ": {
            "country_name": "New Zealand",
            "emoji": "🇳🇿",
            "unicode": "U+1F1F3 U+1F1FF"
        },
        "OM": {
            "country_name": "Oman",
            "emoji": "🇴🇲",
            "unicode": "U+1F1F4 U+1F1F2"
        },
        "PA": {
            "country_name": "Panama",
            "emoji": "🇵🇦",
            "unicode": "U+1F1F5 U+1F1E6"
        },
        "PE": {
            "country_name": "Peru",
            "emoji": "🇵🇪",
            "unicode": "U+1F1F5 U+1F1EA"
        },
        "PF": {
            "country_name": "French Polynesia",
            "emoji": "🇵🇫",
            "unicode": "U+1F1F5 U+1F1EB"
        },
        "PG": {
            "country_name": "Papua New Guinea",
            "emoji": "🇵🇬",
            "unicode": "U+1F1F5 U+1F1EC"
        },
        "PH": {
            "country_name": "Philippines",
            "emoji": "🇵🇭",
            "unicode": "U+1F1F5 U+1F1ED"
        },
        "PK": {
            "country_name": "Pakistan",
            "emoji": "🇵🇰",
            "unicode": "U+1F1F5 U+1F1F0"
        },
        "PL": {
            "country_name": "Poland",
            "emoji": "🇵🇱",
            "unicode": "U+1F1F5 U+1F1F1"
        },
        "PM": {
            "country_name": "St. Pierre & Miquelon",
            "emoji": "🇵🇲",
            "unicode": "U+1F1F5 U+1F1F2"
        },
        "PN": {
            "country_name": "Pitcairn Islands",
            "emoji": "🇵🇳",
            "unicode": "U+1F1F5 U+1F1F3"
        },
        "PR": {
            "country_name": "Puerto Rico",
            "emoji": "🇵🇷",
            "unicode": "U+1F1F5 U+1F1F7"
        },
        "PS": {
            "country_name": "Palestinian Territories",
            "emoji": "🇵🇸",
            "unicode": "U+1F1F5 U+1F1F8"
        },
        "PT": {
            "country_name": "Portugal",
            "emoji": "🇵🇹",
            "unicode": "U+1F1F5 U+1F1F9"
        },
        "PW": {
            "country_name": "Palau",
            "emoji": "🇵🇼",
            "unicode": "U+1F1F5 U+1F1FC"
        },
        "PY": {
            "country_name": "Paraguay",
            "emoji": "🇵🇾",
            "unicode": "U+1F1F5 U+1F1FE"
        },
        "QA": {
            "country_name": "Qatar",
            "emoji": "🇶🇦",
            "unicode": "U+1F1F6 U+1F1E6"
        },
        "RE": {
            "country_name": "Réunion",
            "emoji": "🇷🇪",
            "unicode": "U+1F1F7 U+1F1EA"
        },
        "RO": {
            "country_name": "Romania",
            "emoji": "🇷🇴",
            "unicode": "U+1F1F7 U+1F1F4"
        },
        "RS": {
            "country_name": "Serbia",
            "emoji": "🇷🇸",
            "unicode": "U+1F1F7 U+1F1F8"
        },
        "RU": {
            "country_name": "Russia",
            "emoji": "🇷🇺",
            "unicode": "U+1F1F7 U+1F1FA"
        },
        "RW": {
            "country_name": "Rwanda",
            "emoji": "🇷🇼",
            "unicode": "U+1F1F7 U+1F1FC"
        },
        "SA": {
            "country_name": "Saudi Arabia",
            "emoji": "🇸🇦",
            "unicode": "U+1F1F8 U+1F1E6"
        },
        "SB": {
            "country_name": "Solomon Islands",
            "emoji": "🇸🇧",
            "unicode": "U+1F1F8 U+1F1E7"
        },
        "SC": {
            "country_name": "Seychelles",
            "emoji": "🇸🇨",
            "unicode": "U+1F1F8 U+1F1E8"
        },
        "SD": {
            "country_name": "Sudan",
            "emoji": "🇸🇩",
            "unicode": "U+1F1F8 U+1F1E9"
        },
        "SE": {
            "country_name": "Sweden",
            "emoji": "🇸🇪",
            "unicode": "U+1F1F8 U+1F1EA"
        },
        "SG": {
            "country_name": "Singapore",
            "emoji": "🇸🇬",
            "unicode": "U+1F1F8 U+1F1EC"
        },
        "SH": {
            "country_name": "St. Helena",
            "emoji": "🇸🇭",
            "unicode": "U+1F1F8 U+1F1ED"
        },
        "SI": {
            "country_name": "Slovenia",
            "emoji": "🇸🇮",
            "unicode": "U+1F1F8 U+1F1EE"
        },
        "SJ": {
            "country_name": "Svalbard & Jan Mayen",
            "emoji": "🇸🇯",
            "unicode": "U+1F1F8 U+1F1EF"
        },
        "SK": {
            "country_name": "Slovakia",
            "emoji": "🇸🇰",
            "unicode": "U+1F1F8 U+1F1F0"
        },
        "SL": {
            "country_name": "Sierra Leone",
            "emoji": "🇸🇱",
            "unicode": "U+1F1F8 U+1F1F1"
        },
        "SM": {
            "country_name": "San Marino",
            "emoji": "🇸🇲",
            "unicode": "U+1F1F8 U+1F1F2"
        },
        "SN": {
            "country_name": "Senegal",
            "emoji": "🇸🇳",
            "unicode": "U+1F1F8 U+1F1F3"
        },
        "SO": {
            "country_name": "Somalia",
            "emoji": "🇸🇴",
            "unicode": "U+1F1F8 U+1F1F4"
        },
        "SR": {
            "country_name": "Suriname",
            "emoji": "🇸🇷",
            "unicode": "U+1F1F8 U+1F1F7"
        },
        "SS": {
            "country_name": "South Sudan",
            "emoji": "🇸🇸",
            "unicode": "U+1F1F8 U+1F1F8"
        },
        "ST": {
            "country_name": "São Tomé & Príncipe",
            "emoji": "🇸🇹",
            "unicode": "U+1F1F8 U+1F1F9"
        },
        "SV": {
            "country_name": "El Salvador",
            "emoji": "🇸🇻",
            "unicode": "U+1F1F8 U+1F1FB"
        },
        "SX": {
            "country_name": "Sint Maarten",
            "emoji": "🇸🇽",
            "unicode": "U+1F1F8 U+1F1FD"
        },
        "SY": {
            "country_name": "Syria",
            "emoji": "🇸🇾",
            "unicode": "U+1F1F8 U+1F1FE"
        },
        "SZ": {
            "country_name": "Swaziland",
            "emoji": "🇸🇿",
            "unicode": "U+1F1F8 U+1F1FF"
        },
        "TA": {
            "country_name": "Tristan da Cunha",
            "emoji": "🇹🇦",
            "unicode": "U+1F1F9 U+1F1E6"
        },
        "TC": {
            "country_name": "Turks & Caicos Islands",
            "emoji": "🇹🇨",
            "unicode": "U+1F1F9 U+1F1E8"
        },
        "TD": {
            "country_name": "Chad",
            "emoji": "🇹🇩",
            "unicode": "U+1F1F9 U+1F1E9"
        },
        "TF": {
            "country_name": "French Southern Territories",
            "emoji": "🇹🇫",
            "unicode": "U+1F1F9 U+1F1EB"
        },
        "TG": {
            "country_name": "Togo",
            "emoji": "🇹🇬",
            "unicode": "U+1F1F9 U+1F1EC"
        },
        "TH": {
            "country_name": "Thailand",
            "emoji": "🇹🇭",
            "unicode": "U+1F1F9 U+1F1ED"
        },
        "TJ": {
            "country_name": "Tajikistan",
            "emoji": "🇹🇯",
            "unicode": "U+1F1F9 U+1F1EF"
        },
        "TK": {
            "country_name": "Tokelau",
            "emoji": "🇹🇰",
            "unicode": "U+1F1F9 U+1F1F0"
        },
        "TL": {
            "country_name": "Timor-Leste",
            "emoji": "🇹🇱",
            "unicode": "U+1F1F9 U+1F1F1"
        },
        "TM": {
            "country_name": "Turkmenistan",
            "emoji": "🇹🇲",
            "unicode": "U+1F1F9 U+1F1F2"
        },
        "TN": {
            "country_name": "Tunisia",
            "emoji": "🇹🇳",
            "unicode": "U+1F1F9 U+1F1F3"
        },
        "TO": {
            "country_name": "Tonga",
            "emoji": "🇹🇴",
            "unicode": "U+1F1F9 U+1F1F4"
        },
        "TR": {
            "country_name": "Turkey",
            "emoji": "🇹🇷",
            "unicode": "U+1F1F9 U+1F1F7"
        },
        "TT": {
            "country_name": "Trinidad & Tobago",
            "emoji": "🇹🇹",
            "unicode": "U+1F1F9 U+1F1F9"
        },
        "TV": {
            "country_name": "Tuvalu",
            "emoji": "🇹🇻",
            "unicode": "U+1F1F9 U+1F1FB"
        },
        "TW": {
            "country_name": "Taiwan",
            "emoji": "🇹🇼",
            "unicode": "U+1F1F9 U+1F1FC"
        },
        "TZ": {
            "country_name": "Tanzania",
            "emoji": "🇹🇿",
            "unicode": "U+1F1F9 U+1F1FF"
        },
        "UA": {
            "country_name": "Ukraine",
            "emoji": "🇺🇦",
            "unicode": "U+1F1FA U+1F1E6"
        },
        "UG": {
            "country_name": "Uganda",
            "emoji": "🇺🇬",
            "unicode": "U+1F1FA U+1F1EC"
        },
        "UM": {
            "country_name": "U.S. Outlying Islands",
            "emoji": "🇺🇲",
            "unicode": "U+1F1FA U+1F1F2"
        },
        "UN": {
            "country_name": "United Nations",
            "emoji": "🇺🇳",
            "unicode": "U+1F1FA U+1F1F3"
        },
        "US": {
            "country_name": "United States",
            "emoji": "🇺🇸",
            "unicode": "U+1F1FA U+1F1F8"
        },
        "UY": {
            "country_name": "Uruguay",
            "emoji": "🇺🇾",
            "unicode": "U+1F1FA U+1F1FE"
        },
        "UZ": {
            "country_name": "Uzbekistan",
            "emoji": "🇺🇿",
            "unicode": "U+1F1FA U+1F1FF"
        },
        "VA": {
            "country_name": "Vatican City",
            "emoji": "🇻🇦",
            "unicode": "U+1F1FB U+1F1E6"
        },
        "VC": {
            "country_name": "St. Vincent & Grenadines",
            "emoji": "🇻🇨",
            "unicode": "U+1F1FB U+1F1E8"
        },
        "VE": {
            "country_name": "Venezuela",
            "emoji": "🇻🇪",
            "unicode": "U+1F1FB U+1F1EA"
        },
        "VG": {
            "country_name": "British Virgin Islands",
            "emoji": "🇻🇬",
            "unicode": "U+1F1FB U+1F1EC"
        },
        "VI": {
            "country_name": "U.S. Virgin Islands",
            "emoji": "🇻🇮",
            "unicode": "U+1F1FB U+1F1EE"
        },
        "VN": {
            "country_name": "Vietnam",
            "emoji": "🇻🇳",
            "unicode": "U+1F1FB U+1F1F3"
        },
        "VU": {
            "country_name": "Vanuatu",
            "emoji": "🇻🇺",
            "unicode": "U+1F1FB U+1F1FA"
        },
        "WF": {
            "country_name": "Wallis & Futuna",
            "emoji": "🇼🇫",
            "unicode": "U+1F1FC U+1F1EB"
        },
        "WS": {
            "country_name": "Samoa",
            "emoji": "🇼🇸",
            "unicode": "U+1F1FC U+1F1F8"
        },
        "XK": {
            "country_name": "Kosovo",
            "emoji": "🇽🇰",
            "unicode": "U+1F1FD U+1F1F0"
        },
        "YE": {
            "country_name": "Yemen",
            "emoji": "🇾🇪",
            "unicode": "U+1F1FE U+1F1EA"
        },
        "YT": {
            "country_name": "Mayotte",
            "emoji": "🇾🇹",
            "unicode": "U+1F1FE U+1F1F9"
        },
        "ZA": {
            "country_name": "South Africa",
            "emoji": "🇿🇦",
            "unicode": "U+1F1FF U+1F1E6"
        },
        "ZM": {
            "country_name": "Zambia",
            "emoji": "🇿🇲",
            "unicode": "U+1F1FF U+1F1F2"
        },
        "ZW": {
            "country_name": "Zimbabwe",
            "emoji": "🇿🇼",
            "unicode": "U+1F1FF U+1F1FC"
        }
    }

    constructor(){
        super()
        this.attachShadow({ mode: 'open' })
    }

    static get observedAttributes(){
        return ['country']
    }

    get country(){
        return this.hasAttribute('country') ? this.getAttribute('country').toUpperCase() : ''
    }

    set country(country){
        this.setAttribute('country', country?.toUpperCase())
    }

    attributeChangedCallback(attrName, oldVal, newVal){
        if (newVal !== oldVal) {
            this[attrName] = newVal;
            this._renderFlag();
        }
    }


    connectedCallback(){
        this._renderFlag()
    }

    _renderFlag(){
        
        let country = FlagEmoji.emojis[this.country]

        if (!country) return console.error(`country [ ${this.country} ] not found!`)

        this.shadowRoot.innerHTML = `
            <span title="${country['country_name']}">${country['emoji']}</span>
        `

        this.setAttribute('name', country['country_name'])
    }

    static find_by_name(country_name) {
        let matches = []

        for (let item in FlagEmoji.emojis) {
            let name =  FlagEmoji.emojis[item]['country_name'].toLowerCase()
            
            let matched = name.indexOf(country_name.toLowerCase()) !== -1

            if(matched){
                matches.push({ emoji:  FlagEmoji.emojis[item]['emoji'] , code: item, name: name})
            }
        }

        console.table(matches)
        return matches

    }

    static find_by_code(country_code) {
        let matches = []

        for (let item in  FlagEmoji.emojis) {
            let code = item.toLowerCase()

            let matched = code.indexOf(country_code.toLowerCase()) !== -1

            if (matched) {
                matches.push({ emoji:  FlagEmoji.emojis[item]['emoji'], code: code, name:  FlagEmoji.emojis[item]['country_name'] })
            }
        }

        console.table(matches)
        return matches

    }
}

window.customElements.define('flag-emoji', FlagEmoji)