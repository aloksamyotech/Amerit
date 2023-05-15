import { createContext } from 'react';

export const TableContext = createContext({} as any);

export const VroLinesProvider = ({ children, data }: any) => {
  return <TableContext.Provider value={data}>{children}</TableContext.Provider>;
};
