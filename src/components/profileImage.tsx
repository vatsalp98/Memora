import Image from "next/image";
import { CgProfile } from "react-icons/cg";

type ProfileImageProps = {
  src?: string | null;
  className?: string;
};

export default function ProfileImage({
  src,
  className = "",
}: ProfileImageProps) {
  return (
    <div
      className={`relative h-12 w-12 overflow-hidden rounded-full ${className}`}
    >
      {src == null ? (
        <CgProfile className="h-12 w-12 text-light dark:text-dark" />
      ) : (
        <Image src={src} alt="profile Image" quality={100} fill />
      )}
    </div>
  );
}
