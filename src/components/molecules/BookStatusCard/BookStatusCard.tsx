import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { CardActions, Typography } from '@material-ui/core';
import { COLORS } from '../../../theme/constants';

const useStyles = makeStyles({
    root: {
        width: "255px",
        height: "108px",
        margin: "18px 30px 35px 23px",
        padding: "14px 3px 15px 10px",
        borderRadius: "4px",
        border: "solid 1px",
    borderColor: COLORS.GREY_300

    },
    image: {
        width: "80px",
        height: "105px",
        margin: "2px 10px 2px 0",
        objectFit: "contain",
}
    ,
    title: {
        width: "152px",
        height: "24px",
        margin: "0 0 6px 0px",
        color: COLORS.CHARCOAL_GREY
},
    author: {
    width: "20px",
    height: "18px",
    margin: "0px",
    color: COLORS.ICON_500
},
authorName: {
    width: "79px",
    height: "22px",
    margin: "0px",
    color: COLORS.CHARCOAL_GREY,
    textAlign:"left"
},
    field: {
    width: "55px",
    height: "18px",
    margin: "0px",
    textTransform: "none",
    color: COLORS.ICON_500
},
fieldName: {
    width: "64px",
    height: "22px",
    margin: "0px",
    textTransform: "none",
    color: COLORS.CHARCOAL_GREY,
    textAlign: "left"
},
pages:{
    width: "104px",
    height: "18px",
    margin: "9px 48px 0 10px",
    textTransform: "none",
    color: COLORS.CHARCOAL_GREY_100
},
actions:{
    padding:"0px",
    marginLeft:"12px"
}
});

interface BookStatusCardProps {
    title: string;
    authorName: string;
    field: string;
    image: string;
    upCount?: number;
    total?: number;
}

const BookStatusCard: React.FC<BookStatusCardProps> = ({
    title,
    field,
    authorName,
    image,
    upCount=15,
    total=239
}) => {

    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea >
                <CardMedia className={classes.image}
                    component="img"
                    image={image} />
                <CardContent>
                    <Typography className={classes.title} variant="subtitle1">{title}</Typography>
                    <CardActions className={classes.actions}>
                    <Typography className={classes.author} variant="body2">by</Typography>
                    <Typography className={classes.authorName} variant="body2">{authorName}</Typography>
                    </CardActions>
                    <CardActions>
                    <Typography className={classes.field} variant="overline">Category:</Typography>
                    <Typography className={classes.fieldName} variant="body2">{field}</Typography>
                    </CardActions>
                    <Typography className={classes.pages} variant="overline">{upCount} left  / {total} pages</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default BookStatusCard;