import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import ReactDOM from 'react-dom';

import icon from '.././chat.svg';
import ListUser from './listUser';
import ChatBox from './chatBox';
import { userAdd, chatGet } from '.././services/redux/action';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})

class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {

      user : props.user
    }
  }

  componentDidMount() {

    this.props.ambilchat({

      uid : this.state.user.uid
    });
  }

  handleChat = (chat) => {

    
  }

  logout = () => {

    Toast.fire('Logout');

    localStorage.clear();
    window.location.reload();
  }

  render() {

    const {ListChat} = this.props;

    return (

      <Fragment>
        <div className="inbox_people">
          <div className="headind_srch">
            <nav className="navbar navbar-light bg-light">
              <div className="navbar-brand">
                <img src={icon} width="30" height="30" className="d-inline-block align-top mr-2" alt="" />
                <b className="text-muted">Chatnesia</b>
              </div>

              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <button className="btn btn-defualt" onClick={this.logout}>
                    <i className="fa fa-sign-out"></i>
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          <div className="inbox_chat">

            {
              ListChat.map((chat) => {

                return (
                  <div className="chat_list" key={chat.id} onClick={() => this.handleChat(chat)}>
                    <div className="chat_people">
                      <div className="chat_img">
                        <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" />
                      </div>

                      <div className="chat_ib">
                        <h5 className="text-truncate">{chat.arr.eReceiver}</h5>
                        <p className="text-truncate">
                        {
                          chat.arr.dMessage !== false ?
                          (chat.arr.dMessage.message) : null
                        }
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })
            }

            <div className="my-3">

              <div className="collapse bg-light show" id="collapseExample">

                <p className="text-center text-muted">
                  <b>Daftar User</b>
                </p>

                <ul className="list-group" id="userChat">
                  <ListUser user={this.props.ListUser} userMy={this.props.user}/>
                </ul>
              </div>

            </div>
          </div>
          <hr/>
          <p className="text-center text-muted">
            <button className="btn btn-outline-success badge-pill" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
              NgeChat Yuk
            </button>
          </p>
        </div>
      </Fragment>
    )
  }
}

const reduxState = (state) => ({

  ListUser : state.userList,
  ListChat : state.chatList,
})

const reduxDispatch = (dispatch) => ({

  ambilchat : (data) => dispatch(chatGet(data)),
  tambahuser : (data) => dispatch(userAdd(data)),
})

export default connect(reduxState, reduxDispatch)(Sidebar);
