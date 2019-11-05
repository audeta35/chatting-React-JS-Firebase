import React, { Component } from 'react';
import { connect } from 'react-redux';

import {withRouter} from 'react-router-dom';
import Sidebar from '.././component/sidebar';
import Content from '.././component/content';

class Main extends Component {

  constructor(props){

    super(props);

    if(!localStorage.getItem('isLogin')) {

      props.history.push('/login')
    }

    const userData = localStorage.getItem('userData');
    const userJSON = JSON.parse(userData);

    this.state = {

      user : userJSON
    }
  }

  render() {

    return(

      <div className="container">
      	<div className="messaging mt-3">
      		<div className="inbox_msg bg-light">
            <Sidebar user={this.state.user} handleContent={this.handleContent}/>
            <Content user={this.state.user}/>
      		</div>
      	</div>
      </div>
    )
  }
}


const reduxState = (state) => ({

  dataUser : state.user,

})

export default withRouter(connect(reduxState, null)(Main));
