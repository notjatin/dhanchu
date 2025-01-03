import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}
const TestingComponent: React.FC<Props> = ({ children }) => {
    return (
        <div className="w-lvw h-lvh flex flex-col justify-center items-center">
            {children}
        </div>
    );
};

export default TestingComponent;
