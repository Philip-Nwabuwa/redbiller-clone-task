interface IconProps {
  className?: string; // Define className prop with string type
}

export const redRight = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="injected-svg icon bg-primary"
    data-src="frontends/v3/assets/template/img/icons/interface/icon-arrow-right.svg"
  >
    <path
      d="M12 5L19 12L12 19M5 12H18H5Z"
      stroke="#93120F"
      strokeWidth="2px"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    ></path>
  </svg>
);

export const dropdownArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="10"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="fill-black group-hover:opacity-100 rotate-180 opacity-25"
  >
    <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
  </svg>
);

export const lamp: React.FC<IconProps> = ({ className }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    className={`h-6 w-6 ${className}`}
  >
    <title>Icon For Lamp#2</title>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <rect opacity="0" x="0" y="0" width="24" height="24"></rect>
      <path
        d="M12,2 C12.5522847,2 13,2.44771525 13,3 L13,11 C13,11.5522847 12.5522847,12 12,12 C11.4477153,12 11,11.5522847 11,11 L11,3 C11,2.44771525 11.4477153,2 12,2 Z"
        fill="#000000"
        opacity="0.3"
      ></path>
      <path
        d="M8.12601749,19 L15.8739825,19 C15.4299397,20.7252272 13.8638394,22 12,22 C10.1361606,22 8.57006028,20.7252272 8.12601749,19 Z"
        fill="#000000"
        opacity="0.3"
      ></path>
      <path
        d="M12,8 L12,8 C16.9705627,8 21,12.0294373 21,17 L3,17 L3,17 C3,12.0294373 7.02943725,8 12,8 Z"
        fill="#000000"
      ></path>
    </g>
  </svg>
);

export const feature2: React.FC<IconProps> = ({ className }) => (
  <svg
    width="24"
    height="24"
    className={`h-6 w-6 ${className}`}
    viewBox="0 0 24 24"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Icon For Stairs</title>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <rect opacity="0" x="0" y="0" width="24" height="24"></rect>
      <path
        d="M21,5.5 L21,17.5 C21,18.3284271 20.3284271,19 19.5,19 L4.5,19 C3.67157288,19 3,18.3284271 3,17.5 L3,14.5 C3,13.6715729 3.67157288,13 4.5,13 L9,13 L9,9.5 C9,8.67157288 9.67157288,8 10.5,8 L15,8 L15,5.5 C15,4.67157288 15.6715729,4 16.5,4 L19.5,4 C20.3284271,4 21,4.67157288 21,5.5 Z"
        fill="#000000"
        fillRule="nonzero"
      ></path>
    </g>
  </svg>
);

export const feature3: React.FC<IconProps> = ({ className }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    className={`h-6 w-6 ${className}`}
  >
    <title>Icon For Active-call</title>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <rect opacity="0" x="0" y="0" width="24" height="24"></rect>
      <path
        d="M13.0799676,14.7839934 L15.2839934,12.5799676 C15.8927139,11.9712471 16.0436229,11.0413042 15.6586342,10.2713269 L15.5337539,10.0215663 C15.1487653,9.25158901 15.2996742,8.3216461 15.9083948,7.71292558 L18.6411989,4.98012149 C18.836461,4.78485934 19.1530435,4.78485934 19.3483056,4.98012149 C19.3863063,5.01812215 19.4179321,5.06200062 19.4419658,5.11006808 L20.5459415,7.31801948 C21.3904962,9.0071287 21.0594452,11.0471565 19.7240871,12.3825146 L13.7252616,18.3813401 C12.2717221,19.8348796 10.1217008,20.3424308 8.17157288,19.6923882 L5.75709327,18.8875616 C5.49512161,18.8002377 5.35354162,18.5170777 5.4408655,18.2551061 C5.46541191,18.1814669 5.50676633,18.114554 5.56165376,18.0596666 L8.21292558,15.4083948 C8.8216461,14.7996742 9.75158901,14.6487653 10.5215663,15.0337539 L10.7713269,15.1586342 C11.5413042,15.5436229 12.4712471,15.3927139 13.0799676,14.7839934 Z"
        fill="#000000"
      ></path>
      <path
        d="M14.1480759,6.00715131 L13.9566988,7.99797396 C12.4781389,7.8558405 11.0097207,8.36895892 9.93933983,9.43933983 C8.8724631,10.5062166 8.35911588,11.9685602 8.49664195,13.4426352 L6.50528978,13.6284215 C6.31304559,11.5678496 7.03283934,9.51741319 8.52512627,8.02512627 C10.0223249,6.52792766 12.0812426,5.80846733 14.1480759,6.00715131 Z M14.4980938,2.02230302 L14.313049,4.01372424 C11.6618299,3.76737046 9.03000738,4.69181803 7.1109127,6.6109127 C5.19447112,8.52735429 4.26985715,11.1545872 4.51274152,13.802405 L2.52110319,13.985098 C2.22450978,10.7517681 3.35562581,7.53777247 5.69669914,5.19669914 C8.04101739,2.85238089 11.2606138,1.72147333 14.4980938,2.02230302 Z"
        fill="#000000"
        fillRule="nonzero"
        opacity="0.3"
      ></path>
    </g>
  </svg>
);

export const checkMark: React.FC<IconProps> = ({ className }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`"injected-svg m-2 icon icon-xs bg-success" ${className}`}
    data-src="frontends/v3/assets/template/img/icons/interface/icon-check.svg"
  >
    <path
      d="M20 6L9 17L4 12"
      stroke="#93120F"
      strokeWidth="3px"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    ></path>
  </svg>
);

