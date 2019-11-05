import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Button from '.././component/form/button';
import { loginAction, buttonLoading } from '.././services/redux/action';

class Login extends Component {

  constructor(props){
    super(props);

    this.state = {
      email : ``,
      password : ``,
      buttonId : props.idButton,
    }
  }

  buttonLoading = (e) => {

    const {getIdButton} = this.props;

    getIdButton(e.target.id);
  }

  inputAction = (e) => {

    this.setState({
      [e.target.id] : e.target.value,
    })
  }

  loginAction = async (event) => {

    event.preventDefault();
    const {email, password} = this.state;
    const {history, loginAPI} = this.props;
    const res = await loginAPI({email, password}).catch(err => err);

    if(res) {

      this.setState({

        //user account
        email : '',
        password : '',

      })

      history.push('/')
    }

    else {

      this.setState({

        //user account
        password : '',

      })
    }
  }

  render() {

    return (

      <div className="container">
        <div className="row my-4">
          <div className="col-md-4 mx-auto mt-5">
            <div className="card shadow">
              <div className="card-header">
                <h4 className="card-text text-muted">
                  <i className="fa fa-comments-o fa-fw"></i>
                  <b>Chatnesia</b>
                </h4>
              </div>
              <div className="card-body">
                <form onSubmit={this.loginAction}>
                <div className="form-group">
                  <label htmlFor="email">email</label>
                  <input type="email" id="email" className="form-control" onChange={this.inputAction} value={this.state.email} placeholder="email anda" />
                </div>

                <div className="form-group">
                  <label htmlFor="password">password</label>
                  <input type="password" id="password" className="form-control" onChange={this.inputAction} value={this.state.password} placeholder="password anda" />
                </div>

                <div className="form-group">
                  <Button props={this.props} onClick={this.buttonLoading} id="SubmitLoading" title="Login" className="btn btn-outline-success btn-block" type="submit" loading={this.props.isLoading}/>
                </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const reduxState = (state) => ({

  idButton : state.buttonLoading,
  isLoading : state.isLoading

})

const reduxDispatch = (dispatch) => ({

  loginAPI : (data) => dispatch(loginAction(data)),
  getIdButton : (data) => dispatch(buttonLoading(data)),
})

export default withRouter(connect(reduxState, reduxDispatch)(Login));
