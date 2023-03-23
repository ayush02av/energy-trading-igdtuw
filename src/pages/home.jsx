import { Link } from "react-router-dom";
import Earth from '../../public/earth.png'

export default function Home() {
    return (
        <div
            className="h-screen w-full grid place-items-center text-8xl font-bold"
            style={{
                backgroundRepeat: `no-repeat`,
                backgroundSize: `cover`,
                backgroundColor: "lightgreen",
            }}
        >
            <h5 style={{
                fontSize:"24px",
                color:"white",
                marginBottom:"20px",
                marginTop:"30px",
             }}>Peer to peer</h5>
            <h2 style={{
                fontSize:"56px",
                color:"#00796b",
                fontWeight:"bold",
                marginBottom:"40px"
             }}>Energy trading</h2>
          <img src={Earth} alt="earth img" 
          style={{
            height:'650px',
            width:"50%",
            marginTop:"-100px",
            borderRadius:"50px"
          }}/>
            Energy Trading
        </div>
    )
}
