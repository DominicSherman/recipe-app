interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  disabled?: boolean;
}

export const Button = ({ loading, disabled, ...props }: IButtonProps) => {
  const className = `${props.className} ${loading ? 'btn-loading' : ''} ${
    disabled ? 'btn-disabled' : ''
  }`;

  return (
    <button {...props} className={className} disabled={loading || disabled} />
  );
};
