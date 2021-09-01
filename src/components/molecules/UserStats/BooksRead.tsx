import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width:'255px',
    height:'120px'
  },
  title: {
    fontSize: 10,
  },
  pos: {
    marginBottom: 12,
  },
  display:
  {
     paddingLeft:'80px'
  },
  font:{
      fontSize:'14px',
        width:'156px',
        fontFamily:'Roboto',
        fontWeight:'normal',
        fontStretch:'normal',
        fontStyle:'normal',
        //lineHeight:'1.57',
        letterSpacing:'normal',
        color:'#6b6c6f'

      },
      image:{
        width: '33px',
        objectFit:'contain'
      }
});
 export interface Props
{
    children:string
}
function BooksRead({children,...props}:Props)
{
  const classes = useStyles();


  return (
    <Card className={classes.root}>
      <CardContent>
          <CardActions>
       <CheckCircleOutlineIcon className={classes.image}></CheckCircleOutlineIcon>
        <Typography className={classes.font}>
            BOOKS READ
        </Typography>
        </CardActions>
       <h1 className={classes.display}>{children}</h1>
        </CardContent>
    </Card>
  );
}
export default BooksRead