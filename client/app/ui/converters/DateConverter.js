class DateConverter {
  constructor() {
    throw new Error('Must not be instanciated!');
}

  static toText(date) {
      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }

  static  toDate(date) {
    return new Date(...date.split('-')
           .map((item, index) => item - index % 2)
    );

  }
}
