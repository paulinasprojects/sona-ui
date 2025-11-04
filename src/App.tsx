import { Button } from "sona-ui"
import { ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="mt-5 ml-5 flex gap-4 max-sm:flex-col max-sm:ml-0">
      <Button variant="primary" size={"default"}>
        <ArrowRight className="size-5" /> Button <ArrowRight className="size-5" />
      </Button>
      <Button variant="secondary" size={"default"}>
        <ArrowRight className="size-5" /> Button <ArrowRight className="size-5" />
      </Button>
      <Button variant="danger" size={"default"}>
        <ArrowRight className="size-5" /> Button <ArrowRight className="size-5" />
      </Button>
      <Button variant="outline" size={"default"}>
        <ArrowRight className="size-5" /> Button <ArrowRight className="size-5" />
      </Button>
      <Button variant="ghost" size={"default"}>
        <ArrowRight className="size-5" /> Button <ArrowRight className="size-5" />
      </Button>
    </div>

  )
}

export default App
