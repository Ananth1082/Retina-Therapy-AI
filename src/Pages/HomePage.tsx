import { AboutPage } from "@/components/AboutPage";
import { SideNavBar } from "@/components/SideNavBar";
import { H1, H2, P } from "@/components/Typography";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  const location = useLocation();
  const [, setPath] = useState(location.pathname);
  const destinationRef = [
    React.useRef(null),
    React.useRef(null),
    React.useRef(null),
    React.useRef(null),
    React.useRef(null),
  ];

  useEffect(() => {
    setPath(location.pathname);
    console.log(location.pathname);
  }, [location.pathname]);

  const HomePageTitleList: string[] = [
    "Home Title 1",
    "Home Title 2",
    "Home Title 3",
    "Home Title 4",
    "Home Title 5",
  ];

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <SideNavBar />
      <div className="w-full p-8">
        <AboutPage TitleList={HomePageTitleList} destination={destinationRef} />
        <div className="mt-8">
          <div ref={destinationRef[0]} className="mb-12">
            <H1 className="text-4xl font-bold text-gray-800 mb-4">Homepage</H1>
            <P className="text-lg text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget turpis eu velit viverra tristique.
              Vestibulum et nisi consectetur, lacinia felis eget, gravida mi. Fusce non ex auctor, bibendum tortor nec,
              fermentum magna. Nam vehicula sollicitudin posuere. Integer vitae sagittis mauris.
            </P>
          </div>
          <div ref={destinationRef[1]} className="mb-12">
            <H2 className="text-2xl font-bold text-gray-800 mb-4">Home Title 1</H2>
            <P className="text-lg text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget turpis eu velit viverra tristique.
              Vestibulum et nisi consectetur, lacinia felis eget, gravida mi. Fusce non ex auctor, bibendum tortor nec,
              fermentum magna. Nam vehicula sollicitudin posuere. Integer vitae sagittis mauris.
            </P>
          </div>
          <div ref={destinationRef[2]} className="mb-12">
            <H2 className="text-2xl font-bold text-gray-800 mb-4">Home Title 2</H2>
            <P className="text-lg text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget turpis eu velit viverra tristique.
              Vestibulum et nisi consectetur, lacinia felis eget, gravida mi. Fusce non ex auctor, bibendum tortor nec,
              fermentum magna. Nam vehicula sollicitudin posuere. Integer vitae sagittis mauris.
            </P>
          </div>
          <div ref={destinationRef[3]} className="mb-12">
            <H2 className="text-2xl font-bold text-gray-800 mb-4">Home Title 3</H2>
            <P className="text-lg text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget turpis eu velit viverra tristique.
              Vestibulum et nisi consectetur, lacinia felis eget, gravida mi. Fusce non ex auctor, bibendum tortor nec,
              fermentum magna. Nam vehicula sollicitudin posuere. Integer vitae sagittis mauris.
            </P>
          </div>
          <div ref={destinationRef[4]} className="mb-12">
            <H2 className="text-2xl font-bold text-gray-800 mb-4">Home Title 4</H2>
            <P className="text-lg text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget turpis eu velit viverra tristique.
              Vestibulum et nisi consectetur, lacinia felis eget, gravida mi. Fusce non ex auctor, bibendum tortor nec,
              fermentum magna. Nam vehicula sollicitudin posuere. Integer vitae sagittis mauris.
            </P>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
