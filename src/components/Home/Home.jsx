// In your page or parent component
import CEOComponent from "./CEOComponent";
import { ShiffList } from "./ShiffList";
import { OffersOfTheWeek } from "./OffersList";
export default function Home() {
  return (
    <div>
      <CEOComponent
        name="Ms. Velvet Vanilla"
        signature="L. Essence"
        title="Ms. Velvet Vanilla"
        quote="Indulge in a delicate soufflé Danish, its golden, flaky layers embracing a playful burst of gummy bears that add a whimsical chewiness. A crisp, buttery wafer crowns this creation, dusted lightly with sweet, powdery jelly beans that melt on the tongue. Rich chocolate bars and velvety puddings mingle with tender macarons and festive candy canes, weaving a tapestry of decadent flavors. Notes of caramel and toasted sesame snap through the airy soufflé, while a tender bear claw and soft muffin topping complete this symphony of sweet delights—each bite a harmonious blend of textures and tastes that dance on the palate.”"
        role="CEO - Vanilla Bakery Shop"
        image="https://media.istockphoto.com/id/2030421718/fr/vectoriel/femme-chef-de-cuisine-servant-lillustration-de-conception-de-pain.jpg?s=612x612&w=0&k=20&c=JS1guL6Omn5suzO3h8xTg-HTF2FSdBJ_SVZyZee1C8w="
      />
      <ShiffList />
      <OffersOfTheWeek />
    </div>
  );
}
