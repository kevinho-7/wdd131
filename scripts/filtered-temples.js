document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu");
  const nav = document.querySelector("nav");
  const container = document.querySelector(".container");
  const navLinks = document.querySelectorAll("nav ul li a");

  menuButton.addEventListener("click", function () {
      nav.classList.toggle("hidden");
      menuButton.classList.toggle("open");
  });

  const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Campinas Brazil",
      location: "Campinas, Brazil",
      dedicated: "2002, May, 16",
      area: 48100,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/campinas-brazil-temple/campinas-brazil-temple-6012-main.jpg"
    },
    {
      templeName: "Córdoba Argentina",
      location: "Córdoba ,Argentina",
      dedicated: "2015, May, 17",
      area: 34369,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/cordoba-argentina-temple/cordoba-argentina-temple-11093-main.jpg"
    },
    {
      templeName: "Rome Italy",
      location: "Rome ,Italy",
      dedicated: "2019, March, 10-12",
      area: 41010,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
    },
    {
      templeName: "Monticello Utah",
      location: "Monticello, Utah",
      dedicated: "1998, July, 27",
      area: 11225,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/monticello-utah-temple/monticello-utah-temple-41257-main.jpg"
    },
    {
      templeName: "Palmyra New York",
      location: "Palmyra, New York",
      dedicated: "2000, April, 06",
      area: 10900,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/_temp/077-Palmyra-New-York-Temple.jpg"
    },
];

  function displayTemples(filteredTemples) {
      container.innerHTML = "";
      filteredTemples.forEach((temple) => {
          const templeCard = document.createElement("div");
          templeCard.classList.add("temple-card");

          templeCard.innerHTML = `
              <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" width="350" height="200">
              <h3>${temple.templeName}</h3>
              <p><strong>Location:</strong> ${temple.location}</p>
              <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
              <p><strong>Area:</strong> ${temple.area} sq ft</p>
          `;

          container.appendChild(templeCard);
      });
  }

  displayTemples(temples);

  navLinks.forEach((link) => {
      link.addEventListener("click", function (event) {
          event.preventDefault();
          const filter = link.textContent.toLowerCase();

          let filteredTemples = temples;
          if (filter === "old") {
              filteredTemples = temples.filter((temple) => parseInt(temple.dedicated.split(",")[0]) < 1900);
          } else if (filter === "new") {
              filteredTemples = temples.filter((temple) => parseInt(temple.dedicated.split(",")[0]) >= 2000);
          } else if (filter === "large") {
              filteredTemples = temples.filter((temple) => temple.area > 50000);
          } else if (filter === "small") {
              filteredTemples = temples.filter((temple) => temple.area <= 50000);
          }

          displayTemples(filteredTemples);
      });
  });
});
