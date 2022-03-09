const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
//   loop: true,
  slidesPerView: 3,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    678: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    1000: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

const swiperWrapper = document.querySelector(".swiper-wrapper");

function setInitialMetaData(title, heading, subheading, ctaLabel, ctaUrl) {
  document.title = `${title}`;
  document.getElementById("heading").innerText = `${heading}`;
  document.getElementById("subheading").innerText = `${subheading}`;
  document.getElementById("cta").innerText = `${ctaLabel}`;
  document.getElementById("cta").addEventListener("click", () => {
    window.location = `${ctaUrl}`;
  });
}
const {
  documentTitle,
  heading,
  subheading,
  ctaLabel,
  ctaUrl,
  profiles,
  linkedinImg,
} = data;

function createCard(
  name,
  avatar,
  about,
  linkedin,
  firstConsultationFree,
  charge,
  companies,
  experties
) {
  const div = document.createElement("div");
  div.classList.add("swiper-slide");
  div.innerHTML = `
       <div class="p-4">
         <div class="flex items-center">
             <img alt="${name} avatar" src="${avatar}" class="avatar" />
           </div>
         <div class="flex rounded-lg h-full h-292 bg-gray-100 p-8 flex-col">
           <h2 class="text-gray-900 text-lg title-font font-medium">
           ${about}
           </h2>
           <div class="flex-grow">
             <p class="leading-relaxed text-base">
             <b> ${name} </b>
             </p>
             ${
               (companies &&
               companies.length > 0)?
               "<h3>Worked in : <span class='text-green-500'>" +
                 companies.join(" , ") +
                 "</span> </h3>":''
             }
             ${
               (experties &&
               experties.length > 0) ?
               "<h3>Area of Experties : <span class='text-green-500'>" +
                 experties.join(" , ") +
                 "</span> </h3>":''
             }

             <h3>Consultancy fee : <span class="text-green-500">${charge}</span> </h3>
             <h3 class="text-indigo-500">${firstConsultationFree}</h3>
             <a class="mt-3 text-indigo-500 inline-flex items-center" href="${linkedin}">
               <img src="${linkedinImg}" alt="linkedin icon" width="40px" height="40px" />
             </a>
           </div>
         </div>
       </div>
     `;
  return div;
}

profiles.forEach((profile) => {
  swiperWrapper.appendChild(
    createCard(
      profile.name,
      profile.avatar,
      profile.about,
      profile.linkedin,
      profile.firstConsultationFree,
      profile.charge,
      profile.companies,
      profile.experties
    )
  );
});
setInitialMetaData(documentTitle, heading, subheading, ctaLabel, ctaUrl);
