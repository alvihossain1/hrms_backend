const { offDaysArr } = require('./constants');

require('dotenv').config()

exports.createAttendanceReport = (month, db_data) => {
    const dateSelected = new Date(`${month}-01`);
    const lastDayOfMonth = new Date(dateSelected.getFullYear(), dateSelected.getMonth()+1, 0);  
    const offDays = offDaysArr;

    console.log("First DAY:", dateSelected.toDateString())
    console.log("Last DAY:", lastDayOfMonth.toDateString())

    // const day = dateSelected.toLocaleString('en-us', {weekday:'long'}).toLowerCase();
    // console.log(day.toLowerCase());
    let object = {clockInTime: "-", clockOutTime: "-", hoursWorked: "-"};
    let arr = [];

    let noOfDays = 0
    const dateToday = new Date()
    if(dateSelected.getMonth() === dateToday.getMonth()){
        noOfDays = dateToday.getDate();
    }
    else{
        noOfDays = lastDayOfMonth.getDate();
    }

    for (let i = 1; i <= noOfDays; i++){            
        let dateString = `${month}-${i < 10 ? '0'+i : i}`;
        let dateSelecting = new Date(dateString)
        let dayUpperCase = dateSelecting.toLocaleString('en-us', {weekday:'long'});
        let day = dayUpperCase.toLowerCase();
        let found = false;

        for(let j = 0; j < offDays.length; j++){
            if(offDays[j] === day){
                arr.push({attendanceId: 101+i, date: dateString, day: dayUpperCase, present: "X", ...object});
                found = true;
            }
        }
        if(!found){
            arr.push({attendanceId: 101+i, date: dateString, day: dayUpperCase, present: "A", ...object});
        }
            
    }

    for (let i = 0; i < arr.length; i++){
        for(let j = 0; j < db_data.length; j++){
            if(arr[i].date === db_data[j].date){
                arr[i] = {...arr[i], ...db_data[j], present: "P"}
            }
        }
    }

    let noOfDaysPresent = 0;
    let noOfDaysAbsent = 0;
    let noOfDaysOff = 0;

    for (let i = 0; i < arr.length; i++){
        if(arr[i].present === "P"){
            noOfDaysPresent++
        }
        else if(arr[i].present === "A"){
            noOfDaysAbsent++
        }
        else if(arr[i].present === "X"){
            noOfDaysOff++;
        }
    }

    return {records: arr, noOfDaysPresent, noOfDaysAbsent, noOfDaysOff};

}