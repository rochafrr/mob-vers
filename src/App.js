import "./App.css"; 
import { useEffect, useState } from "react"; 
import Coin from "./components/Coin"; 
 
function App() { 
  const [ totalSupply, setTotalSupply ] = useState() 
  const [ staking, setStaking ] = useState()
  const [ pool, setPool ] = useState() 
  const [ latestBlock , setLatestBlock ] = useState() 
 
   
  useEffect(() => { 
    fetchData1(); 
    fetchData2(); 
    fetchData3(); 
    fetchData4(); 
     
    
  }, []); 
 
  const fetchData1 = async () => { 
    try { 
      const data = await fetch("https://fcd.terra.dev/v1/totalsupply/luna"); 
      const result1 = await data.json(); 
      setTotalSupply(result1) 
    } catch (err) { 
      console.error(err); 
    } 
  } 
 
 
 
  const fetchData2 = async () => { 
    try { 
      const data2 = await fetch("https://lcd.terra.dev/cosmos/staking/v1beta1/pool"); 
      const result2 = await data2.json(); 
      setStaking(result2.pool.bonded_tokens ); 
    } catch (err) { 
      console.error(err); 
    } 
  } 
 
  const fetchData3 = async () => { 
    try { 
      const data3 = await fetch("https://fcd.terra.dev/blocks/latest"); 
      const result3 = await data3.json(); 
      setLatestBlock(result3.block.header.height) 
    } catch (err) { 
      console.error(err); 
    } 
  } 

  const fetchData4 = async () => {
    try {
      const data4 = await fetch("https://lcd.terra.dev/cosmos/distribution/v1beta1/community_pool");
      const result4 = await data4.json();
      const luncCommunityPool = result4.pool.filter(
        (coin) => coin.denom === 'uluna',
      )[0].amount;
      setPool(luncCommunityPool);
      console.log(luncCommunityPool);
    
     
    
      
    } catch (err) {
      console.error(err);
    }
  }


 
 
 

 
 
  return ( 
    <div className="App"> 
      <Coin 
        TotalSupply={totalSupply} 
        Pool={pool}
        Staking={staking} 
        BlockHeight={latestBlock} 
        
      /> 
    </div> 
   );  
} 

export default App;
