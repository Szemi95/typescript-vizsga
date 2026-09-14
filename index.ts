import { Event } from "./src/models/Event.js";
import { EventService } from "./src/services/EventService.js";

const eventService = new EventService();
const event =  eventService.createEvent(
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