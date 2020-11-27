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




class App extends Component {
  state = {
    customer:""
  }

  componentDidMount() {
    this.callApi()
    .then(res => this.setState({customer:res}))
    .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

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
            this.state.customer ?
            this.state.customer.map (c => {
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
            }) : ''
          }
      </TableBody>
      </Table>
    </Paper>
    );
  }
}

export default withStyles(styles)(App);
