
let total = document.getElementById("totalCount");
let interviewCount = document.getElementById("interviewCount");
let rejectCount = document.getElementById("rejectedCount");

const allCardSection = document.getElementById("allCards");
const allJobsCount = document.getElementById("totalJobCount")

let interviewList = [];
let rejectedList = [];


function calculateCount() {
    total.innerText = allCardSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectCount.innerText = rejectedList.length;
    allJobsCount.innerText = allCardSection.children.length;


    checkEmpty();
}


calculateCount();


function toggle(id) {
    const allBtn = document.getElementById("all-btn");
    const interviewBtn = document.getElementById("Interview-btn");
    const rejectedBtn = document.getElementById("Rejected-btn");


    allBtn.classList.remove("bg-blue-500", "text-white");
    interviewBtn.classList.remove("bg-blue-500", "text-white");
    rejectedBtn.classList.remove("bg-blue-500", "text-white");

    allBtn.classList.add("bg-white", "text-black");
    interviewBtn.classList.add("bg-white", "text-black");
    rejectedBtn.classList.add("bg-white", "text-black");


    const selected = document.getElementById(id);
    selected.classList.add("bg-blue-500", "text-white");
    selected.classList.remove("bg-white", "text-black");

    const cards = allCardSection.children;


    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = "block";
    }

    if (id === 'Interview-btn') {
        for (let i = 0; i < cards.length; i++) {
            if (!interviewList.includes(cards[i])) cards[i].style.display = "none";
        }
    }

    if (id === 'Rejected-btn') {
        for (let i = 0; i < cards.length; i++) {
            if (!rejectedList.includes(cards[i])) cards[i].style.display = "none";
        }
    }


    checkEmpty();
}


const mainContainer = document.querySelector("main");

mainContainer.addEventListener("click", function (event) {
    const target = event.target;
    const card = target.closest('#allCards .max-w-7xl.mx-auto');

    if (!card) return;

    const statusBtn = card.querySelector('.btn.w-30');

    if (target.innerText.toLowerCase() === "interview") {
        if (!interviewList.includes(card)) {
            interviewList.push(card);


            let rejectIndex = rejectedList.indexOf(card);
            if (rejectIndex > -1) rejectedList.splice(rejectIndex, 1);
        }
        if (statusBtn) {
            statusBtn.innerText = "Interview";
            statusBtn.className = "btn w-30 mt-2 text-success bg-green-50";
        }
    }

    if (target.innerText.toLowerCase() === "rejected") {
        if (!rejectedList.includes(card)) {
            rejectedList.push(card);


            let interviewIndex = interviewList.indexOf(card);
            if (interviewIndex > -1) interviewList.splice(interviewIndex, 1);
        }
        if (statusBtn) {
            statusBtn.innerText = "Rejected";
            statusBtn.className = "btn w-30 mt-2 text-error bg-red-50";
        }
    }


    calculateCount();
});


function checkEmpty() {
    const nullJobs = document.getElementById("nullJobs");

    if (nullJobs === null || allCardSection === null) {
        return;
    }


    const visibleCards = Array.from(allCardSection.children)
        .filter(c => getComputedStyle(c).display !== 'none');

    if (visibleCards.length === 0) {
        nullJobs.style.display = "block";
    } else {
        nullJobs.style.display = "none";
    }
}


document.addEventListener("DOMContentLoaded", () => {


    const observer = new MutationObserver(() => {
        calculateCount();
        checkEmpty();
    });

    observer.observe(allCardSection, { childList: true, subtree: true });
});




document.addEventListener("DOMContentLoaded", function () {

    const allCards = document.getElementById("allCards");
    const nullJobs = document.getElementById("nullJobs");

    function checkEmpty() {
        if (allCards.children.length === 0) {
            nullJobs.style.display = "block";
        } else {
            nullJobs.style.display = "none";
        }
    }


    allCards.addEventListener("click", function (event) {

        if (event.target.classList.contains("delete-btn")) {

            const card = event.target.closest(".card");
            if (card) {
                card.remove();
                checkEmpty();
            }
        }
    });

    checkEmpty();

});

const deleteCards = document.getElementsByClassName("opacity-50");

for (const btn of deleteCards) {
    btn.addEventListener("click", function (event) {
        const card = event.target.closest('.max-w-7xl.mx-auto');

        if (card) {

            card.parentNode.removeChild(card);

            let intIdx = interviewList.indexOf(card);
            if (intIdx > -1) interviewList.splice(intIdx, 1);

            let rejIdx = rejectedList.indexOf(card);
            if (rejIdx > -1) rejectedList.splice(rejIdx, 1);

            calculateCount();
            checkEmpty();
        }
    });
}

