export interface IndividualCustomerProtocolo {
  firstName: string;
  lastName: string;
  cpf: string;
}

export interface EnterpriseCustomerProtocolo {
  name: string;
  cnpj: string;
}

export interface CustomerOrder {
  getName(): string;
  geIDN(): string;
}
