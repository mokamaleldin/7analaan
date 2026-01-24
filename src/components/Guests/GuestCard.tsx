import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface GuestCardProps {
  guestId: number;
  imageUrl: string;
  name: string;
  title: string;
}

const GuestCard: React.FC<GuestCardProps> = ({ guestId, imageUrl, name, title }) => {
  return (
    <Link 
      to={`/guests/${guestId}`}
      className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 overflow-hidden transform hover:-translate-y-3 border border-white/5 hover:border-orange-500/30 block"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold font-primary text-white mb-2 group-hover:text-orange-400 transition-colors">{name}</h3>
        <p className="text-gray-400 mb-4">{title}</p>
        <div className="flex items-center gap-2 text-orange-400 text-sm font-medium font-arabic">
          <span>عرض الملف الشخصي</span>
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};

export default GuestCard;
