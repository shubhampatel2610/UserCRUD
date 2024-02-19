import axios from "axios";
import { useEffect, useState } from "react";
import { AXIOS_URL } from "../../constant";
import { useLocation, useNavigate } from "react-router-dom";

const useUser = () => {
  const navigate = useNavigate();
  const [createLoading, setCreateLoading] = useState(false);
  const location = useLocation();
  const selectedUserId = location?.state?.selectedUserId ?? "";
  const [initialUserData, setInitialUserData] = useState({});
  const [userId, setUserId] = useState(selectedUserId);

  // setUserId(selectedUserId)
  console.log(selectedUserId);
  navigate("/")

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
