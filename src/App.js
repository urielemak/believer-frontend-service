import { BelieverForm } from "./believer/component/BelieverForm";
import { Header } from "./shared/component/Header";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="px-2 grid md:grid-cols-2 gap-2 max-w-7xl m-0 m-auto my-8">
        <div>
          <p className="text-sm text-blue-500 ">
            SpringBoot & ReactJs integration
          </p>
          <p className="text-xl font-extrabold">Believer form application</p>
          <small>
            by{" "}
            <a className="underline" href="https://github.com/urielemak">
              @urielemak
            </a>
          </small>
          <div className="block my-2 mt-3 divide-y">
            <p>
              Feel free to create a fake believer. <br /> Just keep in mind this
              is a simple form application. Please make sure to put fake data.
            </p>
          </div>
        </div>
        <div className="w-full bg-gray-100 px-5 py-5">
          <div className="max-w-2xl">
            <BelieverForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
