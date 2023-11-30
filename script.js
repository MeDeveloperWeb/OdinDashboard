const dateCont = document.querySelector('.date');
const timeCont = document.querySelector('.time');

let currDate;

function getDayName(dayNumber) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return daysOfWeek[dayNumber];
}

// Function to get the month name
function getMonthName(monthNumber) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return months[monthNumber];
    
}



const formatTime = (time) => time < 10 ? "0" + time : time;


const setDate = ([date, month, day]) => {
    console.log(day)
    dateCont.innerHTML = `<span>${date}</span><br>${month}, ${day}`;
}

const setClock = () => {
    let today = new Date();

    timeCont.textContent = `${formatTime(today.getHours())}:${formatTime(today.getMinutes())}:${formatTime(today.getSeconds())}`;

    if (currDate != today.getDate()) {
        currDate = today.getDate();
        setDate([formatTime(today.getDate()),
            getMonthName(today.getMonth()),
            getDayName(today.getDay())])
    }

    setTimeout(setClock, 1000)
}

setClock();