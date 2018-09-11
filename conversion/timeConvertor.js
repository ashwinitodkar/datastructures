/**
 * Given a time in -hour AM/PM format, convert it to military (24-hour) time.
Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.
 * @param {*} s 
 */
function timeConversion(s) {
    var result = '';
    var hh, mm, ss;
 
    var isPM = s.split(':')[2].indexOf('PM') > 0;
    
    var str = s.split(':');
    var hh = str[0];mm = str[1], ss = str[2].substr(0, str[2].indexOf('M') - 1);
    if(isPM){
       if(hh == 12)
        result = hh + ':' + mm + ':' + ss;
       else
        result = (Number(hh) + 12) + ':' + mm + ':' + ss; 
    }else{
       if(hh == 12){
         result = "00" + ':' + mm + ':' + ss;
       }else{
           result = hh + ':' + mm + ':' + ss;
       }
    }
    return result;
 
 }