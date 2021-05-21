import { Tooltip } from './Tooltip';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  disabled?: boolean;
  keyboardShortcut?: string;
}

export const Button = ({
  loading,
  disabled,
  keyboardShortcut,
  ...props
}: IButtonProps) => {
  const className = `btn ${props.className} ${loading ? 'btn-loading' : ''} ${
    disabled ? 'btn-disabled' : ''
  }`;

  return (
    <Tooltip
      HoverItem={<kbd className="key">{keyboardShortcut}</kbd>}
      enabled={Boolean(keyboardShortcut) && !disabled}
    >
      <button {...props} className={className} disabled={loading || disabled} />
    </Tooltip>
  );
};
