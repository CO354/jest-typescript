import { Messaging } from './messaging';

const createSut = () => {
  return new Messaging();
};
const messagingSend = 'Pedido salvo com sucesso..';

describe('Messaging', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return undefined', () => {
    // System under test
    const sut = createSut();

    expect(sut.sendMessage(messagingSend)).toBeUndefined();
  });

  it('should call console.log with "Mensagem envia: " and msg', () => {
    // System under test
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage(messagingSend);
    expect(consoleSpy).toHaveBeenCalledWith('Mensagem enviada:', messagingSend);
  });
  it('should call console.log once', () => {
    // System under test
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage(messagingSend);
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });
});
