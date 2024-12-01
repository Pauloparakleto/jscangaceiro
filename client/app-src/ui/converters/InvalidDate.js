import { ApplicationError } from "../../util/ApplicationError.js";

export class InvalidDate extends ApplicationError {
  constructor(){
    super('Wrong Date format! Must be as dd/mm/YYYY');
  }
}
