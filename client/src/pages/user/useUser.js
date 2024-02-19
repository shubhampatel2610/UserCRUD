import axios from "axios";
import { useState } from "react";
import { AXIOS_URL } from "../../constant";

const useUser = () => {
  const [createLoading, setCreateLoading] = useState(false);

  const handleCreateUser = async (data) => {
    try {
      setCreateLoading(true);
      const userData = {
        firstName: data?.firstName,
        lastName: data?.lastName,
        email: data?.email,
        mobile: data?.mobile,
        gender: data?.gender,
        status: data?.status.label,
        image: data?.profile,
        location: data?.location,
      };
      await axios.post(AXIOS_URL + `/add-user`, userData);
    } catch (error) {
      console.error("Error creating new user", error);
    } finally {
      setCreateLoading(false);
    }
  };

  return {
    createLoading,
    handleCreateUser,
  };
};

export default useUser;
