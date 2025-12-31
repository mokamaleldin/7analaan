interface GuestCardProps {
  imageUrl: string;
  name: string;
  title: string;
}

const GuestCard: React.FC<GuestCardProps> = ({ imageUrl, name, title }) => {
  return (
    <div className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 overflow-hidden transform hover:-translate-y-3 border border-white/5 hover:border-orange-500/30">
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
        <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
        <p className="text-gray-400">{title}</p>
      </div>
    </div>
  );
};

export default GuestCard;
