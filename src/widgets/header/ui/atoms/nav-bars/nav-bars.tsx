import "./style.css";
import { SetStateAction } from "react";

type TNavBarsProps = {
  setWidgetActive: React.Dispatch<SetStateAction<boolean>>;
  open: boolean;
};

export const NavBars = ({ setWidgetActive, open }: TNavBarsProps) => {
  const onClickHandler = (e: React.MouseEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setWidgetActive((prev) => !prev);
  };
  return (
    <label
      className="container"
      onClick={onClickHandler}
      style={{ zIndex: 5000 }}
    >
      <input type="checkbox" checked={open} />
      <div className={"checkmark" + `${open ? " active" : ""}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </label>
  );
};
