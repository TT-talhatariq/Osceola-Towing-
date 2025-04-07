export type Item = {
  heading: string;
  para: string;
};

export type ChooseProps = {
  image: string;
  title: string;
  description?: string;
  heading: string;
  subHeading?: string;
  data?: Item[] | undefined;
  ulHeading?: string;
  perfectForItems?: string[];
  visible?: string;
  buttonText?: string;
  buttonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
};
