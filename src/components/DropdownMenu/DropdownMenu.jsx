import { Menu, MenuList } from '@reach/menu-button';
import { MenuButton } from './DropdownMenu.styled';
import '@reach/menu-button/styles.css';

export const DropdownMenu = ({ children }) => {
  return (
    <Menu>
      <MenuButton>
        Actions <span aria-hidden>▾</span>
      </MenuButton>
      <MenuList>{children}</MenuList>
    </Menu>
  );
};
