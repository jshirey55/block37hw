import express from "express"
const router = express.Router()

import { getTracks, getTrackById } from "#db/queries/tracks"

router
    .route("/")
    .get(async (req, res) => {
        const tracks = await getTracks()
        res.send(tracks)
    })

router.param("id", async (req, res, next, id) => {
    if (!/^\d+$/.test(id)) {
        return res.status(400).send("ID must be positive int.")
    }

    const track = await getTrackById(id)
    if (!track) {
        return res.status(404).send("Track not found")
    }
    
    req.track = track
    next()
})

router.route("/:id").get((req, res) => {
    res.send(req.track)
})

export default router