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
    // addTodo({title:event.target.value,isCompleted:true})
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    addTodo({ title: inputValue, isCompleted: true });
    setInputValue("");
  };

  return (
    <div>
      <Grid container direction="column" justify="center" alignItems="center">
        <form onSubmit={handelSubmit}>
          <FormControl fullWidth className={classes.margin} variant="filled">
            <InputLabel htmlFor="filled-adornment-amount">Add To Do</InputLabel>
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
