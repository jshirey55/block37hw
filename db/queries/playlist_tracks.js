import db from "#db/client"

export async function createPlaylistTrack(playlist_id, track_id) {
    const SQL = `
    INSERT INTO playlist_tracks
        (playlist_id, track_id)
    VALUES
        ($1, $2)
    RETURNING *
    `;
    const {
        rows: [playlist_track],
    } = await db.query(SQL, [playlist_id, track_id])
    return playlist_track
}

