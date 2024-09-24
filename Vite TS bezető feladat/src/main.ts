const t : number[] = [5, 5, 3, 4, 2, 5, 3, 1, 4, 5, 4, 2, 1];

document.addEventListener("DOMContentLoaded", () => {
  let erdemjegy = document.getElementById("erdemjegy") as HTMLInputElement;
  document.getElementById("submit")?.addEventListener("click", () => {

    let ertek = parseInt(erdemjegy.value);

    if (ertek >= 1 && ertek <= 5) {
      t.push(parseInt(erdemjegy.value));
    }
    else{
      alert("Nem megfelelő számot adott meg. (megfelelő intrevallum: 1-5)")
    }

    console.log(t);

    erdemjegy.value = "";

    let table = document.getElementById("table") as HTMLTableElement
    table.textContent = ""
    for (let i = 0; i < t.length; i++) {
      table.innerHTML +=
      `<tr>
      <td>${t[i]}
      </tr>`;
    }

  })

  let kereso = document.getElementById("kereses") as HTMLInputElement;
  let ktable = document.getElementById("ktable") as HTMLTableElement;
  kereso.addEventListener("input", () => {
    ktable.textContent = "";
    for (let i = 0; i < t.length; i++) {
      if (t[i] == parseInt(kereso.value)) {
        ktable.innerHTML +=
        `<tr>
        <td>${t[i]}
        </tr>`;
      }
    }
  })
})
