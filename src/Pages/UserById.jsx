import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UserDetails = () => {
  const api = 'https://68500a03e7c42cfd17971736.mockapi.io/data/data';
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function GetData() {
      try {
        const response = await axios.get(`${api}/${id}`);
        setData(response.data);
      } catch (err) {
        console.error(err);
      }
    }

    GetData();
  }, [id]);

  if (!data) return <p>Загрузка...</p>;

  return (
    <div>
      <h1>{data.Name}</h1>
      <p>Возраст: {data.AGE}</p>
      <img src={data.img} alt={data.Name} width="200" />
      <p>Статус: {data.status?'active':'inactive'}</p>
    </div>
  );
};

export default UserDetails;
