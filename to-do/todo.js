const input = document.querySelector("#input-area");
const btn = document.querySelector("#my-btn");
const myul = document.querySelector(".myul");

btn.addEventListener("click", function () {
    if (input.value.trim() === "") {
        alert("Please enter a task.");
    } else {
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = "\u00D7";
        li.textContent = input.value;
        li.appendChild(span);
        myul.appendChild(li);
        li.addEventListener("click", () => {
          if(li.style.textDecoration === "line-through"){
            li.style.textDecoration= "none";
          }else {
            li.style.textDecoration = "line-through";
          }
        });
        span.addEventListener("click", () => {
         li.remove()
        });
        input.value = "";
    }
});
