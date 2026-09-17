interface Props {
  children: string;
  color?: string;
  //? makes the prop optional so default val works
  onClick: () => void;
}
//add default value to button color so don't have to set it every time unless want to change it
const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
