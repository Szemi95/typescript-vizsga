import { Event } from "./models/Event.js";
import { Guest } from "./models/Guest.js";
import { EventService } from "./services/EventService.js";
import { GuestService } from "./services/GuestService.js";

const eventService = new EventService();

const event = eventService.createEvent(
    1,
    "Születésnap",
    "Budapest",
    new Date("2026-11-11"),
    ["Teszt Elekné", "Teszt Elek", "Gipsz Jakab"],
    "családi"
);

eventService.createEvent(
    2,
    "2000-es évek legjobb előadói",
    "Budapest Park",
    new Date("2026-08-20"),
    ["Kiss Béla", "Nagy Anna"],
    "zenei"
);

eventService.createEvent(
    3,
    "Családi piknik",
    "Miskolc",
    new Date("2026-07-15"),
    ["Teszt Elek"],
    "családi"
);

console.log(eventService.getAllEvents());
console.log(eventService.getEventsByType("családi"));

const guest = new Guest(
    "Ka Pál",
    32,
    "+36301547892",
    "kapali@teszt.com"
);

const guestService = new GuestService(eventService);

guestService.addGuestToEvent(1, guest);

console.log(guestService.getGuestsOfEvent(1));

guestService.removeGuestFromEvent(1, "Ka Pál");

console.log(guestService.getGuestsOfEvent(1));