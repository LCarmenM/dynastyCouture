import { Link } from 'react-router-dom';

const Navbar = ({ isMobile = false }) => {
  const navItems = [
    { name: 'Women', path: '/womens' },
    { name: 'Men', path: '/mens' },
    { name: 'New Arrivals', path: '/new-arrivals' },
    { name: 'Limited Edition', path: '/limited-edition' },
  ];

  return (
    <nav className={`${isMobile ? 'flex flex-col space-y-4' : 'flex space-x-8'}`}>
      {navItems.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className="text-primary-100 hover:text-white transition-colors duration-200 font-medium"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;