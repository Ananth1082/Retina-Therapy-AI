import { AboutPage } from "@/components/AboutPage";
import { SideNavBar } from "@/components/SideNavBar";
import { H1, H2, P } from "@/components/Typography";
import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  const location = useLocation();
  const [path, setPath] = useState(location.pathname);
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
  ]
  return (
    <>
      <div>
      <SideNavBar></SideNavBar>
        <AboutPage TitleList={HomePageTitleList} destination={destinationRef}></AboutPage>
        <div ref={destinationRef[0]}>
          <H1>Homepage</H1>
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            repudiandae in ipsum quidem aperiam voluptates aliquid ullam
            corrupti. Quibusdam dicta voluptate repudiandae aliquam aut
            architecto sunt voluptatem maxime officia dolore! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Rerum tempore suscipit sit
            consequatur, obcaecati libero deserunt cupiditate modi possimus hic
            nisi error voluptas temporibus praesentium ullam nemo provident
            quasi reprehenderit. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Sit, praesentium molestiae omnis dolores, quaerat
            numquam assumenda dignissimos repellendus a ea id quidem distinctio
            est deleniti vitae soluta sunt. Minus, ducimus!
          </P>
          <br />
        </div>
        <div ref={destinationRef[1]}>
          <H2>This is a title</H2>
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            repudiandae in ipsum quidem aperiam voluptates aliquid ullam
            corrupti. Quibusdam dicta voluptate repudiandae aliquam aut
            architecto sunt voluptatem maxime officia dolore! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Consequatur dolorem, quas in
            explicabo neque ullam. Repudiandae tempora repellendus ad dolorem,
            odio amet. Pariatur rem sint placeat, minus quod tempore expedita?
          </P>
          <br />
        </div>
        <div ref={destinationRef[2]}>
          <H2>This is another title</H2>
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            voluptates vero sit nostrum, pariatur explicabo vitae, ullam ducimus
            dolor optio unde molestiae blanditiis, perferendis in cum est
            commodi illum voluptatum. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Quisquam veritatis magni quis provident, quidem
            aliquid illum minus facilis inventore aspernatur consequatur
            pariatur eum modi sunt, nulla dolore atque laborum reiciendis.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            modi aliquid quasi accusamus nihil iusto enim non voluptate, rem
            obcaecati animi facilis esse laudantium, numquam itaque id fuga
            tempora impedit?
          </P>
          <br />
        </div>
        <div ref={destinationRef[3]}>
          <H2>This is another title</H2>
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            voluptates vero sit nostrum, pariatur explicabo vitae, ullam ducimus
            dolor optio unde molestiae blanditiis, perferendis in cum est
            commodi illum voluptatum. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Quisquam veritatis magni quis provident, quidem
            aliquid illum minus facilis inventore aspernatur consequatur
            pariatur eum modi sunt, nulla dolore atque laborum reiciendis.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            modi aliquid quasi accusamus nihil iusto enim non voluptate, rem
            obcaecati animi facilis esse laudantium, numquam itaque id fuga
            tempora impedit?
          </P>
          <br />
        </div>
        <div ref={destinationRef[4]}>
          <H2>This is another title</H2>
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            voluptates vero sit nostrum, pariatur explicabo vitae, ullam ducimus
            dolor optio unde molestiae blanditiis, perferendis in cum est
            commodi illum voluptatum. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Quisquam veritatis magni quis provident, quidem
            aliquid illum minus facilis inventore aspernatur consequatur
            pariatur eum modi sunt, nulla dolore atque laborum reiciendis.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            modi aliquid quasi accusamus nihil iusto enim non voluptate, rem
            obcaecati animi facilis esse laudantium, numquam itaque id fuga
            tempora impedit?
          </P>
          <br />
        </div>
      </div>
    </>
  );
};

export default HomePage;
