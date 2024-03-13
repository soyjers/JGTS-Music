// Controlador para manejar las operaciones CRUD de las canciones

const SongModel = require('../models/Song.model');

// Crear una cancion (POST)
exports.createSong = async (req, res) => {
    try {
        console.log(req.body);
        // Realizar validaciones antes de crear la canción
        const existingSong = await SongModel.findOne({ name: req.body.name });
        if (existingSong) {
            res.status(400).send({ error: "There is already a song with the same name" });
            return
        }

        if (req.body.name.length < 3 || req.body.name.length > 30) {
            res.status(411).send({ error: "song name must contain minimum 3 characters and maximum 30." });
            return
        }
        if (req.body.artistId.length < 3 || req.body.artistId.length > 30) {
            res.status(411).send({ error: "artist name must be between 3 and 20 characters." });
            return
        }
        if (req.body.albumId.length < 3 || req.body.albumId.length > 30) {
            res.status(411).send({ error: "album name must be between 3 and 30 characters." });
            return
        }
        if (req.body.year < 1900 || req.body.year > 2024) {
            res.status(411).send({ error: "year must be between 1900 and 2024." });
            return
        }


        let extensionesImagenes = ["png", "jpg", "webp", "jpeg"];

        // Arrays separados para archivos de imagen y archivos de audio
        let files = [];
        let images = [];
        console.log(req.files);
        for (const key in req.files) {
            if (key in req.files) {
                const archivos = req.files[key];
                const primerArchivo = archivos[0];

                if (extensionesImagenes.includes(primerArchivo.mimetype.split('/').pop()) || key === "image") {
                    images.push(archivos);
                } else if (key === "file") {
                    files.push(archivos);
                }
            }
        }


        // Asignar las rutas correspondientes a req.body.image y req.body.file
        req.body.image = images.length > 0 ? `storage/fileSong/images/${images[0][0].filename}` : '';
        req.body.file = files.length > 0 ? `storage/fileSong/audios/${files[0][0].filename}` : '';


        let newSong = new SongModel(req.body)
        await newSong.save()
        console.log("++++++++++++++++++++++++++++");
        console.log(newSong)
        console.log("++++++++++++++++++++++++++++");
        res.status(201).send(newSong);

    } catch (error) {
        console.error('error when creatin song:', error)
        res.status(500).send({ message: "Error creating the song, check the data entered or contact the administrator" });
    }
}

/* ------------------------------------------------------------------------------------------------------------------------------ */

// buscar todas las canciones (GET)
exports.findSongs = async (req, res) => {
    try {
        let songData = await SongModel.find()
        res.status(200).json(songData);
    } catch (error) {
        res.status(500).send({ error: "Something has happened, contact the administrator" });
    }
}
// buscar todas las canciones (GET)
exports.findSongsForAlbum = async (req, res) => {
    try {
        let songData = await SongModel.find({albumId: req.params.idAlbum})
        res.status(200).json(songData);
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
            res.status(404).send({ error: "song has not been found" });
        } else {
            res.send(songData);
        }
    } catch (error) {
        console.error('error:', error)
        res.status(500).send({ error: "Something has happened, contact the administrator" });
    }
}


/* ------------------------------------------------------------------------------------------------------------------------------- */

// actualizar cancion (PUT)
exports.updateSong = async (req, res) => {
    try {

        if (req.params.songId.length == 24) {
            let songData = await SongModel.findById(req.params.songId);

            if (!songData) {
                res.status(404).send({ error: "song has not been found" });
                return
            }
            const { name, duration, image, year, artistId, albumId, genre } = req.body

            songData.name = name
            songData.duration = duration
            songData.image = image
            songData.year = year
            songData.artistId = artistId
            songData.albumId = albumId
            songData.genre = genre


            songData = await SongModel.findOneAndUpdate({ _id: req.params.songId }, songData, { new: true });
            res.json(songData)
        } else {
            res.status(403).send({ error: "id provided is not valid" });
        }

    } catch (error) {
        console.error('error:', error)
        res.status(500).send({ error: "Something has happened, contact the administrator" });
    }
}

/* ------------------------------------------------------------------------------------------------------------------------------ */

// eliminar cancion (DELETE)
exports.deleteSong = async (req, res) => {
    try {
        let dataSong = await SongModel.findById(req.params.songId);
        if (!dataSong) {
            res.status(404).send({ error: "song has not been found" });
            return
        }
        await SongModel.findOneAndDelete({ _id: req.params.songId });
        res.status(200).send({ message: "song deleted correctly" });
    } catch (error) {
        console.error('error:', error)
        res.status(500).send({ error: "Something has happened, contact the administrator" });
    }
}


    // exports.aggAforite =  async (req, res) => {
    //     try {
    //         const { userId, songId } = req.params;
    //         const user = await usermodel.findById(userId);
    //         if (!user) {
    //             res.status(404).json({ message: 'Usuario no encontrado' });
    //             return
    //         }
    //         if (!user.favoritePlaylist.includes(songId)) {
    //             user.favoritePlaylist.push(songId);
    //             await user.save();
    //             res.status(200).json({ message: 'Canción agregada a favoritos correctamente' });
    //         } else {
    //             res.status(400).json({ message: 'La canción ya está en la lista de favoritos' });
    //         }
    //     } catch (error) {
    //         console.error('error:',error);
    //         res.status(500).json({ message: 'Error al agregar canción a favoritos' });
    //     }
    // }


