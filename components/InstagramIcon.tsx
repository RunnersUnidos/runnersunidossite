import { FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

const InstagramIcon = ({ url = 'https://www.instagram.com/your-handle' }) => {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block transform transition-all duration-300 hover:scale-110"
    >
      <div className="p-2 rounded-lg bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 hover:shadow-lg hover:shadow-pink-500/50">
        <FaInstagram className="w-6 h-6 text-white" />
      </div>
    </Link>
  );
};

export default InstagramIcon;
