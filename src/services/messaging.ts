import { MessagingProtocolo } from './interfaces/messagins-protocolo';
export class Messaging implements MessagingProtocolo {
  ///
  sendMessage(msg: string): void {
    console.log('Mensagem enviada:', msg);
  }
}
