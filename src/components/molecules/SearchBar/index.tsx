import { Paper } from "@material-ui/core";
import InputField from "../../atoms/InputField";
import { makeStyles } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import React,{useState} from "react";
import CloseIcon from '@material-ui/icons/Close';
import theme from "../../../theme/theme";

const useStyles = makeStyles((theme) => ({
    root: {
      padding: theme.spacing(0.5, 1),
      display: 'flex',
      alignItems: 'center',
      width: 400,
    },
    icon: {
        marginLeft: '10px'
    },
    closeIcon:{
        marginLeft: 'auto'
    }
  }));

export type SearchBarProps={
    type?:string;
    searchValue?:string;
    placeholder:string;
};

const SearchBar: React.FC<SearchBarProps>= ({searchValue,placeholder}) => {

    const classes = useStyles();
    const [searchText,setSearchText]=useState<string>(searchValue?searchValue:"");

    const onChange=(event:React.ChangeEvent<{value:unknown;}>)=>{
        setSearchText(event.target.value as string);
    }
    const handleClose=()=>{
        setSearchText('');
    }

    return (
        <Paper className={classes.root} >
            <SearchIcon className={classes.icon} />
            <InputField placeholder={placeholder} value={searchText} disableUnderline={true} data-testid="search-field" onChange={onChange}>
            </InputField>
            {searchText && <CloseIcon className={classes.closeIcon} onClick={handleClose} />}
        </Paper>
    );
}

export default SearchBar;