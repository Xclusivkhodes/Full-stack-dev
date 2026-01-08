import { EventEmitter } from "node:events";
import { createAlert } from "../utils/createAlert.js";

export const sightingEvent = new EventEmitter();

sightingEvent.on("sighting-added", createAlert);
