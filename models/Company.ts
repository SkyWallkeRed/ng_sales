export default class Company {
    private company_id?: number;
    private name: string;
    private Adrress: string;
    private Country: string;
    constructor(name: string, adrress: string, country: string) {
        this.name = name;
        this.Adrress = adrress;
        this.Country = country;


    }
}



