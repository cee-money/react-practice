import React from "react";
import { Card, CardBody, CardTitle, Button } from "reactstrap";

const cardStyle = {
  display: "inline-block",
  verticalAlign: "middle",
  textAlign: "left",
  margin: "2px 0",
  fontSize: "12px"
};

const CardList = props => {
  return (
    <div className="row">
      <div className="col-md-12">
        <Card>
          <CardBody>
            <CardTitle style={cardStyle}>{props.title}</CardTitle>
            &nbsp;&nbsp;
            {props.status === "Want To Read" ? (
              <Button style={cardStyle} color="info" className="btn-sm">
                Reading
              </Button>
            ) : null }
             {props.status === "Currently Reading" ? (
              <Button style={cardStyle} color="primary" className="btn-sm">
                Read
              </Button>
            ) : null }
             {props.status === "Read" ? (
              <Button style={cardStyle} color="secondary" className="btn-sm">
                Archive
              </Button>
            ) : null }
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default CardList;
