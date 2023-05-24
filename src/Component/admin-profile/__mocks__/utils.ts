import { SelectOptionsProps } from '../profile/types/SelectOptionsProps';
import { VerticalTabsProps } from '../VerticalTabs/types/VerticalTabsProps';

const AdminVerticalMenu: VerticalTabsProps[] = [
  {
    id: 0,
    text: 'Profile',
    status: false,
    icon: 'house'
  },
  {
    id: 1,
    text: 'Contacts',
    status: false
  },
  {
    id: 2,
    text: 'Documents',
    status: false
  },
  {
    id: 3,
    text: 'Shop',
    status: false
  },
  {
    id: 4,
    text: 'Terms and Conditions',
    status: false
  },
  {
    id: 5,
    text: 'User',
    status: false
  }
];

const PAYMENT_TERMS_ADMIN: SelectOptionsProps[] = [
  {
    id: 0,
    label: 'Payment Terms',
    value: 0,
    disabled: true
  },
  {
    id: 1,
    label: 'Net 60 terms with 3% short pay',
    value: 1,
    disabled: false
  },
  {
    id: 2,
    label: 'Net 30 terms with 6% short pay',
    value: 2,
    disabled: false
  }
];

const OWNER_SHIP_TERMS_ADMIN: SelectOptionsProps[] = [
  {
    id: 0,
    label: 'Ownership Terms',
    value: 0,
    disabled: true
  },
  {
    id: 1,
    label: 'Minority Terms',
    value: 1,
    disabled: false
  },
  {
    id: 2,
    label: 'Partnership',
    value: 2,
    disabled: false
  }
];

const CONTACT_TYPES_TITLE: { [key: string]: string } = {
  Primary: 'Primary',
  AccReceivables: 'Account Receivables',
  CompanyInsurance: 'Your Company Insurance'
};
export {
  AdminVerticalMenu,
  PAYMENT_TERMS_ADMIN,
  OWNER_SHIP_TERMS_ADMIN,
  CONTACT_TYPES_TITLE
};
