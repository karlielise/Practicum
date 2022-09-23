const hotel_service_array = [
    {
        img: "image/spa.jpg",
        alt: "spa and meditation",
        text: "Be a gourmand of the fine and luxe and dive into our well curated Jacuzzis\n" +
            "and spas for some kneading strokes and aroma baths",
    },
    {
        img: "image/catering.jpg",
        alt: "a photo of catering in a hotel setting",
        text: "Experience true heritage and culture as you cram down a masterpiece of taste\n" +
        "prepared to your liking and glory",
    },
    {
        img: "image/room_service.jpg",
        alt: "room service as provided in this hotel",
        text: "Get above world-class services from our dedicated team of ladies and\n" +
            "gentlemen who work around the clock to tend your needs",
    },
]
const date = document.getElementById("dep_date");
const hotelService = document.getElementById("data-hotel-service");
const form = document.querySelector(".form");
const sendBtn = document.querySelector(".btn-send");

window.addEventListener("DOMContentLoaded", () => {
    displayHotelServices(hotel_service_array)
})

const displayHotelServices = (service) => {
    let displayHotelServiceItems = service.map((item) => {
        return `<div class="service-container-card">
            <div class="image">
                <img src=${item.img} alt=${item.alt}>
            </div>
            <div class="card-body">
                <p class="card-body-text">${item.text}</p>
            </div>
        </div>`;
    })
    displayHotelServiceItems = displayHotelServiceItems.join("");
    hotelService.innerHTML = displayHotelServiceItems;
}

function formSubmit() {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
    })
    //const emailInput = form.querySelector("#email")
    // let emailInputValue = emailInput.value;
    //const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

}

formSubmit()



