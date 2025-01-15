export type Item = {
  icon: string;
  id: string;
  heading: string;
  para: string;
};

export type OfferProps = {
  title: string;
  heading: string;
  background: string;
  headingColor: string;
  titleColor: string;
  imageStyling?: string;
  textStyling?: string;
  visible?: string;
  data: Item[] | undefined;
};
