import { Grid ,makeStyles, StylesProvider ,Card} from "@material-ui/core"

import BooksRead from "../UserStats/BooksRead"
import BookToRead from "../UserStats/BooksToRead"
import BookReading from "../UserStats/BooksReading"
import TargetPerYear from "../UserStats/TargetPerYear"


const useStyles = makeStyles({
    grid :{

        display:'flex',
        gridGap:'20px',
        borderRadius: '4px',
        
    }
})


function UserStatsComplete()
{
    const classes=useStyles()
    return(
        <Grid className={classes.grid}>
            <BookReading>   6
            </BookReading>
            <BookToRead>10</BookToRead>
            <BooksRead>8</BooksRead>
            <TargetPerYear>30</TargetPerYear>

            </Grid>

    )

}
export default UserStatsComplete