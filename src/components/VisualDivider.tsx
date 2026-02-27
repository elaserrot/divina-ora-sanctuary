import AnimatedSection from "./AnimatedSection";

interface VisualDividerProps {
  image: string;
  alt: string;
}

const VisualDivider = ({ image, alt }: VisualDividerProps) => (
  <AnimatedSection>
    <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
      <img
        src={image}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
    </div>
  </AnimatedSection>
);

export default VisualDivider;
