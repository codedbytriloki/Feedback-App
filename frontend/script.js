const API_URL = 'http://localhost:3000/api/feed';

const container = document.getElementById('information');
const feedBtn = document.getElementById('feedBtn');
const feedForm = document.querySelector('.feedForm');
const closeBtn = document.getElementById('closeBtn');
const form = document.querySelector('form');
const submitBtn = document.getElementById("submitBtn");
const userName = document.getElementById("userName");
const email = document.getElementById("email");
const feedbackMsg = document.getElementById("feedback");

form.addEventListener('submit', async (e) => {
  feedForm.style.display = 'none';
  e.preventDefault();
  const feedback = {
    name: userName.value,
    email: email.value,
    message: feedbackMsg.value
  };

  const res = await fetch(API_URL, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(feedback)
  });

  const data = await res.json();
  alert(data.message);
  form.reset();
  fetchFeedbacks();
})

async function fetchFeedbacks() {
  const res = await fetch(API_URL);
  const feedbacks = await res.json();
  container.innerHTML = feedbacks.map(feed =>
    `
      <div class="info">
        <h4>Name : </h4>
        <p>${feed.name}</p>
        <h4>Email : </h4>
        <p>${feed.email}</p>
        <h4>Feedback : </h4>
        <p>${feed.message}</p>
        <h4>Date : </h4>
        <p>${new Date(feed.date).toLocaleString()}</p>
      </div>
    `
  ).join('');
}

fetchFeedbacks();

function openForm() {
  feedForm.style.display = 'flex';
}

closeBtn.addEventListener('click', () => {
  feedForm.style.display = 'none';
})

feedBtn.addEventListener('click', openForm);

//  <div class="info">
//         <h4>Name : </h4>
//         <p>Rahul Sharma</p>
//         <h4>Feedback : </h4>
//         <p>Great app very useful</p>
//         <h4>Date : </h4>
//         <p>24 Oct 2025</p>
//       </div>