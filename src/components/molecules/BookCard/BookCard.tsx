import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import Rating from '@material-ui/lab/Rating';
import ReplySharpIcon from '@material-ui/icons/ReplySharp';
import { CardActions, Table, TableRow, Typography } from '@material-ui/core';
import { COLORS } from '../../../theme/constants';
import TableCell from '@material-ui/core/TableCell';
import Avatar from '../../atoms/Avatar';


const useStyles = makeStyles({
  root:{
    width: "540px",
    height: "255px",
    margin: "17px 30px 30px 165px",
    padding: "26px 11px 28px 21px",
    borderRadius: "4px",
    border: "solid 1px",
    borderColor: COLORS.GREY_300
  },
  image:{
      width: "180px",
      height: "250px",
      margin: "0 24px 0 0",
      borderRadius: "4px",
      objectFit: "initial" 
  },
  title: {
    width: "304px",
    height: "30px",
    margin: "2px 0 13px 8px",
    color: COLORS.CHARCOAL_GREY
  },
  desc: {
    width: "290px",
    height: "66px",
    margin: "13px 14px 13px 8px",
    color: "#6b6c6f",
    lineHeight: "22px"
  },
  avatar: {
    width: "38px",
    height: "38px",
    margin: "0px 12px 5px 8px"
  },
  author: {
    width: "36px",
    height: "18px",
    margin: "0 17px 0px 0px",
    paddingTop: "2px",
    float: "right",
    textTransform: "none",
    color: COLORS.ICON_500
  },
  authorName: {
    width: "53px",
    height: "24px",
    margin: "2px 0px 7px 0px",
    float: "right",
    color: COLORS.CHARCOAL_GREY
  },
  star: {
    width: "20px",
    height: "22px",
    margin: "0 0px 0 6px",
    color: COLORS.CHARCOAL_GREY
  },
  rating: {
    width: "98px",
    height: "22px",
    margin: "0px",
    color: COLORS.CHARCOAL_GREY
  },
  bookmark: {
    color: COLORS.PRIMARY_COLOR_500,
    paddingRight: "20px"
  },
  reply: {
    color: COLORS.GREY_500,
    paddingRight: "20px"
  },
  playlist: {
    color: COLORS.GREY_500
  },
  action:{
      display: "flex",
      width: "auto",
  }
});

interface BookCardProps {
  title: string;
  desc: string;
  authorName: string;
  image: string;
  onClick?: () => void;
  bookmarkClick?: () => void;

}

const BookCard: React.FC<BookCardProps> = ({
  title,
  desc,
  authorName,
  image,
  onClick,
  bookmarkClick
}) => {

  const classes = useStyles();
  return (
    <Card onClick={onClick} className={classes.root}>
      <CardActionArea className={classes.action}>
        <CardMedia className={classes.image}
          component="img"
          image={image} />
        <CardContent>
          <Typography className={classes.title} variant="h4">{title}</Typography>
          <Typography className={classes.desc} variant="body2">{desc}</Typography>
          <Table>
            <TableRow>
              <TableCell rowSpan={2}>
                <Avatar className={classes.avatar} src="" />
              </TableCell>
              <TableCell><Typography className={classes.author} variant="overline">Author</Typography></TableCell>
            </TableRow>
            <TableRow>
              <TableCell><Typography className={classes.authorName} variant="subtitle2">{authorName}</Typography></TableCell>
            </TableRow>
          </Table>
          <CardActions>
            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} size="small" readOnly />
            <Typography className={classes.star} variant="body1">4.5</Typography>
            <Typography className={classes.rating} variant="body2">( 1,204 ratings )</Typography>
          </CardActions>
          <CardActions>
            <BookmarkIcon className={classes.bookmark} onClick={bookmarkClick} />
            <ReplySharpIcon className={classes.reply} />
            <PlaylistAddCheckIcon className={classes.playlist} />
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default BookCard;