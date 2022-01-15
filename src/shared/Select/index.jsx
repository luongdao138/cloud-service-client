import { useField } from 'formik';
import { Container } from './Select.styles';
import { IoIosArrowDown } from 'react-icons/io';

import Select, { components } from 'react-select';

const styles = {
  control: () => ({
    height: '36px',
  }),
};

const Placeholder = (props) => <components.Placeholder {...props} />;

const DropdownIndicator = (props) => (
  <components.Placeholder {...props}>
    <IoIosArrowDown />
  </components.Placeholder>
);

const CustomSelect = ({ name, label, options, onChangeCb, ...props }) => {
  const [field, meta, helpers] = useField(name);
  return (
    <Container>
      <label className='label' htmlFor={props.id || name}>
        {label}
      </label>
      <Select
        {...field}
        {...props}
        components={{ Placeholder, DropdownIndicator }}
        options={options}
        defaultInputValue=''
        className='select-container'
        classNamePrefix='select'
        onChange={(e) => {
          field.onChange({ target: { value: e.value, name } });
          typeof onChangeCb === 'function' && onChangeCb({ selected: e.value });
        }}
        styles={styles}
        value={{ value: field.value, label: options.find((o) => o.value === field.value)?.label }}
      />
    </Container>
  );
};

export default CustomSelect;
