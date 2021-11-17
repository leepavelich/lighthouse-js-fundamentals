const talkingCalendar = function(date) {
  let arr = date.split('/')
  let str = monthConvert(arr[1]) + ' ' + dayConvert(arr[2]) + ', ' + arr[0]

  return str
};

const monthConvert = function(month) {
  switch(month) {
    case '01': return 'January'
    case '02': return 'February'
    case '03': return 'March'
    case '04': return 'April'
    case '05': return 'May'
    case '06': return 'June'
    case '07': return 'July'
    case '08': return 'August'
    case '09': return 'September'
    case '10': return 'October'
    case '11': return 'November'
    case '12': return 'December'
  }
}

const dayConvert = function(day) {
  if (day[0] === '0') day = day[1]
  if (day === '1' || day === '21' || day === '31') {
    day += 'st'
  } else if (day === '2' || day === '22') {
    day += 'nd'
  } else if (day === '3' || day === '23') {
    day += 'rd'
  } else {
    day += 'th'
  }
  return day
}

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));