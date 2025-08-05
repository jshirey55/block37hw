import db from "#db/client";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");


const tracks = [
  'track1', 'track2', 'track3', 'track4', 'track5',
  'track6', 'track7', 'track8', 'track9', 'track10',
  'track11', 'track12', 'track13', 'track14', 'track15',
  'track16', 'track17', 'track18', 'track19', 'track20',
];

const playslist = [
  'playlist1', 'playlist2', 'playlist3', 'playlist4',
  'playlist5', 'playlist6', 'playlist7', 'playlist8',
  'playlist9', 'playlist10',
];

async function seed() {
  // TODO
}
