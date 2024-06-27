import {
  Dropdown as NextDropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/dropdown';
import { Button } from '@nextui-org/button';
// import { Tooltip } from '@nextui-org/tooltip';

export default function Dropdown() {
  return (
    <NextDropdown backdrop='opaque'>
      <DropdownTrigger>
        <Button variant='bordered' className='bg-rose-500'>
          <img
            className='w-[25px] h-auto mr-2'
            src='/images/www.png'
            alt='my logo'
          />
          <p className='font-bold text-inherit text-white'>Fouz</p>
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label='Static Actions'>
        <DropdownItem key='devto' href='https://dev.to/gfouz'>
          Developers Community
        </DropdownItem>
        <DropdownItem key='copy' href='https://github.com/gfouz'>
          My projects on Github
        </DropdownItem>
        <DropdownItem
          key='edit'
          href='https://www.linkedin.com/in/giovani-fouz-373210258/'
        >
          LinkedIn
        </DropdownItem>
        <DropdownItem key='delete' className='text-danger' color='danger'>
          LinkedIn
        </DropdownItem>
      </DropdownMenu>
    </NextDropdown>
  );
}
