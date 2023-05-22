import { useContext, useEffect, useState } from 'react';
import { JobSectionsContext } from '@components/vendor-repair-order/providers';
import { JobSectionsContextProvider } from '@components/estimate/job-section/types';
import { MAP_LINE_ITEM_TYPES_TO_PROP } from 'src/constants';
import { Summary } from './types';

const useSummaries = () => {
  const summaryInit: Summary = {
    labor: 0,
    parts: 0,
    shopSupplies: 0,
    fees: 0,
    sublet: 0,
    freight: 0,
    towing: 0,
    travel: 0,
    taxes: 0,
    sectionTotal: 0
  };

  const [summary, setSummary] = useState<Summary>({ ...summaryInit });

  const jobSectionsData: JobSectionsContextProvider =
    useContext(JobSectionsContext);

  const summariseLineItems = () => {
    const tempSummary = { ...summaryInit };
    jobSectionsData?.jobSections?.map((jobSection) => {
      if (jobSection?.lines) {
        // TODO: Add correct type on lineItem, currently one doesn't exist
        jobSection.lines.forEach((lineItem: any) => {
          const lineItemType = lineItem.jobType;
          const propName = MAP_LINE_ITEM_TYPES_TO_PROP[
            lineItemType
          ] as keyof Summary;
          if (propName) {
            tempSummary[propName] += lineItem.total;
            tempSummary.sectionTotal += lineItem.total;
          }
        });
      }
    });
    setSummary(tempSummary);
  };

  useEffect(() => {
    summariseLineItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jobSectionsData]);

  // TODO: Add same logic for actuals

  return { summary, summaryInit };
};

export default useSummaries;
