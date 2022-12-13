import './Heading.css';

export default function Heading({title, color}) {
    return (
        <div className="heading" style={{padding: "1em 0em", backgroundColor: "rgb("+color[0]+","+color[1]+","+color[2]+")"}}>
            <div className="cell">
                <h2>{title}</h2>
            </div>
        </div>
    );
};