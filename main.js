// fetch("data.json")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (summary) {
//     let placeholder = document.querySelector("summary-items");
//     let out = "";
//     for (let summar of summary) {
//       out += `
//         <div class="results-summary-item">
//         <div class="results-summary-type"><img src='${summar.icon}' alt="" />${summar.category}</div>
//         <div class="results-summary-percent-container">
//           <div class="results-summary-percent">${summar.score}</div>
//           <span>/</span>
//           <div class="results-summary-max-percent">100</div>
//         </div>
//       </div>
//         `;
//     }
//     // placeholder.innerHTML = out;
//   });
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const list = document.querySelector("#list");
    data.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item.category + " - " + item.score;
      list.appendChild(li);
    });
  })
  .catch((error) => console.error(error));
