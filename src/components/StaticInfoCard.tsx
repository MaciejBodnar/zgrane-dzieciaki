import { FaUserLock } from 'react-icons/fa';

interface StaticInfoCardProps {
  title?: string;
  content?: string;
  children?: React.ReactNode;
}

export const StaticInfoCard = ({ title, content, children }: StaticInfoCardProps) => {
  return (
    <>
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
        <div className="flex items-center gap-3 mb-4">
          {children}
          <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        </div>
        <p className="text-gray-600 leading-relaxed">{content}</p>
      </div>
    </>
  );
};
