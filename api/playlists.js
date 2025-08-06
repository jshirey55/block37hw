import express from "express"
const router = express.Router()
export default router

import { getPlaylistById, getPlaylists, createPlaylist } from "#db/queries/playlists"

router
    .route("/")
    .get(async (req, res) => {
    const playlist = await getPlaylists()
    res.status(200).send(playlist)
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
    if (!/^\d+$/.test(id))
        return res.status(400).send("ID must be positive int.")
    
    const playlist = await getPlaylistById(id)
    if(!playlist) return res.status(404).send("Playlist not found")

    

    req.playlist = playlist
    next()
})

router.route("/:id").get((req, res) => {
    res.send(req.playlist)
})

.put(async (req, res) => {
    if (!req.body) return res.status(400).json("Request must have a body")
})