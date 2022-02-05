import React from "react";
import Header from "./components/Header";
import TitleCard from "./components/TitleCard";
import InfoCard from "./components/InfoCard";
import QuestPlate from "./components/QuestPlate";
import Footer from "./components/Footer";
export default function App() {
  return (
    <div>
      <Header></Header>
      <TitleCard></TitleCard>
      <InfoCard></InfoCard>
      <QuestPlate></QuestPlate>
      <Footer></Footer>
    </div>
  );
}
