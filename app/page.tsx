import Sugar from "@/components/page/sugar/sugar";
import Zero from "@/components/page/zero/zero"
import Sugarr from "@/components/page/sugarr/sugarr"
import History from "@/components/page/history/history"
export default function Home() {

  return (
    <main className="m-0">
      <Sugar/>
      <Zero/>
      <Sugarr/>
      <History/>
    </main>
  );
}
