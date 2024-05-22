import { data_table, data_articles, data_statistics } from "./data.js";

function populateTable(data_table) {
  const table = document.querySelector("table").children[0];
  // console.log(table);
  data_table.forEach((element) => {
    let row = document.createElement("tr");
    row.innerHTML = `
            <td>${element.name}</td>
            <td>$${element.price.toFixed(2)}</td>
            <td>${element.desc}</td>
        `;
    table.appendChild(row);
  });
}

function populateArticles(data_articles) {
  const articles = document.getElementById("articles");
  data_articles.forEach((person) => {
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
            <div class="image-container">
                <img src="${person.image}" alt="${person.name}">
            </div>
            <div class="details">
                <h3>${person.name}</h3>
                <p>${person.quote}</p>
            </div>
        `;
    articles.appendChild(card);
  });
}

function populateStatistics(data_statistics) {
  const section = document.getElementById("section");
  data_statistics.forEach((data) => {
    console.log(data);
    let stat = document.createElement("div");
    stat.classList.add("box");
    stat.classList.add("item-details");
    if (data.format !== "star") {
      stat.innerHTML = `
            <div class="item-details-info">${data.name}:</div>
            <div class="${data.format}">
                <div class="${data.format} rating${data.id}" style="width: ${data.rating}%">${data.rating}%</div>
            </div>
        `;
    } else {
      let inlineRating = document.createElement("div");
      inlineRating.className = "item-details-info";
      let innerHTML = `${data.name}: `;
      let stars = 5;
      while (Math.round(data.rating) > 20) {
        innerHTML += `<i class="fa-solid fa-star rating${data.id}-text"></i>`;
        data.rating -= 20;
        stars--;
      }
      if (Math.round(data.rating) > 10) {
        innerHTML += `<i class="fa-regular fa-star-half-stroke rating${data.id}-text"></i>`;
        data.rating -= 20;
        stars--;
      }
      while (stars > 0) {
        innerHTML += `<i class="fa-regular fa-star rating${data.id}-text"></i>`;
        data.rating -= 20;
        stars--;
      }
      inlineRating.innerHTML = innerHTML;
      stat.appendChild(inlineRating);
    }
    section.appendChild(stat);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  populateTable(data_table);
  populateArticles(data_articles);
  populateStatistics(data_statistics);
});
