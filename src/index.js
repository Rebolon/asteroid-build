//import "babel-register";
import {createClass} from "asteroid";

const Asteroid = createClass();

window.Asteroid = Asteroid;

// Connect to a Meteor backend
const asteroid = new Asteroid({
    endpoint: "ws://localhost:3000/websocket"
});

// Use real-time collections
asteroid.subscribe("tasksPublication");
