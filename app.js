import express from "express";
const app = express();
export default app;

import morgan from "morgan"

import playlistTrackRouter from "#api/playlist_tracks"
import tracksRouter from "#api/tracks"
import playlistsRouter from "#api/playlists"

app.use(express.json())

app.use(morgan("dev"))

app.use("/playlist_tracks", playlistTrackRouter)
app.use("/tracks", tracksRouter)
app.use("/playlists", playlistsRouter)

app.use((err, req, res, next) => {
    if(err.code === "23503") {
        return res.status(400).send(err.detail)
    }
})