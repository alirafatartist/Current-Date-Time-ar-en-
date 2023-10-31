let input1 = document.getElementById("input1");
let input = document.getElementById("input2");

let date_time = new Date();
let area = "en-US";

let usInput = document.getElementById("chcUS");
let arInput = document.getElementById("chcAR");

let arFlag = document.getElementById("arfg");
let enFlag = document.getElementById("enfg");
arFlag.addEventListener("click", function () {
  arInput.checked = true;
});
enFlag.addEventListener("click", function () {
  usInput.checked = true;
});
// this code called myTimer function every 1000 milliseconds (1 second)
setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();

  if (usInput.checked == true) {
    area = "en-US";
    let daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    // get day number and choose ot from array
    day = daysOfWeek[date_time.getDay()];
    input1.value = day;
  } else if (arInput.checked == true) {
    area = "ar-EG";
    daysOfWeek = [
      "الأحد",
      "الاثنين",
      "الثلاثاء",
      "الأربعاء",
      "الخميس",
      "الجمعة",
      "السبت",
    ];
    // get day number and choose ot from array
    day = daysOfWeek[date_time.getDay()];
    input1.value = day;
  }
  //   formate date to local date and time
  let formatdate = d.toLocaleTimeString(area, {
    hour12: true, // like 09:34:56 not 21:34:56
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  // make time color orange
  const timePart = formatdate.split(" ")[1]; // Get the time part
  const colorizedTime = `<span style="color: orange; font-weight:bold;">${timePart}</span>`;
  input.innerHTML = formatdate.replace(timePart, colorizedTime); // Apply color by replace old time part with new colored time part
}
