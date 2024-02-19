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
} from "./style";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import useUserListing from "./useUserListing";
import { useEffect } from "react";

const userListing = () => {
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm();

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
  } = useUserListing();

  const onSubmit = (data) => {
    handleSearchClick(data?.searchText);
  };

  // const userData = users?.data.map((item, index) => ({
  //   No: index + 1,
  //   fullName: item?.firstName+" "+item?.lastName,
  //   email: item?.email,
  //   gender: item?.gender,
  //   status: item?.status,
  //   Logo: <CustomAvatar alt="logo" />,
  //   actions: [
  //     {
  //       view: true,
  //       onViewClick: () => console.log("View click"),
  //     },
  //     {
  //       edit: true,
  //       onEditClick: () => console.log("Edit click"),
  //     },
  //     {
  //       delete: true,
  //       onDeleteClick: () => console.log("Delete click"),
  //     },
  //   ],
  // }))

  const userData = [
    {
      no: 1,
      fullName: "Demo",
      email: "demo@gmail.com",
      gender: "Male",
      status: "Active",
      Logo: <CustomAvatar alt="logo" src={""} />,
      actions: [
        {
          view: true,
          onViewClick: () => console.log("View click"),
        },
        {
          edit: true,
          onEditClick: () => console.log("Edit click"),
        },
        {
          delete: true,
          onDeleteClick: () => {console.log("delete click")},
        },
      ],
    },
  ];
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
        <ListingTable
          header={headerTitles}
          data={userData}
          loadingStatus={fetchLoading}
          onPageChange={handleChangePage}
          page={page}
          count={Math.ceil(userData.length / 10)}
        />

        {openDeleteModal && <MuiDeleteModal
          open={openDeleteModal}
          handleClose={() => setOpenDeleteModal(false)}
          deleteEntity={"User"}
          onCancelClick={() => setOpenDeleteModal(false)}
          onDeleteClick={() => {
            // handleDeleteTariff(tariffId);
          }}
          // deleteLoadingStatus={deleteLoadingStatus}
        />}
      </MainContainer>
    </>
  );
};

export default userListing;
