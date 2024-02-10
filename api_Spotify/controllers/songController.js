// Controlador para manejar las operaciones CRUD de las canciones

const SongModel = require('../models/Song.model');

// Crear una cancion (PUT)
exports.createSong = async (req, res) => {
    try {

        // Realizar validaciones antes de crear la canción
        const existingSong = await SongModel.findOne({ name: req.body.name });
        if (existingSong) {
            res.status(400).send({ error: "There is already a song with the same name" });
            return
        }
        if (req.body.name.length < 3 || req.body.name.length > 30) {
            res.status(411).send({ error: "the song name must contain minimum 3 characters and maximum 30." });
            return
        }
        if (req.body.duration < 60 || req.body.duration > 800) {
            res.status(411).send({ error: "the duration should be from 60 to 600 s." });
            return
        }
        if (req.body.artist_Id.length < 3 || req.body.artist_Id.length > 20) {
            res.status(411).send({ error: "The artist name must be between 3 and 20 characters." });
            return
        }
        if (req.body.album_Id.length < 3 || req.body.album_Id.length > 30) {
            res.status(411).send({ error: "Album name must be between 3 and 30 characters." });
            return
        }
        if (req.body.year < 1900 || req.body.year > 2024) {
            res.status(411).send({ error: "The year must be between 1900 and 2024." });
            return
        }


        console.log(req.body);
        let newSong = new SongModel(req.body)
        await newSong.save()
        res.send(newSong);
        console.log(newSong)
        res.status(201).send({ message: 'song created successfully' });
    } catch (error) {
        console.error('error when creatin song:', error)
        res.status(500).send({ message: "error when creating song, contact the administrator" })
    }
}

/* ------------------------------------------------------------------------------------------------------------------------------ */

// buscando todas las canciones (GET)
exports.findSongs = async (req, res) => {
    try {
        let songData = await SongModel.find()
        res.json(songData)
    } catch (error) {
        res.status(500).send({ error: "Something has happened, contact the administrator" });
    }
}

/* ------------------------------------------------------------------------------------------------------------------------------ */

// buscar una cancion (GET)
exports.findSong = async (req, res) => {
    try {
        let songData = await SongModel.findById(req.params.songId);
        if (!songData) {
            res.status(404).send({ error: "the song has not been found" });
        } else {
            res.send(songData);
        }
    } catch (error) {
        console.error('error:', error)
        res.status(500).send({ error: "Something has happened, contact the administrator" });
    }
}

/* ------------------------------------------------------------------------------------------------------------------------------- */

// actualizar cancion
exports.updateSong = async (req, res) => {
    try {

        if (req.params.songId.length == 24) {
            let songData = await SongModel.findById(req.params.songId);

            if (!songData) {
                res.status(404).send({ error: "the song has not been found" });
                return
            }
            const { name, duration, image, year, artist_Id, album_Id, genre } = req.body

            songData.name = name
            songData.duration = duration
            songData.image = image
            songData.year = year
            songData.artist_Id = artist_Id
            songData.album_Id = album_Id
            songData.genre = genre


            songData = await SongModel.findOneAndUpdate({ _id: req.params.songId }, songData, { new: true });
            res.json(songData)
        } else {
            res.status(403).send({ error: "the id provided is not valid" });
        }

    } catch (error) {
        console.error('error:', error)
        res.status(500).send({ error: "Something has happened, contact the administrator" });
    }
}

/* ------------------------------------------------------------------------------------------------------------------------------ */

exports.deleteSong = async (req, res) => {
    try {
        let dataSong = await SongModel.findById(req.params.songId);
        if (!dataSong) {
            res.status(404).send({ error: "the song has not been found" });
            return
        }
        await SongModel.findOneAndDelete({ _id: req.params.songId });
        res.status(200).send({ message: "song deleted correctly" });
    } catch (error) {
        console.error('error:', error)
        res.status(500).send({ error: "Something has happened, contact the administrator" });
    }
}