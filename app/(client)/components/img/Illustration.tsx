import Image from 'next/image';
import IllustrationImg from 'public/illustration.svg';

export function Illustration() {
  return (
    <Image src={IllustrationImg} alt="illustration left up" priority width={490} height={577} className="img-pic" />
  );
}
