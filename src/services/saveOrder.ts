import { SaveOrderProtolo } from './interfaces/saveOrder-protocolo';

export class SaveOrder implements SaveOrderProtolo {
  ///
  saveOrder(): void {
    console.log('Pedido salvo com sucesso');
  }
}
