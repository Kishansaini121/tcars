import React from 'react'

function Section(props) {
    let bg ={
        backgroundImage:`url('tesla images/${props.img}')`,
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        height:'100vh'
    }
  return (
    <div className="section" style={bg}>
       <div className="heads">
        <h1>{props.title}</h1>
        <p>{props.tag}</p>
        </div>
        <div className="btns">
            <a href="">{props.button1}</a>
            <a href="">{props.button2}</a>
        </div>
        

    </div>
  )
}

export default Section