import { FilledInput, FormControl, InputLabel } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    textField: {
      width: "100%",
    },
  },
}));

const Form = ({ addTodo }) => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    addTodo({ id: Math.random(), title: inputValue, isCompleted: false });
    setInputValue("");
  };

  return (
    <div>
      <Grid container direction="column" justify="center" alignItems="center">
        <form onSubmit={handelSubmit}>
          <FormControl fullWidth className={classes.margin} variant="filled">
            <InputLabel htmlFor="filled-adornment-amount">
              Add To Do Item
            </InputLabel>
            <FilledInput
              id="filled-adornment-amount"
              value={inputValue}
              onChange={handleChange}
              variant="outlined"
            />
          </FormControl>
        </form>
      </Grid>
    </div>
  );
};

export default Form;
