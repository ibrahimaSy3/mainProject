import * as functions from 'firebase-functions';
import { Hostels, Rooms} from "./hostels";
import * as admin from 'firebase-admin';

admin.initializeApp();



exports.createUser = functions.firestore
    .document('hostels/{hostelId}')
    .onCreate((snap, context) => {

        const newHotel: Hostels = snap.data()as Hostels;
        newHotel.uid = snap.id;
        return snap.ref.set(newHotel)
    });

exports.createRooms = functions.firestore
    .document('rooms/{roomsId}')
    .onCreate((snap, context) => {

        const newRoom: Rooms = snap.data()as Rooms;
        newRoom.uid = snap.id;
        return snap.ref.set(newRoom)
    });
