import { StateList } from 'src/constants';
export const TermsList = [
  {
    title: 'Payment Terms (select this on your Company Profile)',
    listItem: [
      'Net 60 terms with 3% short pay.',
      'Net 30 terms with 6% short pay.'
    ]
  },
  {
    title: 'Payment Concerns',
    listItem: [
      'A valid purchase order number is required at the time of purchase or service of any type. If this purchase order number does not appear on your invoices, it could result in a delay in payment.',
      'The date of service.',
      'A valid VIN number is required on the invoice.',
      'The current mileage at the time of repair is required on the invoice.',
      'A complaint, cause and correction on each invoice.',
      'We are tax exempt in many cases. Please let me know what state our purchases will be made in, and I can provide the appropriate resale certificate for your records',
      `Should you have any other questions or concerns or need payment updates, please contact AP at <a class='mail-color' href="mailto:ap@ameritfleet.com">ap@ameritfleet.com</a>`
    ]
  }
];

export const CheckboxList = {
  general: [
    'Welding',
    'Mobile Welding',
    'Jump Start',
    'Lockout',
    'Fuel Fill Up',
    'Vehicle Storage',
    'Preservative Maintenance',
    'Dot Inspections',
    'State Inspections',
    'Truck/Trailer Wash',
    'Forklift Repair',
    'GPS Install and Repair',
    'Boom Repair',
    'Bus Repair',
    'Generator Repair',
    'Alignments',
    'Emissions Testing',
    'Computer Diagnostics',
    'Reefer Repair',
    'Liftgate Repair'
  ],
  tire: [
    'Flat Repair',
    'New Tires',
    'Roadside Service',
    'Goodyear',
    'Michelin',
    'Cooper',
    'Bridgestone',
    'Firestone',
    'Yokohama',
    'Continental',
    'Bandag'
  ],
  towing: ['Light Duty', 'Medium Duty', 'Heavy Duty', 'Winch Out'],
  parts: [
    'Light Duty',
    'Heavy Duty',
    'Trailer',
    'Material Handling',
    'Yard Switcher'
  ]
};

export const TitleList = [
  {
    title: 'ACH Form',
    document: 'Uploading...',
    name: 'please wait'
  },
  {
    title: 'Certificate of Insurance',
    document: 'Drag & Drop or Choose file to upload',
    name: 'Jpg, Png, Pdf or Doc'
  },
  {
    title: 'Workers’ Compensation',
    document: 'Drag & Drop or Choose file to upload',
    name: 'Jpg, Png, Pdf or Doc'
  },
  {
    title: 'Inspector Qualifications 396.19',
    document: 'Drag & Drop or Choose file to upload',
    name: 'Jpg, Png, Pdf or Doc'
  },
  {
    title: 'Brake Inspector Qualifications 396.25',
    document: 'Drag & Drop or Choose file to upload',
    name: 'Jpg, Png, Pdf or Doc'
  }
];

export const InputList = [
  {
    id: 1,
    label: 'Shop Name',
    name: 'shopName',
    grid: 8
  },
  {
    id: 2,
    label: 'Phone',
    grid: 4,
    name: 'phone'
  },
  {
    id: 3,
    label: 'Address',
    grid: 12,
    name: 'address1'
  },
  {
    id: 4,
    label: 'Address',
    grid: 12,
    name: 'address2'
  },
  {
    id: 5,
    label: 'City',
    grid: 4,
    name: 'city'
  },
  {
    id: 6,
    type: [
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
    ],
    grid: 4,
    name: 'state',
    label: 'state'
  },
  {
    id: 7,
    label: 'Zip',
    grid: 4,
    name: 'zip'
  }
];

export const CheckList = {
  dayOfWeek: [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ]
};
export const Rates = {
  services: [
    'Emergency Road Services',
    'Mobile Services',
    'Mechanical Shop',
    'Emergency Road Services',
    'Mobile Services'
  ]
};

export const Contact = [
  {
    id: 1,
    name: 'principleName',
    placeholder: 'Name',
    grid: 6
  },
  {
    id: 2,
    name: 'principleTitle',
    placeholder: 'Name',
    grid: 6
  },
  {
    id: 3,
    name: 'principleTitle',
    placeholder: 'principleTitle',
    grid: 6
  }
];
