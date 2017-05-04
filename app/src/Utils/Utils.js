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

  static getCurrencyFormat(currency) {
    return Number(currency.split(" ")[0]) + " €";
  }
}

export default Utils;
