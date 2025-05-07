export default function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 border-t-4 border-blue-700 flex flex-col items-center">
      <div className="mb-4 text-blue-700 text-4xl">{icon}</div>
      <h3 className="text-blue-900 font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-700 text-center">{description}</p>
    </div>
  );
}