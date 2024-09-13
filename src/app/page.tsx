import { HomePage } from "@/features/HomePage";
import { getRealEstateItems } from "@/shared/utils/server-util";

export default async function Home() {
  const realEstateItems = await getRealEstateItems();
  return <HomePage properties={realEstateItems} />;
}
