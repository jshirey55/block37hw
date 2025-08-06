import express from "express"
const router = express.Router()
export default router

import { getPlaylistById, getPlaylists } from "#db/queries/playlists"

router.route("/").get(async (req, res) => {
    const playlist = await getPlaylists()
    res.send(playlist)
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