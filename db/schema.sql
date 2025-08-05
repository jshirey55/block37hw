DROP DATABASE IF EXISTS jukebox;
CREATE DATABASE jukebox;
\c jukebox;

CREATE TABLE playlists (
    id serial PRIMARY KEY,
    name text NOT NULL,
    description text NOT NULL,
);

CREATE TABLE playlist_tracks (
    id serial PRIMARY KEY,
    playlist_id int NOT NULL,
    track_id in NOT NULL,

    CONSTRAINT playlist_tracks UNIQUE (playlist_id, track_id)
);

CREATE TABLE tracks (
    id serial PRIMARY KEY,
    name text NOT NULL,
    duration_ms int NOT NULL,
);




