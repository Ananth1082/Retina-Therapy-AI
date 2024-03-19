import { useState } from "react";

const AboutPage = (props: any) => {
  const [selected, setSelected] = useState(0);
  function handleClick(e: any, index: number) {
    e.preventDefault();
    props.destination[index].current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
    setSelected(index);
  }
  const links = props.TitleList.map((title: string, index: number) => {
    return (
      <>
        <a key={index} href="#" onClick={(e) => handleClick(e, index)} className={selected==index?"selected":""}>
          {title}
        </a>
        <br />
      </>
    );
  });
  return (
    <div className="fixed right-1 w-[20vw] h-[50vh] pt-10 ">
      <h1 className="text-lg">On this page</h1>
      <br />
      <div className="leading-10 pl-4 border-l-2">
      {links}
      </div>
    </div>
  );
};

export { AboutPage };
