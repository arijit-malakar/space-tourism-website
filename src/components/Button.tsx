interface ButtonProps {
  type: "main" | "tab" | "dot" | "carousel2" | "hamburger";
  active?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ type, active, children, onClick }) => {
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
    case "hamburger":
      classNames += "btn-hamburger";
      break;
  }

  return (
    <button
      className={`${classNames}${active ? " active" : ""}`}
      onClick={onClick}
    >
      {children && children}
    </button>
  );
};

export default Button;
