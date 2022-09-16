import { useGot } from "../lib/api";
import House from "./House";

const HouseLoader = ({ houseId }) => {
  const { data: house, isLoading } = useGot(`/houses/${houseId}`);

  if (isLoading) return <div>Loading…</div>;

  return <House name={house.name} />;
};

export default HouseLoader;
