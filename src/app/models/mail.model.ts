export class Mail {
    public sender: string;
    public subject: string;
    public body: string;
    public date: string;
    public opened: boolean;

    constructor(sender: string, subject: string, body: string, date: string, opened: boolean) {
        this.sender = sender;
        this.subject = subject;
        this.body = body;
        this.date = date;
        this.opened = opened;
    }
}
