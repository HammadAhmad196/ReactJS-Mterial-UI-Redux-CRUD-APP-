import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { OPEN_FORM } from "../constants/action-types";
import { connect } from "react-redux";

const AddUser = ({ openDialog }) => (
  <Button
    variant="contained"
    style={{
      position: "absolute",
      top: 100,
      right: 45,
      width: '10%',
    }}
    onClick={openDialog}
    color="secondary"
  >
    <AddIcon /> Add User
  </Button>
);

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  openDialog: () =>
    dispatch({
      type: OPEN_FORM,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
