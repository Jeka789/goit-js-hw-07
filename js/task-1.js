const categories = document.querySelectorAll(`#categories .item`)

console.log(`Number of categories: ${categories.length}`);

categories.forEach(categori => {
    const title = categori.querySelector('h2').textContent;

    console.log(`Categori: ${title}`);

    const items = categori.querySelectorAll('ul > li');

    console.log(`Elements: ${items.length}`);
});