export default function createLogo(logo) {
	const img = document.createElement("img");
	img.src = logo;
	img.classList.add("col-2");
	const form = document.querySelector("form");
	form.prepend(img);
}
