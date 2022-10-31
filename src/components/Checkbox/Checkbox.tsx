import classNames from 'classnames';
import { ChangeEvent } from 'react';
import './Checkbox.css';

function Checkbox({
  className,
  checked,
  onChange,
}: {
  className: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <label className={classNames('checkbox', className)}>
      <input
        type="checkbox"
        className="checkbox__system-checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span className="checkbox__custom-checkbox"></span>
    </label>
  );
}

export default Checkbox;
