const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let Path;
        if (file.mimetype === "audio/mpeg") {
            Path = "storage/fileSong/audios";
        } else if (req.body.albumId) {
            Path = "storage/fileSong/images/album";
        } else if (req.body.artistId) {
            Path = "storage/fileSong/images/artist";
        } else {
            Path = "storage/fileSong/images";
        }
        cb(null, Path);
    },

    filename: function (req, file, cb) {

        let cadenaOriginal = file.originalname;

        // Quitar caracteres con tilde
        let cadenaSinTilde = cadenaOriginal.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        
        // Reemplazar espacios en blanco por guion bajo
        let cadenaFinal = cadenaSinTilde.replace(/\s+/g, "_");

        cb(null, `${Date.now()}_${cadenaFinal}`);
    }
});

const upload = multer({ storage });

module.exports = upload;
