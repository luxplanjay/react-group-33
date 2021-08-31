import { MenuItem } from './DropdownMenu.styled';

export const DropdownMenuItem = ({ onSelect, children }) => {
  return <MenuItem onSelect={onSelect}>{children}</MenuItem>;
};
