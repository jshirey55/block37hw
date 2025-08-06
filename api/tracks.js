import express from "express"
const router = express.Router()

import { getTracks, getTrackById } from "#db/queries/tracks"

router
    .route("/")
    .get(async (req, res) => {
        const tracks = await getTracks()
        res.send(tracks)
    })

router.route("/:id").get(async (req, res) => {
    const track = await getTrackById(req.params.id)
    if(!track) return res.status(404).send("Track not found")
    res.send(req.track)
})

export default router