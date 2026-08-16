import { FaLinkedin } from 'react-icons/fa';
import { SiGithub, SiInstagram, SiWhatsapp } from 'react-icons/si';

const ICONS = {
  github: SiGithub,
  linkedin: FaLinkedin,
  instagram: SiInstagram,
  whatsapp: SiWhatsapp,
};

export default function SocialIcon({ name, size = 18 }) {
  const Icon = ICONS[name];
  if (!Icon) return null;
  return <Icon size={size} />;
}
