const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

// const accordianBody;
const faqs = [];

function createFaq(data) {
  let card_div = document.createElement('div');
  card_div.innerHTML = `<div class="faq_header">
                          <h3>${data['question']}</h3>
                          <button class="show_btn"></button>
                        </div>
                        <p class="hidden">${data['answer']}</p>
                        `
  card_div.querySelector("button").style.marginLeft = "auto";
  card_div.classList.add("faq");
  document.querySelector(".accordian_body").appendChild(card_div);
}
faqData.forEach(el=>createFaq(el));
document.querySelectorAll(".show_btn").forEach(el => {
  el.addEventListener('click',(event) => {
    let parent = event.currentTarget.parentNode.parentNode;
    console.log(parent);
    if (parent.querySelector("p").style.display === '') {
      parent.querySelector("p").style.display = "block";
    } else {
      parent.querySelector("p").style.display = "";
    }
  })
})




