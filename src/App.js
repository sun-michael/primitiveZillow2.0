import Directory from "./components/directory/directory.component";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "movers",
      imgUrl:
        "https://cdnep-uhaul-uhaulcom-global-p-001.azureedge.net/uhaulcom/cdn/Misc/Home/SixPack/moving-help.webp",
    },
    {
      id: 2,
      title: "moving supplies",
      imgUrl:
        "https://cdnep-uhaul-uhaulcom-global-p-001.azureedge.net/uhaulcom/cdn/Misc/Home/SixPack/six-pack-ms.webp",
    },
    {
      id: 3,
      title: "trucks",
      imgUrl:
        "https://cdnep-uhaul-uhaulcom-global-p-001.azureedge.net/uhaulcom/cdn/Misc/Trucks/Home/truck-rentals-lg.webp",
    },
    {
      id: 4,
      title: "storage",
      imgUrl:
        "https://cdnep-uhaul-uhaulcom-global-p-001.azureedge.net/uhaulcom/cdn/Misc/Home/SixPack/self-storage.webp",
    },
  ];
  return <Directory categories={categories} />;
};

export default App;
