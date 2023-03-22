import React, { useState } from 'react';
import './marketplace.css'
const Marketplace = () => {
  const [energyList, setEnergyList] = useState([
    { id: 1, name: 'Solar Energy', price: 0.01, supply: 1000 },
    { id: 2, name: 'Wind Energy', price: 0.02, supply: 500 },
    { id: 3, name: 'Hydro Energy', price: 0.03, supply: 250 },
    { id: 4, name: 'Geothermal Energy', price: 0.04, supply: 100 },
  ]);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Peer-to-Peer Energy Trading Marketplace</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {energyList.map((energy) => (
          <div key={energy.id} className="bg-white shadow-md rounded-lg p-4">
            <div className="text-lg font-bold">{energy.name}</div>
            <div className="text-gray-500 text-sm mb-4">Price: {energy.price} ETH / kWh</div>
            <div className="text-gray-500 text-sm mb-4">Available Supply: {energy.supply} kWh</div>
            <button className="btn">
              Buy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
