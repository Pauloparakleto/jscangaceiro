import { NegociacaoController } from "./controllers/NegociacaoController.js";
import { debounce } from "./util/Debounce.js";

const controller = new NegociacaoController();
const $ = document.querySelector.bind(document);

$('.form').addEventListener("submit", controller.adiciona.bind(controller));
$('#botao-apaga').addEventListener("click", controller.clearIndex.bind(controller));
$('#botao-importa')
  .addEventListener("click", debounce(() => {
    controller.importIndex();
  }, 1000));
