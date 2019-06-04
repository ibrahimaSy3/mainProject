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
const serviceAccount = require("C:\\Users\\WR1\\WebstormProjects\\mainProject\\apiNode\\src\\cle.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://projetwhiterabbit-3e141.firebaseio.com"
});
const db = admin.firestore();
app.use(bodyParser());
const ref = db.collection('hostels');
app.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const newHostel = yield ref.get();
    const hostel = [];
    newHostel.forEach((value) => {
        hostel.push(value.data());
    });
    res.send(hostel);
}));
app.listen(4000, function () {
    console.log('Example app listening on port 4000!');
});
//# sourceMappingURL=serveur.js.map