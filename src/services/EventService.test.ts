import { EventService } from "./EventService";

describe("EventService", () => {
    let eventService: EventService;

    beforeEach(() => {
        eventService = new EventService();
    });

    test("createEvent should add an event", () => {
        const event = eventService.createEvent(
            1,
            "Születésnap",
            "Budapest",
            new Date("2026-11-11"),
            [],
            "családi"
        );

        const events = eventService.getAllEvents();

        expect(events).toContain(event);
    });
});