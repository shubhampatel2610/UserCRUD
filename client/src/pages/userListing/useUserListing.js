import { useEffect, useState } from "react";
import { AXIOS_URL } from "../../constant";
import axios from "axios";
import { saveAs } from "file-saver";
import { useNavigate } from "react-router-dom";

const useUserListing = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [fetchLoading, setFetchLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [csvLoading, setCsvLoading] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setFetchLoading(true);
        const response = await axios.get(AXIOS_URL + "/users");
        setUsers(response?.data);
      } catch (error) {
        console.error("Error fetching users", error);
      } finally {
        setFetchLoading(false);
      }
    };
    fetchUsers();
  }, [ page ]);

  const handleCsvClick = async () => {
    try {
      setCsvLoading(true);
      const response = await axios.get(AXIOS_URL + "/download-users-data", {
        responseType: "blob",
      });
      saveAs(response.data, "Users.csv");
    } catch (error) {
      console.error("Error downloading CSV file", error);
    } finally {
      setCsvLoading(false);
    }
  };

  const handleSearchClick = async (searchText) => {
    try {
      setFetchLoading(true);
      const response = await axios.get(
        AXIOS_URL + `/search-users?searchText=${searchText}`
      );
      setUsers(response?.data);
    } catch (error) {
      console.error("Error fetching users", error);
    } finally {
      setFetchLoading(false);
    }
  };

  const handleSelectedUser = (userId) => {
    // navigate("/user", { state : { selectedUserId: userId }})
  }

  return {
    users,
    fetchLoading,
    csvLoading,
    handleCsvClick,
    handleSearchClick,
    page,
    handleChangePage,
    openDeleteModal,
    setOpenDeleteModal,
    handleSelectedUser
  };
};

export default useUserListing;
