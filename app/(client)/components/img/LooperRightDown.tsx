import Image from 'next/image';
import LooperRightDownImg from 'public/looper-rd.svg';

export function LooperRightDown() {
  return (
    <Image
      src={LooperRightDownImg}
      alt="illustration right down"
      priority
      width={318}
      height={221}
      className="img-rd"
    />
  );
}
