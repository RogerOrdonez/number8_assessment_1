import { HomePage } from "@/features/HomePage";
import { getProperties } from "@/shared/utils/server-util";

export default async function Home() {
  const properties = await getProperties();
  return <HomePage properties={properties} />;
}
