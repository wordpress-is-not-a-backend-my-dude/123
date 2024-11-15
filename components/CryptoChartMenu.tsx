import React from 'react';

interface CryptoChartMenuProps {
  activeCrypto: string | null;
  onClose: () => void;
}

const CryptoChartMenu: React.FC<CryptoChartMenuProps> = ({ activeCrypto, onClose }) => {
  const chartUrls = {
    Bitcoin: "https://birdeye.so/tv-widget/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599?chain=ethereum&viewMode=pair&chartInterval=15&chartType=CANDLE&chartTimezone=America%2FChicago&chartLeftToolbar=show&theme=dark&chartOverrides=paneProperties.backgroundType%3Agradient&chartOverrides=paneProperties.backgroundGradientStartColor%3A%23000000&chartOverrides=paneProperties.backgroundGradientEndColor%3A%23000000",
    Ethereum: "https://birdeye.so/tv-widget/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2?chain=ethereum&viewMode=pair&chartInterval=1D&chartType=CANDLE&chartTimezone=America%2FChicago&chartLeftToolbar=show&theme=dark&chartOverrides=paneProperties.backgroundType%3Agradient&chartOverrides=paneProperties.backgroundGradientStartColor%3A%23000000&chartOverrides=paneProperties.backgroundGradientEndColor%3A%23000000",
    Solana: "https://birdeye.so/tv-widget/So11111111111111111111111111111111111111112?chain=solana&viewMode=pair&chartInterval=1D&chartType=CANDLE&chartTimezone=America%2FChicago&chartLeftToolbar=show&theme=dark&chartOverrides=paneProperties.backgroundType%3Agradient&chartOverrides=paneProperties.backgroundGradientStartColor%3A%23000000&chartOverrides=paneProperties.backgroundGradientEndColor%3A%23000000"
  };

  return (
    <div 
      className={`fixed inset-0 flex items-center justify-center z-50 ${activeCrypto ? 'pointer-events-auto' : 'pointer-events-none'}`} 
      onClick={onClose}
    >
      <div 
        className={`w-[80%] h-[80%] bg-gray-800/80 backdrop-blur-md rounded-lg shadow-lg overflow-hidden transition-opacity duration-300 ${activeCrypto ? 'opacity-100' : 'opacity-0'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 h-full flex flex-col">
          <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
            &nbsp;{activeCrypto}
          </h3>
          <div className="flex-grow overflow-hidden rounded-lg relative">
            {Object.entries(chartUrls).map(([crypto, url]) => (
              <div 
                key={crypto}
                className={`absolute inset-0 transition-opacity duration-300 ${activeCrypto === crypto ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              >
                <iframe
                  src={url}
                  className="w-full h-full rounded-lg"
                  style={{ border: 'none' }}
                  title={`${crypto} Chart`}
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoChartMenu;