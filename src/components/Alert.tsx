//now want to make dynamic so need to pass the text as a prop
//use an interface
interface Props {
  children: string;
}

const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
