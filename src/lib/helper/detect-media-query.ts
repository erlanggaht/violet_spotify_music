import { useMediaQuery } from "@/lib/hooks/useMediaQuery";
import { Constant_ScreenMediaQuery } from "../contants";

export default function DetectMediaQuery(type: TypeParam) {
  const desktop = Constant_ScreenMediaQuery.desktop;
  const tablet = Constant_ScreenMediaQuery.tablet;
  const mobile = Constant_ScreenMediaQuery.mobile;

  const typeSelect: TypeSelect = [
    {
      name: "desktop",
      constant: desktop,
    },
    {
      name: "tablet",
      constant: tablet,
    },
    {
      name: "mobile",
      constant: mobile,
    },
  ];

  const findSelect = typeSelect.find((select) => select.name === type)?.constant
  const screen = useMediaQuery(findSelect || desktop);
  return screen
}

type TypeParam = 'desktop' | 'tablet' | 'mobile'

type TypeSelect = {
    name: string,
    constant: string 
  }[]