import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdHome, MdMailOutline } from "react-icons/md";
import { IoGlobeSharp } from "react-icons/io5";
import { IconBaseProps } from "react-icons";

export type IconProps = IconBaseProps;

export const Icons = {
  globe: (props: IconProps) => <IoGlobeSharp {...props} />,
  home: (props: IconProps) => <MdHome {...props} />,
  email: (props: IconProps) => <MdMailOutline {...props} />,
  linkedin: (props: IconProps) => <FaLinkedin {...props} />,
  github: (props: IconProps) => <FaGithub {...props} />,
};
