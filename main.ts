// Weirdest Job Title: Blind Judge Showdown
// Writes one job title (60 characters max) to /output/entry.txt.
// Node 22 stdlib only. No network, no secrets, no dependencies.
import { mkdirSync, writeFileSync } from "node:fs";

// Revised title: "Senior" reads more like a real job grade than
// "Professional", and "the Haunted Elevator Union" sharpens the twist —
// the elevators are organised. Same picture, funnier on first read.
const ENTRY = "Senior Apologizer to the Haunted Elevator Union";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
