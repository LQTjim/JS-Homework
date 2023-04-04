"use strict";
/*  document
        .querySelector("body")
        .appendChild(document.createElement("table"));
      let text = "";
      for (let i = 1; i < 10; i++) {
        text += "<tr>";
        for (let j = 1; j < 10; j++) {
          if (i === j) {
            text += `<td style="background:red;">${j}*${i}=${j * i}</td>`;
          } else {
            text += `<td>${j}*${i}=${j * i}</td>`;
          }
        }
        text += "</tr>";
      }
      document.querySelector("table").innerHTML = text; */
function drawTimesTable() {
    const body = document.querySelector("body");
    const table = document.createElement("table");
    //123
    body.appendChild(table);
    let text = "";
    for (let i = 1; i < 10; i++) {
        text += "<tr>";
        for (let j = 1; j < 10; j++) {
            if (i === j) {
                text += `<td style="background:red;">${j}*${i}=${j * i}</td>`;
            }
            else {
                text += `<td class=color${j} >${j}*${i}=${j * i}</td>`;
            }
        }
        text += "</tr>";
    }
    table.innerHTML = text;
}
drawTimesTable();
