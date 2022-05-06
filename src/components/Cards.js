import Card from "./Card";

const Cards = ({data}) => {
  console.log(data);
  return (
    <div className="cards">
      {data.map((data, idx) => (
        <Card
          key={idx}
          img={data.img}
          rating={data.rating}
          peopleCount={data.peopleCount}
          country={data.country}
          title={data.title}
          price={data.price}
          online={data.online}
        />
      ))}
    </div>
  );
};

export default Cards;
