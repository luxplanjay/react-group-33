import { PageContainer } from 'components/PageContainer/PageContainer';
import { Button } from 'components/Button/Button';
import { PalettePicker } from 'components/PalettePicker/PalettePicker';
import { FaAddressBook } from 'react-icons/fa';

export const Example2 = () => {
  return (
    <PageContainer>
      <Button icon={FaAddressBook}>Super button</Button>
      <PalettePicker />
    </PageContainer>
  );
};
