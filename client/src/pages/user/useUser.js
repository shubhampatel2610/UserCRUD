import axios from "axios";
import { useState } from "react";
import { AXIOS_URL } from "../../constant";
import { useLocation, useNavigate } from "react-router-dom";

const useUser = () => {
  const [createLoading, setCreateLoading] = useState(false);
  const location = useLocation();
  const selectedUserData = location?.state?.userData ?? {};
  const navigate = useNavigate();

  const handleCreateUser = async (data, key) => {
    try {
      setCreateLoading(true);
      const userData = {
        firstName: data?.firstName,
        lastName: data?.lastName,
        email: data?.email,
        mobile: data?.mobile,
        gender: data?.gender,
        status: data?.status,
        image: data?.profile,
        location: data?.location,
      };
      (await key)
        ? axios.patch(
            AXIOS_URL + `/update-user/${selectedUserData?._id}`,
            userData
          )
        : axios.post(AXIOS_URL + `/add-user`, userData);
    } catch (error) {
      console.error("Error creating new user", error);
    } finally {
      setCreateLoading(false);
      navigate("/")
    }
  };

  return {
    createLoading,
    handleCreateUser,
  };
};

export default useUser;
