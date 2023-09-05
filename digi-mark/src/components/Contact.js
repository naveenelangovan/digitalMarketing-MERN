import React, { useState } from "react";
import axios from "axios";
import Footer from "./Footer";

// import RegisterationScreen from "./RegisterationScreen";
function Contact () {
    const [msg, setMsg] = useState("")
    const [mail, setMail] = useState("")
    const [name, setName] = useState("")
    let submit

    submit=async(e)=> {
        e.preventDefault()

        try {

            alert("Your Message is Submitted, We will contact you soon...")
            
            await axios.post("http://localhost:8000/",{
                msg,mail,name
            })

        } catch (e) {
            console.log(e)
            
        }

    }
    return (
        <>
        <section className="section">
        <h2 className="head">Contact Us</h2>
        <form action="POST" className="form" >
            <div>
                <div className="input-group">
                    <label for="name"><i class="fa-solid fa-user"></i> Your Name</label>
                    <input className="input" type="text" id="name" placeholder="Enter your Name" required onChange={(e)=>{setName  (e.target.value)}} /> 
                </div>
                <div className="input-group">
                    <label for="email"><i class="fa-solid fa-envelope"></i> Email Id</label>
                    <input className="input" type="email" id="email" placeholder="Enter your Mail ID" required onChange={(e)=>{setMail(e.target.value)}} /> 
                </div>
                <div className="input-group">
                    <label for="message"><i class="fa-solid fa-comments"></i> Your message</label>
                    <textarea className="input" id="message"  rows="8" placeholder="Enter your message" required onChange={(e)=>{setMsg(e.target.value)}}></textarea>               
                </div>
             <button className="btn" onClick={submit} value="submit" type="submit">SUBMIT<i class="fa-solid fa-paper-plane"></i></button>
            </div>
        </form>
        </section>
        <Footer />
        {/* <RegisterationScreen /> */}
        </>
    )
}
export default Contact