import { CustomButton, StyledLoader } from "./styles";

const MuiButton = ({
  label,
  onClick,
  variant,
  startIcon,
  className,
  loadingStatus,
  type,
}) => {
  return (
    <CustomButton
      onClick={onClick}
      disabled={loadingStatus}
      variant={variant}
      startIcon={startIcon}
      size="large"
      className={className}
      type={type}
    >
      {loadingStatus ? <StyledLoader /> : label}
    </CustomButton>
  );
};

export default MuiButton;
