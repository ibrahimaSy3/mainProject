"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const admin = require("firebase-admin");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require('cors');
const serviceAccount = require("C:\\Users\\WR1\\WebstormProjects\\mainProject\\apiNode\\src\\cle.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://projetwhiterabbit-3e141.firebaseio.com"
});
const db = admin.firestore();
app.use(bodyParser());
app.use(cors());
const ref = db.collection('hostels');
const refRooms = db.collection('rooms');
app.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const newHostel = yield ref.get();
    const hostel = [];
    newHostel.forEach((value) => {
        hostel.push(value.data());
    });
    res.send(hostel);
}));
app.get('/rooms', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const newHostel = yield ref.get();
    const hostel = [];
    newHostel.forEach((value) => {
        hostel.push(value.data());
    });
    res.send(hostel);
}));
app.post('/post', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const hostels = req.body;
    const newHostel = yield ref.add(hostels);
    res.send(newHostel).status(201);
}));
app.post('/roomPost', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const rooms = req.body;
    const roomsgirl = yield refRooms.add(rooms);
    res.send('ok room').status(201);
}));
app.delete('/delete/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const deleted = req.body;
    const removeHostel = yield ref.doc(req.params.id).delete(deleted);
    res.send(removeHostel).status(201);
}));
app.delete('/delete/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const deleted = req.body;
    const removeHostel = yield ref.doc(req.params.id).delete(deleted);
    res.send(removeHostel).status(201);
}));
app.put('/put/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const update = req.body;
    console.log(update);
    const updateHostel = yield ref.doc(req.params.id).update(update);
    res.send(updateHostel).status(201);
}));
app.put('/put/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const update = req.body;
    console.log(update);
    const updateHostel = yield ref.doc(req.params.id).update(update);
    res.send(updateHostel).status(201);
}));
app.patch('/patch/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const patch = req.body;
    console.log(patch);
    const patchHostel = yield ref.doc(req.params.id).update(patch);
    res.send(patchHostel).status(201);
}));
app.patch('/patch/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const patch = req.body;
    console.log(patch);
    const patchHostel = yield ref.doc(req.params.id).update(patch);
    res.send(patchHostel).status(201);
}));
app.listen(4000, () => {
    console.log('Example app listening on port 4000!');
});
//# sourceMappingURL=serveur.js.map