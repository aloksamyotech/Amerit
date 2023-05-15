import Image from 'next/image';
import { LogoProps } from './types';

const Logo = (props: LogoProps) => (
  <Image
    {...props}
    alt='Amerit Fleet Services logo'
    src='https://marvel-b1-cdn.bc0a.com/f00000000249952/www.ameritfleetsolutions.com/wp-content/themes/unified/images/amerit-logo_4c.png'
  />
);

export default Logo;
