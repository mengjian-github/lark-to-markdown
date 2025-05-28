import React from 'react';
import { FiX, FiGithub, FiMail, FiMessageCircle, FiHeart, FiStar } from 'react-icons/fi';

interface ContactModalProps {
  visible: boolean;
  onCancel: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({
  visible,
  onCancel
}) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* 背景遮罩 */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onCancel}
      />
      
      {/* 模态框内容 */}
      <div className="relative bg-white rounded-xl shadow-xl max-w-sm w-full max-h-[90vh] overflow-y-auto animate-modal-in">
        {/* 关闭按钮 */}
        <button
          onClick={onCancel}
          className="absolute top-3 right-3 w-7 h-7 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors z-10"
        >
          <FiX className="w-4 h-4" />
        </button>

        {/* 头部区域 - 简化 */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-6 text-center text-white">
          <div className="w-12 h-12 mx-auto mb-3 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
            <FiMessageCircle className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-lg font-bold mb-1">飞书转公众号工具</h2>
          <p className="text-blue-100 text-sm opacity-90">让文档转换更简单</p>
        </div>

        {/* 二维码区域 - 紧凑布局 */}
        <div className="p-5">
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <FiMessageCircle className="w-4 h-4 text-green-600" />
              <span className="text-gray-800 font-semibold">扫码添加作者微信</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-white rounded-lg border border-gray-200 overflow-hidden">
                  <img 
                    src="/images/wx-qr.jpg" 
                    alt="作者微信二维码" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (target.src.includes('wx-qr.jpg')) {
                        target.src = '/images/wx-qr-placeholder.svg';
                      } else {
                        target.style.display = 'none';
                        const placeholder = target.nextElementSibling as HTMLElement;
                        if (placeholder) {
                          placeholder.style.display = 'flex';
                        }
                      }
                    }}
                  />
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center text-xs text-gray-400" style={{ display: 'none' }}>
                    二维码
                  </div>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-600 mb-2">长按识别或扫描二维码</p>
                <div className="text-xs text-gray-500 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-green-500 rounded-full"></span>
                    <span>问题咨询</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                    <span>功能建议</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 联系方式 - 简化 */}
        <div className="px-5 pb-4">
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 mx-auto mb-2 bg-green-500 rounded-lg flex items-center justify-center">
                <FiMessageCircle className="w-4 h-4 text-white" />
              </div>
              <div className="text-xs font-medium text-gray-800">微信</div>
            </div>
            
            <div 
              className="text-center p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => {
                window.open('https://github.com/mengjian-github/lark-to-markdown', '_blank');
              }}
            >
              <div className="w-8 h-8 mx-auto mb-2 bg-gray-700 rounded-lg flex items-center justify-center">
                <FiGithub className="w-4 h-4 text-white" />
              </div>
              <div className="text-xs font-medium text-gray-800">GitHub</div>
            </div>
            
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 mx-auto mb-2 bg-blue-500 rounded-lg flex items-center justify-center">
                <FiMail className="w-4 h-4 text-white" />
              </div>
              <div className="text-xs font-medium text-gray-800">邮箱</div>
            </div>
          </div>
        </div>

        {/* 反馈区域 - 简化 */}
        <div className="px-5 pb-5">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-4 border border-yellow-200">
            <div className="flex items-center gap-2 mb-2">
              <FiStar className="w-4 h-4 text-yellow-600" />
              <span className="text-sm font-semibold text-gray-800">支持项目</span>
            </div>
            <div className="text-xs text-gray-600 space-y-1">
              <div className="flex items-center gap-2">
                <FiHeart className="w-3 h-3 text-red-500" />
                <span>觉得有用？给个 ⭐ 支持</span>
              </div>
              <div className="flex items-center gap-2">
                <FiMessageCircle className="w-3 h-3 text-green-500" />
                <span>分享给更多朋友</span>
              </div>
            </div>
          </div>
        </div>

        {/* 底部按钮 */}
        <div className="px-5 pb-5">
          <button
            onClick={onCancel}
            className="w-full py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-200 text-sm"
          >
            知道了
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes modal-in {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-modal-in {
          animation: modal-in 0.2s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ContactModal; 