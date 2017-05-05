import moment from 'moment';

class Utils {
  static getHourFormat(date) {
    return moment.parseZone(date).format('hh:mm');
  }

  static getDayFormat(date){
    return moment.parseZone(date).format('dd');
  }

  static getDateFormat(date){
    return moment.parseZone(date).format('DD.MM.');
  }

  static getCurrencyFormat(currency, flag) {
    let splitCurrency = currency.split(" ")[0];
    let formatCurrency =  flag ? Number(splitCurrency) : splitCurrency;

    return formatCurrency + " €";
  }

  static convertMinToHours(time){
    let duration = time >= 60 ?  moment.duration(time, 'minutes').asHours() + " h" : time + " min";
    return duration;
  }

  static getTotalCurrency(salaryDetails) {
    let totalSalary = 0;
    for (let i = 0; i < salaryDetails.length; i++) {
      totalSalary += Number(salaryDetails[i].earningTotal.split(" ")[0]);
    }
    return totalSalary.toFixed(2) + " €";
  }

}

export default Utils;
