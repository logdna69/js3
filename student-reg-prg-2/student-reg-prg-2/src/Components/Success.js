import Heading from './Heading';
import './Success.css';

export default function Success({usn, name, email, cgpa, add, fees, paidOn}) {
    return (
        <div id="success">
            <div style={{width: "50em", paddingTop: "2em", paddingBottom: "0em", display: "flex", margin: "auto", justifyContent: "center"}}>
                <Heading title="REGISTRATION SUCCESSFUL!" color={[242, 215, 255]}></Heading>
            </div>
            <div style={{width: "50em", paddingBottom: "2em", display: "flex", margin: "auto", justifyContent: "center", backgroundColor: "rgb(242, 215, 255)"}}>
                <div>
                    <div><b>With following details:</b></div>
                    <div className="input">
                        <div className="cell">
                            USN
                        </div>
                        <div className="cell">
                            {usn}
                        </div>
                    </div>
                    <div className="input">
                        <div className="cell">
                            Name
                        </div>
                        <div className="cell">
                            {name}
                        </div>
                    </div>
                    <div className="input">
                        <div className="cell">
                            Email
                        </div>
                        <div className="cell">
                            {email}
                        </div>
                    </div>
                    <div className="input">
                        <div className="cell">
                            CGPA
                        </div>
                        <div className="cell">
                            {cgpa + " CGPA"}
                        </div>
                    </div>
                    <div className="input">
                        <div className="cell">
                            Address
                        </div>
                        <div className="cell">
                            {add}
                        </div>
                    </div>
                    <div className="input">
                        <div className="cell">
                            Fees Paid
                        </div>
                        <div className="cell">
                            {"Rs. " + fees}
                        </div>
                    </div>
                    <div className="input">
                        <div className="cell">
                            Fees Paid On
                        </div>
                        <div className="cell">
                            {paidOn}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};