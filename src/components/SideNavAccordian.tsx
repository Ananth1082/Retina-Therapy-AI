import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
export function SideNavAccordian() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <Link to="/">HomePage</Link>
        </AccordionTrigger>
        <AccordionContent>
          <div className="pl-4 border-l-2">
            Page 1<br />
            Page 2<br />
            Page 3<br />
            Page 4<br />
            Page 5
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          <Link to="/Approach">Approach</Link>
        </AccordionTrigger>
        <AccordionContent>
          <div className="pl-4 border-l-2">
            Page 1<br />
            Page 2<br />
            Page 3<br />
            Page 4<br />
            Page 5
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          <Link to="/Implementation">Implementation</Link>
        </AccordionTrigger>
        <AccordionContent>
          <div className="pl-4 border-l-2">
            Page 1<br />
            Page 2<br />
            Page 3<br />
            Page 4<br />
            Page 5
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>
          <Link to="/Research">Research</Link>
        </AccordionTrigger>
        <AccordionContent>
          <div className="pl-4 border-l-2">
            Page 1<br />
            Page 2<br />
            Page 3<br />
            Page 4<br />
            Page 5
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
          <Link to="/About">About</Link>
        </AccordionTrigger>
        <AccordionContent>
          <div className="pl-4 border-l-2">
            Page 1<br />
            Page 2<br />
            Page 3<br />
            Page 4<br />
            Page 5
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
