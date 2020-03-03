import * as firebase from 'firebase';

const config = {
	apiKey: 'AIzaSyCSrwBhIW7zMmuXRHapAFBT04EytPJ0eN0',
	authDomain: 'moneylending-d04a0.firebaseapp.com',
	databaseURL: 'https://moneylending-d04a0.firebaseio.com',
	projectId: 'vuejs-firebase-realtime-chat',
	storageBucket: 'moneylending-d04a0.firebaseapp.com',
	messagingSenderId: '1024087344489',
	appId: '1:79720825114:web:4b9a282e7c8fab47b32ca3',
	measurementId: 'G-LKHL4T19B3'
};

firebase.initializeApp(config);

export default firebase
