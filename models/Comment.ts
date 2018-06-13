export default class Comment {
    private comments_id?: number;
    private name: string;
    private date: Date;
    private text: string;
    constructor(name: string, text: string, date: Date) {
        this.name = name;
        this.text = text;
        this.date = date;

    }
}




