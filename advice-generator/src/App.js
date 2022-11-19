import "./App.css";
import { useState, useEffect } from "react";
import Advice from "./components/Advice";
import ButtonChangeAdvice from "./components/ButtonChangeAdvice";
import Loading from "./components/Loading";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await fetch(`https://api.adviceslip.com/advice`);
      if (!response.ok) {
        throw new Error(`This is an Error: The status is ${response.status}`);
      }
      let actualData = await response.json();
      setData(actualData);
    } catch (error) {
      setData(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <section>
        <Loading isLoading={isLoading} />
        <Advice data={data} />
        <ButtonChangeAdvice getData={getData} />
      </section>
    </div>
  );
}

export default App;
