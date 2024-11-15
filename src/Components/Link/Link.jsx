const Link = ({ route }) => {
  // const{path,name}=route
  return (
    <div>
      <li className="mr-10">
        <a href={route.path}>{route.name}</a>
      </li>
    </div>
  );
};

export default Link;
