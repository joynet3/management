import React from 'react'

class Customer extends React.Component {
    render() {
        return (
            <div>
                <CustomerProfile image={this.props.image} id={this.props.id} name={this.props.name}/>
                <CustomerInfo brthday={this.props.brthday} gender={this.props.gender} job={this.props.job}/>
            </div>
         );
    }
        
}

class CustomerProfile extends React.Component {
    render() {
        return (
            <div>
                <p><img src={this.props.image}/></p>
                <p>ID : {this.props.id}</p>
                <h1>{this.props.name}</h1>
            </div>
         );
    }
        
}


class CustomerInfo extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.brthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
         );
    }
        
}



export default Customer