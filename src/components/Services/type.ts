export type Item = {
  images: string;
  heading: string;
  para: string;
};

export type ServiceProps = {
  backgroundImage: string;
  title: string;
  heading: string;
  visible: string;
  data: Item[] | undefined;
};
