import React,{useState} from "react";
import { v1 as uuid } from "uuid";
import styled from 'styled-components';
const Outerdiv= styled.div`
display:flex;
justify-content:center;
align-items:center;
height:100vh;
background:#696969;
`;


const FaceTime = (props) => {
  const [joinid,setJoinId]=useState(null);

    function create() {
        const id = uuid();
        props.history.push(`/room/${id}`);
    }


    const joinroom=()=>{
      props.history.push(`/room/${joinid}`);
    }

    

    return (
        <Outerdiv>
        <div class="col-md-6 w-100">
          
          <div class="card card-outline-secondary shadow-lg">
            <div class="card-header">
              <h3 class="mb-0 text-center">FaceTime</h3>
            </div>
            <div class="card-body">
              <form autocomplete="off" class="form" id="formLogin" name="formLogin" role="form">
                {/* <div class="form-group">
                  <label for="uname1">Username</label> 
                    <input class="form-control" id="uname1" name="uname1" required="" type="text"/>
                </div> */}


                <div className=" w-100 mb-2 ">
               
                {/* <i className="fas  fa-plus-circle "></i> */}
                <button className=" btn btn-block btn-outline-success " onClick={create}>Create A Room</button>
                </div>
               
                <div className=" d-flex justify-content-around mb-2 ">
                <div className="input_container w-75">
                    <input type="text" className="awsome_input" placeholder="Join a Group" value={joinid} onChange={(e)=>setJoinId(e.target.value)} />
                    <span className="awsome_input_border"/>
                </div>
                {/* <i className="fas  fa-plus-circle "></i> */}
                <button className=" button btn1" onClick={joinroom}><i className="fas   fa-arrow-alt-circle-right fa-2x"></i></button>
                </div>
              
                
              </form>
            </div>
            </div>
        </div>
      </Outerdiv>
    );
};

export default FaceTime;
