const nms = document.getElementById("nums");
const btn = document.getElementById("btn");
const closeBtn = document.getElementById("close");
const chart = document.querySelector(".chart");

let values = [];
let maxValue = 0;
const chartHeight = 300;

btn.addEventListener("click", () => {
    chart.style.display = "flex";
    chart.innerHTML = ""; 

    values = nms.value.split(" ").map(Number);
    maxValue = Math.max(...values);

    values.forEach(val => {
        const bar = document.createElement("div");
        bar.classList.add("bar");

        const height = (val / maxValue) * chartHeight;
        bar.style.height = `${height}px`; 
        bar.innerHTML = `<span>${val}</span>`;

        chart.appendChild(bar);
    });

    bubbleSort();
});

async function bubbleSort() {
    const bars = document.getElementsByClassName("bar");

    for (let i = 0; i < values.length; i++) {
        bars[i].innerHTML = `<span>${values[i]}</span>`;
        
    }

    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length - i - 1; j++) {

            bars[j].style.background = "red";
            bars[j + 1].style.background = "red";

            await sleep(500);

            if (values[j] > values[j + 1]) {

              
                let temp = values[j];
                values[j] = values[j + 1];
                values[j + 1] = temp;

              
                const height1 = (values[j] / maxValue) * chartHeight;
                const height2 = (values[j + 1] / maxValue) * chartHeight;

                bars[j].style.height = `${height1}px`;
                bars[j + 1].style.height = `${height2}px`;

                bars[j].innerHTML = `<span>${values[j]}</span>`;
                bars[j + 1].innerHTML = `<span>${values[j + 1]}</span>`;
            }

            bars[j].style.background = "#22c55e";
            bars[j + 1].style.background = "#22c55e";
        }
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

closeBtn.addEventListener("click", () => {
    chart.style.display = "none";
});
