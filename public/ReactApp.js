import { useState } from 'react';

const AppRouter = require('express').Router();
const App = require('../components/CurrentWeather');

AppRouter.get('/', (req, res) => {
    res.render('components/Index', { App })

});

AppRouter.get('/new', (req, res) => {
    res.render('components/Hourly');
});

AppRouter.get('/:id', (req,res) =>{
    let id = Number(req.params.id);
    if (isNaN(id)) {
        res.render('Error404');
       } else if (!App[id]) {
        res.render('Error404');
       }  
    else {
        res.render('components/Location', { place: App[id], id });
    }
});
// To connect with your mongoDB database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/', {
	dbName: 'yourDB-name',
	useNewUrlParser: true,
	useUnifiedTopology: true
}, err => err ? console.log(err) : 
	console.log('Connected to yourDB-name database'));

// Schema for users of app
const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});
const User = mongoose.model('users', UserSchema);
User.createIndexes();

// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {

	resp.send("App is Working");
	// You can check backend is working or not by 
	// entering http://loacalhost:5000
	
	// If you see App is working means
	// backend working properly
});

app.post("/register", async (req, resp) => {
	try {
		const user = new User(req.body);
		let result = await user.save();
		result = result.toObject();
		if (result) {
			delete result.password;
			resp.send(req.body);
			console.log(result);
		} else {
			console.log("User already register");
		}

	} catch (e) {
		resp.send("Something Went Wrong");
	}
});
app.listen(5000);





function ReactApp() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const handleOnSubmit = async (e) => {
		e.preventDefault();
		let result = await fetch(
		'http://localhost:5000/register', {
			method: "post",
			body: JSON.stringify({ name, email }),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		result = await result.json();
		console.warn(result);
		if (result) {
			alert("Data saved succesfully");
			setEmail("");
			setName("");
		}
	}
	return (
		<>
			<h1>This is React WebApp </h1>
			<form action="">
				<input type="text" placeholder="name"
				value={name} onChange={(e) => setName(e.target.value)} />
				<input type="email" placeholder="email"
				value={email} onChange={(e) => setEmail(e.target.value)} />
				<button type="submit"
				onClick={handleOnSubmit}>submit</button>
			</form>

		</>
	);
}

export default ReactApp;
