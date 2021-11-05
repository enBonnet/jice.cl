import classnames from "classnames";
import { ReactNode } from "react";

interface CardsContainerProps {
  children: ReactNode;
  title: string;
  className?: string;
}

const CardsContainer = ({
  children,
  title,
  className,
}: CardsContainerProps) => {
  return (
    <section className={`mx-auto p-8 ${classnames(className)}`}>
      <h1 className="text-2xl mb-4">{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 xl-grid-cols-4 gap-y-10 gap-x-6 ">
        {children}
      </div>
    </section>
  );
};

export default CardsContainer;
