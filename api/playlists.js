import express from "express"
const router = express.Router()
export default router

import { getPlaylistById, getPlaylists, createPlaylist } from "#db/queries/playlists"

router
    .route("/")
    .get(async (req, res) => {
    const playlists = await getPlaylists()
    res.send(playlists)
})

.post(async (req, res) => {
    if(!req.body) return res.status(400).send("Request must have a body")
            
    const { name, description } = req.body;
    if (!name || !description)
        return res.status(400).send("REQ must have name, desc.")

    const playlist = await createPlaylist({ name, description })
            res.status(201).send(playlist)
})

router.param("id", async (req, res, next, id) => {
    const playlist = await getPlaylistById(id)
    if(!playlist) return res.status(404).send("Playlist not found")

    req.playlist = playlist
    next()
})

router.route("/:id").get((req, res) => {
    res.send(req.playlist)
})

router
    .route("/:id/tracks")
    .get(async (req, res) => {
        const tracks = await getTracksByPlaylistId(req.playlist.id);
        res.send(tracks);
  })
    .post(async (req, res) => {
        if (!req.body) return res.status(400).send("Request body is required.");

    const { trackId } = req.body;
        if (!trackId) return res.status(400).send("Request body requires: trackId");

    const playlistTrack = await createPlaylistTrack(req.playlist.id, trackId);
    res.status(201).send(playlistTrack);
  });