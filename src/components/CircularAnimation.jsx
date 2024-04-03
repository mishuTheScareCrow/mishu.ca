import centerImage from "../assets/images/logoMemoji.png";
import { Tilt } from "react-tilt";
const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};
export default function CircularAnimation() {
  return (
    <div className="circular-animation -z-10">
      <div className="stack-galaxy">
        <div className="stack-galaxy-inner relative">
          <div className="stack stack-1">
            <svg width="100%" height="100%" viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="0" cy="0" r="2" fill="#149ECA" />
              <g stroke="#149ECA" strokeWidth={1} fill="none">
                <ellipse rx="10" ry="4.5" />
                <ellipse rx="10" ry="4.5" transform="rotate(60)" />
                <ellipse rx="10" ry="4.5" transform="rotate(120)" />
              </g>
            </svg>
          </div>

          <div className="stack stack-2">
            <svg width="100%" height="100%" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h256v256H0V0z" fill="#F7DF1E" />
              <path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574" />
            </svg>
          </div>

          <div className="stack stack-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="#E34F26" d="M71,460 L30,0 481,0 440,460 255,512" />
              <path fill="#EF652A" d="M256,472 L405,431 440,37 256,37" />
              <path
                fill="#EBEBEB"
                d="M256,208 L181,208 176,150 256,150 256,94 255,94 114,94 115,109 129,265 256,265zM256,355 L255,355 192,338 188,293 158,293 132,293 139,382 255,414 256,414z"
              />
              <path
                fill="#FFF"
                d="M255,208 L255,265 325,265 318,338 255,355 255,414 371,382 372,372 385,223 387,208 371,208zM255,94 L255,129 255,150 255,150 392,150 392,150 392,150 393,138 396,109 397,94z"
              />
            </svg>
          </div>

          <div className="stack stack-4">
            <svg width="100%" height="100%" viewBox="0 0 71 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_337_7891)" fill="#5FA04E">
                <path d="M35.625 79.5c-1.081 0-2.09-.288-3.028-.792l-9.59-5.686c-1.442-.792-.721-1.08-.289-1.224 1.947-.648 2.308-.792 4.327-1.944.216-.144.504-.072.72.072l7.356 4.391c.288.144.649.144.865 0l28.77-16.628c.289-.144.433-.431.433-.791V23.714c0-.36-.144-.648-.432-.792L35.986 6.366c-.288-.144-.65-.144-.865 0L6.35 22.922c-.29.144-.434.504-.434.792v33.184c0 .287.145.647.433.791l7.86 4.535c4.254 2.16 6.922-.36 6.922-2.879V26.593c0-.432.36-.864.865-.864h3.678c.432 0 .865.36.865.864v32.752c0 5.687-3.1 8.998-8.509 8.998-1.658 0-2.956 0-6.633-1.8l-7.572-4.319A6.073 6.073 0 0 1 .798 56.97V23.786a6.073 6.073 0 0 1 3.028-5.255l28.77-16.628c1.804-1.008 4.255-1.008 6.058 0l28.77 16.628a6.073 6.073 0 0 1 3.029 5.255V56.97a6.073 6.073 0 0 1-3.029 5.254l-28.77 16.628c-.865.36-1.947.648-3.029.648Z" />
                <path d="M44.567 56.682c-12.62 0-15.215-5.759-15.215-10.654 0-.432.36-.864.865-.864h3.75c.433 0 .793.288.793.72.577 3.815 2.235 5.687 9.879 5.687 6.057 0 8.652-1.368 8.652-4.607 0-1.871-.72-3.24-10.167-4.175-7.86-.792-12.762-2.52-12.762-8.782 0-5.83 4.903-9.285 13.123-9.285 9.23 0 13.772 3.167 14.35 10.077 0 .216-.073.432-.217.648-.144.144-.36.288-.577.288h-3.822a.844.844 0 0 1-.793-.648c-.865-3.96-3.1-5.255-9.013-5.255-6.634 0-7.427 2.304-7.427 4.031 0 2.088.937 2.736 9.879 3.887 8.869 1.152 13.05 2.808 13.05 8.998 0 6.335-5.263 9.934-14.348 9.934Z" />
              </g>
              <defs>
                <clipPath id="clip0_337_7891">
                  <path fill="#fff" d="M0 .5h71v79H0z" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <div className="stack stack-5">
            <svg fill="none" height="128" viewBox="0 0 128 128" width="128" xmlns="http://www.w3.org/2000/svg">
              <rect fill="#3178c6" height="128" rx="6" width="128" />
              <path
                clipRule="evenodd"
                d="m74.2622 99.468v14.026c2.2724 1.168 4.9598 2.045 8.0625 2.629 3.1027.585 6.3728.877 9.8105.877 3.3503 0 6.533-.321 9.5478-.964 3.016-.643 5.659-1.702 7.932-3.178 2.272-1.476 4.071-3.404 5.397-5.786 1.325-2.381 1.988-5.325 1.988-8.8313 0-2.5421-.379-4.7701-1.136-6.6841-.758-1.9139-1.85-3.6159-3.278-5.1062-1.427-1.4902-3.139-2.827-5.134-4.0104-1.996-1.1834-4.246-2.3011-6.752-3.353-1.8352-.7597-3.4812-1.4975-4.9378-2.2134-1.4567-.7159-2.6948-1.4464-3.7144-2.1915-1.0197-.7452-1.8063-1.5341-2.3598-2.3669-.5535-.8327-.8303-1.7751-.8303-2.827 0-.9643.2476-1.8336.7429-2.6079s1.1945-1.4391 2.0976-1.9943c.9031-.5551 2.0101-.9861 3.3211-1.2929 1.311-.3069 2.7676-.4603 4.3699-.4603 1.1658 0 2.3958.0877 3.6928.263 1.296.1753 2.6.4456 3.911.8109 1.311.3652 2.585.8254 3.824 1.3806 1.238.5552 2.381 1.198 3.43 1.9285v-13.1051c-2.127-.8182-4.45-1.4245-6.97-1.819s-5.411-.5917-8.6744-.5917c-3.3211 0-6.4674.3579-9.439 1.0738-2.9715.7159-5.5862 1.8336-7.844 3.353-2.2578 1.5195-4.0422 3.4553-5.3531 5.8075-1.311 2.3522-1.9665 5.1646-1.9665 8.4373 0 4.1785 1.2017 7.7433 3.6052 10.6945 2.4035 2.9513 6.0523 5.4496 10.9466 7.495 1.9228.7889 3.7145 1.5633 5.375 2.323 1.6606.7597 3.0954 1.5486 4.3044 2.3668s2.1628 1.7094 2.8618 2.6736c.7.9643 1.049 2.06 1.049 3.2873 0 .9062-.218 1.7462-.655 2.5202s-1.1 1.446-1.9885 2.016c-.8886.57-1.9956 1.016-3.3212 1.337-1.3255.321-2.8768.482-4.6539.482-3.0299 0-6.0305-.533-9.0021-1.6-2.9715-1.066-5.7245-2.666-8.2591-4.799zm-23.5596-34.9136h18.2974v-11.5544h-51v11.5544h18.2079v51.4456h14.4947z"
                fill="#fff"
                fillRule="evenodd"
              />
            </svg>
          </div>

          <div className="stack stack-6">
            <svg width="50" height="52" viewBox="0 0 50 52" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M49.626 11.564a.809.809 0 0 1 .028.209v10.972a.8.8 0 0 1-.402.694l-9.209 5.302V39.25c0 .286-.152.55-.4.694L20.42 51.01c-.044.025-.092.041-.14.058-.018.006-.035.017-.054.022a.805.805 0 0 1-.41 0c-.022-.006-.042-.018-.063-.026-.044-.016-.09-.03-.132-.054L.402 39.944A.801.801 0 0 1 0 39.25V6.334c0-.072.01-.142.028-.21.006-.023.02-.044.028-.067.015-.042.029-.085.051-.124.015-.026.037-.047.055-.071.023-.032.044-.065.071-.093.023-.023.053-.04.079-.06.029-.024.055-.05.088-.069h.001l9.61-5.533a.802.802 0 0 1 .8 0l9.61 5.533h.002c.032.02.059.045.088.068.026.02.055.038.078.06.028.029.048.062.072.094.017.024.04.045.054.071.023.04.036.082.052.124.008.023.022.044.028.068a.809.809 0 0 1 .028.209v20.559l8.008-4.611v-10.51c0-.07.01-.141.028-.208.007-.024.02-.045.028-.068.016-.042.03-.085.052-.124.015-.026.037-.047.054-.071.024-.032.044-.065.072-.093.023-.023.052-.04.078-.06.03-.024.056-.05.088-.069h.001l9.611-5.533a.801.801 0 0 1 .8 0l9.61 5.533c.034.02.06.045.09.068.025.02.054.038.077.06.028.029.048.062.072.094.018.024.04.045.054.071.023.039.036.082.052.124.009.023.022.044.028.068zm-1.574 10.718v-9.124l-3.363 1.936-4.646 2.675v9.124l8.01-4.611zm-9.61 16.505v-9.13l-4.57 2.61-13.05 7.448v9.216l17.62-10.144zM1.602 7.719v31.068L19.22 48.93v-9.214l-9.204-5.209-.003-.002-.004-.002c-.031-.018-.057-.044-.086-.066-.025-.02-.054-.036-.076-.058l-.002-.003c-.026-.025-.044-.056-.066-.084-.02-.027-.044-.05-.06-.078l-.001-.003c-.018-.03-.029-.066-.042-.1-.013-.03-.03-.058-.038-.09v-.001c-.01-.038-.012-.078-.016-.117-.004-.03-.012-.06-.012-.09v-.002-21.481L4.965 9.654 1.602 7.72zm8.81-5.994L2.405 6.334l8.005 4.609 8.006-4.61-8.006-4.608zm4.164 28.764l4.645-2.674V7.719l-3.363 1.936-4.646 2.675v20.096l3.364-1.937zM39.243 7.164l-8.006 4.609 8.006 4.609 8.005-4.61-8.005-4.608zm-.801 10.605l-4.646-2.675-3.363-1.936v9.124l4.645 2.674 3.364 1.937v-9.124zM20.02 38.33l11.743-6.704 5.87-3.35-8-4.606-9.211 5.303-8.395 4.833 7.993 4.524z"
                fill="#FF2D20"
                fillRule="evenodd"
              />
            </svg>
          </div>

          <div className="stack stack-7">
            <svg width="800px" height="800px" viewBox="0 -198 512 512" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <path
                  d="M489.718 8.646l21.42.118s-39.824 53.964-43.076 58.362c-1.056 1.424-2.66 2.96-3.474 4.864-2.057 4.786-4.169 15.285-4.169 15.285l-19.599.098s3.05-10.944 2.924-16.773c-.11-5.092-2.71-10.178-4.168-15.285-1.474-5.17-3.475-15.286-3.475-15.286h20.15l2.779 11.117 30.688-42.5"
                  fill="#1A1918"
                />
                <path
                  d="M449.157 20.027c3.953 2.383 6.379 15.529 6.379 15.529s-20.684.305-31.94.305h-9.727l-11.812 51.414h-18.064s11.242-55.874 13.896-66.004c.86-3.28 5.892-2.717 14.389-2.717h13.569c8.762 0 19.003-1.119 23.31 1.473M365.06 45.067s.563-3.3-1.91-7.122c-2.113-3.258-4.064-4.016-9.623-4.19-15.695-.493-15.39 11.138-15.39 11.138l26.923.174zm17.022-13.32c2.3 8.297-2.084 27.792-2.084 27.792s-22.894-.382-35.434 0c-3.899.119-8.566-.424-9.727 1.39-1.633 2.542.597 6.455 2.487 8.108 2.175 1.903 6.412 2.12 7.935 2.313 10.178 1.293 31.48.334 31.48.334l-3.69 16.34s-30.103 1.51-45.16-2.084c-2.973-.708-5.76-2.139-7.643-4.168-.514-.555-.96-1.312-1.446-1.966-.388-.522-1.52-2.237-2.028-3.593-3.439-9.164.403-26.72 4.169-36.128.437-1.09.986-2.473 1.564-3.648.722-1.465 1.333-3.119 1.91-3.995.388-.604.869-.993 1.272-1.563.465-.674 1.006-1.327 1.507-1.91 1.39-1.612 2.967-2.752 4.864-4.168 6.273-4.698 17.626-8.345 31.265-6.949 5.135.528 12.89 2.362 16.675 7.643 1.014 1.41 1.515 4.21 2.084 6.253zM299.229 18.49l17.516-.103s-9.762 46.307-14.737 68.888h-20.15c-14.082 0-26.623 1.744-31.959-8.338-5.176-9.789-.236-25.887 2.084-36.824 1.64-7.74 5.094-23.56 5.094-23.56l18.148-.166s-5.128 24.63-7.262 36.928c-.764 4.405-2.34 8.553-.694 11.81 1.563 3.1 3.752 3.322 10.421 3.475 2.113.05 9.033 0 9.033 0l12.506-52.11M217.244 51.84c1.834-6.516 4.509-13.582 4.169-19.454-.368-6.28-5.634-11.998-9.032-13.2-10.234-3.613-19.815 1.438-23.623 5.558-4.926 5.336-6.594 11.569-8.338 20.15-1.298 6.37-2.362 13.095 0 18.063 4.182 8.783 17.224 6.865 31.266 6.949 2.084-5.586 3.807-11.86 5.558-18.066zm24.318-25.706c2 14.548-5.676 30.606-10.964 44.57 5.392.487 10.117-.075 10.457.327.354.521-3.614 16.668-4.997 16.71-4.279.111-18.459.229-24.372.229-19.295 0-37.345 1.257-46.55-8.337-3.738-3.898-6.323-10.583-6.949-15.286-1.042-7.851.264-16.495 2.085-23.622 1.647-6.435 3.758-12.507 6.948-18.066C175.328 8.507 189.432-1.998 213.075.427c4.586.472 11.172 2.48 15.286 4.863.284.167 1.279.959 1.507 1.098 5.559 3.537 10.624 11.978 11.694 19.746zM156.193 18.574c-1.167 5.315-2.334 11.34-3.564 16.592h-19.454c1.507-5.822 2.661-11.61 4.169-16.675 6.225 0 12.013.083 18.85.083M132.48 40.03h18.76c-2.453 13.576-7.31 35.475-11.117 50.719-2.383 9.54-3.974 16.501-10.422 21.538-.577.452-.91.237-1.39.695-1.188 1.133-6.684 2.447-9.726 2.779-4.947.536-10.54.07-16.62-.055 1.591-5.815 3.391-12.798 4.809-18.01 14.82 1.794 15.195-12.214 18.064-25.706 1.66-7.796 6.691-28.834 7.642-31.96"
                  fill="#1A1918"
                />
                <g fill="#21609B">
                  <path d="M88.708 75.464l-.402 1.042c-6.85 13.34-18.989 21.524-36.303 21.885-8.094.167-15.806-1.91-20.844-4.168C20.287 89.338 11.142 80.279 6.148 70.6c-7.164-13.875-8.456-33.176 6.44-47.592.23 0-1.807 3.126-1.577 3.126l-.41 1.334C-.133 61.074 32.938 89.874 65.086 86.58c7.726-.792 17.578-5.023 23.622-11.116" />
                  <path d="M69.254 61.568c8.088.055 16.536-3.725 21.539-9.032-4.377 11.11-17.05 18.251-34.044 15.98-14.23-1.904-27.785-16.223-29.181-30.571-1.021-10.442 2.618-16.674 8.615-24.234-2.084 3.954-2.863 7.003-3.057 8.948-2.278 22.588 18.044 38.79 36.128 38.909" />
                  <path d="M89.98 33.512c-1.257 2.884-8.496 8.33-11.693 9.011-12.659 2.697-20.766-3.306-25.013-10.137-.631-1.02-1.798-3.806-2.007-4.515-1.647-5.6-.89-14.07 4.023-18.454-1.48 4.169-1.696 9.011-.917 12.159.472 1.903 1.91 5.226 3.349 7.316 2.618 3.807 4.279 4.732 7.642 6.754 1.515.91 3.14 1.64 3.842 1.84 3.189.939 9.922 3.412 20.775-3.974" />
                </g>
              </g>
            </svg>
          </div>

          <div className="stack stack-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
              <path fill="#264de4" d="M71.357 460.819L30.272 0h451.456l-41.129 460.746L255.724 512z" />
              <path fill="#2965f1" d="M405.388 431.408l35.148-393.73H256v435.146z" />
              <path
                fill="#ebebeb"
                d="M124.46 208.59l5.065 56.517H256V208.59zM119.419 150.715H256V94.197H114.281zM256 355.372l-.248.066-62.944-16.996-4.023-45.076h-56.736l7.919 88.741 115.772 32.14.26-.073z"
              />
              <path
                fill="#fff"
                d="M255.805 208.59v56.517H325.4l-6.56 73.299-63.035 17.013v58.8l115.864-32.112.85-9.549 13.28-148.792 1.38-15.176 10.203-114.393H255.805v56.518h79.639L330.3 208.59z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="circular-shape">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
          <circle
            vectorEffect="non-scaling-stroke"
            cx="50"
            cy="50"
            r="50"
            strokeDasharray="0 22.43994752564138"
            strokeLinecap="round"
            strokeWidth={2}
          />
        </svg>
      </div>
      <div className="circular-shape">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
          <circle
            vectorEffect="non-scaling-stroke"
            cx="50"
            cy="50"
            r="50"
            strokeDasharray="0 22.43994752564138"
            strokeLinecap="round"
            strokeWidth={2}
          />
        </svg>
      </div>
      <div className="circular-image">
        <Tilt options={defaultOptions}>
          <img className="rounded-full w-full" draggable="false" src={centerImage} />
        </Tilt>
      </div>
    </div>
  );
}
