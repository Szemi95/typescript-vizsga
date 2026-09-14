"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EventService_1 = require("./EventService");
describe("EventService", () => {
    let eventService;
    beforeEach(() => {
        eventService = new EventService_1.EventService();
    });
    test("createEvent should add an event", () => {
        const event = eventService.createEvent(1, "Születésnap", "Budapest", new Date("2026-11-11"), [], "családi");
        const events = eventService.getAllEvents();
        expect(events).toContain(event);
    });
});
