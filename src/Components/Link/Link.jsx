// import { root } from 'postcss';
import PropTypes from 'prop-types';

const Link = ({ route }) => {
  // const{path,name}=route
  return (
    <div>
      <li className="mr-10 px-6 hover:bg-rose-400">
        <a href={route.path}>{route.name}</a>
      </li>
    </div>
  );
};

Link.PropTypes={
    route: PropTypes.object
}

export default Link;
