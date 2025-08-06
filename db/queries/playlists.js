import db from "#db/client"

export async function createPlaylist(name, description) {
    const SQL = `
    INSERT INTO playlists
        (name, description)
    VALUES
        ($1, $2)
    RETURNING *
    `;
    const {
        rows: [playlist],
    } = await db.query(SQL, [name, description])
    return playlist
}

export async function getPlaylists() {
    const SQL = `
    SELECT *
    FROM playlists
    `;
    const { rows: playlists } = await db.query(SQL, [name, description])
    return playlists
}

export async function getPlaylistById(id) {
    const SQL = `
    SELECT *
    FROM playlists
    WHERE id = $1
    `;
    const {
        rows: [playlist]
    } = await db.query(SQL, [id])
    return playlist
}