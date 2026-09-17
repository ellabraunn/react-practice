//now want to make dynamic so need to pass the text as a prop
//use an interface
interface Props {
  text: string;
}

const Alert = ({ text }: Props) => {
  return <div className="alert alert-primary">{text}</div>;
};

export default Alert;
