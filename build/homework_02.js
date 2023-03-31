"use strict";
(function () {
    const layer = document.querySelector(".input-layer");
    const submitBtn = document.querySelector(".submit-btn");
    const result = document.querySelector(".result");
    submitBtn.addEventListener("click", drawTree);
    function drawTree() {
        const layerValue = +layer.value;
        //reset tree
        result.innerHTML = "";
        const blank = "&nbsp;";
        const tree = "^";
        // if layer less than 3, function not excute
        if (layerValue < 3) {
            return;
        }
        for (let i = 1; i <= layerValue; i++) {
            result.innerHTML += `<pre class="green" >${blank.repeat(layerValue - i)}${tree.repeat(2 * i - 1)}</pre>`;
        }
        result.innerHTML += `<pre class="green" >${blank.repeat(layerValue - 1)}${tree}</pre><pre class="green" >${blank.repeat(layerValue - 1)}${tree}</pre>`;
    }
})();
