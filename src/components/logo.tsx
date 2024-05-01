import Image from 'next/image';
import Link from 'next/link';
function Logo() {
  return (
    <Link className="" href="/">
      <div>
        <Image src="/logo.svg" width={90} height={24} layout="responsive" alt="" />
      </div>
    </Link>
  );
}

export default Logo;
