import { Link } from "react-router-dom";
import Earth from '../../public/earth.png'

export default function Home() {
    return (
        <div
            className="h-screen w-full grid place-items-center font-bold"
            style={{
                backgroundRepeat: `no-repeat`,
                backgroundSize: `cover`,
                backgroundColor: "lightgreen",
            }}
        >
            <div className="flex justify-center items-center h-full w-full px-20">
                <div className="flex flex-col justify-center items-start w-1/2 pr-12">
                    <h5 style={{
                        fontSize:"34px",
                        color:"white",
                        marginBottom:"20px",
                        marginTop:"30px",
                     }}>Peer to peer</h5>
                    <h2 style={{
                        fontSize:"66px",
                        color:"#00796b",
                        fontWeight:"bold",
                        marginBottom:"40px"
                     }}>Energy trading</h2>
                    <div className="flex justify-start">
                        <Link to="/marketplace" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4">
                            Buy Energy
                        </Link>
                        <Link to="/community" className="bg-green-300 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4">
                            Join Our Community
                        </Link>
                    </div>
                </div>
                <div className="w-1/2">
                    <img src={Earth} alt="earth img" 
                    style={{
                        height:'550px',
                        width:"100%",
                        borderRadius:"50px"
                    }}/>
                </div>
            </div>
            <h5 style={{
                fontSize: "24px",
                color: "white",
                marginBottom: "20px",
                marginTop: "30px",
            }}>Peer to peer</h5>
            <h2 style={{
                fontSize: "56px",
                color: "#00796b",
                fontWeight: "bold",
                marginBottom: "40px"
            }}>Energy trading</h2>
            <img src={Earth} alt="earth img"
                style={{
                    height: '650px',
                    width: "50%",
                    marginTop: "-100px",
                    borderRadius: "50px"
                }} />
        </div>
    )
}
