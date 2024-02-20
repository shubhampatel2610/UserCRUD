import { useForm } from "react-hook-form";
import {
  MuiAutoComplete,
  MuiButton,
  MuiRadioButton,
} from "../../components";
import {
  CustomAvatar,
  CustomMuiButton,
  CustomMuiTextField,
  FormContainer,
  FormRow,
  HeaderContainer,
  HeaderTypo,
  InputBox,
  MainContainer,
  ValidationMessage,
} from "./style";
import { GenderOptions, StatusOptions } from "./constant";
import { UserIcon } from "../../assets/images";
import { useLocation, useNavigate } from "react-router-dom";
import useUser from "./useUser";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";

const User = () => {
  const navigate = useNavigate();
  const { createLoading, handleCreateUser } = useUser();
  const location = useLocation();
  const selectedUserData = location?.state?.userData ?? {};

  console.log(selectedUserData)

  const userSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Provide valid Email")
      .required("Email is required"),
    mobile: Yup.string()
      .required("Mobile Number is required")
      .matches(/^\d{10}$/, "Mobile number must be exactly 10 digits"),
    gender: Yup.string().required("Gender is required"),
    status: Yup.string().required("Status is required"),
    profile: Yup.string().required("Profile picture is required"),
    location: Yup.string().required("Location is required"),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(userSchema),
    defaultValues: {
      firstName: selectedUserData?.firstName,
      lastName: selectedUserData?.lastName,
      email: selectedUserData?.email,
      mobile: selectedUserData?.mobile,
      gender: selectedUserData?.gender,
      status: selectedUserData?.status,
      profile: selectedUserData?.profile,
      location: selectedUserData?.location,
    },
  });

  useEffect(() => {
    setValue("firstName", selectedUserData?.firstName);
    setValue("lastName", selectedUserData?.lastName);
    setValue("email", selectedUserData?.email);
    setValue("mobile", selectedUserData?.mobile);
    setValue("gender", selectedUserData?.gender);
    setValue("status", selectedUserData?.status);
    setValue("profile", selectedUserData?.profile);
    setValue("location", selectedUserData?.location);
  }, [selectedUserData.length > 0]);

  const onSubmit = (data) => {
    handleCreateUser(data, (selectedUserData.length > 0 ? true : false));
  };

  return (
    <>
      <MainContainer>
        <HeaderContainer>
          <HeaderTypo>{"Register Your Details"}</HeaderTypo>
          <MuiButton label={"Back"} onClick={() => navigate("/")} />
        </HeaderContainer>
        <FormContainer>
          <FormRow isLogo={true}>
            <CustomAvatar alt={"userLogo"}>
              <UserIcon />
            </CustomAvatar>
          </FormRow>
          <FormRow>
            <InputBox>
              <CustomMuiTextField
                label={"First Name"}
                required={true}
                placeholder={"Enter First name"}
                type={"text"}
                name={"firstName"}
                control={control}
              />
              <ValidationMessage>
                {errors.firstName?.message}
              </ValidationMessage>
            </InputBox>
            <InputBox>
              <CustomMuiTextField
                label={"Last Name"}
                placeholder={"Enter Last Name"}
                type={"text"}
                name={"lastName"}
                control={control}
              />
              <ValidationMessage>
                {errors.lastName?.message}
              </ValidationMessage>
            </InputBox>
          </FormRow>

          <FormRow>
            <InputBox>
              <CustomMuiTextField
                label={"Email Address"}
                placeholder={"Enter Email"}
                type={"email"}
                name={"email"}
                control={control}
              />
              <ValidationMessage>
                {errors.email?.message}
              </ValidationMessage>
            </InputBox>
            <InputBox>
              <CustomMuiTextField
                label={"Mobile Number"}
                placeholder={"Enter Mobile Number"}
                type={"number"}
                name={"mobile"}
                control={control}
              />
              <ValidationMessage>
                {errors.mobile?.message}
              </ValidationMessage>
            </InputBox>
          </FormRow>

          <FormRow>
            <InputBox>
              <MuiRadioButton
                label={"Select Gender"}
                options={GenderOptions}
                name={"gender"}
                control={control}
                value={selectedUserData?.gender}
              />
              <ValidationMessage>
                {errors.gender?.message}
              </ValidationMessage>
            </InputBox>
            <InputBox>
              <MuiAutoComplete
                label={"Your Status"}
                options={StatusOptions}
                placeholder={"Select Your Status"}
                name={"status"}
                control={control}
              />
              <ValidationMessage>
                {errors.status?.message}
              </ValidationMessage>
            </InputBox>
          </FormRow>

          <FormRow>
            <InputBox>
              <CustomMuiTextField
                label={"Your Profile"}
                placeholder={"Select Your Profile"}
                type={"file"}
                name={"profile"}
                control={control}
              />
              <ValidationMessage>
                {errors.profile?.message}
              </ValidationMessage>
            </InputBox>
            <InputBox>
              <CustomMuiTextField
                label={"Location"}
                placeholder={"Enter Location"}
                type={"text"}
                name={"location"}
                control={control}
              />
              <ValidationMessage>
                {errors.location?.message}
              </ValidationMessage>
            </InputBox>
          </FormRow>

          <FormRow>
            <CustomMuiButton
              loadingStatus={createLoading}
              type={"submit"}
              label={"Submit"}
              onClick={handleSubmit(onSubmit)}
            />
          </FormRow>
        </FormContainer>
      </MainContainer>
    </>
  );
};

export default User;
