import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { useHistory } from "react-router-dom";
import KeyboardArrowDownTwoToneIcon from "@mui/icons-material/KeyboardArrowDownTwoTone";
import KeyboardArrowUpTwoToneIcon from "@mui/icons-material/KeyboardArrowUpTwoTone";
import PropTypes from "prop-types";

const Container = styled("div")(() => ({
  // display: "flex",
  // justifyContent: "space-between",
  // width: "120px",
  "&hover": {
    cursor: "pointer",
  },
}));

const Wrapper = styled("div")(() => ({
  display: "flex",
  minHeight: "38px",
  maxHeight: "30px",
  flexWrap: "wrap",
  ".header": {
    // flexDirection: "column",
    // backgroundColor: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    padding: "0 20px",
  },
}));

const ContainerContentDropDown = styled("ul")(() => ({
  boxShadow: "0 .125rem .25rem rgba(0,0,0,.075) !important",
  padding: 0,
  margin: "0 0 0 0",
  width: "100%",
  marginTop: "23px",
  height: "400px",
  flexDirection: "column",
  overflowY: "auto",
  li: {
    listStyleType: "none",
    "&:first-of-type > button": {
      borderTop: "1px solid #ccc;",
      borderTopLeftRadius: "4px",
      borderTopRightRadius: "4px",
    },
    "&:last-of-type > button": {
      borderBottomLeftRadius: "4px",
      borderBottomRightRadius: "4px",
    },
    button: {
      display: "flex",
      // justifyContent: "space-between",
      backgroundColor: "white",
      fontSize: "16px",
      padding: "15px 20px 15px 20px",
      border: 0,
      borderBottom: "1px solid #ccc",
      width: "100%",
      textAlign: "left",
      borderLeft: "1px solid #ccc",
      borderRight: "1px solid #ccc",

      "&:hover, &:focus": {
        cursor: "pointer",
        fontWeight: "bold",
        backgroundColor: "#ccc",
      },
    },
  },
}));

const Dropdown = ({ items, title, multiSelect = false }) => {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const history = useHistory();
  // useEffect(() => {
  //   console.log(open, "<<< open");
  //   console.log(items, "<< items");
  // }, [open]);
  function handleOnClick(item) {
    console.log(item, "<<< items");
    if (!selection.some((current) => current.id === item.id)) {
      console.log("masuk");
      if (!multiSelect) {
        console.log(selection);

        setSelection([item]);
        history.push(`/category/${item.slug}`);
      } else if (multiSelect) {
        setSelection([...selection, item]);
      }
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        (current) => current.id !== item.id
      );
      setSelection([...selectionAfterRemoval]);
      history.push(`/category/${item.slug}`);
    }
  }

  // function isItemInSelection(item) {
  //   if (selection.some((current) => current.id === item.id)) {
  //     return true;
  //   }
  //   return false;
  // }

  return (
    <Wrapper>
      <Container
        className="header"
        onClickOutside={() => setOpen(!open)}
        onClick={() => setOpen(!open)}
      >
        <Typography>Categories</Typography>
        {open ? (
          <KeyboardArrowDownTwoToneIcon></KeyboardArrowDownTwoToneIcon>
        ) : (
          <KeyboardArrowUpTwoToneIcon></KeyboardArrowUpTwoToneIcon>
        )}
      </Container>

      {open && (
        <ContainerContentDropDown>
          {items.map((item) => (
            <li className="dd-list-item" key={item.id}>
              <button type="button" onClick={() => handleOnClick(item)}>
                <span>{item.category_name}</span>
                {/* <span>{isItemInSelection(item) && "Selected"}</span> */}
              </button>
            </li>
          ))}
        </ContainerContentDropDown>
      )}
    </Wrapper>
  );
};

Dropdown.propTypes = {
  items: PropTypes.array,
  multiSelect: PropTypes.bool,
  title: PropTypes.string,
};

Dropdown.defaultProps = {
  items: [],
  multiSelect: false,
  title: "",
};

export default Dropdown;
