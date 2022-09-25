import React, { useState, useEffect } from 'react';

import Input from "./Input";
import Axios from 'axios';




function App() {
  const [USERNAME, setusername] = useState("");
  const [PASSWORD, setpassword] = useState("");
  const Submit = () => {
    useEffect(
      () => {
        Axios({
          method: 'post',
          url: "http://localhost:3001/post",
          data: {
            username: USERNAME,
            Password: PASSWORD
          }
        });


      },[]);
  }
  // function Submit() {
  //   Axios({
  //     method: 'post',
  //     url: "http://localhost:3001/post",
  //     data: {
  //       username: "yash",
  //       Password: "yash"
  //     }
  //   }).then(function (response) {
  //     console.log(response);
  //   })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }

  return (
    <form className="form" method="post">
      <Input type="text" name="USERNAME" placeholder="Username" onChange={(e) => { setusername(e.target.value) }} />
      <Input type="password" name="PASSWORD" placeholder="Password" onChange={(e) => { setpassword(e.target.value) }} />
      <button type="submit" onClick={Submit}>Login</button>
    </form>
  );
}

export default App;



