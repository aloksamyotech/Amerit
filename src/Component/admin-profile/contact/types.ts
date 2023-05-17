export default interface Contact {
  principalPersonTitle: string;
  principalPerson: string;
  otherContacts: [
    {
      name: string;
      email: string;
      phone: string;
      contactType: 0;
    },
    {
      name: string;
      email: string;
      phone: string;
      contactType: 0;
    },
    {
      name: string;
      email: string;
      phone: string;
      contactType: 0;
    }
  ];
}
