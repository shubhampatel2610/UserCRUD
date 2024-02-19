import { useForm } from "react-hook-form";
import {
  MuiAutoComplete,
  MuiButton,
  MuiRadioButton,
  MuiTextField,
} from "../../components";
import {
  CustomAvatar,
  CustomMuiButton,
  FormContainer,
  FormRow,
  HeaderContainer,
  HeaderTypo,
  InputBox,
  MainContainer,
} from "./style";
import { GenderOptions, StatusOptions } from "./constant";
import { UserIcon } from "../../assets/images";
import { useNavigate } from "react-router-dom";
import useUser from "./useUser";

const User = () => {
  const navigate = useNavigate();
  const { createLoading, handleCreateUser } = useUser();

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = (data) => {
    handleCreateUser(data);
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
              <MuiTextField
                label={"First Name"}
                required={true}
                placeholder={"Enter First name"}
                type={"text"}
                name={"firstName"}
                control={control}
              />
            </InputBox>
            <InputBox>
              <MuiTextField
                label={"Last Name"}
                placeholder={"Enter Last Name"}
                type={"text"}
                name={"lastName"}
                control={control}
              />
            </InputBox>
          </FormRow>

          <FormRow>
            <InputBox>
              <MuiTextField
                label={"Email Address"}
                placeholder={"Enter Email"}
                type={"email"}
                name={"email"}
                control={control}
              />
            </InputBox>
            <InputBox>
              <MuiTextField
                label={"Mobile Number"}
                placeholder={"Enter Mobile Number"}
                type={"number"}
                name={"mobile"}
                control={control}
              />
            </InputBox>
          </FormRow>

          <FormRow>
            <InputBox>
              <MuiRadioButton
                label={"Select Gender"}
                options={GenderOptions}
                name={"gender"}
                control={control}
              />
            </InputBox>
            <InputBox>
              <MuiAutoComplete
                label={"Your Status"}
                options={StatusOptions}
                placeholder={"Select Your Status"}
                name={"status"}
                control={control}
              />
            </InputBox>
          </FormRow>

          <FormRow>
            <InputBox>
              <MuiTextField
                label={"Your Profile"}
                placeholder={"Select Your Profile"}
                type={"file"}
                name={"profile"}
                control={control}
              />
            </InputBox>
            <InputBox>
              <MuiTextField
                label={"Location"}
                placeholder={"Enter Location"}
                type={"text"}
                name={"location"}
                control={control}
              />
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
