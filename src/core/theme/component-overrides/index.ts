import { Theme } from '@mui/material/styles';
import Icon from './icon';
import Toolbar from './toolbar';
import DataGrid from './datagrid';
import Select from './select';
import TextField from './textfield';
import Button from './button';
import Accordion from './accordion';

const ComponentOverrides = (theme: Theme) => {
  const icon = Icon();
  const toolbar = Toolbar();
  const datagrid = DataGrid(theme);
  const select = Select();
  const textfield = TextField(theme);
  const button = Button(theme);
  const accordion = Accordion();

  return Object.assign(icon, toolbar, datagrid, select, textfield, button, accordion);
};

export default ComponentOverrides;
