import React from 'react';
import './RegisterButton.css';

type RegisterButtonProps = {
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  className?: string;
  label?: string;
  size?: 'sm' | 'md';
  target?: string;
  rel?: string;
};

/**
 * Animated register CTA — layered hover wipe adapted to ABS turquoise palette.
 */
const RegisterButton: React.FC<RegisterButtonProps> = ({
  href = '#register',
  onClick,
  className = '',
  label = 'Register →',
  size = 'sm',
  target,
  rel,
}) => {
  return (
    <a
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
      className={`abs-reg-btn abs-reg-btn--${size} ${className}`.trim()}
    >
      <span className="abs-reg-btn__bg" aria-hidden>
        <span className="abs-reg-btn__layers">
          <span className="abs-reg-btn__layer abs-reg-btn__layer--1" />
          <span className="abs-reg-btn__layer abs-reg-btn__layer--2" />
          <span className="abs-reg-btn__layer abs-reg-btn__layer--3" />
        </span>
      </span>
      <span className="abs-reg-btn__inner">
        <span className="abs-reg-btn__static">{label}</span>
        <span className="abs-reg-btn__hover">{label}</span>
      </span>
    </a>
  );
};

export default RegisterButton;
