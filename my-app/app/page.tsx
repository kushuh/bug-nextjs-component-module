import {ImageLink} from "my-package/components";
import Pic from "../public/click-me.jpeg";

const Page = () => (
  <ImageLink src={Pic} alt="click me" href="/" />
);

export default Page;
