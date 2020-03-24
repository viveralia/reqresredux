import React from "react";
import CardLayout from "./CardLayout";
import Skeleton from "@material-ui/lab/Skeleton";

const CardLoader = () => {
  return (
    <CardLayout>
      <Skeleton variant="rect" width="500" height="500" className="img-fluid" />
    </CardLayout>
  );
};

export default CardLoader;
