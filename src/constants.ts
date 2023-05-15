import { SelectOptionsProps } from '@components/admin-profile/profile/types/SelectOptionsProps';

export const HEADER_HEIGHT = 69;
export const CONTENT_MAX_WIDTH = '80vw';
export const NAV_WIDTH = 240;
export const CONTAINER_BORDER_RADIUS = 8;

export const TABLE_DEFAULT_PER_PAGE = 10;
export const TABLE_PAGE_SIZE_OPTIONS = [10];

export const HIGH_PRIORITY_VALUE = 'ultricies';

export const VENDOR_REPAIR_ORDER_PAGE = '/vendor-repair-order';
export const ESTIMATE_ACCEPT_PAGE = '/estimate-accept';
export const ESTIMATE_DECLINE_PAGE = '/estimate-decline';

export const MAP_LINE_ITEM_TYPES_TO_PROP: { [key: string]: string } = {
  Labor: 'labor',
  Parts: 'parts',
  'Shop Supplies': 'shopSupplies',
  Fees: 'fees',
  Sublet: 'sublet',
  Freight: 'freight',
  Towing: 'towing',
  Travel: 'travel'
};

export const StateList: SelectOptionsProps[] = [
  { id: 0, label: 'State', value: 'State', disabled: true },
  { id: 1, label: 'AL', value: 'AL', disabled: false },
  { id: 2, label: 'AK', value: 'AK', disabled: false },
  { id: 3, label: 'AZ', value: 'AZ', disabled: false },
  { id: 4, label: 'AR', value: 'AR', disabled: false },
  { id: 5, label: 'CA', value: 'CA', disabled: false },
  { id: 6, label: 'CO', value: 'CO', disabled: false },
  { id: 7, label: 'CT', value: 'CT', disabled: false },
  { id: 8, label: 'DE', value: 'DE', disabled: false },
  { id: 9, label: 'DC', value: 'DC', disabled: false },
  { id: 10, label: 'FL', value: 'FL', disabled: false },
  { id: 11, label: 'GA', value: 'GA', disabled: false },
  { id: 12, label: 'HI', value: 'HI', disabled: false },
  { id: 13, label: 'ID', value: 'ID', disabled: false },
  { id: 14, label: 'IL', value: 'IL', disabled: false },
  { id: 15, label: 'IN', value: 'IN', disabled: false },
  { id: 16, label: 'IA', value: 'IA', disabled: false },
  { id: 17, label: 'KS', value: 'KS', disabled: false },
  { id: 18, label: 'KY', value: 'KY', disabled: false },
  { id: 19, label: 'LA', value: 'LA', disabled: false },
  { id: 20, label: 'ME', value: 'ME', disabled: false },
  { id: 21, label: 'MD', value: 'MD', disabled: false },
  { id: 22, label: 'MA', value: 'MA', disabled: false },
  { id: 23, label: 'MI', value: 'MI', disabled: false },
  { id: 24, label: 'MN', value: 'MN', disabled: false },
  { id: 25, label: 'MS', value: 'MS', disabled: false },
  { id: 26, label: 'MO', value: 'MO', disabled: false },
  { id: 27, label: 'MT', value: 'MT', disabled: false },
  { id: 28, label: 'NE', value: 'NE', disabled: false },
  { id: 29, label: 'NV', value: 'NV', disabled: false },
  { id: 30, label: 'NH', value: 'NH', disabled: false },
  { id: 31, label: 'NJ', value: 'NJ', disabled: false },
  { id: 32, label: 'NM', value: 'NM', disabled: false },
  { id: 33, label: 'NY', value: 'NY', disabled: false },
  { id: 34, label: 'NC', value: 'NC', disabled: false },
  { id: 35, label: 'ND', value: 'ND', disabled: false },
  { id: 36, label: 'OH', value: 'OH', disabled: false },
  { id: 37, label: 'OK', value: 'OK', disabled: false },
  { id: 38, label: 'OR', value: 'OR', disabled: false },
  { id: 39, label: 'PA', value: 'PA', disabled: false },
  { id: 40, label: 'RI', value: 'RI', disabled: false },
  { id: 41, label: 'SC', value: 'SC', disabled: false },
  { id: 42, label: 'SD', value: 'SD', disabled: false },
  { id: 43, label: 'TN', value: 'TN', disabled: false },
  { id: 44, label: 'TX', value: 'TX', disabled: false },
  { id: 45, label: 'UT', value: 'UT', disabled: false },
  { id: 46, label: 'VT', value: 'VT', disabled: false },
  { id: 47, label: 'VA', value: 'VA', disabled: false },
  { id: 48, label: 'WA', value: 'WA', disabled: false },
  { id: 49, label: 'WV', value: 'WV', disabled: false },
  { id: 50, label: 'WI', value: 'WI', disabled: false },
  { id: 51, label: 'WY', value: 'WY', disabled: false }
];
