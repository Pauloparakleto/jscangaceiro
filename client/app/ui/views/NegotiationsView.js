class NegotiationsView extends View {
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
             <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>${ negotiations.totalSum() }</td>
             </tr>
          </tbody>

          <tfoot>
          </tfoot>
      </table>
      `
  }
}
