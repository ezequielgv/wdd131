let lastModified = new Date(document.lastModified);
const year = new Date().getFullYear();

document.getElementById('currentyear').textContent = year;
document.getElementById('lastModified').textContent = lastModified;
