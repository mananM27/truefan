const muteSVG = `<svg width="45" height="45" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.9"><rect width="40" height="40" rx="20" fill="#000" fill-opacity="0.6"></rect><path d="M9.416 22.96v-5.92c0-.574.478-1.04 1.067-1.04h3.825c.14 0 .28-.028.41-.08.13-.053.247-.129.344-.225l3.2-3.388c.672-.656 1.82-.191 1.82.736v13.914c0 .934-1.162 1.395-1.83.726l-3.19-3.369a1.046 1.046 0 0 0-.346-.231 1.105 1.105 0 0 0-.417-.083h-3.816a1.054 1.054 0 0 1-1.067-1.04Z" stroke="#fff" stroke-opacity="0.8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path><path d="m30.584 16.75-6.5 6.5m0-6.5 6.5 6.5" stroke="#fff" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>`;

const unmuteSVG =
  '<svg width="45" height="45" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.9"><rect width="40" height="40" rx="20" fill="#000" fill-opacity="0.6"></rect><path d="M24.267 16.5c1.422 1.778 1.422 5.222 0 7m3.2-10.5c4.254 3.808 4.28 10.217 0 14M9.334 22.96v-5.92c0-.574.478-1.04 1.067-1.04h3.825c.14 0 .28-.028.41-.08.13-.053.247-.129.344-.225l3.2-3.388c.672-.656 1.82-.191 1.82.736v13.914c0 .934-1.162 1.395-1.83.726l-3.19-3.369a1.046 1.046 0 0 0-.346-.231 1.105 1.105 0 0 0-.417-.083h-3.816a1.054 1.054 0 0 1-1.067-1.04Z" stroke="#fff" stroke-opacity="0.8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>';

const mainContainer = document.getElementById("mainContainer");
mainContainer.classList.add("main-container");

let modal;

(() => {
  modal = document.createElement("div");
  modal.classList.add("custom-modal");

  let modalContainer = document.createElement("div");
  modalContainer.classList.add("custom-modal-container");

  let modalBody = document.createElement("div");
  modalBody.classList.add("custom-modal-body");

  let heading = document.createElement("p");
  heading.classList.add("heading");
  heading.innerHTML = "Welcome";
  heading.style.marginTop = "0";
  heading.style.marginBottom = "10px";

  let subPara = document.createElement("p");
  subPara.classList.add("text-1");
  subPara.innerHTML =
    "The biggest bollywood celebrities are now within your reach!";
  subPara.style.marginTop = "0";
  subPara.style.marginBottom = "16px";
  subPara.style.textAlign = "center";

  let btn = document.createElement("button");
  btn.classList.add("btn-1");
  btn.innerHTML = "Let's go!";
  btn.style.width = "100%";
  btn.style.fontSize = "1rem";
  btn.style.color = "white";
  btn.addEventListener("click", () => {
    mainContainer.removeChild(modal);
    adVideo.muted = false;
    audioIcon.innerHTML = unmuteSVG;
  });

  modalBody.append(heading, subPara, btn);
  modalContainer.appendChild(modalBody);
  modal.appendChild(modalContainer);
  mainContainer.appendChild(modal);
})();

var formData = {
  name: "",
  ageGroup: "",
};

const adVideo = document.getElementById("adVideo");

const audioIcon = document.getElementById("audioIcon");
audioIcon.classList.add("audio-icon");
audioIcon.innerHTML = muteSVG;
audioIcon.style.zIndex = 1;

audioIcon.addEventListener("click", () => {
  if (adVideo.muted === true) {
    adVideo.muted = false;
    audioIcon.innerHTML = unmuteSVG;
  } else {
    adVideo.muted = true;
    audioIcon.innerHTML = muteSVG;
  }
});

const selectGrupAgeContainer = document.getElementById("selectAgeGroup");
const btnTxt = ["<25 yrs", "25-30 yrs", "30-35 yrs", "35+ yrs"];
const btns = btnTxt.map((text, id) => {
  const btn = document.createElement("button");
  btn.innerHTML = text;
  btn.classList.add("btn-2");
  btn.style.width = "100%";
  btn.id = `btn#${id}`;
  btn.type = "button";
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    if (formData.ageGroup !== "") {
      const index = btnTxt.indexOf(formData.ageGroup);
      document.getElementById(`btn#${index}`).classList.remove("btn-2-active");
    }
    btn.classList.add("btn-2", "btn-2-active");
    formData.ageGroup = event.target.innerText;
  });
  return btn;
});

for (let btn of btns) {
  const div = document.createElement("div");
  div.classList.add("col-5");
  div.append(btn);
  selectGrupAgeContainer.appendChild(div);
}

const onSubmitForm = () => {
  const name = document.getElementById("nameField").value;
  if (name.trim() !== "" && formData.ageGroup.trim() !== "") {
    document.getElementById("nameField").value = "";
    formData.name = name;
    localStorage.setItem("user", JSON.stringify(formData));
    document.getElementById("form_submit").submit();
  } else if (formData.name.trim() === "" && formData.ageGroup.trim() !== "") {
    inputField.focus();
  } else if (formData.name.trim() !== "" && formData.ageGroup.trim() === "") {
    document.getElementById("btn#0").classList.add("btn-2", "btn-2-active");
    formData.ageGroup = "<25 yrs";
  } else if (formData.name.trim() === "" && formData.ageGroup.trim() === "") {
    inputField.focus();
  }
};
