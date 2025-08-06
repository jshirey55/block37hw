import db from "#db/client"

export async function createTrack(name, duration_ms) {
    const SQL = `
    INSERT INTO tracks
        (name, duration_ms)
    Values
        ($1, $2)
    RETURNING *
    `;
    const {
        rows: [track],
    } = await db.query(SQL, [name, duration_ms])
    return track
}

export async function getTracks() {
    const SQL = `
    SELECT *
    FROM tracks
    `;
    const { rows: tracks } = await db.query(SQL)
    return tracks;
}

export async function getTracksByPlaylistId(id) {
  const SQL = `
  SELECT tracks.*
  FROM
    tracks
    JOIN playlists_tracks ON playlists_tracks.track_id = tracks.id
    JOIN playlists ON playlists.id = playlists_tracks.playlist_id
  WHERE playlists.id = $1
  `;
  const { rows: tracks } = await db.query(SQL, [id]);
  return tracks;
}

export async function getTrackById(id) {
    const SQL = `
    SELECT *
    FROM tracks
    WHERE id = $1
    `;
    const {
        rows: [track],
    } = await db.query(SQL, [id])
    return track;
}