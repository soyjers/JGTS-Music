const express = require('express')
const router = express.Router()


const songController = require('./controllers/songController')
const favoriteController = require('./controllers/favoriteController')
const userController = require('./controllers/userController')
const artistController = require('./controllers/artistController')
const albumController = require('./controllers/albumController')
const sessionController = require('./controllers/sessionController')


const mdJWT = require('./middleware/Jwt')

//? rutas de canciones
router.post('/create-song', songController.createSong);
router.get('/find-songs', songController.findSongs);
router.get('/find-song/:songId', songController.findSong);
router.put('/update-song/:songId', songController.updateSong);
router.delete('/delete-song/:songId', songController.deleteSong);

//? rutas artistas
router.post('/create-artist', artistController.createArtist);
router.get('/find-artists', artistController.findArtists);
router.get('/find-artist/:artistId', artistController.findArtist);
router.put('/update-artist/:artistId', artistController.updateArtist);
router.delete('/delete-artist/:artistId', artistController.deleteArtist);

//? rutas album
router.post('/create-album', albumController.createAlbum);
router.get('/find-albums', albumController.findAlbums);
router.get('/find-album/:albumId', albumController.findAlbum);
router.put('/update-album/:albumId', albumController.updateAlbum);
// router.delete('/delete-album/:albumId', albumController.deleteAlbum);

//? rutas usuarios
router.post('/create-user',  userController.createUser);
router.get('/find-users', mdJWT.verificarToken,userController.getUsers);
router.get('/find-user/:userId', userController.getUser);
router.put('/update-user/:userId', userController.updateUser);
router.delete('/delete-user/:userId', userController.deleteUser);
router.post('/ingreso', sessionController.genereToken)

//? rutas favoritos
router.post('/create-favorite', favoriteController.createfavorito);
router.get('/find-favorites', favoriteController.findsfavorite);
router.get('/find-favorite/:favoriteId', favoriteController.findfavorite);
router.put('/update-favorite/:favoriteId', favoriteController.updatefavorite);
router.delete('/delete-favorite/:favoriteId', favoriteController.deleteFavorite);

router.post('/add-to-favorites/:userId/:songId',songController.aggAfavorite)


module.exports = router
