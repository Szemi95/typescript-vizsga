import { Event } from "../models/Event.js";

class EventService{
    
    public events: Map<number, Event>;

    constructor(){
        this.events = new Map();
    }

    createEvent(id: number,name: string,place: string,date: Date,guests: string[],typeOfEvent: string){
        const event = new Event(id, name, place,date,guests,typeOfEvent);
        this.events.set(event.id, event)
        return event;
    }

    editEvent(id:number, newName:string){
        const toBeEdited = this.events.get(id);
            if(toBeEdited){
                toBeEdited.name = newName;
            }
    }

    deleteEvent(id:number){
        this.events.delete(id);
    }

    getEventsByType(typeOfEvent: string):Event[] {
        const list : Event[] = [];
        this.events.forEach((event)=>{
            if(event.typeOfEvent == typeOfEvent){
                list.push(event);
            }
        });
        return list;
    }

    getAllEvents(): Event[] {
    return Array.from(this.events.values());
    }

}