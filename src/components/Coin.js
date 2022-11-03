import React from "react"

function Coin({ TotalSupply, CirculatingSupply, Staking, BlockHeight, Burn }) { 
 
    return ( 
      <div className="coin"> 
        <div className="Name"> 
          <h1> Luna Classic Community</h1> 
        </div> 
   
        <div className="TSupply"> 
          <h3>Total Supply:<br></br>{TotalSupply} LUNC</h3> 
        </div> 
   
        <div className="CSupply"> 
          <h3> Circ. Supply: {CirculatingSupply} LUNC</h3> 
        </div> 
   
        <div className="Staking"> 
          <h3>Pool Staking: {Staking} LUNC</h3> 
        </div> 
   
        <div className="Block"> 
        <h3>Block Height:{BlockHeight}</h3> 
        </div> 
   
     
         
        <div className="Burn">
        <h3>Last 10 Burn: </h3>


        <div>

          {Burn.map((item) => (
            <table>
              <thead>
                <tr>
                  <th className="id">ID</th>
                  <th className="block">Block</th>
                  <th className="amount">Amount</th>

                </tr>
              </thead>

              <tbody>
                <tr key={item.id}>
                  <td>{item.chainId}</td>
                  <td>{item.height}</td>
                  <td>{(item.amount / 1000000).toFixed(2)} Lunc</td>
                  

                </tr>
              </tbody>
            </table>
          ))}
          </div>
        </div>
          
      </div> 
      
    ) 
  }
  export default Coin;