import { isMobile } from "react-device-detect";
import NotFoundContent from "../components/NotFoundContent";
import NotFoundMobile from "../components/mobile/NotFoundMobile";

export default function NotFound() {
  return <>{!isMobile ? <NotFoundContent /> : <NotFoundMobile />}</>;
}
