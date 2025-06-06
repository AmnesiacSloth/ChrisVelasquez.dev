import grad from "../assets/grad pic.png"

import { buttonIcons } from "./Data";
function Welcome() {
  return (
    // controls entire widget in encompasing main
    <div className="card flex flex-row p-2 md:order-1 md:col-span-4 md:row-span-8 lg:row-span-6 lg:col-span-3 lg:order-auto lg:row-start-1 lg:col-start-1 ">

      <div className="grid grid-cols-2 grid-rows-auto md:grid-rows-2 md:w-full md:mx-4 md:mb-4 lg:mt-4">

        {/* Text */}
        <div className="flex flex-col col-span-1 row-span-1 order-2 pl-2 md:max-w-[500px] ">

          <h6 className=" font-light text-sm text-text-secondary pb-1 md:text-lg"> Hey there! </h6>

          <p className="text-sm/5 font-normal md:text-lg lg:text-xl">
            <span>
              I'm <b> Christian Velasquez</b>, an Engineer and Software Developer
              with a focus on Embedded Systems and Low-Level development.
            </span>

            <span className="block mt-5 lg:mt-6">
              Feel free to look around my site, reach out with career opportunities,
              or just to say hi!
            </span>
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-row gap-4 pt-2 col-span-2 row-span-1 order-3 justify-evenly md:col-span-1 md:items-end ">
          {
            buttonIcons.map(data => (
              <a key={data.id} href={data.resourceLink} target="_blank" className="basic-button size-full md:content-end md:h-1/2 md:">
                <data.component className="size-full fill-text-primary p-2 " />
              </a>
            ))
          } </div>

        {/* Image */}
        <img src={grad} className="col-span-1 row-span-1 w-auto order-1 mask-x-from-75% mask-y-from-90% md:ml-4 md:row-span-2 md:max-h-[500px] md:max-w-[220px] lg:max-w-[345px] lg:ml-0 place-self-center
          lg:mask-x-from-100% lg:mask-y-from-100% lg:h-110
          "></img>
      </div>
    </div>
  );
}
export default Welcome
