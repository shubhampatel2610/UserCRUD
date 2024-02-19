import { Modal } from "@mui/material";
import {
  CancelButton,
  CustomTypo,
  DeleteButton,
  DeleteButtonBoxContainer,
  DeleteModalContainer,
} from "./styles";

const MuiDeleteModal = ({
  open,
  handleClose,
  className,
  deleteEntity,
  onCancelClick,
  onDeleteClick,
  deleteLoadingStatus,
}) => {
  return (
    <Modal open={open} onClose={handleClose} className={className}>
      <DeleteModalContainer>
        <CustomTypo>{`Are you sure you want to delete ${deleteEntity}?`}</CustomTypo>
        <DeleteButtonBoxContainer>
          <DeleteButton
            onClick={onDeleteClick}
            label={"Delete"}
            loadingStatus={deleteLoadingStatus}
          />
          <CancelButton onClick={onCancelClick} label={"Cancel"} />
        </DeleteButtonBoxContainer>
      </DeleteModalContainer>
    </Modal>
  );
};

export default MuiDeleteModal;
