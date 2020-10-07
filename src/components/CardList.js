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
  const id = props.id;
  const title = props.title;
  const status = props.status;

  return (
    <div className="row">
      <div className="col-md-12">
        <Card>
          <CardBody>
            <CardTitle style={cardStyle}>{title}</CardTitle>
            &nbsp;&nbsp;
            {status === "Want To Read" ? (
              <Button
                style={cardStyle}
                color="info"
                className="btn-sm"
                onClick={() => props.onClick(id)}
              >
                Reading
              </Button>
            ) : null}
            {status === "Currently Reading" ? (
              <Button
                style={cardStyle}
                color="primary"
                className="btn-sm"
                onClick={() => props.onClick(id)}
              >
                Read
              </Button>
            ) : null}
            {status === "Read" ? (
              <Button
                style={cardStyle}
                color="secondary"
                className="btn-sm"
                onClick={() => props.onClick(id)}
              >
                Archive
              </Button>
            ) : null}
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default CardList;
