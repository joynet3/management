import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'
import { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root : {
    width : '100%' ,
    marginTop : theme.spacing.unit * 3,
    overflow : 'auto'
  },
  table : {
    minWidth : 1080
  }
})

const datas = [
  {
    "id" : '1',
    "image" : "http://placeimg.com/65/65/any",
    "name" : "조일근",
    "brthday" : "19760126",
    "gender" : "남",
    "job" : "프로그래머",
  },
  {
    "id" : '2',
    "image" : "http://placeimg.com/65/65/any",
    "name" : "홍길동",
    "brthday" : "19780811",
    "gender" : "남",
    "job" : "백수",
  },
  {
    "id" : '3',
    "image" : "http://placeimg.com/65/65/any",
    "name" : "김개똥",
    "brthday" : "19760426",
    "gender" : "남",
    "job" : "몰라",
  }
]



class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
        <TableHead>
            <TableRow>
              <TableCell> ID </TableCell>
              <TableCell> 이미지 </TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생일 </TableCell>
              <TableCell>성별 </TableCell>
              <TableCell> 직업 </TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
          {
            datas.map (c => {
              return (
                <Customer 
                    key={c.id}
                    id={c.id}
                    image={c.image}
                    name={c.name}
                    brthday={c.brthday}
                    gender={c.gender}
                    job={c.job}
                  />
              )
            })
          }
      </TableBody>
      </Table>
    </Paper>
    );
  }
}

export default withStyles(styles)(App);
