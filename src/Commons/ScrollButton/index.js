import { useState } from "react";
import { KeyboardArrowUp } from "@mui/icons-material";

import style from "./style.module.scss";

export const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setVisible(true);
    } else if (scrolled <= 100) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisibility);

  return (
    <div
      className={style.scrollButtonContainer}
      onClick={scrollToTop}
      style={{ display: visible ? "flex" : "none" }}
      aria-label={`Scroll To Top Button`}
      data-testid={'scrollButtonContainer'}
    >
      <KeyboardArrowUp className={style.arrowUpIcon} />
    </div>
  );
};