export const switchIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    className={`h-6 w-6 ${className}`}
  >
    <title>Icon For Settings</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <rect opacity="0" x="0" y="0" width="24" height="24"></rect>
      <path
        d="M4.5,7 L9.5,7 C10.3284271,7 11,7.67157288 11,8.5 C11,9.32842712 10.3284271,10 9.5,10 L4.5,10 C3.67157288,10 3,9.32842712 3,8.5 C3,7.67157288 3.67157288,7 4.5,7 Z M13.5,15 L18.5,15 C19.3284271,15 20,15.6715729 20,16.5 C20,17.3284271 19.3284271,18 18.5,18 L13.5,18 C12.6715729,18 12,17.3284271 12,16.5 C12,15.6715729 12.6715729,15 13.5,15 Z"
        fill="#000000"
        opacity="0.3"
      ></path>
      <path
        d="M17,11 C15.3431458,11 14,9.65685425 14,8 C14,6.34314575 15.3431458,5 17,5 C18.6568542,5 20,6.34314575 20,8 C20,9.65685425 18.6568542,11 17,11 Z M6,19 C4.34314575,19 3,17.6568542 3,16 C3,14.3431458 4.34314575,13 6,13 C7.65685425,13 9,14.3431458 9,16 C9,17.6568542 7.65685425,19 6,19 Z"
        fill="#000000"
      ></path>
    </g>
  </svg>
);

export const joyStick: React.FC<IconProps> = ({ className }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    className={`h-6 w-6 ${className}`}
  >
    <title>Icon For Gameboy</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <rect opacity="0" x="0" y="0" width="24" height="24"></rect>
      <path
        d="M11,16 L11,10 C11,9.44771525 11.4477153,9 12,9 C12.5522847,9 13,9.44771525 13,10 L13,16 L19,16 C20.1045695,16 21,16.8954305 21,18 L21,19 C21,20.1045695 20.1045695,21 19,21 L5,21 C3.8954305,21 3,20.1045695 3,19 L3,18 C3,16.8954305 3.8954305,16 5,16 L11,16 Z"
        fill="#000000"
        opacity="0.3"
      ></path>
      <circle fill="#000000" cx="12" cy="7" r="3"></circle>
    </g>
  </svg>
);

export const camera: React.FC<IconProps> = ({ className }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    className={`h-6 w-6 ${className}`}
  >
    <title>Icon For Money</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <rect opacity="0" x="0" y="0" width="24" height="24"></rect>
      <path
        d="M2,6 L21,6 C21.5522847,6 22,6.44771525 22,7 L22,17 C22,17.5522847 21.5522847,18 21,18 L2,18 C1.44771525,18 1,17.5522847 1,17 L1,7 C1,6.44771525 1.44771525,6 2,6 Z M11.5,16 C13.709139,16 15.5,14.209139 15.5,12 C15.5,9.790861 13.709139,8 11.5,8 C9.290861,8 7.5,9.790861 7.5,12 C7.5,14.209139 9.290861,16 11.5,16 Z"
        fill="#000000"
        opacity="0.3"
        transform="translate(11.500000, 12.000000) rotate(-345.000000) translate(-11.500000, -12.000000) "
      ></path>
      <path
        d="M2,6 L21,6 C21.5522847,6 22,6.44771525 22,7 L22,17 C22,17.5522847 21.5522847,18 21,18 L2,18 C1.44771525,18 1,17.5522847 1,17 L1,7 C1,6.44771525 1.44771525,6 2,6 Z M11.5,16 C13.709139,16 15.5,14.209139 15.5,12 C15.5,9.790861 13.709139,8 11.5,8 C9.290861,8 7.5,9.790861 7.5,12 C7.5,14.209139 9.290861,16 11.5,16 Z M11.5,14 C12.6045695,14 13.5,13.1045695 13.5,12 C13.5,10.8954305 12.6045695,10 11.5,10 C10.3954305,10 9.5,10.8954305 9.5,12 C9.5,13.1045695 10.3954305,14 11.5,14 Z"
        fill="#000000"
      ></path>
    </g>
  </svg>
);

export const shieldIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    className={`h-6 w-6 ${className}`}
  >
    <title>Icon For Shield-check</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <rect opacity="0" x="0" y="0" width="24" height="24"></rect>
      <path
        d="M4,4 L11.6314229,2.5691082 C11.8750185,2.52343403 12.1249815,2.52343403 12.3685771,2.5691082 L20,4 L20,13.2830094 C20,16.2173861 18.4883464,18.9447835 16,20.5 L12.5299989,22.6687507 C12.2057287,22.8714196 11.7942713,22.8714196 11.4700011,22.6687507 L8,20.5 C5.51165358,18.9447835 4,16.2173861 4,13.2830094 L4,4 Z"
        fill="#000000"
        opacity="0.3"
      ></path>
      <path
        d="M11.1750002,14.75 C10.9354169,14.75 10.6958335,14.6541667 10.5041669,14.4625 L8.58750019,12.5458333 C8.20416686,12.1625 8.20416686,11.5875 8.58750019,11.2041667 C8.97083352,10.8208333 9.59375019,10.8208333 9.92916686,11.2041667 L11.1750002,12.45 L14.3375002,9.2875 C14.7208335,8.90416667 15.2958335,8.90416667 15.6791669,9.2875 C16.0625002,9.67083333 16.0625002,10.2458333 15.6791669,10.6291667 L11.8458335,14.4625 C11.6541669,14.6541667 11.4145835,14.75 11.1750002,14.75 Z"
        fill="#000000"
      ></path>
    </g>
  </svg>
);

const Icons = {
  redRight,
  dropdownArrow,
  lamp,
  checkMark,
  feature2,
  feature3,
  switchIcon,
  joyStick,
  camera,
  shieldIcon,
};

export default Icons;
