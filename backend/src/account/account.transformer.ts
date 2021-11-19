import { Account } from "src/entities/account.entity";

export const tranformAccount = (account: Account) => {
  return {
    name: account.name, 
    email: account.email, 
    phone: account.phone, 
    address: account.address, 
    code: account.code 
  }
}