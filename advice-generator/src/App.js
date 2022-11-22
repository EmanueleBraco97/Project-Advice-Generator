import "./App.css";
import { useState, useEffect } from "react";
import Advice from "./components/Advice";
import ButtonChangeAdvice from "./components/ButtonChangeAdvice";
import Loading from "./components/Loading";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  //Genera consiglio ogni Minuto//
  useEffect(() => {
    let interval = setInterval(() => {
      getData();
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <section className="section">
        <Loading isLoading={isLoading} />
        <Advice data={data} />
        <ButtonChangeAdvice getData={getData} />
      </section>
    </div>
  );
}

export default App;
