const categories = document.querySelectorAll(`#categories .item`)

console.log(`Number of categories: ${categories.length}`);

categories.forEach(categori => {
    const title = categori.querySelector('h2').textContent;

    const items = categori.querySelectorAll('ul > li').length;

    console.log(`Categori: ${title}
Elements: ${items}`);
});