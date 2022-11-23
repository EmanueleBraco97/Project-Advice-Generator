import "./App.css";
import { useState, useEffect } from "react";
import Advice from "./components/Advice";
import ButtonChangeAdvice from "./components/ButtonChangeAdvice";
import Loading from "./components/Loading";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [intervalId, setIntervalId] = useState();

  const getData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://api.adviceslip.com/advice`);
      if (!response.ok) {
        throw new Error(`This is an Error: The status is ${response.status}`);
      }
      let actualData = await response.json();
      setData(actualData);
    } catch (error) {
      setData([]);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
    let interval = setInterval(getData, 60000);
    setIntervalId(interval);
  }, []);

  //Genera consiglio ogni Minuto//
  // useEffect(() => {
  //   let interval = setInterval(() => {
  //     getData();
  //   }, intervalId);
  //   return () => clearInterval(interval);
  // }, [intervalId]);

  const handleDisabled = () => {
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 2000);
  };

  return (
    <div className="container">
      <section className="section">
        <Loading isLoading={isLoading} />
        <Advice data={data} />
        <ButtonChangeAdvice
          getData={getData}
          disabled={disabled}
          handleDisabled={handleDisabled}
          intervalId={intervalId}
          setIntervalId={setIntervalId}
        />
      </section>
    </div>
  );
}

export default App;
