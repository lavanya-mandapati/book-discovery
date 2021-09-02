import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import Rating from '@material-ui/lab/Rating';
import ReplySharpIcon from '@material-ui/icons/ReplySharp';
import { CardActions, TableCell, Typography } from '@material-ui/core';
import { COLORS } from '../../../theme/constants';

const useStyles = makeStyles({
    root: {
        width: "255px",
        height: "361px",
        padding: "22px 0 8px",
        marginLeft:"30px",
        borderRadius: "4px",
        border: "solid 1px",
        borderColor: COLORS.GREY_300
    },
    contentroot:{
        paddingBottom: "10px"
    },
    image: {
        width: "180px",
        height: "190px",
        margin: "0 39px 15px 36px",
        objectFit: "contain"
    },
    title: {
        width: "216px",
        height: "28px",
        margin: "5px 7px 3px 32px",
        color: COLORS.CHARCOAL_GREY
    },
    author: {
        width: "36px",
        height: "18px",
        margin: "0 8px 3px 2px",
        float: "right",
        textTransform: "none",
        color: COLORS.CHARCOAL_GREY_100
    },
    authorName: {
        height: "24px",
        margin: "1px 0 0 2px",
        float: "right"
    },
    star: {
        width: "20px",
        height: "22px",
        margin: "0 5px 0 3px",
        marginLeft: "20px"
    },
    rating: {
        width: "88px",
        height: "22px",
        margin: "0px 5px",
        textTransform: "none",
        textAlign: "left"
    },
    actions:{
        padding: "5px",
        marginLeft: "25px",
        marginBottom: "0px"
    },
    titleActions:{
        padding:"0px"
    },
    bookmark: {
        color: COLORS.PRIMARY_COLOR_500,
        padding: "2px 10px 0px"
    },
    reply: {
        color: COLORS.GREY_500,
        padding: "5px 10px 0px"
    },
    playlist: {
        color: COLORS.GREY_500,
        padding: "5px 10px 0px"
    }
});

interface RecommendationBookCardProps {
    title: string;
    authorName: string;
    image: string;
    onClick?: ()=>void;
    bookmarkClick?:()=>void;

}

const RecommendationBookCard: React.FC<RecommendationBookCardProps> = ({
    title,
    authorName,
    image,
    onClick,
    bookmarkClick
}) => {

    const classes = useStyles();
    return (
        <Card className={classes.root} onClick={onClick}>
            <TableCell>
                <CardMedia className={classes.image}
                    component="img"
                    image={image} />
            </TableCell>
                <CardContent className={classes.contentroot}>
                    <CardActions className={classes.titleActions} >
                    <Typography className={classes.title} variant="h6">{title}</Typography>
                    </CardActions>
                    <CardActions className={classes.actions}>
                    <Typography className={classes.author} variant="body2">Author</Typography>
                    <Typography className={classes.authorName} variant="subtitle2">{authorName}</Typography>
                    </CardActions>
                    <CardActions className={classes.actions}>
                        <Rating size="small" read-only value={4} color="#fcd46c" readOnly />
                        <Typography className={classes.star} variant="body1">4.0</Typography>
                        <Typography className={classes.rating} variant="overline">(1,204 ratings)</Typography>
                    </CardActions>
                    </CardContent>
                    <Divider />
                    <CardActions className={classes.actions}>
                        <BookmarkIcon className={classes.bookmark} onClick={bookmarkClick} />
                        <ReplySharpIcon className={classes.reply} />
                        <PlaylistAddCheckIcon className={classes.playlist} />
                    </CardActions>
                   
        </Card>
    );
}

export default RecommendationBookCard;