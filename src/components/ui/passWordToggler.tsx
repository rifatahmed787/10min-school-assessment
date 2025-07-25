import { Eye } from "lucide-react";
import { FaEyeSlash } from "react-icons/fa6";
export interface IGeneralProps {
    className?: string;
    style?: React.CSSProperties;
  }
export interface IPasswordToggler extends IGeneralProps {
  isPasswordVisible: boolean;
  onToggle: (e: React.MouseEvent) => void;
}

const PasswordToggler = ({
  isPasswordVisible,
  onToggle,
  style = {},
  className = "",
}: IPasswordToggler) => {
  return (
    <div style={style} className={`cursor-pointer ${className}`}>
      {isPasswordVisible ? (
           <FaEyeSlash
           onClick={onToggle}
           className="text-gray-500  h-4 w-4 lg:h-6 lg:w-6"
         />
        
      ) : (
        <Eye
        onClick={onToggle}
        className="text-gray-500  h-4 w-4 lg:h-6 lg:w-6"
      />
      )}
    </div>
  );
};

export default PasswordToggler;
