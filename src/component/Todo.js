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

  const onDoubleClick = () => {
    console.log("🚀 ~ file: Todo.js ~ line 29 ~ onDoubleClick ~ onDoubleClick");
    setIsEditing(true);
  };

  const handleKeyDown = (e) => {
    console.log(e.keyCode);
    const key = e.keyCode;
    if (key === 13 || key === 27) {
      setIsEditing(false);
    }
  };

  return isEditing ? (
    <FormControl fullWidth variant="filled">
      <FilledInput
        id="filled-adornment-amount"
        value=""
        onKeyDown={handleKeyDown}
        variant="outlined"
        autoFocus
      />
    </FormControl>
  ) : (
    <Paper className={classes.paper}>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Typography onDoubleClick={onDoubleClick} noWrap>
            {title}
          </Typography>
        </Grid>
        <Grid item>
          <IconButton aria-label="delete" className={classes.margin}>
            <DeleteRoundedIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            style={isCompleted ? { color: "green" } : { color: "blue" }}
            aria-label="delete"
            className={classes.margin}
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
