//now want to make dynamic so need to pass the text as a prop

import type { ReactNode } from "react";

//use an interface
interface Props {
  children: ReactNode;
}

const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
