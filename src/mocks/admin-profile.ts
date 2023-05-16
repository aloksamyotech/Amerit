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
      { id: 0, name: 'State', value: 'State', disabled: true },
      {
        id: 1,
        name: 'STATE1',
        disabled: false
      },
      {
        id: 2,
        name: 'STATE2',
        disabled: false
      },
      {
        id: 3,
        name: 'STATE3',
        disabled: false
      }
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