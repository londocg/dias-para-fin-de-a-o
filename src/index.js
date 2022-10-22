const months = document.querySelector ("#months");
const weeks = document.querySelector ("#weeks");
const days = document.querySelector ("#days");
const hours = document.querySelector ("#hours");
const minutes = document.querySelector ("#minutes");
const seconds = document.querySelector ("#seconds");

const today = new Date ();
const chrismasYear = today.getFullYear ();

if (today.getMonth() === 12 && today.getDate() > 31) {
    chrismasYear += 1;
}

const chrismasDate = new Date (chrismasYear, 12, 31);
const daysMilliseconds = 1000 * 60 * 60 * 24;

let remainingDays = parseInt( 
    (chrismasDate.getTime() - today.getTime())
);

let monthsValue = parseInt(remainingDays / 30);
monthsValue.textContent = monthsValue;

remainingDays = parseInt(remainingDays % 30);
let weeksValue = remainingDays;
weeksValue = Math.floor(weeksValue / 7);
weeks.textContent = weeksValue;

let daysValue = parseInt(remainingDays % 7);
daysValue.textContent = daysValue;

let hoursValue = 24 -today.getHours();
let minutesValue = 60 -today.getMinutes();
let secondsValue = 60 -today.getSeconds();

hoursValue.textContent = hoursValue;
minutes.textContent = minutesValue;
seconds.textContent = secondsValue;

let interval = setInterval(() => {
    if (
        today.getDay() === chrismasDate.getDate() &&
        today.getMonth() === chrismasDate.getMonth()
    ) {
        alert ("Es Navida");
        months.textContent = 0;
        weeks.textContent = 0;
        days.textContent = 0;
        hours.textContent = 0;
        minutes.textContent = 0;
        seconds.textContent = 0;
        clearInterval(interval);
    } else {
    }

    switch (true) {
        case secondsValue === 0 &&
        minutesValue === 0 &&
        hoursValue === 0 &&
        daysValue === 0 &&
        weeksValue === 0 &&
        monthsValue === 0:
        clearInterval(interval);
        return;

        case secondsValue === 0:
            secondsValue = 60;
            minutesValue -= 1;
            minutes.textContent = minutesValue;
            break;
        case minutesValue === 0:
            minutesValue = 60;
            hoursValue -= 1;
            minutes.textContent = minutesValue;
            hours.textContent = hoursValue;
            break;
        case hoursValue === 0:
            hoursValue = 24;
            daysValue -= 1;
            hours.textContent = hoursValue;
            days.textContent = daysValue;
            break;
        case daysValue === 0:
            daysValue = 6;
            weeksValue -= 1;
            days.textContent = daysValue;
            weeks.textContent = weeksValue;
            break;
        case weeksValue === 0:
            weeksValue = 4;
            monthsValue -= 1;
            weeks.textContent = weeksValue;
            months.textContent = monthsValue;
            break;
    }

    secondsValue -= 1;
    seconds.textContent = secondsValue;
}, 1000);
