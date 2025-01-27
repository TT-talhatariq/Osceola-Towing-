export type Testimonial = {
  id: number;
  name: string;
  role: string;
  feedback: string;
  rating: number;
  image: string;
};

export type testimonalProps = {
  background: string;
  titleColor?: string;
  heading?: string;
  headingColor?: string;
  iconColor?: string;
};
