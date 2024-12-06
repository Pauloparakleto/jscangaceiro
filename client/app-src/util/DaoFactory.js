import { ConnectionFactory } from "../util/ConnectionFactory.js";
import { NegotiationDao } from "../domain/negociacao/NegotiationDao.js";

export async function getNegotiationDao(){
  const connection = await ConnectionFactory.getConnection();
  return new NegotiationDao(connection);
}
