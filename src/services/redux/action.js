import firebase from '../firebase';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})

export const buttonLoading = (idButton) => (dispatch) => {

  dispatch({
    type : "BUTTON_LOADING",
    value : idButton,
  })

}

export const loginAction = (data) => (dispatch) => {

  return new Promise ((resolve, reject) => {

    dispatch({
      type : "LOADING",
      value : true,
    })

    firebase.auth().signInWithEmailAndPassword(data.email, data.password)
    .then((res) => {
      console.log(res.user)

      localStorage.setItem('userData', JSON.stringify(res.user));
      localStorage.setItem('isLogin', true)

      dispatch({
        type : "LOADING",
        value : false,
      })

      Toast.fire({
        type: 'success',
        title: `Selamat datang ${data.email}`,
      })

      resolve(true)
    })

    .catch((error) => {

      let pesanError = error.message;

      dispatch({
        type : "LOADING",
        value : false,
      })

      Toast.fire({
        type: 'error',
        title: pesanError
      })

      reject(false)
    })
  })
}

export const userGet = () => (dispatch) => {

  Toast.fire('Memuat Kolom Chat');
  firebase.database().ref('users').on('value', (user) => {

    const arr = [];

    if(user === null) {

      Toast.fire({
        type : 'info',
        title : 'USER TIDAK ADA'
      })
    }
    else {

      // eslint-disable-next-line
      Object.keys(user.val()).map(uid => {
        arr.push({
          id : uid,
          arr : user.val()[uid]
        })
      });

      dispatch({
        type : "USER_LIST",
        value : arr,
      })
    }
  })
}

export const userAdd = (data) => (dispatch) => {

  return new Promise ((resolve, reject) => {

    firebase.database().ref(`users/${data.uid}`).set({
      email : data.email,
      friends : null,
    })
    .then((res) => {

      Toast.fire('fitur chat terbuka')
      resolve(true)
    })
    .catch((err) => {

      Toast.fire('error')
      reject(false)
    });
  })
}

export const chatGet = (data) => (dispatch) => {

  Toast.fire('Menyiapkan Kolom Chat')

  firebase.database().ref(`pChat/${data.uid}/cList`).on('value', (chat) => {

    const arr = [];

    if(chat === null) {

      Toast.fire({
        type : 'info',
        title : 'CHAT TIDAK ADA'
      })
    }
    else {

      // eslint-disable-next-line
      Object.keys(chat.val()).map(uid => {
        arr.push({
          id : uid,
          arr : chat.val()[uid]
        })
      });

      dispatch({
        type : "CHAT_LIST",
        value : arr,
      })

      console.log(arr)
    }
  })
}

export const chatAdd = (data) => (dispatch) => {



  firebase.database().ref(`pChat/${data.uidSender}/cList/${data.uidReceiver}`).set({

    eSender : data.emailSender,
    eReceiver : data.emailReceiver,
    dMessage :
    {
      type : 'sender',
      timestamp : 'today',
      message : 'asdasdasd'
    }
  })
  .catch((err) => {

    Toast.fire(err)

  });
}
