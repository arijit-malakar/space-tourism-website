import "../styles/button.css";

interface ButtonProps {
  type: "main" | "tab" | "dot" | "carousel2";
  active?: boolean;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ type, active, children }) => {
  let classNames = "btn ";
  switch (type) {
    case "main":
      classNames += "btn-round btn-main";
      break;
    case "tab":
      classNames += "btn-tab nav-text";
      break;
    case "dot":
      classNames += "btn-dot";
      break;
    case "carousel2":
      classNames += "btn-round btn-carousel2";
      break;
  }

  return (
    <button className={`${classNames}${active ? " active" : ""}`}>
      {children && children}
    </button>
  );
};

export default Button;