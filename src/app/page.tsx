import { AuthPage } from "@/components/AuthScreen";
import { HomeScreen } from "@/components/HomeScreen";

export default function Home() {
  const user = false;

  return <main>{user ? <HomeScreen /> : <AuthScreen />}</main>;
}
