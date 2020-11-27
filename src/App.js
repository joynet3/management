import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'
import { Component } from 'react';

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
    return (
    <div>
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
    </div>
    );
  }
}

export default App;
