import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './Form.css';
import Success from './Success';

export default function Form({color}) {
    let [usn, setUSN] = useState("");
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [cgpa, setCgpa] = useState(null);
    let [add, setAdd] = useState("");
    let [fees, setFees] = useState(null);
    let [paidOn, setPaidOn] = useState("");

    let handleSubmit = (e) => {
        e.preventDefault();

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
            <React.StrictMode>
                <Success usn={usn} name={name} email={email} cgpa={cgpa} add={add} fees={fees} paidOn={paidOn} />
            </React.StrictMode>
        );
    }

    return (
        <div className="form" style={{padding: "1em 0em", backgroundColor: "rgb("+color[0]+","+color[1]+","+color[2]+")"}}>
            <form onSubmit={handleSubmit}>
                <div className="input">
                    <div className="cell">
                        USN
                    </div>
                    <div className="cell">
                        <input
                            type="text"
                            placeholder="Enter USN"
                            required
                            pattern="[0-9]{1}RV[0-9]{2}[A-Z]{2}[0-9]{3}"
                            onChange={(e) => {
                                setUSN(e.target.value);
                            }}
                        ></input>
                    </div>
                </div>
                <div className="input">
                    <div className="cell">
                        Name
                    </div>
                    <div className="cell">
                        <input
                            type="text"
                            required
                            placeholder="Enter Name"
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        ></input>
                    </div>
                </div>
                <div className="input">
                    <div className="cell">
                        Email
                    </div>
                    <div className="cell">
                        <input
                            type="email"
                            required
                            placeholder="Enter Email"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        ></input>
                    </div>
                </div>
                <div className="input">
                    <div className="cell">
                        CGPA
                    </div>
                    <div className="cell">
                        <input
                            type="number"
                            required
                            min={0}
                            max={10}
                            placeholder="Enter CGPA"
                            onChange={(e) => {
                                setCgpa(e.target.value);
                            }}
                        ></input>
                    </div>
                </div>
                <div className="input">
                    <div className="cell">
                        Address
                    </div>
                    <div className="cell">
                        <textarea
                            required
                            placeholder="Enter Address"
                            onChange={(e) => {
                                setAdd(e.target.value);
                            }}
                        ></textarea>
                    </div>
                </div>
                <div className="input">
                    <div className="cell">
                        Fees Paid
                    </div>
                    <div className="cell">
                        <input
                            type="number"
                            required
                            min={0}
                            max={300000}
                            placeholder="Enter Amount"
                            onChange={(e) => {
                                setFees(e.target.value);
                            }}
                        ></input>
                    </div>
                </div>
                <div className="input">
                    <div className="cell">
                        Fees Paid On
                    </div>
                    <div className="cell">
                        <input
                            type="date"
                            required
                            placeholder="Enter Date"
                            onChange={(e) => {
                                setPaidOn(e.target.value);
                            }}
                        ></input>
                    </div>
                </div>
                <div className="input" style={{justifyContent: "center"}}>
                    <input type="submit" value="REGISTER" style={{color: "white", fontSize: "14px", fontWeight: "bold", height: "4em", padding: "0em 0.5em", backgroundColor: "blueviolet"}}></input>
                </div>
            </form>
        </div>
    );
};