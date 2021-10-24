const HomePage = (props) => {
  console.log(props);
  return (
    <div className="bg-orange py-3 flex flex-row justify-between text-white">
      {props.data.map((data) => (
        <p key={data.id}>{data.firstName}</p>
      ))}
    </div>
  );
};

export default HomePage;
