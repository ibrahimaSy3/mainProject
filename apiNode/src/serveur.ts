import * as admin from 'firebase-admin';
import * as  express from 'express';
import * as bodyParser from 'body-parser';
import {Hostels} from './model/hostels';

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

// Hostels get
app.get('/', async (req, res) => {
    const newHostel = await ref.get();
    const hostel: Hostels[] = [];

    newHostel.forEach((value) => {
        hostel.push(value.data() as Hostels);
    });

    res.send(hostel);

});

// Rooms get
app.get('/rooms', async (req, res) => {
    const newHostel = await ref.get();
    const hostel: Hostels[] = [];

    newHostel.forEach((value) => {
        hostel.push(value.data() as Hostels);
    });

    res.send(hostel);

});

// Hostels Post
app.post('/post', async (req, res) => {

    const hostels = req.body;
    const newHostel = await ref.add(hostels);

    res.send(newHostel).status(201);
});


// Rooms Post
app.post('/roomPost', async (req, res) => {

    const rooms = req.body;
    const roomsgirl = await refRooms.add(rooms);

    res.send('ok room').status(201);
});

//Hostels Delete

app.delete('/delete/:id', async (req, res) => {
    const deleted = req.body;
    const removeHostel = await ref.doc(req.params.id).delete(deleted);
    res.send(removeHostel).status(201);

});

//Rooms Delete

app.delete('/delete/:id', async (req, res) => {
    const deleted = req.body;
    const removeHostel = await ref.doc(req.params.id).delete(deleted);
    res.send(removeHostel).status(201);
});

//Hostels Put

app.put('/put/:id', async (req, res) => {
    const update = req.body;
    console.log(update);
    const updateHostel = await ref.doc(req.params.id).update(update);
    res.send(updateHostel).status(201);

});

//Rooms Put
app.put('/put/:id', async (req, res) => {
    const update = req.body;
    console.log(update);
    const updateHostel = await ref.doc(req.params.id).update(update);
    res.send(updateHostel).status(201);
});

// Hostels Patch

app.patch('/patch/:id', async (req, res) => {
    const patch = req.body;
    console.log(patch);
    const patchHostel = await ref.doc(req.params.id).update(patch);
    res.send(patchHostel).status(201);
});

// Rooms Patch
app.patch('/patch/:id', async (req, res) => {
    const patch = req.body;
    console.log(patch);
    const patchHostel = await ref.doc(req.params.id).update(patch);
    res.send(patchHostel).status(201);

});

app.listen(4000, () => {
    console.log('Example app listening on port 4000!')
});
