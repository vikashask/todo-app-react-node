import { IconButton } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import React from "react";

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

const Todo = ({ title }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar>TD</Avatar>
        </Grid>
        <Grid item>
          <Typography noWrap>{title}</Typography>
        </Grid>
        <Grid item>
          <IconButton aria-label="delete" className={classes.margin}>
            <DeleteRoundedIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            style={{ color: "green" }}
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
