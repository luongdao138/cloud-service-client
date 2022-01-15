import { useField } from 'formik';
import { Container } from './Textarea.styles';

const Textarea = ({ name, label, haveTooltip = false, toolTipContent = null, ...props }) => {
  const [field, meta] = useField(name);

  return (
    <Container error={meta.error}>
      <label htmlFor={props.id || name}>{label}</label>
      <div className='control-container'>
        <textarea {...field} {...props} />
        {haveTooltip && <div className='tooltip-container'>{toolTipContent}</div>}
      </div>
    </Container>
  );
};

export default Textarea;
