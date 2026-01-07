export interface UserInput {}

export interface SellerProgramInput {
  first_name: string;
  last_name: string;
  phone_number: string;
  bank_account_number: string;
  swift_code: string;
  payment_type: string;
  // address: {
  //   addressLine1: string;
  //   addressLine2: string;
  //   city: string;
  //   postCode: string;
  //   country: string;
  // };
}
