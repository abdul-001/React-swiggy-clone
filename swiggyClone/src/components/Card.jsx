import {SwiggyData} from '../mockData.js'

function Container() {
  return (
    <div className="flex-1 overflow-auto bg-gray-50">
      <div className="search-bar flex justify-center p-4">
        <input
          type="text"
          placeholder="Search restaurants..."
          className="w-1/2 px-4 py-2 border rounded-l-lg outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700">
          Search
        </button>
      </div>

      <div className="card-container p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Card resData={SwiggyData} />
      </div>
    </div>
  );
}

function Card({ resData }) {
  const cards = resData?.data?.cards || [];

  return (
    <>
      {cards
        .filter((c) => c.card.card.info) 
        .map((card) => {
          const info = card.card.card.info;

          return (
            <div
              className="bg-white border rounded-xl shadow hover:shadow-lg transition p-4"
            >
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${info.cloudinaryImageId}`}
                alt={info.name}
                className="w-full h-40 object-cover rounded-md"
              />
              <div className="mt-3">
                <h3 className="text-lg font-semibold text-gray-800">
                  {info.name}
                </h3>
                <p className="text-sm text-gray-500">
                  ⭐ {info.avgRating} | {info.sla?.slaString}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  {info.cuisines?.join(", ")}
                </p>
                <p className="text-sm font-medium text-gray-700 mt-2">
                  {info.costForTwo}
                </p>
              </div>
            </div>
          );
        })}
    </>
  );
}


export default function CardContainer(){

    return (
        <div>
    <Container/>
    <Card/>
        </div>
    )
    

}