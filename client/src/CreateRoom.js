import React from 'react';
import {useHistory} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
function CreateRoom() {
    let history = useHistory();
    const createroom = ()=>{
        const roomId= uuidv4();
        history.push(`/room/${roomId}`);
    }
    return (
        <div class="row justify-content-center">
        <div class="col-md-6">
       
          <div class="card card-outline-secondary">
            <div class="card-header">
              <h3 class="mb-0">Login</h3>
            </div>
            <div class="card-body">
              <form autocomplete="off" class="form" id="formLogin" name="formLogin" role="form">
                <div class="form-group">
                  <label for="uname1">Username</label> 
                    <input class="form-control" id="uname1" name="uname1" required="" type="text" placeholder="Enter Name"/>
                </div>
                <div class="form-group">
                  <label>Password</label> 
                    <input autocomplete="new-password" class="form-control" id="pwd1" required="" type="password"/>
                </div>
                <div class="form-check small">
                  <label class="form-check-label">
                    <input class="form-check-input" type="checkbox"/> 
                    <span>Remember me on this computer</span>
                  </label>
                </div>
                <button class="btn btn-success btn-lg float-right" type="button" onClick={createroom}>Login</button>
              </form>
            </div>
            </div>
        </div>
      </div>
    )
}

export default CreateRoom;
