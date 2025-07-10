import type React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    imageUrl?: string;
    renderBody?: () => React.ReactNode;
    renderFooter?: () => React.ReactNode;
    children?: React.ReactNode;
}


const DefaultCardBody: React.FC = () => {
    return (
        <div className="mx-4 flex justify-between mt-2">
            <span> Name: </span>
            <span>Rick </span>
        </div>
    );
}
const DefaultCardFooter: React.FC = () => {
    return (
        <div className="mt-4">
            <button className="">View more</button>
        </div>
    );
}


const Card: React.FC<CardProps> = ({ imageUrl,
    renderBody,
    renderFooter,
    children, ...props }) => {
    return (
        <div
            className={`bg-light-bg-secondary  rounded-3xl shadow-md p-4 flex flex-col `}
        >
            {imageUrl && (
                <div className="">
                    <img
                        src={imageUrl}
                        alt={"Card Image"}
                        className="  rounded-lg"
                    />
                </div>
            )}
            {renderBody ? renderBody() : children ? children : <DefaultCardBody />}
            {renderFooter ? renderFooter() : <DefaultCardFooter />}
        </div>
    );
}

export default Card;