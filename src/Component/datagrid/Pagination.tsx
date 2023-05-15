import {
  TablePaginationProps,
  Pagination as MuiPagination
} from '@mui/material';
import {
  GridPagination,
  gridPageCountSelector,
  useGridApiContext,
  useGridSelector
} from '@mui/x-data-grid';

const PaginationDef = ({
  page,
  onPageChange,
  className
}: Pick<TablePaginationProps, 'page' | 'onPageChange' | 'className'>) => {
  const apiRef = useGridApiContext();
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <MuiPagination
      color='primary'
      size='small'
      className={className}
      count={pageCount}
      page={page + 1}
      siblingCount={0}
      showFirstButton={true}
      showLastButton={true}
      onChange={(event, newPage) => {
        onPageChange(event as any, newPage - 1);
      }}
    />
  );
};

const Pagination = (props: any) => {
  return <GridPagination ActionsComponent={PaginationDef} {...props} />;
};

export default Pagination;
