import { View } from "../views/View.js";
import { DateConverter } from "../converters/DateConverter.js";

export class NegotiationsView extends View {
  template(negotiations){
    return `
      <table class="table table-hover table-bordered">
          <thead>
              <tr>
                  <th>DATA</th>
                  <th>QUANTIDADE</th>
                  <th>VALOR</th>
                  <th>VOLUME</th>
              </tr>
          </thead>

          <tbody>
            ${negotiations.toArray().map((negotiation) =>
             `
              <tr>
                <td>${ DateConverter.toText(negotiation.date) }</td>
                <td>${ negotiation.quantidade }</td>
                <td>${ negotiation.valor }</td>
                <td>${ negotiation.volume }</td>
              </tr>
             `
            ).join('')}
          </tbody>

          <tfoot>
            <tr>
              <td colspan="3"></td>
              <td>${negotiations.totalSum}</td>            
            </tr>
          </tfoot>
      </table>
      `
  }
}
