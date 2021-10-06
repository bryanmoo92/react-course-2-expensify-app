import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };



//database.ref('expenses').on('child_changed', (snapshot) => {
//    console.log(snapshot.key, snapshot.val());
//})

//database.ref().on('value', (snapshot) => {
//    
//    const expenses = [];
//
//    snapshot.forEach((childSnapshot) => {
//        expenses.push({
//            id: childSnapshot.key,
//            ...childSnapshot.val()
//        });
//    });
//
//    console.log(expenses)
//});

// database.ref('expenses').push({
//     description: "smtn 1",
//     note: 'smtn 1',
//     amount: 69,
//     createdAt: 420
// });

// database.ref('notes').push({
//     title: 'poo poo',
//     body: 'herrrrooo'
// });

// const firebaseNotes = {
//     notes: {
//         apjrfijrfij: {
//             title: 'First Note',
//             body: 'blah'
//         },
//         fjrfoaijosaniifn: {
//             title: 'Second Note',
//             body: 'blah notes'
//         }
//     }
// }
// const notes = [{
//     id: '12',
//     title: 'First Note',
//     body: 'blah'
// }, {
//     id: '12ase',
//     title: 'Second Note',
//     body: 'blah notes'
// }];

//database.ref().on('value', (snapshot) => {
//    const val = snapshot.val();
//    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
//});

//const data = database.ref('location/city')
//    .once('value')
//    .then((snapshot) => {
//        const val = snapshot.val();
//        console.log(val)
//    })
//    .catch((e) => {
//        console.log('Error fetching data', e);
//    })

// database.ref().set({
//     name: 'Bryan Moore',
//     age: 28,
//     stressLevel: 6,
//     job: {
//         title: 'software engineer',
//         company: 'Google'
//     },
//     isSingle: true,
//     location: {
//     city: 'Los Angeles',
//     country: 'United States'
// }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((error) => {
//     console.log('This failed.', error);
// });
// 
// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });
