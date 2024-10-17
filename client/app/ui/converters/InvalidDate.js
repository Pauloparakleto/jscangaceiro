class InvalidDate extends Error {
  constructor(){
    super('Wrong Date format! Must be as dd/mm/YYYY');
    this.name = this.constructor.name;
  }
}
