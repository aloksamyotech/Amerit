import { useState, useEffect } from 'react';
import { LineItemTypes } from './types';

const useJobSection = (
  jobSectionType?: string,
  totalUpdate?: (total: number) => void
) => {
  const [sectionTotal, setSectionTotal] = useState(0);
  const [labor, setLabor] = useState(0);
  const [sublet, setSublet] = useState(0);
  const [freight, setFreight] = useState(0);
  const [towing, setTowing] = useState(0);
  const [travel, setTravel] = useState(0);
  const [fees, setFees] = useState(0);
  const [parts, setParts] = useState(0);
  const [shopSupplies, setShopSupplies] = useState(0);

  useEffect(() => {
    setSectionTotal(
      Number(labor) +
        Number(sublet) +
        Number(freight) +
        Number(towing) +
        Number(travel) +
        Number(fees) +
        Number(parts) +
        Number(shopSupplies)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [labor, sublet, freight, towing, travel, fees, parts, shopSupplies]);

  if (totalUpdate != null) {
    totalUpdate(sectionTotal);
  }

  // Specify which line item types should be available based on the
  // job section type, this also determines which summary fields appear
  // as disabled
  const lineItemTypes: LineItemTypes = {
    Job: ['Labor', 'Parts', 'Shop Supplies', 'Fees', 'Sublet', 'Freight'],
    Towing: ['Towing'],
    Travel: ['Travel']
  };

  // If no type is specified, we just want to use all line item types
  const availableLineItemTypes =
    jobSectionType != null
      ? lineItemTypes[jobSectionType]
      : lineItemTypes.Job.concat(lineItemTypes.Towing, lineItemTypes.Travel);

  return {
    availableLineItemTypes,
    sectionTotal,
    labor,
    setLabor,
    sublet,
    setSublet,
    freight,
    setFreight,
    towing,
    setTowing,
    travel,
    setTravel,
    fees,
    setFees,
    parts,
    setParts,
    shopSupplies,
    setShopSupplies
  };
};

export default useJobSection;
