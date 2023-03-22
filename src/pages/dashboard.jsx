import Profile from "../components/dashboard/profile"
import Analytics from "../components/dashboard/analytics"

export default function Dashboard() {
    return (
        <div
            className="
            m-1 p-5
            "
        >
            <div className="grid lg:grid-cols-3 md:grid-cols-1">
                <Profile />
                <Analytics />
            </div>
        </div>
    )
}