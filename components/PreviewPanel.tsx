import React, { useRef, useEffect } from 'react';
import { FiCopy, FiCheck, FiSmartphone, FiMonitor, FiSun, FiDroplet, FiFeather } from 'react-icons/fi';
import Preview from './Preview';
import { ThemeName } from '../contexts/ThemeContext';

interface PreviewPanelProps {
  markdown: string;
  isMobilePreview: boolean;
  setIsMobilePreview: (value: boolean) => void;
  themeName: ThemeName;
  setTheme: (name: ThemeName) => void;
  copied: boolean;
  handleCopyToWeixin: () => void;
}

const PreviewPanel: React.FC<PreviewPanelProps> = ({
  markdown,
  isMobilePreview,
  setIsMobilePreview,
  themeName,
  setTheme,
  copied,
  handleCopyToWeixin
}) => {
  const previewRef = useRef<HTMLDivElement>(null);
  const previewWrapperRef = useRef<HTMLDivElement>(null);

  // 当预览模式改变时，滚动到顶部
  useEffect(() => {
    if (previewWrapperRef.current) {
      previewWrapperRef.current.scrollTop = 0;
    }
  }, [isMobilePreview]);

  // 主题切换按钮配置
  const themeButtons = [
    { name: 'default', icon: FiSun, title: '默认主题' },
    { name: 'warm', icon: FiDroplet, title: '暖色主题' },
    { name: 'minimalist', icon: FiFeather, title: '极简主题' },
  ];

  return (
    <div ref={previewWrapperRef} className="w-1/2 p-4 overflow-auto bg-gray-50 relative">
      <div className={`transition-all duration-300 ${
        isMobilePreview 
          ? 'mobile-preview mx-auto my-8'
          : 'max-w-[780px] mx-auto bg-white p-8 shadow-lg'
      }`}>
        {isMobilePreview && (
          <div className="phone-notch">
            <div className="phone-speaker"></div>
            <div className="phone-camera"></div>
          </div>
        )}
        
        <div className={`${isMobilePreview ? 'p-4 overflow-auto' : ''}`}>
          <div ref={previewRef} className="flex-1 overflow-auto px-4">
            <Preview content={markdown} />
          </div>
        </div>
      </div>

      {/* 功能按钮组 */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4">
        {/* 主题切换按钮组 */}
        <div className="flex flex-col gap-2">
          {themeButtons.map(({ name, icon: Icon, title }) => (
            <button
              key={name}
              onClick={() => setTheme(name as ThemeName)}
              title={title}
              className={`w-10 h-10 flex items-center justify-center rounded-full 
                ${themeName === name 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
                } shadow-lg transition-all duration-75 hover:scale-105`}
            >
              <Icon className="w-5 h-5" />
            </button>
          ))}
        </div>

        {/* 预览模式切换按钮 */}
        <button
          onClick={() => setIsMobilePreview(!isMobilePreview)}
          title={isMobilePreview ? '切换到电脑预览' : '切换到手机预览'}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg transition-all duration-75 hover:scale-105"
        >
          {isMobilePreview ? (
            <FiMonitor className="w-5 h-5" />
          ) : (
            <FiSmartphone className="w-5 h-5" />
          )}
        </button>

        {/* 复制按钮 */}
        <button
          onClick={handleCopyToWeixin}
          title={copied ? '已复制' : '复制到公众号'}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg transition-all duration-75 hover:scale-105"
        >
          {copied ? (
            <FiCheck className="w-5 h-5" />
          ) : (
            <FiCopy className="w-5 h-5" />
          )}
        </button>
      </div>
    </div>
  );
};

export default PreviewPanel; 