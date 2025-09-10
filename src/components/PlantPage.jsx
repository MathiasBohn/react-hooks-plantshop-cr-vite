import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    async function loadPlants() {
      try {
        const response = await fetch("http://localhost:6001/plants");
        const data = await response.json();
        setPlants(data);
      } catch (error) {
        console.error("Failed to load plants:", error);
      }
    }
    loadPlants();
  }, []);

  function handleAddPlant(newPlant) {
    setPlants((prev) => [newPlant, ...prev]);
  }

  const plantsToShow = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search value={searchText} onChangeSearch={setSearchText} />
      <PlantList plants={plantsToShow} />
    </main>
  );
}

export default PlantPage;