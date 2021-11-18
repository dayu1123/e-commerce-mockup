import React, { useEffect, useState } from "react";
import Header from "../../Header";
import { useParams, useHistory } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Card, Typography, CardMedia, CardContent } from "@mui/material";
// import Dropdown from "../../../components/Dropdown";
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

const WrapperCard = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
}));

const PriceContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

const Categories = () => {
  // const [items, setItems] = useState([]);
  const [product, setProduct] = useState([]);
  const { category_name } = useParams();
  const history = useHistory();
  const getAllProduct = axios.get(
    "https://devgopwsearch.pasarwarga.com/product/search?category_name=" +
      category_name
  );
  useEffect(() => {
    getAllProduct
      .then(({ data }) => {
        setProduct(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // axios
    //   .get(
    //     "https://devgopwsearch.pasarwarga.com/category-product/list?category_name=" +
    //       category_name
    //   )
    //   .then(({ data }) => {
    //     const parentData = data.data.filter((el) => el.status && !el.parent_id);
    //     setItems(parentData);
    //     console.log(parentData, "<<<< parent");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);
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

        {/* <Dropdown items={items} style={{ width: "100px" }}></Dropdown> */}
        <Typography>{category_name}</Typography>
      </Bar>
      <WrapperCard>
        {product?.map((el) => {
          return (
            <Card sx={{ maxWidth: 345, marginTop: "20px" }}>
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
                    {"Rp: " + el.price / el.discount}
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
      </WrapperCard>
    </>
  );
};

export default Categories;
