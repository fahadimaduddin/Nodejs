import moment from 'moment';

const now = moment();
console.log('Current Date and Time:', now.format('YYYY-MM-DD HH:mm:ss'));

const futureDate = moment().add(7, 'days');
console.log('Date 7 Days Later:', futureDate.format('YYYY-MM-DD'));
