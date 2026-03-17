import React from 'react';

export const scrollToSection = (id: string, offset: number = 80) => {
  const element = document.getElementById(id);
  if (element) {
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

export const scrollToTop = (e?: React.MouseEvent | React.KeyboardEvent) => {
  if (e) e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
