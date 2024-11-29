export class DateConverter {
  constructor() {
    throw new Error('Must not be instanciated!');
}

  static toText(date) {
      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }

  static  toDate(string) {
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(string))
      throw new InvalidDate();

    return new Date(...string.split('/')
          .reverse()
          .map((item, index) => item - index % 2)
    );

  }
}
