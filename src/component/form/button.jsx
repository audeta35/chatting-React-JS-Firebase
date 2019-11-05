import React from 'react';

const Button = ({props, onClick, id, title, className, type, loading}) => {

  if(loading === true && id === props.idButton) {

    return (
      <button onClick={onClick} id={id} type={type} className={className} disabled>
        <span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>
        {title}
      </button>
    )

  }
  return (

    <button onClick={onClick} id={id} type={type} className={className}>
      {title}
    </button>
  )
}

export default Button;
