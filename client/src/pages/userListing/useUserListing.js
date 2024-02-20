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
  const [deleteLoading, setDeleteLoading] = useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const fetchUsers = async () => {
    try {
      setFetchLoading(true);
      const response = await axios.get(AXIOS_URL + `/users?page=${page}&limit=${10}`);
      setUsers(response?.data);
    } catch (error) {
      console.error("Error fetching users", error);
    } finally {
      setFetchLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(); 
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [page, deleteLoading]);

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
        AXIOS_URL + (searchText === undefined ? "/users" : `/search-users?searchText=${searchText}`)
      );
      setUsers(response?.data);
    } catch (error) {
      console.error("Error fetching users", error);
    } finally {
      setFetchLoading(false);
    }
  };

  const handleSelectedUser = async (userId, key) => {
    try {
      setFetchLoading(true);
      const response = await axios.get(
        AXIOS_URL + `/users/${userId}`
      );
      navigate(key === "edit" ? "/user" : "/user-details", { state : { userData: response?.data?.data }})
    } catch (error) {
      console.error("Error fetching user details", error);
    } finally {
      setFetchLoading(false);
    }
  }

  const handleDeleteUser = async (userId) => {
    try {
      setDeleteLoading(true);
      await axios.delete(
        AXIOS_URL + `/delete-user/${userId}`
      );
      navigate("/");
    } catch (error) {
      console.error("Error fetching user details", error);
    } finally {
      setDeleteLoading(false);
      setOpenDeleteModal(false);
    }
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
    handleSelectedUser,
    handleDeleteUser,
    deleteLoading
  };
};

export default useUserListing;
