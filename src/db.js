import { openDB } from "idb";

export const dbPromise = openDB("OmAuraDB", 1, {
    upgrade(db) {
        db.createObjectStore("songs", {
            keyPath: "id",
            autoIncrement: true,
        });
    },
});