import { MessagingProtocolo } from './interfaces/messagins-protocolo';
export class Messaging implements MessagingProtocolo {
  ///
  sendMessage(): void {
    console.log('Mensagem enviada: ');
  }
}
