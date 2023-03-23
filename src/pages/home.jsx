import Marketplace from '../pages/marketplace.jsx'

export default function Home() {
    return (
        <div
            className="h-screen w-full grid place-items-center text-8xl font-bold"
            style={{
                backgroundImage: `url(https://d346xxcyottdqx.cloudfront.net/wp-content/uploads/2016/04/energy-trading-1.jpg)`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: `cover`
            }}
        >
            Energy Trading
        </div>
    )
}