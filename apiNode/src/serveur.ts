import * as admin from 'firebase-admin';
import * as  express from 'express';
import * as bodyParser from 'body-parser';
import {Hostels} from './model/hostels';

const app = express();


const serviceAccount = require("C:\\Users\\WR1\\WebstormProjects\\mainProject\\apiNode\\src\\cle.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://projetwhiterabbit-3e141.firebaseio.com"
});

const db = admin.firestore();

app.use(bodyParser());


const ref = db.collection('hostels');

app.get('/', async (req, res) => {
    const newHostel = await ref.get();
    const hostel: Hostels[] = [];

    newHostel.forEach((value) => {
        hostel.push(value.data() as Hostels);
    })

    res.send(hostel);

});




app.listen(4000, function () {
    console.log('Example app listening on port 4000!')
});