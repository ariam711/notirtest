import Image from 'next/image';
import LooperLeftUpImg from 'public/looper-lu.svg';

export function LooperLeftUp() {
  return <Image src={LooperLeftUpImg} alt="illustration" priority width={490} height={577} className="img-lu" />;
}
