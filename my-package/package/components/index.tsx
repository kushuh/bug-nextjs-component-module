import Image from "next/image";
import Link from "next/link";
import {ComponentProps, FC} from "react";

export interface ImageLinkProps {
  src:  ComponentProps<typeof Image>["src"];
  alt: string;
  href: string;
}

export const ImageLink: FC<ImageLinkProps> = ({ src, alt, href }) => (
  <Link href={href}>
    <Image src={src} alt={alt}/>
  </Link>
);
