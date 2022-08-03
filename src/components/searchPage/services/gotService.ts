export default class GotService {
    static _apiBase: string;
    constructor() {
      GotService._apiBase = 'https://api.punkapi.com/v2';
    }
    static getResource = async (url: RequestInfo | URL) => {
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error(`Could not fetch ${this._apiBase}` +
          `, received ${res.status}`);
      }

      return await res.json();
    }

    static getBears = async (request: string | number, page: number) => {
      const Bears = await this.getResource(`${this._apiBase}/beers?beer_name=${request}&page=${page}&per_page=15`);
      return this._transformBears(Bears);
    }

    static lengthString(data: string, size: number):string {
        if (data.length < size) {
            return data
        } else {
            return data.substring(0, size)+"..."
        }
    }

    static _transformBears = (Bears: {
          name: string;
          tagline: string | null;
          description: string | null;
          descriptionSmall: string | null;
          image_url: string | null;
          abv: string | null;
          food_pairing: string[] | null;
        }[]) => {
        let i=0;
        let aut = Bears.map((data) => {
          return {
            name: data.name,
            tagline: data.tagline,
            description: data.description === null ?  "No information" : data.description,
            descriptionSmall: data.description === null ?  "No information" : this.lengthString(data.description, 140),
            img: data.image_url,
            abv: data.abv,
            foodPairing: data.food_pairing === null ?  "No information" : data.food_pairing.join(". "),
            id: i++,
          };
        })
        return aut;
    }
}
