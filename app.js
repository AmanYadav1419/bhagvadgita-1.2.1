const apiKey = 'YOUR_API_KEY';
const getSlokaBtn = document.getElementById('getSlokaBtn');
const getMeaningBtn = document.getElementById('getMeaningBtn');
const getTranslationBtn = document.getElementById('getTranslationBtn');
const slokaContainer = document.getElementById('slokaContainer');
const meaningContainer = document.getElementById('meaningContainer');
const translationContainer = document.getElementById('translationContainer');

getSlokaBtn.addEventListener('click', () => {
	const chapterNumber = document.getElementById('chapterNumber').value;
	const slokaNumber = document.getElementById('slokaNumber').value;
	const language = document.getElementById('language').value;
	
	const url = `https://bhagavadgitaapi.in/slok/${chapterNumber}/${slokaNumber}?api_key=${apiKey}&format=json&translation=${language}`;
    fetch(url)
	.then(response => response.json())
	.then(data => {
		slokaContainer.innerHTML = `<p>${data.slok}</p>`;
	})
	.catch(error => console.error(error));
});

getMeaningBtn.addEventListener('click', () => {
const chapterNumber = document.getElementById('chapterNumber').value;
const slokaNumber = document.getElementById('slokaNumber').value;
const url = `https://bhagavadgitaapi.in/meaning/${chapterNumber}/${slokaNumber}?api_key=${apiKey}&format=json`;

fetch(url)
	.then(response => response.json())
	.then(data => {
		meaningContainer.innerHTML = `<p>${data.meaning}</p>`;
	})
	.catch(error => console.error(error));
});

getTranslationBtn.addEventListener('click', () => {
const chapterNumber = document.getElementById('chapterNumber').value;
const slokaNumber = document.getElementById('slokaNumber').value;
const language = document.getElementById('language').value;
const url = `https://bhagavadgitaapi.in/translation/${chapterNumber}/${slokaNumber}?api_key=${apiKey}&format=json&translation=${language}`;

fetch(url)
	.then(response => response.json())
	.then(data => {
		translationContainer.innerHTML = `<p>${data.translation}</p>`;
	})
	.catch(error => console.error(error));
});