
const reviews = [
    {
        id: 1,
        name: "Anu",
        job: "IT engineer",
        text: "Must koosen technology college-ийн Мэдээллийн технологийн 4-р курсын оюутан."
    },
    {
        id: 2,
        name: "Purevjargal",
        job: "Designer",
        text: "Must koosen technology college-ийн Мэдээллийн технологийн 4-р курсын оюутан."
    },
    {
        id: 3,
        name: "Gantushig",
        job: "Software Engineer",
        text: "Must koosen technology college-ийн Мэдээллийн технологийн 4-р курсын оюутан."
    },
];

const name = document.getElementById("name");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentItem = 0;

function showReview() {
    const item = reviews[currentItem];

    name.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener("click", function() {
    currentItem++;

    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }

    showReview();
});

prevBtn.addEventListener("click", function() {
    currentItem--;

    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }

    showReview();
});

document.addEventListener("DOMContentLoaded", showReview);