import { Grid } from "@material-ui/core";
import React from "react";
import Masonry from "react-masonry-component";
import { listDanhmuc } from "../../fakeData";
const masonryOptions = {
  transitionDuration: 0,
};
var divStyle = {
  backgroundColor: "red",
  width: "300px",
  height: "400px",
  color: "white",
  margin: "20px",
};

var divStyle_one = {
  backgroundColor: "blue",
  width: "300px",
  height: "200px",
  color: "blue",
  margin: "20px",
};

var divStyle_two = {
  backgroundColor: "green",
  width: "300px",
  height: "400px",
  color: "white",
  margin: "20px",
};
var divStyle_three = {
  backgroundColor: "yellow",
  width: "300px",
  height: "400px",
  color: "white",
  margin: "20px",
};

function HomeBody(props) {
  const childElements = listDanhmuc.map((item, index) => (
    <Grid key={index} item md={6}>
      <div style={{ width: "100px", height: 100, background: "red" }}>
        {item.name}
      </div>
    </Grid>
  ));
  return (
    <Masonry
      options={masonryOptions}
      className={"my-gallery-class"} // default ''
    >
      <div className="image-element-class" style={divStyle} />
      <div className="image-element-class" style={divStyle_one} />
      <div className="image-element-class" style={divStyle_two} />
      <div className="image-element-class" style={divStyle_three} />
      <div className="image-element-class" style={divStyle} />
      <div className="image-element-class" style={divStyle} />
      <div className="image-element-class" style={divStyle} />
      <div className="image-element-class" style={divStyle} />

      
    </Masonry>
  );
}

export default HomeBody;
