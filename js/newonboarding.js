const muteSVG = `<svg width="45" height="45" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.9"><rect width="40" height="40" rx="20" fill="#000" fill-opacity="0.6"></rect><path d="M9.416 22.96v-5.92c0-.574.478-1.04 1.067-1.04h3.825c.14 0 .28-.028.41-.08.13-.053.247-.129.344-.225l3.2-3.388c.672-.656 1.82-.191 1.82.736v13.914c0 .934-1.162 1.395-1.83.726l-3.19-3.369a1.046 1.046 0 0 0-.346-.231 1.105 1.105 0 0 0-.417-.083h-3.816a1.054 1.054 0 0 1-1.067-1.04Z" stroke="#fff" stroke-opacity="0.8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path><path d="m30.584 16.75-6.5 6.5m0-6.5 6.5 6.5" stroke="#fff" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>`;

const unmuteSVG =
  '<svg width="45" height="45" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.9"><rect width="40" height="40" rx="20" fill="#000" fill-opacity="0.6"></rect><path d="M24.267 16.5c1.422 1.778 1.422 5.222 0 7m3.2-10.5c4.254 3.808 4.28 10.217 0 14M9.334 22.96v-5.92c0-.574.478-1.04 1.067-1.04h3.825c.14 0 .28-.028.41-.08.13-.053.247-.129.344-.225l3.2-3.388c.672-.656 1.82-.191 1.82.736v13.914c0 .934-1.162 1.395-1.83.726l-3.19-3.369a1.046 1.046 0 0 0-.346-.231 1.105 1.105 0 0 0-.417-.083h-3.816a1.054 1.054 0 0 1-1.067-1.04Z" stroke="#fff" stroke-opacity="0.8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>';

const mainContainer = document.getElementById("mainContainer");
mainContainer.classList.add("main-container");

let progress = 20;
const progressBar = document.getElementById("onboard-progress");
const progressDiv = document.createElement("div");

(() => {
  progressBar.style.height = "4px";
  progressBar.style.width = "100%";
  progressDiv.style.height = "4px";
  progressDiv.style.background = "rgb(255, 50, 127)";
  progressBar.style.width = `${progress}%`;
  progressBar.append(progressDiv);
})();

const adVideo = document.getElementById("onboard-adVideo");

const audioIcon = document.getElementById("onboard-audioIcon");
audioIcon.classList.add("onboard-audio-icon");
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

function button(data, id) {
  const btn = document.createElement("button");
  btn.id = id;
  btn.innerText = data;
  return btn;
}

function form1() {
  localStorage.getItem("for") !== null && localStorage.removeItem("for");
  localStorage.getItem("forName") !== null &&
    localStorage.removeItem("forName");
  localStorage.getItem("purpose") !== null &&
    localStorage.removeItem("purpose");
  localStorage.getItem("phoneNumber") !== null &&
    localStorage.removeItem("phoneNumber");

  const para = document.createElement("p");
  const div = document.createElement("div");
  div.id = "onboard-form_submit";
  para.innerHTML = "Who Is this Video for?";
  para.classList.add("heading-1");
  para.style.marginTop = "20px";
  para.style.marginBottom = "0";
  para.style.paddingInline = "50px";
  document.getElementById("onboard-form-container").style =
    "display:flex;flex-direction:column;";
  document.getElementById("onboard-form-container").append(para);
  const forWish = ["Wife/Family", "Girlfriend/Friend", "Myself"];
  div.style.display = "flex";
  div.style.flexDirection = "column";
  div.style.margin = "12px 10px";
  for (let text of forWish) {
    const id = crypto.randomUUID();
    const btn = button(text, id);
    btn.classList.add("btn-3");
    btn.addEventListener("click", () => {
      document.getElementById("onboard-form-container").removeChild(para);
      document.getElementById("onboard-form-container").removeChild(div);
      progressBar.style.width = `${40}%`;
      localStorage.setItem("for", text);
      form2();
    });
    div.append(btn);
  }
  document.getElementById("onboard-form-container").append(div);
}

