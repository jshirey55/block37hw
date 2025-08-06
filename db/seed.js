import db from "#db/client";

import { createTrack } from "./queries/tracks.js";
import { createPlaylist } from "./queries/playlists.js";
import { createPlaylistTrack } from "./queries/playlist_tracks.js";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  for (let i = 1; i <= 20; i++) {
    const duration = 150000 + Math.floor(Math.random() * 10000)
    await createTrack("TRACK" + i, duration)
  }
  for (let i = 1; i <= 10; i++) {
    const description = "desc."
    await createPlaylist("PLAYLIST" + i, description)
  }
  for (let i = 1; i <= 15; i++) {
    const trackId = 1 + Math.floor(Math.random() * 20)
    const playlistId = 1 + Math.floor(Math.random() * 10)
    await createPlaylistTrack(playlistId, trackId)
  }
}
