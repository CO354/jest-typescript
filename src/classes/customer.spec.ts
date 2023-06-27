import { EnterpriseCustomer, IndividualCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => {
  jest.clearAllMocks();
});
describe('Individual Customer', () => {
  it('should have indivual customer', () => {
    const sut = createIndividualCustomer('Anselmo', 'Momade', '000-000-000-12');

    expect(sut).toHaveProperty('firstName', 'Anselmo');
    expect(sut).toHaveProperty('lastName', 'Momade');
    expect(sut).toHaveProperty('cpf', '000-000-000-12');
  });

  it('should have methods to get name and idn', () => {
    const sut = createIndividualCustomer('Anselmo', 'Momade', '000-000-000-12');
    expect(sut.getName()).toBe('Anselmo Momade');
    expect(sut.getIDN()).toBe('000-000-000-12');
  });
});

describe('Enterprise Customer', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should have Enterprise customer', () => {
    const sut = createEnterpriseCustomer('Web Tech Data', '000-111-222-33');
    expect(sut).toHaveProperty('name', 'Web Tech Data');
    expect(sut).toHaveProperty('cnpj', '000-111-222-33');
  });

  it('should have getName and GetIDN', () => {
    const sut = createEnterpriseCustomer('Web Tech Data', '000-111-222-33');
    expect(sut.getName()).toBe('Web Tech Data');
    expect(sut.getIDN()).toBe('000-111-222-33');
  });
});
