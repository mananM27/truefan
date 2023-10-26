const celebDefine = document.getElementById("revelCeleb");
celebDefine.innerText = `${localStorage.getItem(
  "celeb"
)} will take their First Name`;

const msg = document.getElementById("exampleMsg");
const fullName = localStorage.getItem("forName");

msg.innerHTML = `Example: hey <span style="color:rgb(46, 203, 90);">${
  typeof fullName === "string" && fullName?.split(" ")[0]
}</span>  Here’s wishing you a very happy and fantastic birthday. I hope you have a wonderful day and have lots of yummy food. May all of your dreams come true. Sending you lots and everyone of course all around you, sending you lots...`;

const celebDefined2 = document.getElementById("revealCelebForPro");
celebDefined2.innerText = `${localStorage.getItem(
  "celeb"
)} will take their Full Name`;

const msgPro = document.getElementById("exampleMsgPro");
msgPro.innerHTML = `Example: hey <span style="color:rgb(241, 204, 71);">${fullName}</span>  , I wish you great success in the years to come. May happiness and love be a constant in your life, wishing you and your loved ones all the very best. Take care and may life bless you all abundantly. Lots of love. Take care.`;

const card1 = document.getElementById("custom-card-1");
const card2 = document.getElementById("custom-card-2");
const paymentCard = document.getElementById("payementcard");
const priceOf = document.getElementById("priceOf");

card1.addEventListener("click", () => {
  paymentCard.style =
    "background-image: linear-gradient( 83.7966deg, rgb(46, 203, 90), rgb(46, 203, 90) );";
  priceOf.innerText = "Pay ₹299 To Proceed";
  card2.style = "border:0px";
  card1.style = "border: 2px solid rgb(46, 203, 90);";
});

card2.addEventListener("click", () => {
  card2.style =
    "background-image: linear-gradient(rgba(250, 212, 125, 0.15), rgba(221, 183, 96, 0.15));border:2px solid rgb(241, 204, 71)";
  paymentCard.style =
    "background-image: linear-gradient(81.5111deg, rgb(255, 208, 65), rgb(255, 208, 65));";
  priceOf.innerText = "Pay ₹599 To Proceed";
  card1.style = "border:0px";
});

(() => {
  if(localStorage.getItem("user") === null){
    window.location.href = "index.html";
    return;
  }
  
  if(localStorage.getItem("celeb") === null)
  {
    window.location.href = "selectceleb.html";
    return;
  }

  if ( localStorage.getItem("for") === null  ||localStorage.getItem("forName") === null || localStorage.getItem("purpose") === null   || localStorage.getItem("phoneNumber") === null ) {
    window.location.href = "newonboarding.html";   
    return;    
  }
})()


function pay() {
  if (localStorage.getItem("celeb") !== null) {
    modal = document.createElement("div");
    modal.classList.add("custom-modal");

    let modalContainer = document.createElement("div");
    modalContainer.classList.add("custom-modal-container");

    let modalBody = document.createElement("div");
    modalBody.classList.add("custom-modal-body");

    let heading = document.createElement("p");
    heading.classList.add("heading");
    heading.innerHTML = "Mahendra Dara";
    heading.style.marginTop = "0";
    heading.style.marginBottom = "10px";

    let subPara = document.createElement("p");
    subPara.classList.add("text-1");
    subPara.innerHTML = "UPI ID: 6376657384@paytm";
    subPara.style.marginTop = "0";
    subPara.style.marginBottom = "16px";
    subPara.style.textAlign = "center";

    let subPara1 = document.createElement("p");
    subPara1.classList.add("text-1");
    subPara1.innerHTML = "Paytm: 6376657384";
    subPara1.style.marginTop = "0";
    subPara1.style.marginBottom = "16px";
    subPara1.style.textAlign = "center";

    let qr = document.createElement('img');
    qr.src = "./assets/qr.jpg"
    qr.classList.add("custome-modal-image");
    
    let btn = document.createElement("button");
    btn.classList.add("btn-1");
    btn.innerHTML = "Submit";
    btn.style.width = "100%";
    btn.style.fontSize = "1rem";
    btn.style.color = "white";
    btn.addEventListener("click", () => {
      const string = encodeURIComponent(`🌟Hi Dharma, Unleash the Celebrity Magic on your special day🌟\n\nWant a Personalised Birthday Video Message from ${localStorage.getItem("celeb")}? 🌠✨\n\nGuess what? 🎉 Delivery in just 24 hours! ⏰🚀\n\nSo, why wait? Click below to get FLAT10% OFF 🌟🎥\n\n100% Refund Guarantee if video is not delivered on time! 🤝`);
      window.open( `https://wa.me/916376657384?text=${string}`)
      mainContainer.removeChild(modal);
    });

    modalBody.append(heading, qr,subPara,subPara1, btn);
    modalContainer.appendChild(modalBody);
    modal.appendChild(modalContainer);
    mainContainer.appendChild(modal);
  } else {
    window.location.href = "index.html";
  }
  
}