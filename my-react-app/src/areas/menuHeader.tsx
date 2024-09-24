import {useState} from "react";
import {Button} from "@/components/ui/button"; // Importação do botão se necessário
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const MenuHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>

          <div className="flex-1 flex items-center justify-between sm:items-stretch sm:justify-between">
            <h1 className="text-2xl font-bold text-dark ml-32 md:ml-0 lg:ml-0">
              NSneakers
            </h1>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-4">
              <Button
                className="text-dark hover:underline focus:outline-none"
                variant="link"
              >
                News
              </Button>
              <Button
                className="text-dark hover:underline focus:outline-none"
                variant="link"
              >
                Homens
              </Button>
              <Button
                className="text-dark hover:underline focus:outline-none"
                variant="link"
              >
                Mulheres
              </Button>
              <Button
                className="text-dark hover:underline focus:outline-none"
                variant="link"
              >
                Infantil
              </Button>
            </div>
            <Avatar>
              <AvatarImage
                src="https://github.com/DiegoNunes05.png"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>

      <div
        className={`${isOpen ? "block" : "hidden"} sm:hidden`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Button className="text-gray-300 hover:bg-gray-700 hover:text-white w-full text-left">
            News
          </Button>
          <Button className="text-gray-300 hover:bg-gray-700 hover:text-white w-full text-left">
            Homens
          </Button>
          <Button className="text-gray-300 hover:bg-gray-700 hover:text-white w-full text-left">
            Mulheres
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default MenuHeader;
