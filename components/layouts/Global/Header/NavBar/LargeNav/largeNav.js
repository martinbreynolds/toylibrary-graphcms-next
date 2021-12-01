import Authorisation from "../../signInsignOut/authorisation";
import Link from "next/link";
import navLinks from "../../../../../../config/nav";
import navAdminLinks from "../../../../../../config/navAdmin";
import { useState } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripLinesVertical } from "@fortawesome/free-solid-svg-icons";

export default function LargeNav({ session, status }) {
  const [hidden, setHidden] = useState("hidden");
  const router = useRouter();
  const hiddenFunction = () => {
    hidden === "hidden" ? setHidden("") : setHidden("hidden");
  };
  console.log(router.pathname);
  console.log(`'${router.pathname}'`);
  return (
    <>
      {/* Whole Bar */}
      <div className="flex flex-row p-3 justify-between w-full">
        {/* Holding for Toy Image and text */}
        <div className="flex flex-row mx-auto my-auto mb-2">
          <div className="fill-current text-orange ">
            <svg
              className="h-12"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 375.165 375.165"
            >
              <g>
                <path
                  d="M373.423,327.337c0.512-0.664,0.926-1.431,1.315-2.484c0.188-0.597,0.316-1.218,0.378-1.924l0.048-149.221l-57.518,0.012
		l11.618-12.58l0.523-0.648c0.499-0.661,0.913-1.428,1.303-2.476c0.189-0.594,0.316-1.218,0.378-1.927l0.042-149.224L182.638,6.896
		c-0.798,0.024-1.577,0.164-2.649,0.518c-0.78,0.292-1.516,0.712-2.223,1.272l-38.191,35.235c-0.229,0.213-0.442,0.438-0.646,0.673
		h-2.016V173.72l-91.191,0.021c-0.804,0.024-1.583,0.167-2.67,0.518c-0.764,0.292-1.483,0.703-2.162,1.233L2.63,210.785
		c-0.216,0.201-0.423,0.42-0.624,0.652H0v156.862h155.115l25.447-27.565v27.565h155.116l37.234-40.329L373.423,327.337z
		 M163.195,44.594l22.947-21.2H303.3l-21.196,21.2H163.195z M26.281,211.437l22.947-21.197h87.687v11.229h18.243l-9.974,9.98H26.281
		V211.437z M153.282,183.999v-4.062v-3.111v-3.111v-64.795h0.155v-47.8h123.814v47.8h0.146v64.807v3.1v3.243v3.93v3.118v0.938
		h-49.852h-4.585h-5.979h-4.592h-4.555h-13.25h-3.105h-3.117h-10.979h-4.409h-19.692v-0.938V183.999z M320.905,227.962v123.816
		H197.082V227.962H320.905z M206.842,211.437l10.796-9.975h74.392l10.363-11.229h44.555l-21.202,21.203H206.842L206.842,211.437z
		 M294.508,176.826l-2.747,3.069v-3.069v-3.1V60.8l28.06-32.111V148.53l-22.536,25.196L294.508,176.826z M16.523,351.779V227.962
		h123.82v123.816H16.523z M154.585,229.156l24.198-27.693l2.725-3.117l1.136-1.304v1.304v3.117v9.907v105.513l-2.083,2.326
		l-25.976,29.039V229.156z M335.409,229.156l28.059-32.114v119.841l-28.059,31.365V229.156z"
                />
                <path
                  d="M89.852,237.541H66.012c-1.108,0-2.131,0.585-2.694,1.547l-8.199,14.029c-0.566,0.969-0.566,2.156-0.012,3.124
		c0.557,0.962,1.589,1.564,2.707,1.564h13.993v81.784c0,1.729,1.397,3.117,3.118,3.117h14.934c1.72,0,3.118-1.389,3.118-3.117
		v-98.931C92.969,238.929,91.578,237.541,89.852,237.541z"
                />
                <path
                  d="M179.103,173.708c0.536,1.017,1.571,1.689,2.731,1.689h12.769h27.042h26.646c1.193,0,2.186-0.685,2.709-1.662
		c0.238-0.438,0.408-0.917,0.408-1.456v-14.036c0-1.72-1.4-3.117-3.117-3.117h-30.13l11.04-13.062
		c4.396-5.194,7.897-9.526,10.711-13.238c2.886-3.803,5.108-7.164,6.619-9.953c1.802-3.255,3.026-6.583,3.781-9.95
		c0.56-2.444,0.901-4.907,0.901-7.383c0-9.322-3.447-17.248-10.218-23.55c-6.668-6.257-15.016-9.429-24.808-9.429
		c-20.143,0-32.135,11.767-34.687,34.032c-0.101,0.88,0.183,1.763,0.773,2.433c0.594,0.66,1.434,1.041,2.326,1.041h14.867
		c1.577,0,2.904-1.172,3.094-2.737c1.656-13.457,8.829-15.016,14.078-15.016c3.988,0,7.222,1.248,9.889,3.803
		c2.637,2.533,3.915,5.593,3.915,9.353c0,2.153-0.773,4.652-2.234,7.447c-0.317,0.591-0.621,1.185-0.999,1.809
		c-1.133,1.937-2.825,4.399-5.023,7.319c-2.259,3.005-5.072,6.564-8.403,10.656l-34.352,41.589
		c-0.768,0.928-0.929,2.219-0.411,3.312C179.027,173.653,179.079,173.671,179.103,173.708z"
                />
                <path
                  d="M258.801,344.314c10.126,0,18.596-3.13,25.173-9.311c6.625-6.229,9.985-14.321,9.985-24.058
		c0-10.291-3.458-18.256-10.284-23.718c5.767-5.377,8.689-12.391,8.689-20.94c0-8.89-3.094-16.276-9.195-21.945
		c-6.04-5.663-13.895-8.537-23.339-8.537c-9.341,0-16.788,2.46-22.152,7.319c-5.304,4.799-8.817,12.288-10.468,22.274
		c-0.146,0.901,0.109,1.82,0.706,2.526c0.585,0.701,1.456,1.097,2.375,1.097h14.857c1.474,0,2.734-1.023,3.045-2.454
		c0.913-4.152,2.283-7.191,3.897-8.707c1.674-1.475,4.201-2.229,7.538-2.229c3.642,0,6.479,1.035,8.701,3.197
		c2.187,2.052,3.245,4.683,3.245,8.05c0,4.365-1.431,7.41-4.396,9.298c-0.932,0.609-3.605,1.62-11.059,1.62
		c-1.723,0-3.117,1.395-3.117,3.117v12.751c0,1.717,1.395,3.118,3.117,3.118c6.504,0,9.743,1.09,11.29,1.996
		c3.763,2.235,5.583,6.017,5.583,11.546c0,4.237-1.267,7.623-3.842,10.303c-2.576,2.612-5.772,3.885-9.768,3.885
		c-4.043,0-7.185-1.005-9.596-3.063c-2.418-2.07-3.909-5.047-4.562-9.115c-0.243-1.51-1.546-2.618-3.074-2.618h-14.42
		c-0.883,0-1.711,0.372-2.302,1.023c-0.597,0.651-0.889,1.522-0.804,2.399c0.694,6.965,2.394,12.562,5.055,16.659
		C236.028,339.418,245.825,344.314,258.801,344.314z"
                />
              </g>
            </svg>
          </div>
          <text className="my-auto pl-6 text-white dark:text-lightGray font-extrabold text-2xl">
            Sensory Library
          </text>
        </div>

        <nav className={`flex flex-row bg-plum dark:bg-darkGray mx-auto `}>
          {session ? (
            <>
              {navAdminLinks.map((button) => (
                <button
                  key={button.label}
                  className={
                    new String(router.pathname).valueOf() ==
                    new String(button.path).valueOf()
                      ? " border-orange border-b-2 border-t-2 "
                      : ""
                  }
                >
                  <Link href={button.path} passHref>
                    <div className="text-white font-medium text-left px-1 py-1 ">
                      <FontAwesomeIcon
                        className="text-plum dark:text-orange mr-2"
                        icon={faGripLinesVertical}
                      />
                      {button.label}
                    </div>
                  </Link>
                </button>
              ))}
              <Authorisation session={session} status={status} />
            </>
          ) : (
            <>
              {navLinks.map((button) => (
                <button
                  key={button.label}
                  className={
                    new String(router.pathname).valueOf() ==
                    new String(button.path).valueOf()
                      ? " border-orange border-b-2 border-t-2 "
                      : ""
                  }
                >
                  <Link href={button.path} passHref>
                    <div className="text-white font-medium text-left px-3 py-1 ">
                      <FontAwesomeIcon
                        className="text-plum dark:text-orange mr-2"
                        icon={faGripLinesVertical}
                      />
                      {button.label}
                    </div>
                  </Link>
                </button>
              ))}
              <Authorisation session={session} status={status} />
            </>
          )}
        </nav>
        <img
          alt="Unique Ways Logo"
          className="p-3 bg-lightGray h-16 rounded-md border-white mx-auto border-2 border-white"
          src="./images/logo.png"
        />
      </div>
    </>
  );
}
