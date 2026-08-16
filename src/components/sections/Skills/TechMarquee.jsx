import {
  SiBootstrap,
  SiCss,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNpm,
  SiReact,
  SiRedux,
  SiTailwindcss,
} from 'react-icons/si';
import { techStack } from '../../../config/content';
import styles from './Skills.module.css';

const ICONS = {
  react: SiReact,
  nextjs: SiNextdotjs,
  redux: SiRedux,
  bootstrap: SiBootstrap,
  tailwind: SiTailwindcss,
  npm: SiNpm,
  github: SiGithub,
  html5: SiHtml5,
  css3: SiCss,
  javascript: SiJavascript,
};

function TechItem({ tech }) {
  const Icon = ICONS[tech.icon];
  return (
    <div className={styles.techItem}>
      {Icon && <Icon size={22} />}
      <span>{tech.name}</span>
    </div>
  );
}

/** Seamless infinite marquee — the track is duplicated once and scrolled via CSS keyframes. */
export default function TechMarquee() {
  return (
    <div className={styles.marquee}>
      <div className={styles.track}>
        {[...techStack, ...techStack].map((tech, index) => (
          <TechItem key={`${tech.name}-${index}`} tech={tech} />
        ))}
      </div>
    </div>
  );
}
