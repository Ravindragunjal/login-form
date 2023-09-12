import React from 'react';
import './Signup.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup(){
    // const history = useHistory("");
    const [firstname, setFirstName]=useState("");

    const [lastname, setLastName]=useState("");
    const [ email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [confpassword, setConfpassword]=useState("");
    const [passwordError, setPasswordError]=useState(false);
    const [ birthday, setBirthday]=useState([]);
    const [gender, setGender]=useState('');


    const register =(e)=>{
        e.preventDefault();
        if (password !==confpassword){
            setPasswordError(true);
        }else{
            setPasswordError(false);
        }

        console.log("firstname:" , firstname )
        console.log("Lastname:" , lastname )
        console.log("Email:" ,email )
        console.log("Password:" ,password )
        console.log("ConfirmPassword:" ,confpassword )
        console.log("gender:" ,gender )

    }
    return(
        <>
        <div className="register">
            <div className="register_container">

                <h1>Sign up</h1>
                <p>Its quick and easy</p> 
                <div className="hr3"/>
                <from onSubmit={register}>
                    <div className="row">
                        <input onChange={(e)=>{
                            setFirstName(e.target.value);
                        }}
                        className="register_name"
                        type="name"
                        placeholder="First Name" required />
                        <input onChange={(e)=>{
                            setLastName(e.target.value);

                        }}
                        className="register_name"
                        type="name"
                        placeholder="Last Name" required />
                        </div>
                        <center className="center">
                            <input onChange={(e)=>{
                                setEmail(e.target.value);
                            }} 
                            type="email"
                            placeholder="Email" required />

                        </center>
                      
                      <center className="center">
                        <input onChange={(event)=> setPassword(event.target.value)}
                        type="password"
                        placeholder="New Password" maxLength={"10"} required />

                       <input onChange={(event)=> setConfpassword(event.target.value)}
                        type="password"
                        placeholder="Confirm Password" maxLength={"10"} required />

                        </center>

                        {passwordError && <p className="warning">*password do not match *. </p>}
                        <h5 className='register_date'>Date of Birth</h5>

                        <div className='row'>
                            <select className='register_date2' onChange={(e)=>setBirthday([...birthday,e.target.value])}>

                                <option value="Day">Day</option>
                                <option value="1">1</option>
                                <option value="2">2</option> 
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                            </select>
                            <select className='register_date3' onChange={(e)=>setBirthday([...birthday, e.target.value])}>

                            <option value="Day">Month</option>
                            <option value="1">jan</option>
                            <option value="2">feb</option>
                            <option value="3">mar</option>
                            <option value="4">apr</option>
                            <option value="5">may</option>
                            <option value="6">jun</option>
                            <option value="7">july</option>
                            <option value="8">Aug</option>
                            <option value="9">Sep</option>
                            <option value="10">oct</option>
                            <option value="11">nov</option>
                             <option value="12">Dec</option>
                             
                            </select>
                           
         
   <select className='register_date3' onChange={(e)=>setBirthday([...birthday, e.target.value])}>

                         <option value="Day">Year</option>
                        <option value="2020">2020</option>
                      <option value="2019">2019</option>
                       <option value="2018">2018</option>
                      <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                     <option value="2014">2014</option>   
                  <option value="2013">2013</option>
                      <option value="2012">2012</option>
                   <option value="2011">2011</option>
                  <option value="2010">2010</option>
                  <option value="2009">2009</option>

</select>

</div>

    <h5 className='register_gender' >Gender</h5>
     <div className='sizing'>
        <div className='register_radiocontainer'>
            <div className='wrapper'>
                <label>Female</label>
                <input onChange={(e)=>setGender(e.target.value)} type='radio'
                name='gender' value="Female" />
                </div>
                
                <div className='wrapper'>
                <label>Male</label>
                <input onChange={(e)=>setGender(e.target.value)} type='radio'
                name='gender' value="Male" />
                </div>

                <div className='wrapper'>
                <label>others</label>
                <input onChange={(e)=>setGender(e.target.value)} type='radio'
                name='gender' value="others" />
                </div>
               </div>
               </div>

               <p className='register_policy'>
                By clicking signup, you are agree to our {" "}
                <span>terms, Data policy</span> and <span>Cookies policy</span>
                you may receive sms notification from us and can opt out at any time. 
               </p>
                     <center>
                        <button onClick={register} type='submit' className='register_register'>Sign Up </button>

                     </center>

                    <center>
                        <Link to="/"> <p className='register_login'>Already have an Account ?</p></Link>
                        </center>
                                    </from>
                                    </div>
                            </div>
                            </>
    ) 
                        }
                        export default Signup;










    




