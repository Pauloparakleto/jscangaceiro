class DateConverter {
  constructor() {
    throw new Error('Must not be instanciated!');
}

  static toText(date) {
      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }

  static  toDate(string) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(string))
      throw new Error('Wrong format. Must be aaaa-mm-dd');

    return new Date(...string.split('-')
           .map((item, index) => item - index % 2)
    );

  }
}
