import React, { memo } from 'react';
import {
  Container,
  Details,
  FieldSet,
  Input,
  Label,
  Legend,
  Options,
  Summary,
  Title,
} from './styles';

export interface DropdownOption {
  title: string;
  key: string | number;
}

interface Props {
  label: string;
  options: DropdownOption[];
  setOptionSelected: React.Dispatch<React.SetStateAction<DropdownOption>>;
  optionSelectedState: DropdownOption;
}

export const Dropdown = memo(
  ({ label, options, optionSelectedState, setOptionSelected }: Props) => {
    const ref = React.useRef<HTMLDetailsElement>(null);

    const handleClick = (optionsSelected: DropdownOption) => {
      setOptionSelected(optionsSelected);
      closeSummary();
    };

    const closeSummary = () => {
      ref.current?.removeAttribute('open');
    };

    return (
      <Container data-testid="dropdown">
        <FieldSet>
          <Legend>{optionSelectedState?.title ?? label}</Legend>
          <Details ref={ref} role="details">
            <Summary>{optionSelectedState?.title ?? label}</Summary>
            <Options>
              {options.map((item, index) => {
                return (
                  <Label key={`${item.key}${item.title}`}>
                    <Input
                      defaultChecked={item.key === optionSelectedState?.key}
                      onClick={() => handleClick(item)}
                      type="radio"
                      name="radio"
                    />
                    <Title>{item.title}</Title>
                  </Label>
                );
              })}
            </Options>
          </Details>
        </FieldSet>
      </Container>
    );
  },
);
