import {
  CustomerOrder,
  EnterpriseCustomerProtocolo,
  IndividualCustomerProtocolo,
} from './interfaces/customer-protocolo';

export class IndividualCustomer
  implements IndividualCustomerProtocolo, CustomerOrder
{
  firstName: string;
  lastName: string;
  cpf: string;

  constructor(firstName: string, lastName: string, cpf: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cpf = cpf;
  }
  geIDN(): string {
    return this.cpf;
  }

  getName(): string {
    return this.firstName + ' ' + this.lastName;
  }
}

export class EnterpriseCustomer
  implements EnterpriseCustomerProtocolo, CustomerOrder
{
  name: string;
  cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }
  geIDN(): string {
    return this.cnpj;
  }

  getName(): string {
    return this.name;
  }
}
