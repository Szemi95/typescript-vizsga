export class Event{
    private id: number;
    public name: string;
    public place: string;
    public date: Date;
    public guests: string[];
    public typeOfEvent: string;

    constructor(id: number,name: string,place: string,date: Date,guests: string[],typeOfEvent: string){
        this.id = id;
        this.name = name;
        this.place = place;
        this.date = date;
        this.guests = guests;
        this.typeOfEvent = typeOfEvent; 
    }

}