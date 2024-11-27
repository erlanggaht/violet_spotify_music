import { useScreen } from "@/lib/hooks/useScreen";
import { Constant_Screen } from "../contants";

function DetectScreen() {
  const { width } = useScreen();
  const isScreenDesktop = width >= Constant_Screen.desktop;
  const isScreenTablet = width >= Constant_Screen.tablet;
  const isScreenMobile = width <= Constant_Screen.mobile;

  return { isScreenDesktop, isScreenTablet, isScreenMobile };
}

export default DetectScreen;
