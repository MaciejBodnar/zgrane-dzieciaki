import React from 'react';

interface QuickElements {
  title?: string;
  text?: string;
  icon?: React.ReactNode;
}

interface QuickInfoBannerProps {
  title?: string;
  contentItems?: QuickElements[];
  children?: React.ReactNode;
}

export const QuickInfoBanner = ({ title, contentItems, children }: QuickInfoBannerProps) => {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center gap-3 mb-6">
          {children}
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        </div>

        <div className="text-gray-600 space-y-4">
          {contentItems?.map(({ icon, text, title }, index) => (
            <div key={index} className="flex items-start gap-3">
              {icon}
              <div>
                {title && <h3 className="font-semibold text-gray-900">{title}</h3>}
                {text && <p className="text-gray-600">{text}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
