import React, { memo } from 'react';
import { ButtonElement } from './styles';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  secondary?: boolean;
  onClick?: () => void;
}

export const Button = memo(({ onClick, label, ...props }: Props) => {
  return (
    <ButtonElement
      onClick={onClick}
      type="button"
      data-testid="button"
      {...props}
    >
      {label}
    </ButtonElement>
  );
});
