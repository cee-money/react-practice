import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import AddButton from "./AddButton";

const CardHeader = props => {
  return (
    <div className="row">
      <div className="col-md-12">
        <Card>
          <CardBody>
            <CardTitle>
              {props.props === "Want To Read" ? (
                <h4 className="text-warning">Want To Read</h4>
              ) : null}
              {props.props === "Currently Reading" ? (
                <h4 className="text-success">Currently Reading</h4>
              ) : null}
              {props.props === "Read" ? (
                <h4 className="text-info">Read</h4>
              ) : null}
            </CardTitle>
          </CardBody>
        </Card>
        {props.props === "Want To Read" ? (
          <Card>
            <CardBody>
              <AddButton />
            </CardBody>
          </Card>
        ) : null}
      </div>
    </div>
  );
};

export default CardHeader;
