const mainContainer = document.getElementById("mainContainer");
mainContainer.classList.add("main-container");

const celebObj = [
  {
    image:
      "https://cdn.truefans.in/onboarding_15_sept/kareena_kapoor/kareena_profile_horizontal.png",
    name: "Kareena Kapoor",
    videos: "45k",
    isNew: false,
  },
  {
    image:
      "https://cdn.truefans.in/home-assets/jacqueline_onboarding_card_1683634663103.png",
    name: "Jacqueline Fernandez",
    videos: "46k",
    isNew: false,
  },
  {
    image:
      "https://cdn.truefans.in/home-assets/shubhman_plane_onboarding_card_1690277937655.webp",
    name: "Shubman Gill",
    videos: "11k",
    isNew: true,
  },
  {
    image:
      "https://cdn.truefans.in/home-assets/janhvi_plane_onboarding_card_1682504165501.png",
    name: "Janhvi Kapoor",
    videos: "28k",
    isNew: false,
  },
  {
    image:
      "https://cdn.truefans.in/vidya/onboarding/plane/vidya_onboarding_card.png",
    name: "Vidya Balan",
    videos: "17k",
    isNew: false,
  },
  {
    image:
      "https://cdn.truefans.in/home-assets/arjun_plane_onboarding_card_1682504165618.png",
    name: "Arjun Kapoor",
    videos: "27k",
    isNew: false,
  },
  {
    image:
      "https://cdn.truefans.in/home-assets/sonakshi_plane_onboarding_card_1683634663072.png",
    name: "Sonakshi Sinha",
    videos: "5k",
    isNew: false,
  },
  {
    image:
      "https://cdn.truefans.in/home-assets/parineeti_plane_onboarding_card_1684231425397.png",
    name: "Parineeti Chopra",
    videos: "7k",
    isNew: false,
  },
  {
    image:
      "https://cdn.truefans.in/home-assets/ananya_onboarding_card_1683634663133.png",
    name: "Ananya Panday",
    videos: "17k",
    isNew: false,
  },
  {
    image:
      "https://cdn.truefans.in/home-assets/kuldeep_plane_onboarding_card_1693822738047.webp",
    name: "Kuldeep Yadav",
    videos: "4k",
    isNew: false,
  },
  {
    image:
      "https://cdn.truefans.in/onboarding_15_sept/radhika_madan/radhika_profile_horizontal.png",
    name: "Radhika Madan",
    videos: "3k",
    isNew: false,
  },
  {
    image:
      "https://cdn.truefans.in/home-assets/yohani_onboarding_card_1683634662995.png",
    name: "Yohani Dilokia",
    videos: "4k",
    isNew: false,
  },
  {
    image:
      "https://cdn.truefans.in/shriya-app-home/shriya_onboarding_card_1680168911973.png",
    name: "Shriya Pilgaonkar",
    videos: "4k",
    isNew: false,
  },
];

function customeCard(data, id) {
  const card = document.createElement("div");
  card.classList.add("custom-card");
  card.id = id;

  const image = document.createElement("img");
  image.src = data.image;

  card.addEventListener("click", () => {
    image.style.border = "2px solid rgba(255, 50, 127, 1)";
    localStorage.setItem("celeb", data.name);
    window.location.href = "newonboarding.html";
  });

  const text1 = document.createElement("p");
  text1.classList.add("custom-card-text-1");
  text1.innerText = data.name;

  const text2 = document.createElement("p");
  text2.classList.add("custom-card-text-2");
  text2.innerText = data.videos + " videos delivered";

  if (data?.isNew) {
    const imageLabel = document.createElement("img");
    imageLabel.src = "https://cdn.truefans.in/vidya/new_label_home.png";
    imageLabel.classList.add("custom-card-label");
    card.append(image, text1, text2, imageLabel);
    return card;
  }

  card.append(image, text1, text2);
  return card;
}
for (celeb in celebObj) {
  const card = customeCard(celebObj[celeb], celeb);
  document.getElementById("list").append(card);
}

(()=>{
  if(localStorage.getItem("user") === null){
    window.location.href = "index.html";
  }  
})();