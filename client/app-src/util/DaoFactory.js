import { ConnectionFactory } from "../util/ConnectionFactory.js";
import { NegotiationDao } from "../domain/negociacao/NegotiationDao.js";

export function getNegotiationDao(){
    return ConnectionFactory
      .getConnection()
      .then(conn => new NegotiationDao(conn));
}
