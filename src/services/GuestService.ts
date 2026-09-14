import { EventService } from "./EventService.js";
import { Guest } from "../models/Guest.js";

export class GuestService {
    private eventService: EventService;

    constructor(eventService: EventService) {
        this.eventService = eventService;
    }

    addGuestToEvent(eventId: number, guest: Guest): void {
        const event = this.eventService.events.get(eventId);

        if (event) {
            event.guests.push(guest.name);
        }
    }

    removeGuestFromEvent(eventId: number, guestName: string): void {
        const event = this.eventService.events.get(eventId);

        if (event) {
            const index = event.guests.findIndex(
                guest => guest === guestName
            );

            if (index !== -1) {
                event.guests.splice(index, 1);
            }
        }
    }

    getGuestsOfEvent(eventId: number): string[] {
        const event = this.eventService.events.get(eventId);

        if (event) {
            return event.guests;
        }

        return [];
    }
}