import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import '../app-src/css/custom.css';
import { NegociacaoController } from "./controllers/NegociacaoController.js";
import { debounce } from "./util/index.js";

const controller = new NegociacaoController();
