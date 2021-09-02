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
        width: "358px",
        height: "80px",
        margin: "1px 1px 0px",
        padding: "7px 7px 8px 55px",
        borderRadius: "4px",
        boxShadow: "none"
    },
    image: {
        width: "60px",
        height: "75px",
        margin: "0 12px 0 0",
        objectFit: "contain"
    },
    title: {
        width: "263px",
        height: "22px",
        margin: "0 0 4px 2px",
        color: COLORS.CHARCOAL_GREY_100,
    },
    author: {
        width: "14px",
        height: "18px",
        margin: "0 7.2 4px 0px",
        color: COLORS.ICON_500,
        textTransform: "none"
    },
    authorName: {
        width: "40px",
        height: "18px",
        margin: "0 0 4px 7.2px",
        paddingTop: "2px",
        color: COLORS.CHARCOAL_GREY,
        textTransform: "none",
        textAlign: "left"
    },
    field:{
        width: "32px",
        height: "18px",
        margin: "0 5.3 0 0px",
        textTransform: "none",
        color: COLORS.ICON_500,
    },
    fieldName:{
        width: "55px",
        height: "18px",
        margin: "0 0 0 5.3px",
        textTransform: "none",
        Color: COLORS.CHARCOAL_GREY_100
    },
    actions:{
        margin: "2px",
        padding: "1px"
    },
});

interface SearchResultCardProps {
    title: string;
    authorName: string;
    field: string;
    image: string;
}

const SearchResultCard: React.FC<SearchResultCardProps> = ({
    title,
    field,
    authorName,
    image,
}) => {

    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea >
                <CardMedia className={classes.image}
                    component="img"
                    image={image} />
                <CardContent>
                    <Typography className={classes.title} variant="body2">{title}</Typography>
                    <CardActions className={classes.actions}>
                    <Typography className={classes.author} variant="overline">by</Typography>
                    <Typography className={classes.authorName} variant="caption">{authorName}</Typography>
                    </CardActions>
                    <CardActions className={classes.actions}>
                    <Typography className={classes.field} variant="overline">Field :</Typography>
                    <Typography className={classes.fieldName} variant="overline">{field}</Typography>
                    </CardActions>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default SearchResultCard;