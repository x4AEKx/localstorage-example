import React, {useState} from "react";
import "./App.css";

function App() {
		const [value, setValue] = useState(0)

		const incHandler = () => {
				setValue(value + 1)
		}

		const setToLocalstorage = () => {
				localStorage.setItem('counterValue', JSON.stringify(value))
				localStorage.setItem('counterValue + 1', JSON.stringify(value + 1))
		}

		const getFromLocalstorage = () => {
				let valueAsString = localStorage.getItem('counterValue')
				if(valueAsString) {
						let newValue = JSON.parse(valueAsString)
						setValue(newValue)
				}
		}

		const clearLocalStorage = () => {
				localStorage.clear()
				setValue(0)
		}

		const removeItemFromLocalstorage = () => {
				localStorage.removeItem('counterValue + 1')
		}

		return (
				<div className="App">
						<h1>{value}</h1>
						<button onClick={incHandler}>inc</button>
						<button onClick={setToLocalstorage}>setToLocalstorage</button>
						<button onClick={getFromLocalstorage}>getFromLocalstorage</button>
						<button onClick={clearLocalStorage}>clearLocalStorage</button>
						<button onClick={removeItemFromLocalstorage}>removeItemFromLocalstorage</button>
				</div>
		);
}

export default App;