function form2() {
  const para = document.createElement("p");
  const div = document.createElement("div");
  div.id = "onboard-form_submit";
  para.innerHTML = "What Is Their Full Name?";
  para.classList.add("heading-1");
  para.style.marginTop = "20px";
  para.style.marginBottom = "0";
  para.style.paddingInline = "0px";
  document.getElementById("onboard-form-container").style =
    "display:flex;flex-direction:column;";
  document.getElementById("onboard-form-container").append(para);
  const input = document.createElement("input");
  input.id = "inputField";
  input.placeholder = "Ex: Chulbul Panday";
  input.classList.add("inputField");
  input.style.marginBottom = "20px";
  const id = crypto.randomUUID();
  const btn = button("Next", id);
  btn.classList.add("btn-4");
  btn.style.marginBottom = "20px";
  btn.addEventListener("click", () => {
    const value = input.value;
    if (value.split(" ").length > 1) {
      document.getElementById("onboard-form-container").removeChild(para);
      document.getElementById("onboard-form-container").removeChild(div);
      progressBar.style.width = `${60}%`;
      localStorage.setItem("forName", value);
      form3();
    } else {
      input.style.border = "1px solid red";
    }
  });
  div.append(input);
  div.append(btn);
  document.getElementById("onboard-form-container").append(div);
}

function form3() {
  const para = document.createElement("p");
  const div = document.createElement("div");
  div.id = "onboard-form_submit";
  para.innerHTML = "Who Is this Video for?";
  para.classList.add("heading-1");
  para.style.marginTop = "20px";
  para.style.marginBottom = "0";
  para.style.paddingInline = "50px";
  document.getElementById("onboard-form-container").style =
    "display:flex;flex-direction:column;";
  document.getElementById("onboard-form-container").append(para);
  const name = localStorage.getItem("forName");
  const forWish = [
    `Best Wishes For ${name.split(" ")[0]}`,
    `Wish ${name.split(" ")[0]} a Happy Birthday`,
    `Motivate ${name.split(" ")[0]}`,
  ];
  div.style.display = "flex";
  div.style.flexDirection = "column";
  div.style.margin = "12px 10px";
  for (let text of forWish) {
    const id = crypto.randomUUID();
    const btn = button(text, id);
    btn.classList.add("btn-3");
    btn.addEventListener("click", () => {
      progressBar.style.width = `${80}%`;
      localStorage.setItem("purpose", text);
      document.getElementById("onboard-form-container").removeChild(para);
      document.getElementById("onboard-form-container").removeChild(div);
      form4();
    });
    div.append(btn);
  }
  document.getElementById("onboard-form-container").append(div);
}

function form4() {
  const para = document.createElement("p");
  const div = document.createElement("div");
  div.id = "onboard-form_submit";
  para.innerHTML = "Please enter your mobile number";
  para.classList.add("heading-1");
  para.style.marginTop = "20px";
  para.style.marginBottom = "20px";
  para.style.paddingInline = "0px";
  document.getElementById("onboard-form-container").style =
    "display:flex;flex-direction:column;";
  document.getElementById("onboard-form-container").append(para);
  const div2 = document.createElement("div");
  div2.style =
    "display:flex;justify-content:flex-start;align-items:center;flex-direction:row !important;width:100%;border:1px solid red ;border-radius:8px;margin-bottom 8px;height:46px;border:1px solid rgb(150, 144, 232)";
  const para2 = document.createElement("p");
  para2.classList.add("text-2");
  para2.innerText = "+91";
  para2.style.height = "100%";
  para2.style.marginBottom = "0px";
  para2.style.padding = "10px";
  para2.style.borderRight = "1px solid rgb(150, 144, 232)";
  const input = document.createElement("input");
  input.id = "inputField";
  input.placeholder = "Enter mobile number";
  input.style =
    "height: 38px;padding: 16px 20px;background-color:transparent; border : 0;color:white;width :80%;";

  div2.append(para2, input);
  const id = crypto.randomUUID();
  const btn = button("Next", id);
  btn.classList.add("btn-4");
  btn.style.marginBottom = "20px";
  const div3 = document.createElement("div");

  btn.addEventListener("click", () => {
    const value = input.value;
    if (value.length === 10 && !isNaN(Number(value))) {
      document.getElementById("onboard-form-container").removeChild(para);
      document.getElementById("onboard-form-container").removeChild(div);
      progressBar.style.width = `${100}%`;
      localStorage.setItem("phoneNumber", value);
      window.location.href = "payment.html";
    } else {
      div2.style.border = "1px solid red";
      para2.style.borderRight = "1px solid red";
    }
  });
  div3.style =
    "display: flex ;align-items:center;gap:10px;flex-direction:row !important;justify-content:start; padding-left:10px";
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = true;
  checkbox.style = "height:50px;width:20px";
  const para3 = document.createElement("p");
  para3.style = "margin-bottom:0px;color:white";
  para3.innerText = "I agree to receive updates via WhatsApp";
  div3.append(checkbox, para3);
  div.append(div2);
  div.append(div3);
  div.append(btn);
  document.getElementById("onboard-form-container").append(div);
}

if (progress === 20) {
  form1();
}
