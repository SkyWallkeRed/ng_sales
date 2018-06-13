
export default class Customer {
    private FirstName: string;
    private LastName: string;
    private Email: string;
    private Phone: number;
    private Company_id?: number;

    constructor(FirstName: string, LastName: string, Email: string, Phone: number) {
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Email = Email;
        this.Phone = Phone;
    }
}


