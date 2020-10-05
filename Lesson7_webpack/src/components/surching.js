import * as consts from "./constant";
import show from "./creating";

async function search(url) {
	const response = await fetch(consts.API + url);
	return await response.json();
}

export default function sendSurch(e) {
	e.preventDefault();

	consts.WRAPPER.innerText = "";

	console.log(e.target[0].value);
	search(e.target[0].value)
		.then((res) => show(res))
		.catch((err) => console.log(err));
	// for (let input of e.target) {

	// }
}
