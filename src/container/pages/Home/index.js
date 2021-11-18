import React, { useEffect, useState } from "react";
import Header from "../../Header";
import {
  Card,
  Typography,
  CardMedia,
  CardContent,
  Stack,
  styled,
  Pagination,
  PaginationItem,
} from "@mui/material";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Dropdown from "../../../components/Dropdown";
import axios from "axios";

const Bar = styled("div")(() => ({
  width: "100%",
  height: "50px",
  display: "flex",
  backgroundColor: "hsla(216, 42%, 97%, 1)",
  marginTop: "65px",
  justifyContent: "start",
  alignItems: "center",
  paddingLeft: "28px",
}));

// const filterItems = [...items].filter((el) => el.status && !el.parent_id);

const PriceContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

const Wrapper = styled("div")(() => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  gap: "15px",
  marginBottom: "50px",
}));

const WrapperPagnation = styled(Stack)(() => ({
  display: "flex",
  placeItems: "flex-end",
  marginRight: "40px",
  marginBottom: "60px",
}));

const Home = () => {
  const [items, setItems] = useState([]);
  const [productAll, setProductAll] = useState([]);
  const [page, setPage] = useState(1);
  let [total, setTotal] = useState(0);
  const handleChange = (event, value) => {
    console.log(value);
    setPage(value);
  };
  const history = useHistory();
  const getAllProduct = axios.get(
    "https://devgopwsearch.pasarwarga.com/product/search?per_page=10&page=" +
      page
  );
  useEffect(() => {
    getAllProduct
      .then(({ data }) => {
        setProductAll([...data.data]);
        const modulus = data.total % 10;
        const kurang = data.total - modulus;
        const divide = kurang / 10;
        if (!modulus) {
          setTotal(divide);
        } else {
          setTotal(divide + 1);
        }
        // console.log(divide, "<<< /");
        // setTotal(data.total);
        console.log(productAll, "<<<< product");
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("https://devgopwsearch.pasarwarga.com/category-product/list")
      .then(({ data }) => {
        // const parentData = data.data.filter((el) => el.status && !el.parent_id);
        setItems(data.data);
        // console.log(parentData, "<<<< parent");
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);
  return (
    <>
      <Header></Header>
      <Bar>
        <div
          style={{ marginRight: "15px", cursor: "pointer" }}
          onClick={() => history.push("/home")}
        >
          Home
        </div>

        <Dropdown items={items} style={{ width: "100px" }}></Dropdown>
      </Bar>
      <Wrapper>
        {productAll?.map((el, i) => {
          return (
            <Card sx={{ maxWidth: 345, marginTop: "80px" }} key={i}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={el.images[0]}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {el.product_name}
                </Typography>
                <PriceContainer>
                  <Typography variant="body2" color="text.secondary">
                    {"Rp: " + el.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {"Rp: " + el.price - el.discount}
                  </Typography>
                </PriceContainer>
                <Typography
                  sx={{ fontStyle: "italic" }}
                  variant="subtitle1"
                  display="block"
                  gutterBottom
                >
                  {el.city_name}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Wrapper>
      <WrapperPagnation>
        <Pagination
          count={total}
          onChange={handleChange}
          defaultValue={page}
          renderItem={(item) => (
            <PaginationItem
              components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
        />
      </WrapperPagnation>
    </>
  );
};

export default Home;
