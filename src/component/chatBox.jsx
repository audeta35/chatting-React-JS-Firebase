import React, { Component, Fragment } from 'react';
import picture from '.././user.png';

class ChatBox extends Component {

  render() {

    return (

      <Fragment>
        <nav className="navbar navbar-dark bg-success">
          <div className="navbar-brand">
            <img src={picture} width="30" className="mr-2" height="30" alt=""/>
            {this.props.dChat.eReceiver}
          </div>
        </nav>

        <div className="mesgs bg-light">
          <div className="msg_history">

            <div className="incoming_msg">
              <div className="received_msg">
                <div className="received_withd_msg">
                  <p className="bg-white">
                    We work directly with our designers and suppliers,
                    and sell direct to you, which means quality, exclusive
                    products, at a price anyone can afford.
                  </p>
                  <span className="time_date"> Anda | 11:01 AM</span>
                </div>
              </div>
            </div>

            <div className="outgoing_msg">
              <div className="sent_msg">
                <p className="bg-success text-white">
                  Oke Boss
                </p>
                <span className="time_date"> Siapa | 11:01 AM</span>
              </div>
            </div>

          </div>

            <div className="row">
              <div className="form-group col-md-12">
                <textarea className="form-control" id="" cols="30" rows="2" placeholder="tekan enter untuk mengirim pesan..."></textarea>
              </div>
            </div>

        </div>
      </Fragment>
    )
  }
}

export default ChatBox;
