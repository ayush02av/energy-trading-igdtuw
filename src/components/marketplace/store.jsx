const storeItems = [
    {
        title: '100 units of Solar Energy',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sed repudiandae deserunt excepturi dolore reprehenderit aliquid facere, voluptate ab unde voluptates distinctio temporibus cum eaque maxime esse perferendis ratione dignissimos.',
        price: 1500.00,
        currency: 'INR',
        date: '23/03/2023',
        by: 'John Doe'
    },
    {
        title: '100 units of Solar Energy',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sed repudiandae deserunt excepturi dolore reprehenderit aliquid facere, voluptate ab unde voluptates distinctio temporibus cum eaque maxime esse perferendis ratione dignissimos.',
        price: 1500.00,
        currency: 'INR',
        date: '23/03/2023',
        by: 'John Doe'
    },

]


export default function Store() {
    return (
        <div>
            <div className="flex flex-wrap">
                {storeItems.map(function (storeItem, index) {
                    return (
                        <div
                            key={index}
                            className="
                            border rounded
                            bg-gray-200 hover:bg-gray-300
                            flex-0
                            m-2 p-5
                            "
                        >
                            <div className="font-semibold">{storeItem.title}</div>
                            <div className="text-gray-700">{storeItem.content.slice(0, 50)}</div>
                            <div className="italic text-sm mt-5">By: {storeItem.by}</div>
                            <div className="float-left p-2">{storeItem.price} {storeItem.currency}/-</div>
                            <div className="float-right hover:bg-blue-500 hover:text-white rounded p-2 mx-2 cursor-pointer">Buy Now</div>
                           
                            <div className="float-right hover:bg-blue-200 rounded p-2 mx-2 cursor-pointer">Add to Cart</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}