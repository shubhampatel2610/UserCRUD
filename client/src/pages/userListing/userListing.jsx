import { useForm } from "react-hook-form";
import {
  Header,
  ListingTable,
  MuiButton,
  MuiDeleteModal,
  MuiTextField,
} from "../../components";
import { headerTitles } from "./constant";
import {
  HeaderContainer,
  MainContainer,
  InnerHeaderContainer,
  CustomSearchField,
  CustomSearchButton,
  CustomAvatar,
  CustomViewIcon,
  CustomEditIcon,
  CustomDeleteIcon,
} from "./style";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import useUserListing from "./useUserListing";
import { useState } from "react";

const userListing = () => {
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm();
  const [userId, setUserId] = useState();

  const {
    users,
    fetchLoading,
    csvLoading,
    handleCsvClick,
    handleSearchClick,
    page,
    handleChangePage,
    openDeleteModal,
    setOpenDeleteModal,
    handleSelectedUser,
    handleDeleteUser,
    deleteLoading,
  } = useUserListing();

  const onSubmit = (data) => {
    handleSearchClick(data?.searchText);
  };

  const userData =
    users && users?.data
      ? users?.data?.map((item, index) => ({
          No: index + 1,
          fullName: item?.firstName + " " + item?.lastName,
          email: item?.email,
          gender: item?.gender,
          status: item?.status,
          Logo: <CustomAvatar alt="logo" />,
          actions: [
            {
              view: true,
              label: "View",
              icon: <CustomViewIcon />,
              onClick: () => handleSelectedUser(item?._id, "view"),
            },
            {
              edit: true,
              label: "Edit",
              icon: <CustomEditIcon />,
              onClick: () => handleSelectedUser(item?._id, "edit"),
            },
            {
              delete: true,
              label: "Delete",
              icon: <CustomDeleteIcon />,
              onClick: () => {
                setOpenDeleteModal(true);
                setUserId(item?._id);
              },
            },
          ],
        }))
      : [];

  return (
    <>
      <Header />
      <MainContainer>
        <HeaderContainer>
          <InnerHeaderContainer>
            <CustomSearchField>
              <MuiTextField
                placeholder={"Search Here..."}
                type={"text"}
                name={"searchText"}
                control={control}
              />
              <CustomSearchButton
                size="large"
                type={"submit"}
                label={"Search"}
                onClick={handleSubmit(onSubmit)}
              />
            </CustomSearchField>
          </InnerHeaderContainer>
          <InnerHeaderContainer>
            <MuiButton
              startIcon={<AddIcon />}
              size="large"
              type={"submit"}
              label={"Add User"}
              onClick={() => navigate("/user")}
            />
            <MuiButton
              loadingStatus={csvLoading}
              size="large"
              type={"submit"}
              label={"Export to CSV"}
              onClick={handleCsvClick}
            />
          </InnerHeaderContainer>
        </HeaderContainer>
        {userData.length > 0 && (
          <ListingTable
            header={headerTitles}
            data={userData}
            loadingStatus={fetchLoading}
            onPageChange={handleChangePage}
            page={page}
            count={Math.ceil(users?.totalUsers / 10)}
          />
        )}

        {openDeleteModal && (
          <MuiDeleteModal
            open={openDeleteModal}
            handleClose={() => setOpenDeleteModal(false)}
            deleteEntity={"User"}
            onCancelClick={() => setOpenDeleteModal(false)}
            onDeleteClick={() => {
              handleDeleteUser(userId);
            }}
            deleteLoadingStatus={deleteLoading}
          />
        )}
      </MainContainer>
    </>
  );
};

export default userListing;
