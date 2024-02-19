import { Box } from "@mui/material";
import { useRef, useState } from "react";
import { cloneElement } from "react";
import { CustomPopover, MainIconButton } from "./styles";

const MuiPopover = ({
  children,
  Icon,
  className,
  closeOnItemClick,
  isHover = true,
  customTransformOrigin,
}) => {
  const [openedPopover, setOpenedPopover] = useState(false);
  const popoverAnchor = useRef(null);

  const popoverEnter = () => {
    setOpenedPopover(true);
  };

  const popoverLeave = () => {
    setOpenedPopover(false);
  };

  const handleClick = () => {
    if (closeOnItemClick) {
      popoverLeave();
    }
  };

  return (
    <Box
      ref={popoverAnchor}
      aria-owns="mouse-over-popover"
      aria-haspopup="true"
      onMouseLeave={popoverLeave}
      onClick={closeOnItemClick && popoverEnter}
      onMouseEnter={!closeOnItemClick && popoverEnter}
    >
      <MainIconButton isShadow={closeOnItemClick}>{Icon}</MainIconButton>
      <CustomPopover
        className={className}
        id="mouse-over-popover"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={
          customTransformOrigin
            ? customTransformOrigin
            : {
                vertical: "center",
                horizontal: "right",
              }
        }
        open={openedPopover}
        anchorEl={popoverAnchor.current}
        PaperProps={{ onMouseEnter: popoverEnter, onMouseLeave: popoverLeave }}
      >
        {isHover ? (
          <>
            <div>{cloneElement(children, { onClick: handleClick })}</div>
          </>
        ) : (
          <>{cloneElement(children, { onClick: handleClick })}</>
        )}
      </CustomPopover>
    </Box>
  );
};

export default MuiPopover;
