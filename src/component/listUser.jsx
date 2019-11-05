import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';

import { userGet, chatAdd } from '.././services/redux/action';

class ListUser extends Component {

  handleChat = (data) => {

    this.props.chatAdd({

      uidSender : this.props.userMy.uid,
      uidReceiver : data.target.id,
      emailSender : this.props.userMy.email,
      emailReceiver : data.target.value,

    })
  }

  componentDidMount() {
    this.props.userGet()
  }

  render(){

    return(

      <Fragment>
      {
        this.props.user.map((listUsers) => {

          return(

            <li className="list-group-item bg-light text-center text-success" key={listUsers.id}>
              <button className="btn btn-block btn-outline-dark text-truncate" value={listUsers.arr.email} id={listUsers.id} onClick={this.handleChat}>
                <i className="fa fa-user-plus mr-2"></i>
                {listUsers.arr.email}
              </button>
            </li>
          )
        })
      }
      </Fragment>
    )
  }
}

const reduxDispatch = (dispatch) => ({

  userGet : () => dispatch(userGet()),
  chatAdd : (data) => dispatch(chatAdd(data))
})

export default connect(null, reduxDispatch)(ListUser);
