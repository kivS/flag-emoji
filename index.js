class FlagEmoji extends HTMLElement{

    _emojis = {
        'us': { emoji: '🇺🇸', country_name: 'United States' },
        'gb': { emoji: '🇬🇧', country_name: 'United Kingdom' },
        'fr': { emoji: '🇫🇷', country_name: 'France' },
        'de': { emoji: '🇩🇪', country_name: 'Germany' },
        'it': { emoji: '🇮🇹', country_name: 'Italy' },
        'es': { emoji: '🇪🇸', country_name: 'Spain' },
        'ca': { emoji: '🇨🇦', country_name: 'Canada' },
        'au': { emoji: '🇦🇺', country_name: 'Australia' },
        'nz': { emoji: '🇳🇿', country_name: 'New Zealand' },
        'jp': { emoji: '🇯🇵', country_name: 'Japan' },
        'kr': { emoji: '🇰🇷', country_name: 'Korea' },
        'in': { emoji: '🇮🇳', country_name: 'India' },
        'ru': { emoji: '🇷🇺', country_name: 'Russia' },
        'br': { emoji: '🇧🇷', country_name: 'Brazil' },
        'mx': { emoji: '🇲🇽', country_name: 'Mexico' },
        'tr': { emoji: '🇹🇷', country_name: 'Turkey' },
        'id': { emoji: '🇮🇩', country_name: 'Indonesia' },
        'eg': { emoji: '🇪🇬', country_name: 'Egypt' },
        'sa': { emoji: '🇸🇦', country_name: 'Saudi Arabia' },
        'ar': { emoji: '🇦🇷', country_name: 'Argentina' },
        'cl': { emoji: '🇨🇱', country_name: 'Chile' },
        'at': { emoji: '🇦🇹', country_name: 'Austria' },
        'pl': { emoji: '🇵🇱', country_name: 'Poland' },
        'pt': { emoji: '🇵🇹', country_name: 'Portugal' },
        'dk': { emoji: '🇩🇰', country_name: 'Denmark' },
        'se': { emoji: '🇸🇪', country_name: 'Sweden' },
        'ch': { emoji: '🇨🇭', country_name: 'Switzerland' },
        'nl': { emoji: '🇳🇱', country_name: 'Netherlands' },
        'be': { emoji: '🇧🇪', country_name: 'Belgium' },
        'no': { emoji: '🇳🇴', country_name: 'Norway' },
        'fi': { emoji: '🇫🇮', country_name: 'Finland' },
        'lu': { emoji: '🇱🇺', country_name: 'Luxembourg' },
        'ie': { emoji: '🇮🇪', country_name: 'Ireland' },
        'cz': { emoji: '🇨🇿', country_name: 'Czech Republic' },
        'ro': { emoji: '🇷🇴', country_name: 'Romania' },
        'sk': { emoji: '🇸🇰', country_name: 'Slovakia' },
        'bg': { emoji: '🇧🇬', country_name: 'Bulgaria' },
        'hr': { emoji: '🇭🇷', country_name: 'Croatia' },
        'si': { emoji: '🇸🇮', country_name: 'Slovenia' },
        'rs': { emoji: '🇷🇸', country_name: 'Serbia' },
        'ba': { emoji: '🇧🇦', country_name: 'Bosnia and Herzegovina' },
        'mk': { emoji: '🇲🇰', country_name: 'Macedonia' },
        'me': { emoji: '🇲🇪', country_name: 'Montenegro' },
        'al': { emoji: '🇦🇱', country_name: 'Albania' },
        'gr': { emoji: '🇬🇷', country_name: 'Greece' },
        'tr': { emoji: '🇹🇷', country_name: 'Turkey' },
        'am': { emoji: '🇦🇲', country_name: 'Armenia' },
        'az': { emoji: '🇦🇿', country_name: 'Azerbaijan' },
        'by': { emoji: '🇧🇾', country_name: 'Belarus' },
        'ge': { emoji: '🇬🇪', country_name: 'Georgia' },
        'kz': { emoji: '🇰🇿', country_name: 'Kazakhstan' },
        'kg': { emoji: '🇰🇬', country_name: 'Kyrgyzstan' },
        'tj': { emoji: '🇹🇯', country_name: 'Tajikistan' },
        'tm': { emoji: '🇹🇲', country_name: 'Turkmenistan' },
        'uz': { emoji: '🇺🇿', country_name: 'Uzbekistan' },
        'tm': { emoji: '🇹🇲', country_name: 'Turkmenistan' },
        'af': { emoji: '🇦🇫', country_name: 'Afghanistan' },
        'bd': { emoji: '🇧🇩', country_name: 'Bangladesh' },
        'bt': { emoji: '🇧🇹', country_name: 'Bhutan' },
        'kh': { emoji: '🇰🇭', country_name: 'Cambodia' },
        'cn': { emoji: '🇨🇳', country_name: 'China' },
        'in': { emoji: '🇮🇳', country_name: 'India' },
        'id': { emoji: '🇮🇩', country_name: 'Indonesia' },
        'ir': { emoji: '🇮🇷', country_name: 'Iran' },
    }

    constructor(){
        super()
    }

    static get observedAttributes(){
        return ['country']
    }

    get country(){
        return this.getAttribute('country')
    }

    set country(country){
        this.setAttribute('country', country)
    }

    attributeChangedCallback(attrName, oldVal, newVal){
        if (newVal !== oldVal) {
            this[attrName] = newVal;
            this._renderFlag();
        }
    }


    connectedCallback(){
        this.attachShadow({mode: 'open'})

        this._renderFlag()
    }

    _renderFlag(){
        let country = this._emojis[this.country]

        if (!country) return console.error(`country [ ${this.country} ] not found!`)

        this.shadowRoot.innerHTML = `
            <span title="${country['country_name']}">${country['emoji']}</span>
        `

        this.setAttribute('x-name', country['country_name'])
    }

    find_by_name(country_name) {
        let matches = []

        for (let item in this._emojis) {
            let name = this._emojis[item]['country_name'].toLowerCase()
            
            let matched = name.indexOf(country_name.toLowerCase()) !== -1

            if(matched){
                matches.push({ emoji: this._emojis[item]['emoji'] , code: item, name: name})
            }
        }

        console.table(matches)
        return matches

    }

    find_by_code(country_code) {
        let matches = []

        for (let item in this._emojis) {
            let code = item.toLowerCase()

            let matched = code.indexOf(country_code.toLowerCase()) !== -1

            if (matched) {
                matches.push({ emoji: this._emojis[item]['emoji'], code: code, name: this._emojis[item]['country_name'] })
            }
        }

        console.table(matches)
        return matches

    }
}

window.customElements.define('flag-emoji', FlagEmoji)