'use client';

interface BurgerMenuProps {
  isOpen: boolean;
  onClick: () => void;
}

export const BurgerMenu = ({ isOpen, onClick }: BurgerMenuProps) => {
  return (
    <button
      className="flex flex-col justify-center items-center w-8 h-8 relative z-50"
      onClick={onClick}
    >
      <span
        className={`w-full h-[2px] bg-white transition-all duration-300 ${
          isOpen
            ? 'absolute rotate-45'
            : 'mb-2'
        }`}
      />
      <span
        className={`w-full h-[2px] bg-white transition-all duration-300 ${
          isOpen
            ? 'opacity-0'
            : 'mb-2'
        }`}
      />
      <span
        className={`w-full h-[2px] bg-white transition-all duration-300 ${
          isOpen
            ? 'absolute -rotate-45'
            : ''
        }`}
      />
    </button>
  );
};
