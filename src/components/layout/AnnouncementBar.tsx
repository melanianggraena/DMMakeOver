import React from 'react';
import { Truck, RotateCcw, Gift } from 'lucide-react';

const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-primary-container text-on-primary-container">
      <div className="max-w-7xl mx-auto px-4">
        <div className="hidden md:flex items-center justify-between py-2.5 text-xs font-heading font-600 tracking-widest uppercase">
          <div className="flex items-center gap-1.5">
            <Truck size={13} />
            <span>GRATIS ONGKIR PEMBELIAN DI ATAS IDR 250.000</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Gift size={13} />
            <span>BELANJA SEKARANG – DAPATKAN GIFT EKSKLUSIF</span>
          </div>
          <div className="flex items-center gap-1.5">
            <RotateCcw size={13} />
            <span>RETUR MUDAH 14 HARI</span>
          </div>
        </div>
        {/* Mobile: single rotating message */}
        <div className="md:hidden flex items-center justify-center py-2.5 text-xs font-heading font-600 tracking-widest uppercase text-center">
          <Truck size={13} className="mr-1.5 flex-shrink-0" />
          GRATIS ONGKIR &gt; IDR 250.000
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
