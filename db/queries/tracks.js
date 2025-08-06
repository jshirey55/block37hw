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