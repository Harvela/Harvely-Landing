'use client';

import React, { useState } from 'react';
import ReactSelect from 'react-select/creatable';

export type DropdownOption = {
  label: string;
  value: string;
};

export type DropDownProps = {
  items: Array<DropdownOption>;
  onSelect: (item: string) => void;
  selectedItem?: string;
  placeholder?: string;
  label?: string;
  labelStyle?: any;
  inputStyle?: any;
  containerStyle?: any;
  creatable?: boolean;
};

export const Select: React.FC<DropDownProps> = (props) => {
  const [newOptions, setNewOptions] = React.useState<any[]>([]);
  const ref = React.useRef<any>(null);
  const [selectedOption, setSelectedOption] = React.useState<any>();
  const [inputValue, setInputValue] = useState<string>();
  return (
    <ReactSelect
      onChange={(e) => {
        // @ts-ignore
        props.onSelect(e.value);
        setSelectedOption(e);
      }}
      value={selectedOption}
      ref={ref}
      // styles={{
      //   control: (base: any) => ({
      //     ...base,
      //     borderRadius: 5,
      //     borderColor: '#000',
      //   }),
      //   container: (base: any) => ({
      //     ...base,
      //     borderRadius: 5,
      //     borderColor: '#000',
      //   }),
      // }}
      unstyled
      placeholder={`ex: ${props.placeholder}`}
      options={[...props.items, ...newOptions]}
      className={`rounded-[5px] ${props.containerStyle}`}
      defaultValue={props.items.find(
        (item) => item.value === props.selectedItem,
      )}
      onCreateOption={(e) => {
        if (
          props.items.find(
            (item) => item.label.toLowerCase() !== e.toLowerCase(),
          )
        ) {
          setNewOptions([...newOptions, { label: e, value: e }]);
          // @ts-ignore
          props.onSelect(e);
          setSelectedOption({ label: e, value: e });
        }
      }}
      onInputChange={(e, { action }) => {
        if (action === 'input-change') {
          setInputValue(e);
        }

        if (action === 'input-blur') {
          if (inputValue) {
            setNewOptions([...newOptions, { label: inputValue, value: e }]);
            // @ts-ignore
            props.onSelect(inputValue);
            setSelectedOption({ label: inputValue, value: e });
          }
        }
      }}
      blurInputOnSelect={true}
      formatCreateLabel={(userInput) => `Selectionner: ${userInput}`}
    />
  );
};
