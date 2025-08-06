import express from "express"
const router = express.Router()
export default router

import { getTracks, getTrackById } from "#db/queries/tracks"

router.route("/").get(async (req, res) => {
    const track = await getTracks()
    res.send(track)
})

router.param("id", async (req, res, next, id) => {
    const track = await getTrackById(id)
    if (!track) return res.status(404).send("Track not found")

    req.track = track
    next()
})

router.route("/:id").get((req, res) => {
    res.send(req.track)
})