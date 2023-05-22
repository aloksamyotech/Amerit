import { Session } from 'next-auth/core/types';
import { VendorRepairOrder } from '@components/common/vendor-repair-order/types';

export const MOCK_SESSION: Session = {
  expires: '1',
  user: { name: 'Test User' },
  accessToken: {
    expires: '',
    user: {
      name: 'Test User'
    }
  }
};

export const MOCK_VENDOR_REPAIR_ORDERS: VendorRepairOrder[] = [
  {
    id: '1',
    priority: 'ultricies',
    repairOrderNumber: '1',
    vendor: {
      orderNumber: '1',
      name: 'Volkman-Batz',
      address: {
        line: '3 Northwestern Drive',
        city: 'Huntington',
        state: 'West Virginia',
        zip: '25705'
      }
    },
    unit: {
      id: '1',
      vin: 'SALFP2BN7AH309602',
      year: 2007,
      make: 'Lincoln',
      model: 'MKZ',
      due: '01/31/2023'
    },
    shop: {
      name: 'Ortiz-Yundt',
      address: {
        line: '12 Lukken Trail',
        city: 'Pueblo',
        state: 'Colorado',
        zip: '81010'
      }
    },
    estimateDue: '02/02/2023',
    responseDue: '04/22/2022',
    vendorWorkOrderNumber: '1234',
    status: 'nam',
    shopAvailable: '',
    purchaseOrderNumber: '',
    workInvoiceNumber: '',
    contact: '',
    odo: ''
  },
  {
    id: '2',
    priority: 'penatibus',
    repairOrderNumber: '2',
    vendor: {
      orderNumber: '2',
      name: 'Kessler, Schowalter and Gutmann',
      address: {
        line: '39726 Summit Crossing',
        city: 'Oklahoma City',
        state: 'Oklahoma',
        zip: '73147'
      }
    },
    unit: {
      id: '2',
      vin: 'WP0AA2A83FK371507',
      year: 2007,
      make: 'Pontiac',
      model: 'Vibe',
      due: '02/13/2023'
    },
    shop: {
      name: 'Treutel-Marks',
      address: {
        line: '71 Rusk Terrace',
        city: 'Shreveport',
        state: 'Louisiana',
        zip: '71151'
      }
    },
    estimateDue: '05/23/2022',
    responseDue: '09/05/2022',
    vendorWorkOrderNumber: '1234',
    status: 'ac',
    shopAvailable: '',
    purchaseOrderNumber: '',
    workInvoiceNumber: '',
    contact: '',
    odo: ''
  },
  {
    id: '3',
    priority: 'congue',
    repairOrderNumber: '3',
    vendor: {
      orderNumber: '3',
      name: 'Johnson Inc',
      address: {
        line: '516 Waubesa Way',
        city: 'Atlanta',
        state: 'Georgia',
        zip: '30323'
      }
    },
    unit: {
      id: '3',
      vin: '1GYS3JEF5DR408685',
      year: 2005,
      make: 'BMW',
      model: 'X5',
      due: '09/14/2022'
    },
    shop: {
      name: 'Ferry, Rau and Schmitt',
      address: {
        line: '73932 Sutherland Court',
        city: 'Washington',
        state: 'District of Columbia',
        zip: '20525'
      }
    },
    estimateDue: '06/07/2022',
    responseDue: '12/23/2022',
    vendorWorkOrderNumber: '1234',
    status: 'interdum',
    shopAvailable: '',
    purchaseOrderNumber: '',
    workInvoiceNumber: '',
    contact: '',
    odo: ''
  },
  {
    id: '4',
    priority: 'duis',
    repairOrderNumber: '4',
    vendor: {
      orderNumber: '4',
      name: 'Cormier LLC',
      address: {
        line: '29 Anniversary Place',
        city: 'Tampa',
        state: 'Florida',
        zip: '33615'
      }
    },
    unit: {
      id: '4',
      vin: '1G4GE5G39FF704048',
      year: 1984,
      make: 'Lotus',
      model: 'Esprit Turbo',
      due: '12/11/2022'
    },
    shop: {
      name: 'McLaughlin-Macejkovic',
      address: {
        line: '508 Monica Alley',
        city: 'Richmond',
        state: 'Virginia',
        zip: '23260'
      }
    },
    estimateDue: '01/26/2023',
    responseDue: '01/09/2023',
    vendorWorkOrderNumber: '1234',
    status: 'amet',
    shopAvailable: '',
    purchaseOrderNumber: '',
    workInvoiceNumber: '',
    contact: '',
    odo: ''
  },
  {
    id: '5',
    priority: 'augue',
    repairOrderNumber: '5',
    vendor: {
      orderNumber: '5',
      name: 'Daniel, Doyle and Wunsch',
      address: {
        line: '462 Del Mar Junction',
        city: 'Norcross',
        state: 'Georgia',
        zip: '30092'
      }
    },
    unit: {
      id: '5',
      vin: 'WAUPL68E75A620092',
      year: 2003,
      make: 'Ford',
      model: 'Crown Victoria',
      due: '04/28/2022'
    },
    shop: {
      name: 'Watsica-Swift',
      address: {
        line: '070 Veith Avenue',
        city: 'Washington',
        state: 'District of Columbia',
        zip: '20540'
      }
    },
    estimateDue: '09/19/2022',
    responseDue: '08/06/2022',
    vendorWorkOrderNumber: '1234',
    status: 'nullam',
    shopAvailable: '',
    purchaseOrderNumber: '',
    workInvoiceNumber: '',
    contact: '',
    odo: ''
  }
];
