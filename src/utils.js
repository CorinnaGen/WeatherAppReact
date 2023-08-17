export const formatTime = (time) => {
if (time < 10){
    return time= `0${time}`;
    }
}

export const getToday = (date) =>{
    const days=["Sun", "Mon", "Tue","Wed", "Thu", "Fri", "Sat"];
    let today= days[date.getDay()];
    return today
}