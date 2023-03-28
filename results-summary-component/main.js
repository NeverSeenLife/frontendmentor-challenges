fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const list = document.querySelector(".results-summary-info");
    let out = "";
    data.forEach((item) => {
      const li = document.createElement("li");
      out += `
      <div class="results-summary-item">
        <div class="results-summary-type"><img src='${item.icon}' alt="" />${item.category}</div>
            <div class="results-summary-percent-container">
           <div class="results-summary-percent">${item.score}</div>
           <span>/</span>
           <div class="results-summary-max-percent">100</div>
         </div>
       </div>
      `;
    });
    list.innerHTML = out;
  })
  .catch((error) => console.error(error));
