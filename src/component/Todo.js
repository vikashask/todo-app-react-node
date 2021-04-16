import { FilledInput, FormControl, IconButton } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));

const Todo = ({ title, isCompleted }) => {
  const classes = useStyles();
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(title);
  const [tempValue, setTempValue] = useState(title);
  const [completed, setCompleted] = useState(isCompleted);
  const onDoubleClick = () => {
    setIsEditing(true);
  };

  const handleKeyDown = (e) => {
    const key = e.keyCode;
    if (key === 13) {
      setValue(tempValue);
      setIsEditing(false);
    } else if (key === 27) {
      setTempValue(value);
      setIsEditing(false);
    }
  };

  const handelOnChange = (e) => {
    setTempValue(e.target.value);
  };

  const handelBtnClick = () => {
    setCompleted((oldCompleted) => !oldCompleted);
  };

  return isEditing ? (
    <FormControl fullWidth variant="filled">
      <FilledInput
        id="filled-adornment-amount"
        value={tempValue}
        onKeyDown={handleKeyDown}
        onChange={handelOnChange}
        variant="outlined"
        autoFocus
      />
    </FormControl>
  ) : (
    <Paper className={classes.paper}>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Typography
            onDoubleClick={onDoubleClick}
            style={completed ? { color: "green" } : { color: "" }}
            noWrap
          >
            {value}
          </Typography>
        </Grid>
        <Grid item>
          <IconButton aria-label="delete" className={classes.margin}>
            <DeleteRoundedIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            style={completed ? { color: "blue" } : { color: "green" }}
            aria-label="delete"
            className={classes.margin}
            onClick={handelBtnClick}
          >
            <CheckCircleRoundedIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
};

Todo.propTypes = {};

export default Todo;
