import { MigrationLanding } from "@/components/sections/MigrationLanding";

export default function Home({ params }: { params: { lang: "en" | "id" } }) {
  return <MigrationLanding lang={params.lang} />;
}
