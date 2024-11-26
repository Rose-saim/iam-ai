import React from 'react';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'light' | 'dark';
}

export default function Logo({ size = 'medium', variant = 'dark' }: LogoProps) {
  const sizeClasses = {
    small: 'h-8',
    medium: 'h-10',
    large: 'h-12',
  };

  return (
    <div className="flex items-center">
      <img
        src={`${process.env.PUBLIC_URL || ''}/images/logo.jpg`}
        alt="I AM AI"
        className={`${sizeClasses[size]} ${variant === 'light' ? '' : ''}`}
      />
    </div>
  );
}
