import React, { useRef, useState } from 'react';
import { FiCopy, FiCheck, FiSmartphone, FiMonitor, FiAlertCircle } from 'react-icons/fi';
import Preview from './Preview';
import { ThemeName } from '../contexts/ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';

interface PreviewPanelProps {
  markdown: string;
  isMobilePreview: boolean;
  setIsMobilePreview: (value: boolean) => void;
  themeName: ThemeName;
  setTheme: (name: ThemeName) => void;
  copied: boolean;
  copyError: string | null;
  isCopying: boolean;
  handleCopyToWeixin: () => void;
}

const PreviewPanel: React.FC<PreviewPanelProps> = ({
  markdown,
  isMobilePreview,
  setIsMobilePreview,
  themeName,
  setTheme,
  copied,
  copyError,
  isCopying,
  handleCopyToWeixin
}) => {
  const mobilePreviewRef = useRef<HTMLDivElement>(null);
  const [showViewTooltip, setShowViewTooltip] = useState(false);
  const [showCopyTooltip, setShowCopyTooltip] = useState(false);

  return (
    <div className={`w-1/2 p-4 ${isMobilePreview ? '' : 'overflow-auto'} bg-gray-50 relative`}>
      {/* 顶部工具栏 */}
      <div className="toolbar mb-2 flex justify-between items-center px-3 py-2 bg-white rounded-lg shadow-sm">
        <div className="relative">
          <button
            onClick={() => setIsMobilePreview(!isMobilePreview)}
            onMouseEnter={() => setShowViewTooltip(true)}
            onMouseLeave={() => setShowViewTooltip(false)}
            className="flex items-center space-x-1 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition-colors"
          >
            {isMobilePreview ? (
              <>
                <FiMonitor className="w-4 h-4" />
                <span className="text-sm">电脑视图</span>
              </>
            ) : (
              <>
                <FiSmartphone className="w-4 h-4" />
                <span className="text-sm">手机视图</span>
              </>
            )}
          </button>
          {showViewTooltip && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 px-2 py-1 bg-gray-800 text-white text-xs rounded shadow-lg whitespace-nowrap z-50">
              {isMobilePreview ? '切换到电脑预览' : '切换到手机预览'}
            </div>
          )}
        </div>
        
        <div className="relative">
          <button
            onClick={handleCopyToWeixin}
            onMouseEnter={() => setShowCopyTooltip(true)}
            onMouseLeave={() => setShowCopyTooltip(false)}
            disabled={isCopying}
            className={`copy-btn flex items-center space-x-1 px-3 py-1.5 ${
              isCopying ? 'bg-blue-400 btn-loading' : 
              copyError ? 'bg-red-500 hover:bg-red-600' : 
              'bg-blue-500 hover:bg-blue-600'
            } text-white rounded-md transition-colors`}
          >
            {!isCopying && copyError ? (
              <>
                <FiAlertCircle className="w-4 h-4" />
                <span className="text-sm">复制失败</span>
              </>
            ) : !isCopying && copied ? (
              <>
                <FiCheck className="w-4 h-4" />
                <span className="text-sm">已复制</span>
              </>
            ) : !isCopying ? (
              <>
                <FiCopy className="w-4 h-4" />
                <span className="text-sm">复制到公众号</span>
              </>
            ) : (
              <span className="text-sm opacity-0">复制中...</span>
            )}
          </button>
          {showCopyTooltip && !copied && !copyError && !isCopying && (
            <div className="absolute top-full right-0 mt-1 px-2 py-1 bg-gray-800 text-white text-xs rounded shadow-lg whitespace-nowrap z-50">
              复制到公众号
            </div>
          )}
          {copyError && !isCopying && (
            <div className="absolute top-full right-0 mt-1 px-2 py-1 bg-red-600 text-white text-xs rounded shadow-lg whitespace-nowrap z-50 max-w-xs">
              {copyError}
            </div>
          )}
        </div>
      </div>
      
      {/* 主题切换区 */}
      <div className="mb-4 px-3 py-2 bg-white rounded-lg shadow-sm">
        <div className="text-sm font-medium text-gray-600 mb-1">选择主题样式：</div>
        <ThemeSwitcher />
      </div>

      {/* 预览内容 */}
      <div className={`transition-all duration-300 ${
        isMobilePreview 
          ? 'mobile-preview mx-auto my-4 flex flex-col'
          : 'max-w-[780px] mx-auto bg-white p-8 shadow-lg'
      }`}>
        {isMobilePreview && (
          <>
            <div className="phone-status-bar">
              <div className="status-bar-content">
                <div className="status-time">10:30</div>
                <div className="status-notch"></div>
                <div className="status-icons"></div>
              </div>
            </div>
            <div ref={mobilePreviewRef} className="flex-1 overflow-auto p-4 max-h-[70vh]">
              <div className="px-2">
                <Preview content={markdown} />
              </div>
            </div>
            <div className="phone-home-indicator"></div>
          </>
        )}
        
        {!isMobilePreview && (
          <div className="flex-1 overflow-auto px-4">
            <Preview content={markdown} />
          </div>
        )}
      </div>

      <style jsx>{`
        .mobile-preview {
          width: 360px;
          min-height: 680px;
          max-height: 80vh;
          background-color: white;
          border: 10px solid #333;
          border-radius: 36px;
          position: relative;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
          overflow: hidden;
        }

        .phone-status-bar {
          width: 100%;
          height: 44px;
          background-color: white;
          position: relative;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }

        .status-bar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 16px;
          height: 100%;
        }

        .status-time {
          font-size: 14px;
          font-weight: 600;
          color: #333;
        }

        .phone-home-indicator {
          width: 120px;
          height: 5px;
          background-color: #333;
          border-radius: 3px;
          margin: 8px auto 12px;
        }
      `}</style>
    </div>
  );
};

export default PreviewPanel; 