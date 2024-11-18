import bullseye from "../assets/bulls-eye.webp";
import thumbs from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  const EmojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbs, alt: "thumbs", boxSize: "25px" },
    5: { src: bullseye, alt: "bullseye", boxSize: "35px" },
  };
  if (rating < 3) return null;
  return <Image {...EmojiMap[rating]} marginTop={1} />;
};

export default Emoji;
