import { Outlet } from "react-router-dom";

import Directory from "../../components/directory/directory.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "movers",
      imgUrl:
        "https://cdnep-uhaul-uhaulcom-global-p-001.azureedge.net/uhaulcom/cdn/Misc/Home/SixPack/ubox.webp",
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
        "https://cdnep-uhaul-uhaulcom-global-p-001.azureedge.net/uhaulcom/cdn/Misc/Home/SixPack/moving-help.webp",
    },
    {
      id: 4,
      title: "storage",
      imgUrl:
        "https://cdnep-uhaul-uhaulcom-global-p-001.azureedge.net/uhaulcom/cdn/Misc/Home/SixPack/self-storage.webp",
    },
  ];
  return (
    <div>
      <Outlet />
      <div class="container m-5">
        <div class="card border-0">
          <h3>Welcome to Michael's moving company!</h3>
          <div class="card-title">We offer the service at the lowest price</div>
          {/* <div class="card-body">This is some text within a card body.</div> */}
        </div>
      </div>
      <div class="mb-4">What we offer:</div>
      <Directory categories={categories} />
    </div>
  );
};

export default Home;
