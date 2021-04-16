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

const Form = (props) => {
  const classes = useStyles();
  const [addTodo, setAddTodo] = useState("");

  const handleChange = (prop) => (event) => {
    setAddTodo(event.target.value);
  };

  return (
    <div>
      <Grid
        container
        xs={12}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <FormControl fullWidth className={classes.margin} variant="filled">
          <InputLabel htmlFor="filled-adornment-amount">Add To Do</InputLabel>
          <FilledInput
            id="filled-adornment-amount"
            value=""
            onChange={handleChange("amount")}
            variant="outlined"
          />
        </FormControl>
      </Grid>
    </div>
  );
};

export default Form;
