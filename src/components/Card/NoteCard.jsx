import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { theme } from "../Theme/Theme";
import Container from "@material-ui/core/Container";
import { PropTypes } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "50px auto",
  },
  media: {
    height: "100%",
    width: "100%",
  },
});

const NoteCard = ({ status, onDelete }) => {
  const classes = useStyles();
  return (
    <div className="test" data-testid="field">
      <ThemeProvider theme={theme}>
        <Container>
          <Grid container spacing={3}>
            {status.map((book) => (
              // eslint-disable-next-line react/jsx-key
              <Grid container item xs={12} sm={6} md={4}>
                <Card className={classes.root}>
                  <CardActionArea>
                    {}
                    <CardMedia className={classes.media}>
                      <img src={book.src} alt="" height="288" width="288" />
                    </CardMedia>
                    <CardContent>
                      <Typography
                        noWrap
                        gutterBottom
                        variant="h5"
                        component="h2"
                      >
                        {book.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {book.authorName}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <img
                      src="https://d17pjsg7x52x9r.cloudfront.net/assets/components/book_card/clock-b0e2e0235fbe1df824d662b2b3b96611e3711bf5b5c7556b8bd3828720f86dbc.svg"
                      alt=""
                    />
                    {book.time}
                  </CardActions>
                  {book.check ? (
                    <center>
                      <Button
                        onClick={() => onDelete(book.id, status)}
                        variant="contained"
                        color="primary"
                      >
                        {" "}
                        Read Again
                      </Button>
                    </center>
                  ) : (
                    <center>
                      <Button
                        onClick={() => onDelete(book.id, status)}
                        variant="contained"
                        color="primary"
                      >
                        Finished
                      </Button>
                    </center>
                  )}
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
};
NoteCard.propTypes = {
  status: PropTypes.bool,
  onDelete: PropTypes.func,
};

export default NoteCard;
