import { Box, Typography } from "@mui/material";
import {
  CustomBody,
  CustomTableCell,
  CustomHeadLabel,
  CustomHeader,
  CustomTable,
  CustomTableRow,
  MenuIcon,
  StyledPopover,
  PopoverBox,
  MenuLabels,
  PopoverItem,
  CustomViewIcon,
  CustomEditIcon,
  CustomDeleteIcon,
  StyledFooter,
  StyledPagination,
} from "./style";
import { Link } from "react-router-dom";
import Loader from "../loader";

const ListingTable = ({
  header,
  data,
  loadingStatus,
  count,
  page,
  onPageChange,
  onDeleteClick
}) => {
  return (
    <>
      <CustomTable aria-label="simple table">
        <CustomHeader>
          {header &&
            header.map((head, key) => (
              <CustomTableCell align={head.align || ""} key={key}>
                <CustomHeadLabel>{head?.label}</CustomHeadLabel>
              </CustomTableCell>
            ))}
        </CustomHeader>
        {loadingStatus ? (
          <Loader />
        ) : (
          <CustomBody>
            {data?.map((item, index) => (
              <CustomTableRow key={index}>
                {Object.keys(item) &&
                  Object.keys(item).map((key) => {
                    return key === "actions" ? (
                      <CustomTableCell isBody={true}>
                      {console.log(item[key])}
                        <Box align="center">
                          <StyledPopover
                            Icon={<MenuIcon />}
                            closeOnItemClick={true}
                          >
                            <PopoverBox>
                              <Link to="/">
                                <PopoverItem>
                                  <CustomViewIcon />
                                  <MenuLabels>{"View"}</MenuLabels>
                                </PopoverItem>
                              </Link>
                              <Link to="/user">
                                <PopoverItem>
                                  <CustomEditIcon />
                                  <MenuLabels>{"Edit"}</MenuLabels>
                                </PopoverItem>
                              </Link>
                              {item[key].delete && <Link onClick={item[key].onDeleteClick}>
                                <PopoverItem>
                                  <CustomDeleteIcon />
                                  <MenuLabels>{"Delete"}</MenuLabels>
                                </PopoverItem>
                              </Link>}
                            </PopoverBox>
                          </StyledPopover>
                        </Box>
                      </CustomTableCell>
                    ) : (
                      <CustomTableCell isBody={true}>
                        <Typography align="left">
                          {item[key] && key === "No" && page
                            ? startIndex + index
                            : item[key]}
                        </Typography>
                      </CustomTableCell>
                    );
                  })}
              </CustomTableRow>
            ))}
          </CustomBody>
        )}
      </CustomTable>
      {data?.length > 0 && page && (
        <StyledFooter>
          <StyledPagination
            variant="outlined"
            shape="rounded"
            count={count}
            page={page}
            onChange={onPageChange}
          />
        </StyledFooter>
      )}
    </>
  );
};

export default ListingTable;
