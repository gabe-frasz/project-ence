import { useTheme } from "@core/hooks";
import { ButtonProps } from "@core/types";

export const Button = (props: ButtonProps) => {
  const { variant } = props;

  const { theme } = useTheme();

  if (theme === "dark") {
    return (
      <button {...props}>
        {variant === "see-more" ? (
          <svg
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 305 53"
            fill="none"
          >
            <rect width="305" height="53" rx="8.12506" fill="#4A4E69" />
            <rect x="236" width="69" height="53" rx="8.12506" fill="#22223B" />
            <path
              d="M253 26.8369L282.445 26.8089M277.027 16.0001L287.673 26.7625L277.027 37.5249"
              stroke="white"
              strokeWidth="4.80548"
              strokeLinecap="square"
              strokeLinejoin="round"
            />
            <path
              d="M47.3672 33V19.7291H52.6377C53.4466 19.7291 54.167 19.8934 54.799 20.222C55.4435 20.538 55.9428 20.993 56.2967 21.587C56.6632 22.1684 56.8465 22.8699 56.8465 23.6914V23.9379C56.8465 24.7594 56.6569 25.4672 56.2777 26.0612C55.9112 26.6552 55.4119 27.1102 54.78 27.4262C54.1481 27.7422 53.4339 27.9002 52.6377 27.9002H49.4148V33H47.3672ZM49.4148 26.0422H52.4291C53.1496 26.0422 53.7246 25.8527 54.1544 25.4735C54.5841 25.0943 54.799 24.5761 54.799 23.9189V23.7293C54.799 23.0594 54.5841 22.5349 54.1544 22.1558C53.7246 21.7766 53.1496 21.587 52.4291 21.587H49.4148V26.0422ZM58.8473 33V23.6535H60.7621V24.7531H61.0655C61.2171 24.3613 61.4573 24.0769 61.7859 23.8999C62.1271 23.7103 62.5442 23.6156 63.0372 23.6156H64.1557V25.3787H62.9613C62.3294 25.3787 61.8112 25.5556 61.4067 25.9095C61.0023 26.2508 60.8001 26.7816 60.8001 27.502V33H58.8473ZM70.2251 33.2654C69.2898 33.2654 68.4556 33.0758 67.7226 32.6967C67.0021 32.3049 66.4334 31.7487 66.0163 31.0283C65.5992 30.3079 65.3907 29.4548 65.3907 28.4689V28.1845C65.3907 27.1987 65.5992 26.3519 66.0163 25.6441C66.4334 24.9237 67.0021 24.3676 67.7226 23.9758C68.4556 23.584 69.2898 23.3881 70.2251 23.3881C71.1604 23.3881 71.9945 23.584 72.7276 23.9758C73.4607 24.3676 74.0357 24.9237 74.4528 25.6441C74.8699 26.3519 75.0784 27.1987 75.0784 28.1845V28.4689C75.0784 29.4548 74.8699 30.3079 74.4528 31.0283C74.0357 31.7487 73.4607 32.3049 72.7276 32.6967C71.9945 33.0758 71.1604 33.2654 70.2251 33.2654ZM70.2251 31.5212C71.0845 31.5212 71.7797 31.2495 72.3105 30.706C72.854 30.1499 73.1257 29.3853 73.1257 28.4121V28.2414C73.1257 27.2682 72.8603 26.5099 72.3295 25.9664C71.7986 25.4103 71.0972 25.1322 70.2251 25.1322C69.3783 25.1322 68.6831 25.4103 68.1396 25.9664C67.6088 26.5099 67.3434 27.2682 67.3434 28.2414V28.4121C67.3434 29.3853 67.6088 30.1499 68.1396 30.706C68.6831 31.2495 69.3783 31.5212 70.2251 31.5212ZM69.0117 22.516L70.4336 19.8049H72.6897L70.7749 22.516H69.0117ZM76.1024 33L79.6665 28.2793L76.1782 23.6535H78.4722L80.9178 27.0091H81.2211L83.6668 23.6535H85.9797L82.4724 28.2793L86.0366 33H83.7047L81.2211 29.5685H80.9178L78.4342 33H76.1024ZM88.1367 33V23.6535H90.0894V33H88.1367ZM89.1225 22.3833C88.7434 22.3833 88.4211 22.2632 88.1556 22.023C87.9029 21.7703 87.7765 21.448 87.7765 21.0562C87.7765 20.6644 87.9029 20.3484 88.1556 20.1082C88.4211 19.8555 88.7434 19.7291 89.1225 19.7291C89.5143 19.7291 89.8366 19.8555 90.0894 20.1082C90.3422 20.3484 90.4686 20.6644 90.4686 21.0562C90.4686 21.448 90.3422 21.7703 90.0894 22.023C89.8366 22.2632 89.5143 22.3833 89.1225 22.3833ZM92.9874 33V23.6535H94.9022V24.7531H95.2055C95.3825 24.4245 95.6668 24.1338 96.0587 23.881C96.4505 23.6282 96.9813 23.5018 97.6512 23.5018C98.3463 23.5018 98.9024 23.6472 99.3195 23.9379C99.7492 24.2159 100.072 24.5761 100.286 25.0185H100.59C100.805 24.5888 101.114 24.2285 101.519 23.9379C101.936 23.6472 102.523 23.5018 103.282 23.5018C103.889 23.5018 104.426 23.6282 104.893 23.881C105.361 24.1211 105.734 24.4876 106.012 24.9806C106.29 25.4608 106.429 26.0612 106.429 26.7816V33H104.476V26.9333C104.476 26.3645 104.318 25.9285 104.002 25.6252C103.699 25.3092 103.263 25.1512 102.694 25.1512C102.087 25.1512 101.601 25.3471 101.234 25.7389C100.868 26.1307 100.685 26.6931 100.685 27.4262V33H98.7318V26.9333C98.7318 26.3645 98.5738 25.9285 98.2578 25.6252C97.9545 25.3092 97.5185 25.1512 96.9497 25.1512C96.343 25.1512 95.8564 25.3471 95.4899 25.7389C95.1234 26.1307 94.9401 26.6931 94.9401 27.4262V33H92.9874ZM113.622 33.2654C112.687 33.2654 111.853 33.0758 111.12 32.6967C110.399 32.3049 109.831 31.7487 109.413 31.0283C108.996 30.3079 108.788 29.4548 108.788 28.4689V28.1845C108.788 27.1987 108.996 26.3519 109.413 25.6441C109.831 24.9237 110.399 24.3676 111.12 23.9758C111.853 23.584 112.687 23.3881 113.622 23.3881C114.557 23.3881 115.392 23.584 116.125 23.9758C116.858 24.3676 117.433 24.9237 117.85 25.6441C118.267 26.3519 118.476 27.1987 118.476 28.1845V28.4689C118.476 29.4548 118.267 30.3079 117.85 31.0283C117.433 31.7487 116.858 32.3049 116.125 32.6967C115.392 33.0758 114.557 33.2654 113.622 33.2654ZM113.622 31.5212C114.482 31.5212 115.177 31.2495 115.708 30.706C116.251 30.1499 116.523 29.3853 116.523 28.4121V28.2414C116.523 27.2682 116.257 26.5099 115.727 25.9664C115.196 25.4103 114.494 25.1322 113.622 25.1322C112.775 25.1322 112.08 25.4103 111.537 25.9664C111.006 26.5099 110.741 27.2682 110.741 28.2414V28.4121C110.741 29.3853 111.006 30.1499 111.537 30.706C112.08 31.2495 112.775 31.5212 113.622 31.5212ZM125.739 36.7917V23.6535H127.654V24.9995H127.957C128.197 24.5824 128.557 24.2096 129.038 23.881C129.531 23.5524 130.232 23.3881 131.142 23.3881C131.926 23.3881 132.64 23.5776 133.284 23.9568C133.942 24.336 134.466 24.8858 134.858 25.6062C135.262 26.314 135.465 27.1734 135.465 28.1845V28.4689C135.465 29.48 135.269 30.3458 134.877 31.0662C134.485 31.774 133.961 32.3175 133.303 32.6967C132.646 33.0758 131.926 33.2654 131.142 33.2654C130.535 33.2654 130.024 33.1896 129.606 33.0379C129.189 32.8862 128.854 32.6967 128.602 32.4692C128.349 32.229 128.147 31.9826 127.995 31.7298H127.692V36.7917H125.739ZM130.573 31.5592C131.433 31.5592 132.134 31.2874 132.678 30.7439C133.221 30.2005 133.493 29.4232 133.493 28.4121V28.2414C133.493 27.2429 133.215 26.472 132.659 25.9285C132.115 25.385 131.42 25.1133 130.573 25.1133C129.739 25.1133 129.044 25.385 128.488 25.9285C127.944 26.472 127.673 27.2429 127.673 28.2414V28.4121C127.673 29.4232 127.944 30.2005 128.488 30.7439C129.044 31.2874 129.739 31.5592 130.573 31.5592ZM137.884 33V23.6535H139.799V24.7531H140.102C140.254 24.3613 140.494 24.0769 140.823 23.8999C141.164 23.7103 141.581 23.6156 142.074 23.6156H143.193V25.3787H141.998C141.366 25.3787 140.848 25.5556 140.444 25.9095C140.039 26.2508 139.837 26.7816 139.837 27.502V33H137.884ZM149.262 33.2654C148.327 33.2654 147.492 33.0758 146.759 32.6967C146.039 32.3049 145.47 31.7487 145.053 31.0283C144.636 30.3079 144.427 29.4548 144.427 28.4689V28.1845C144.427 27.1987 144.636 26.3519 145.053 25.6441C145.47 24.9237 146.039 24.3676 146.759 23.9758C147.492 23.584 148.327 23.3881 149.262 23.3881C150.197 23.3881 151.031 23.584 151.764 23.9758C152.497 24.3676 153.073 24.9237 153.49 25.6441C153.907 26.3519 154.115 27.1987 154.115 28.1845V28.4689C154.115 29.4548 153.907 30.3079 153.49 31.0283C153.073 31.7487 152.497 32.3049 151.764 32.6967C151.031 33.0758 150.197 33.2654 149.262 33.2654ZM149.262 31.5212C150.121 31.5212 150.816 31.2495 151.347 30.706C151.891 30.1499 152.163 29.3853 152.163 28.4121V28.2414C152.163 27.2682 151.897 26.5099 151.366 25.9664C150.835 25.4103 150.134 25.1322 149.262 25.1322C148.415 25.1322 147.72 25.4103 147.176 25.9664C146.646 26.5099 146.38 27.2682 146.38 28.2414V28.4121C146.38 29.3853 146.646 30.1499 147.176 30.706C147.72 31.2495 148.415 31.5212 149.262 31.5212ZM154.764 36.7917V35.1044H156.035C156.401 35.1044 156.584 34.9148 156.584 34.5356V23.6535H158.537V34.9148C158.537 35.4836 158.373 35.9386 158.044 36.2798C157.716 36.6211 157.254 36.7917 156.66 36.7917H154.764ZM157.57 22.3833C157.191 22.3833 156.869 22.2632 156.603 22.023C156.35 21.7703 156.224 21.448 156.224 21.0562C156.224 20.6644 156.35 20.3484 156.603 20.1082C156.869 19.8555 157.191 19.7291 157.57 19.7291C157.962 19.7291 158.284 19.8555 158.537 20.1082C158.79 20.3484 158.916 20.6644 158.916 21.0562C158.916 21.448 158.79 21.7703 158.537 22.023C158.284 22.2632 157.962 22.3833 157.57 22.3833ZM165.719 33.2654C164.771 33.2654 163.943 33.0695 163.235 32.6777C162.527 32.2733 161.971 31.7108 161.567 30.9904C161.175 30.2573 160.979 29.4105 160.979 28.45V28.2225C160.979 27.2493 161.175 26.4025 161.567 25.682C161.959 24.949 162.502 24.3865 163.197 23.9947C163.905 23.5903 164.72 23.3881 165.643 23.3881C166.54 23.3881 167.324 23.5903 167.994 23.9947C168.676 24.3865 169.207 24.9363 169.586 25.6441C169.965 26.3519 170.155 27.1797 170.155 28.1277V28.8671H162.97C162.995 29.6886 163.267 30.3458 163.785 30.8387C164.316 31.319 164.973 31.5592 165.757 31.5592C166.49 31.5592 167.04 31.3948 167.406 31.0662C167.785 30.7376 168.076 30.3585 168.278 29.9287L169.89 30.7629C169.713 31.1168 169.454 31.4896 169.112 31.8815C168.784 32.2733 168.348 32.6019 167.804 32.8673C167.261 33.1327 166.566 33.2654 165.719 33.2654ZM162.989 27.3693H168.164C168.114 26.6616 167.861 26.1118 167.406 25.7199C166.951 25.3155 166.357 25.1133 165.624 25.1133C164.891 25.1133 164.291 25.3155 163.823 25.7199C163.368 26.1118 163.09 26.6616 162.989 27.3693ZM175.661 33C175.092 33 174.637 32.8294 174.296 32.4881C173.968 32.1469 173.803 31.6919 173.803 31.1231V25.3029H171.225V23.6535H173.803V20.5632H175.756V23.6535H178.543V25.3029H175.756V30.7819C175.756 31.161 175.933 31.3506 176.287 31.3506H178.239V33H175.661ZM184.883 33.2654C183.948 33.2654 183.114 33.0758 182.381 32.6967C181.66 32.3049 181.091 31.7487 180.674 31.0283C180.257 30.3079 180.049 29.4548 180.049 28.4689V28.1845C180.049 27.1987 180.257 26.3519 180.674 25.6441C181.091 24.9237 181.66 24.3676 182.381 23.9758C183.114 23.584 183.948 23.3881 184.883 23.3881C185.818 23.3881 186.653 23.584 187.386 23.9758C188.119 24.3676 188.694 24.9237 189.111 25.6441C189.528 26.3519 189.736 27.1987 189.736 28.1845V28.4689C189.736 29.4548 189.528 30.3079 189.111 31.0283C188.694 31.7487 188.119 32.3049 187.386 32.6967C186.653 33.0758 185.818 33.2654 184.883 33.2654ZM184.883 31.5212C185.743 31.5212 186.438 31.2495 186.969 30.706C187.512 30.1499 187.784 29.3853 187.784 28.4121V28.2414C187.784 27.2682 187.518 26.5099 186.987 25.9664C186.457 25.4103 185.755 25.1322 184.883 25.1322C184.036 25.1322 183.341 25.4103 182.798 25.9664C182.267 26.5099 182.001 27.2682 182.001 28.2414V28.4121C182.001 29.3853 182.267 30.1499 182.798 30.706C183.341 31.2495 184.036 31.5212 184.883 31.5212Z"
              fill="white"
            />
          </svg>
        ) : (
          <svg
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 305 53"
            fill="none"
          >
            <rect width="305" height="53" rx="8.12506" fill="#4A4E69" />
            <rect x="236" width="69" height="53" rx="8.12506" fill="#22223B" />
            <path
              d="M253 26.8369L282.445 26.8089M277.027 16.0001L287.673 26.7625L277.027 37.5249"
              stroke="white"
              strokeWidth="4.80548"
              strokeLinecap="square"
              strokeLinejoin="round"
            />
            <path
              d="M47.3672 33V19.7291H52.6377C53.4466 19.7291 54.167 19.8934 54.799 20.222C55.4435 20.538 55.9428 20.993 56.2967 21.587C56.6632 22.1684 56.8465 22.8699 56.8465 23.6914V23.9379C56.8465 24.7594 56.6569 25.4672 56.2777 26.0612C55.9112 26.6552 55.4119 27.1102 54.78 27.4262C54.1481 27.7422 53.4339 27.9002 52.6377 27.9002H49.4148V33H47.3672ZM49.4148 26.0422H52.4291C53.1496 26.0422 53.7246 25.8527 54.1544 25.4735C54.5841 25.0943 54.799 24.5761 54.799 23.9189V23.7293C54.799 23.0594 54.5841 22.5349 54.1544 22.1558C53.7246 21.7766 53.1496 21.587 52.4291 21.587H49.4148V26.0422ZM58.8473 33V23.6535H60.7621V24.7531H61.0655C61.2171 24.3613 61.4573 24.0769 61.7859 23.8999C62.1271 23.7103 62.5442 23.6156 63.0372 23.6156H64.1557V25.3787H62.9613C62.3294 25.3787 61.8112 25.5556 61.4067 25.9095C61.0023 26.2508 60.8001 26.7816 60.8001 27.502V33H58.8473ZM70.2251 33.2654C69.2898 33.2654 68.4556 33.0758 67.7226 32.6967C67.0021 32.3049 66.4334 31.7487 66.0163 31.0283C65.5992 30.3079 65.3907 29.4548 65.3907 28.4689V28.1845C65.3907 27.1987 65.5992 26.3519 66.0163 25.6441C66.4334 24.9237 67.0021 24.3676 67.7226 23.9758C68.4556 23.584 69.2898 23.3881 70.2251 23.3881C71.1604 23.3881 71.9945 23.584 72.7276 23.9758C73.4607 24.3676 74.0357 24.9237 74.4528 25.6441C74.8699 26.3519 75.0784 27.1987 75.0784 28.1845V28.4689C75.0784 29.4548 74.8699 30.3079 74.4528 31.0283C74.0357 31.7487 73.4607 32.3049 72.7276 32.6967C71.9945 33.0758 71.1604 33.2654 70.2251 33.2654ZM70.2251 31.5212C71.0845 31.5212 71.7797 31.2495 72.3105 30.706C72.854 30.1499 73.1257 29.3853 73.1257 28.4121V28.2414C73.1257 27.2682 72.8603 26.5099 72.3295 25.9664C71.7986 25.4103 71.0972 25.1322 70.2251 25.1322C69.3783 25.1322 68.6831 25.4103 68.1396 25.9664C67.6088 26.5099 67.3434 27.2682 67.3434 28.2414V28.4121C67.3434 29.3853 67.6088 30.1499 68.1396 30.706C68.6831 31.2495 69.3783 31.5212 70.2251 31.5212ZM69.0117 22.516L70.4336 19.8049H72.6897L70.7749 22.516H69.0117ZM76.1024 33L79.6665 28.2793L76.1782 23.6535H78.4722L80.9178 27.0091H81.2211L83.6668 23.6535H85.9797L82.4724 28.2793L86.0366 33H83.7047L81.2211 29.5685H80.9178L78.4342 33H76.1024ZM88.1367 33V23.6535H90.0894V33H88.1367ZM89.1225 22.3833C88.7434 22.3833 88.4211 22.2632 88.1556 22.023C87.9029 21.7703 87.7765 21.448 87.7765 21.0562C87.7765 20.6644 87.9029 20.3484 88.1556 20.1082C88.4211 19.8555 88.7434 19.7291 89.1225 19.7291C89.5143 19.7291 89.8366 19.8555 90.0894 20.1082C90.3422 20.3484 90.4686 20.6644 90.4686 21.0562C90.4686 21.448 90.3422 21.7703 90.0894 22.023C89.8366 22.2632 89.5143 22.3833 89.1225 22.3833ZM92.9874 33V23.6535H94.9022V24.7531H95.2055C95.3825 24.4245 95.6668 24.1338 96.0587 23.881C96.4505 23.6282 96.9813 23.5018 97.6512 23.5018C98.3463 23.5018 98.9024 23.6472 99.3195 23.9379C99.7492 24.2159 100.072 24.5761 100.286 25.0185H100.59C100.805 24.5888 101.114 24.2285 101.519 23.9379C101.936 23.6472 102.523 23.5018 103.282 23.5018C103.889 23.5018 104.426 23.6282 104.893 23.881C105.361 24.1211 105.734 24.4876 106.012 24.9806C106.29 25.4608 106.429 26.0612 106.429 26.7816V33H104.476V26.9333C104.476 26.3645 104.318 25.9285 104.002 25.6252C103.699 25.3092 103.263 25.1512 102.694 25.1512C102.087 25.1512 101.601 25.3471 101.234 25.7389C100.868 26.1307 100.685 26.6931 100.685 27.4262V33H98.7318V26.9333C98.7318 26.3645 98.5738 25.9285 98.2578 25.6252C97.9545 25.3092 97.5185 25.1512 96.9497 25.1512C96.343 25.1512 95.8564 25.3471 95.4899 25.7389C95.1234 26.1307 94.9401 26.6931 94.9401 27.4262V33H92.9874ZM113.622 33.2654C112.687 33.2654 111.853 33.0758 111.12 32.6967C110.399 32.3049 109.831 31.7487 109.413 31.0283C108.996 30.3079 108.788 29.4548 108.788 28.4689V28.1845C108.788 27.1987 108.996 26.3519 109.413 25.6441C109.831 24.9237 110.399 24.3676 111.12 23.9758C111.853 23.584 112.687 23.3881 113.622 23.3881C114.557 23.3881 115.392 23.584 116.125 23.9758C116.858 24.3676 117.433 24.9237 117.85 25.6441C118.267 26.3519 118.476 27.1987 118.476 28.1845V28.4689C118.476 29.4548 118.267 30.3079 117.85 31.0283C117.433 31.7487 116.858 32.3049 116.125 32.6967C115.392 33.0758 114.557 33.2654 113.622 33.2654ZM113.622 31.5212C114.482 31.5212 115.177 31.2495 115.708 30.706C116.251 30.1499 116.523 29.3853 116.523 28.4121V28.2414C116.523 27.2682 116.257 26.5099 115.727 25.9664C115.196 25.4103 114.494 25.1322 113.622 25.1322C112.775 25.1322 112.08 25.4103 111.537 25.9664C111.006 26.5099 110.741 27.2682 110.741 28.2414V28.4121C110.741 29.3853 111.006 30.1499 111.537 30.706C112.08 31.2495 112.775 31.5212 113.622 31.5212ZM125.739 36.7917V23.6535H127.654V24.9995H127.957C128.197 24.5824 128.557 24.2096 129.038 23.881C129.531 23.5524 130.232 23.3881 131.142 23.3881C131.926 23.3881 132.64 23.5776 133.284 23.9568C133.942 24.336 134.466 24.8858 134.858 25.6062C135.262 26.314 135.465 27.1734 135.465 28.1845V28.4689C135.465 29.48 135.269 30.3458 134.877 31.0662C134.485 31.774 133.961 32.3175 133.303 32.6967C132.646 33.0758 131.926 33.2654 131.142 33.2654C130.535 33.2654 130.024 33.1896 129.606 33.0379C129.189 32.8862 128.854 32.6967 128.602 32.4692C128.349 32.229 128.147 31.9826 127.995 31.7298H127.692V36.7917H125.739ZM130.573 31.5592C131.433 31.5592 132.134 31.2874 132.678 30.7439C133.221 30.2005 133.493 29.4232 133.493 28.4121V28.2414C133.493 27.2429 133.215 26.472 132.659 25.9285C132.115 25.385 131.42 25.1133 130.573 25.1133C129.739 25.1133 129.044 25.385 128.488 25.9285C127.944 26.472 127.673 27.2429 127.673 28.2414V28.4121C127.673 29.4232 127.944 30.2005 128.488 30.7439C129.044 31.2874 129.739 31.5592 130.573 31.5592ZM137.884 33V23.6535H139.799V24.7531H140.102C140.254 24.3613 140.494 24.0769 140.823 23.8999C141.164 23.7103 141.581 23.6156 142.074 23.6156H143.193V25.3787H141.998C141.366 25.3787 140.848 25.5556 140.444 25.9095C140.039 26.2508 139.837 26.7816 139.837 27.502V33H137.884ZM149.262 33.2654C148.327 33.2654 147.492 33.0758 146.759 32.6967C146.039 32.3049 145.47 31.7487 145.053 31.0283C144.636 30.3079 144.427 29.4548 144.427 28.4689V28.1845C144.427 27.1987 144.636 26.3519 145.053 25.6441C145.47 24.9237 146.039 24.3676 146.759 23.9758C147.492 23.584 148.327 23.3881 149.262 23.3881C150.197 23.3881 151.031 23.584 151.764 23.9758C152.497 24.3676 153.073 24.9237 153.49 25.6441C153.907 26.3519 154.115 27.1987 154.115 28.1845V28.4689C154.115 29.4548 153.907 30.3079 153.49 31.0283C153.073 31.7487 152.497 32.3049 151.764 32.6967C151.031 33.0758 150.197 33.2654 149.262 33.2654ZM149.262 31.5212C150.121 31.5212 150.816 31.2495 151.347 30.706C151.891 30.1499 152.163 29.3853 152.163 28.4121V28.2414C152.163 27.2682 151.897 26.5099 151.366 25.9664C150.835 25.4103 150.134 25.1322 149.262 25.1322C148.415 25.1322 147.72 25.4103 147.176 25.9664C146.646 26.5099 146.38 27.2682 146.38 28.2414V28.4121C146.38 29.3853 146.646 30.1499 147.176 30.706C147.72 31.2495 148.415 31.5212 149.262 31.5212ZM154.764 36.7917V35.1044H156.035C156.401 35.1044 156.584 34.9148 156.584 34.5356V23.6535H158.537V34.9148C158.537 35.4836 158.373 35.9386 158.044 36.2798C157.716 36.6211 157.254 36.7917 156.66 36.7917H154.764ZM157.57 22.3833C157.191 22.3833 156.869 22.2632 156.603 22.023C156.35 21.7703 156.224 21.448 156.224 21.0562C156.224 20.6644 156.35 20.3484 156.603 20.1082C156.869 19.8555 157.191 19.7291 157.57 19.7291C157.962 19.7291 158.284 19.8555 158.537 20.1082C158.79 20.3484 158.916 20.6644 158.916 21.0562C158.916 21.448 158.79 21.7703 158.537 22.023C158.284 22.2632 157.962 22.3833 157.57 22.3833ZM165.719 33.2654C164.771 33.2654 163.943 33.0695 163.235 32.6777C162.527 32.2733 161.971 31.7108 161.567 30.9904C161.175 30.2573 160.979 29.4105 160.979 28.45V28.2225C160.979 27.2493 161.175 26.4025 161.567 25.682C161.959 24.949 162.502 24.3865 163.197 23.9947C163.905 23.5903 164.72 23.3881 165.643 23.3881C166.54 23.3881 167.324 23.5903 167.994 23.9947C168.676 24.3865 169.207 24.9363 169.586 25.6441C169.965 26.3519 170.155 27.1797 170.155 28.1277V28.8671H162.97C162.995 29.6886 163.267 30.3458 163.785 30.8387C164.316 31.319 164.973 31.5592 165.757 31.5592C166.49 31.5592 167.04 31.3948 167.406 31.0662C167.785 30.7376 168.076 30.3585 168.278 29.9287L169.89 30.7629C169.713 31.1168 169.454 31.4896 169.112 31.8815C168.784 32.2733 168.348 32.6019 167.804 32.8673C167.261 33.1327 166.566 33.2654 165.719 33.2654ZM162.989 27.3693H168.164C168.114 26.6616 167.861 26.1118 167.406 25.7199C166.951 25.3155 166.357 25.1133 165.624 25.1133C164.891 25.1133 164.291 25.3155 163.823 25.7199C163.368 26.1118 163.09 26.6616 162.989 27.3693ZM175.661 33C175.092 33 174.637 32.8294 174.296 32.4881C173.968 32.1469 173.803 31.6919 173.803 31.1231V25.3029H171.225V23.6535H173.803V20.5632H175.756V23.6535H178.543V25.3029H175.756V30.7819C175.756 31.161 175.933 31.3506 176.287 31.3506H178.239V33H175.661ZM184.883 33.2654C183.948 33.2654 183.114 33.0758 182.381 32.6967C181.66 32.3049 181.091 31.7487 180.674 31.0283C180.257 30.3079 180.049 29.4548 180.049 28.4689V28.1845C180.049 27.1987 180.257 26.3519 180.674 25.6441C181.091 24.9237 181.66 24.3676 182.381 23.9758C183.114 23.584 183.948 23.3881 184.883 23.3881C185.818 23.3881 186.653 23.584 187.386 23.9758C188.119 24.3676 188.694 24.9237 189.111 25.6441C189.528 26.3519 189.736 27.1987 189.736 28.1845V28.4689C189.736 29.4548 189.528 30.3079 189.111 31.0283C188.694 31.7487 188.119 32.3049 187.386 32.6967C186.653 33.0758 185.818 33.2654 184.883 33.2654ZM184.883 31.5212C185.743 31.5212 186.438 31.2495 186.969 30.706C187.512 30.1499 187.784 29.3853 187.784 28.4121V28.2414C187.784 27.2682 187.518 26.5099 186.987 25.9664C186.457 25.4103 185.755 25.1322 184.883 25.1322C184.036 25.1322 183.341 25.4103 182.798 25.9664C182.267 26.5099 182.001 27.2682 182.001 28.2414V28.4121C182.001 29.3853 182.267 30.1499 182.798 30.706C183.341 31.2495 184.036 31.5212 184.883 31.5212Z"
              fill="white"
            />
          </svg>
        )}
      </button>
    );
  }

  return (
    <button {...props}>
      {variant === "see-more" ? (
        <svg
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 148 27"
          fill="none"
        >
          <rect
            y="0.463379"
            width="148"
            height="25.718"
            rx="3.94265"
            fill="#22223B"
          />
          <rect
            x="114.518"
            y="0.463379"
            width="33.482"
            height="25.718"
            rx="3.94265"
            fill="#4A4E69"
          />
          <path
            d="M122.768 13.486L137.056 13.4725M134.427 8.22756L139.593 13.45L134.427 18.6724"
            stroke="white"
            strokeWidth="2.33184"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
          <path
            d="M40.8933 16.1685L39.0994 9.72879H40.1297L41.6936 15.5429H41.8132L43.3679 9.72879H44.3983L42.6136 16.1685H40.8933ZM47.0748 16.2973C46.6148 16.2973 46.2131 16.2022 45.8696 16.0121C45.5262 15.8158 45.2563 15.5429 45.0601 15.1933C44.87 14.8376 44.7749 14.4267 44.7749 13.9606V13.8502C44.7749 13.3779 44.87 12.967 45.0601 12.6174C45.2502 12.2617 45.5139 11.9888 45.8512 11.7987C46.1947 11.6024 46.5903 11.5043 47.038 11.5043C47.4734 11.5043 47.8537 11.6024 48.1787 11.7987C48.5099 11.9888 48.7675 12.2556 48.9515 12.599C49.1355 12.9425 49.2275 13.3442 49.2275 13.8042V14.163H45.7408C45.7531 14.5616 45.885 14.8805 46.1364 15.1197C46.394 15.3528 46.7129 15.4693 47.0932 15.4693C47.4489 15.4693 47.7157 15.3896 47.8935 15.2301C48.0775 15.0706 48.2186 14.8867 48.3167 14.6781L49.0987 15.0829C49.0128 15.2546 48.8871 15.4356 48.7215 15.6257C48.562 15.8158 48.3504 15.9753 48.0867 16.1041C47.823 16.2329 47.4857 16.2973 47.0748 16.2973ZM45.75 13.4362H48.2615C48.237 13.0928 48.1143 12.826 47.8935 12.6358C47.6727 12.4396 47.3845 12.3415 47.0288 12.3415C46.6731 12.3415 46.3817 12.4396 46.1548 12.6358C45.934 12.826 45.7991 13.0928 45.75 13.4362ZM50.3681 16.1685V11.6331H51.2972V12.1667H51.4444C51.518 11.9765 51.6345 11.8385 51.794 11.7527C51.9596 11.6607 52.162 11.6147 52.4012 11.6147H52.9439V12.4703H52.3644C52.0577 12.4703 51.8063 12.5561 51.61 12.7278C51.4137 12.8934 51.3156 13.151 51.3156 13.5006V16.1685H50.3681ZM56.2705 16.1685V11.6331H57.1996V12.1667H57.3468C57.4327 12.0072 57.5707 11.8661 57.7608 11.7435C57.9509 11.6208 58.2085 11.5595 58.5336 11.5595C58.8709 11.5595 59.1407 11.63 59.3431 11.7711C59.5516 11.906 59.708 12.0808 59.8123 12.2955H59.9595C60.0638 12.0869 60.214 11.9121 60.4103 11.7711C60.6127 11.63 60.8978 11.5595 61.2658 11.5595C61.5602 11.5595 61.8209 11.6208 62.0478 11.7435C62.2747 11.86 62.4556 12.0379 62.5906 12.2771C62.7255 12.5101 62.7929 12.8014 62.7929 13.151V16.1685H61.8454V13.2246C61.8454 12.9486 61.7687 12.737 61.6154 12.5898C61.4682 12.4365 61.2566 12.3599 60.9806 12.3599C60.6863 12.3599 60.4501 12.4549 60.2723 12.645C60.0944 12.8352 60.0055 13.1081 60.0055 13.4638V16.1685H59.0579V13.2246C59.0579 12.9486 58.9813 12.737 58.828 12.5898C58.6808 12.4365 58.4692 12.3599 58.1932 12.3599C57.8988 12.3599 57.6627 12.4549 57.4848 12.645C57.307 12.8352 57.218 13.1081 57.218 13.4638V16.1685H56.2705ZM65.5659 16.2973C65.2408 16.2973 64.9495 16.2421 64.6919 16.1317C64.4405 16.0213 64.2381 15.8587 64.0848 15.6441C63.9376 15.4294 63.864 15.1688 63.864 14.8621C63.864 14.5493 63.9376 14.2918 64.0848 14.0894C64.2381 13.8808 64.4435 13.7245 64.7011 13.6202C64.9648 13.5159 65.2623 13.4638 65.5935 13.4638H66.9734V13.1694C66.9734 12.9057 66.8937 12.6941 66.7342 12.5346C66.5748 12.3752 66.3294 12.2955 65.9983 12.2955C65.6732 12.2955 65.4248 12.3721 65.2531 12.5254C65.0814 12.6788 64.9679 12.8781 64.9127 13.1234L64.0296 12.8382C64.1032 12.5929 64.2197 12.3721 64.3791 12.1759C64.5447 11.9735 64.7625 11.811 65.0323 11.6883C65.3022 11.5656 65.6272 11.5043 66.0075 11.5043C66.5962 11.5043 67.0593 11.6546 67.3966 11.9551C67.7339 12.2556 67.9026 12.6818 67.9026 13.2338V15.1013C67.9026 15.2853 67.9884 15.3773 68.1601 15.3773H68.5465V16.1685H67.8382C67.6235 16.1685 67.4487 16.1133 67.3138 16.0029C67.1789 15.8925 67.1114 15.7422 67.1114 15.5521V15.5245H66.9734C66.9243 15.6165 66.8507 15.7238 66.7526 15.8465C66.6545 15.9691 66.5104 16.0765 66.3202 16.1685C66.1301 16.2543 65.8787 16.2973 65.5659 16.2973ZM65.7039 15.5153C66.0841 15.5153 66.3908 15.408 66.6238 15.1933C66.8569 14.9725 66.9734 14.672 66.9734 14.2918V14.1998H65.6487C65.3972 14.1998 65.1948 14.255 65.0415 14.3654C64.8882 14.4696 64.8115 14.626 64.8115 14.8345C64.8115 15.043 64.8912 15.2086 65.0507 15.3313C65.2102 15.454 65.4279 15.5153 65.7039 15.5153ZM69.4678 16.1685V11.6331H70.4154V16.1685H69.4678ZM69.9462 11.0167C69.7622 11.0167 69.6058 10.9585 69.477 10.8419C69.3544 10.7193 69.2931 10.5629 69.2931 10.3728C69.2931 10.1826 69.3544 10.0293 69.477 9.91278C69.6058 9.79012 69.7622 9.72879 69.9462 9.72879C70.1363 9.72879 70.2927 9.79012 70.4154 9.91278C70.5381 10.0293 70.5994 10.1826 70.5994 10.3728C70.5994 10.5629 70.5381 10.7193 70.4154 10.8419C70.2927 10.9585 70.1363 11.0167 69.9462 11.0167ZM73.6799 16.2973C73.1034 16.2973 72.6251 16.1685 72.2448 15.9109C71.8646 15.6533 71.6315 15.2638 71.5456 14.7425L72.4288 14.5309C72.4779 14.7824 72.5607 14.9817 72.6772 15.1289C72.7937 15.2761 72.9378 15.3804 73.1096 15.4417C73.2874 15.503 73.4775 15.5337 73.6799 15.5337C73.9805 15.5337 74.2104 15.4754 74.3699 15.3589C74.5355 15.2424 74.6183 15.0921 74.6183 14.9081C74.6183 14.7241 74.5416 14.5892 74.3883 14.5033C74.235 14.4175 74.008 14.347 73.7075 14.2918L73.3947 14.2366C73.0881 14.1814 72.809 14.1016 72.5576 13.9974C72.3061 13.8931 72.1068 13.749 71.9596 13.565C71.8124 13.381 71.7388 13.1449 71.7388 12.8566C71.7388 12.4273 71.8983 12.0961 72.2172 11.8631C72.5361 11.6239 72.9593 11.5043 73.4867 11.5043C73.9958 11.5043 74.4128 11.6208 74.7379 11.8539C75.0691 12.0808 75.2837 12.3905 75.3818 12.783L74.4987 13.0314C74.4435 12.7554 74.327 12.5622 74.1491 12.4519C73.9713 12.3353 73.7505 12.2771 73.4867 12.2771C73.2292 12.2771 73.0268 12.3261 72.8796 12.4243C72.7324 12.5162 72.6588 12.6481 72.6588 12.8198C72.6588 13.0038 72.7293 13.1387 72.8704 13.2246C73.0176 13.3105 73.2138 13.3749 73.4591 13.4178L73.7811 13.473C74.1062 13.5282 74.4036 13.6049 74.6735 13.703C74.9433 13.8011 75.1549 13.9422 75.3082 14.1262C75.4677 14.3102 75.5474 14.5555 75.5474 14.8621C75.5474 15.316 75.3788 15.6686 75.0415 15.9201C74.7041 16.1715 74.2503 16.2973 73.6799 16.2973Z"
            fill="white"
          />
        </svg>
      ) : (
        <svg
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 305 53"
          fill="none"
        >
          <rect width="305" height="53" rx="8.12506" fill="#22223B" />
          <rect x="236" width="69" height="53" rx="8.12506" fill="#4A4E69" />
          <path
            d="M253 26.8369L282.445 26.8089M277.027 16.0001L287.673 26.7625L277.027 37.5249"
            stroke="white"
            strokeWidth="4.80548"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
          <path
            d="M47.3672 33V19.7291H52.6377C53.4466 19.7291 54.167 19.8934 54.799 20.222C55.4435 20.538 55.9428 20.993 56.2967 21.587C56.6632 22.1684 56.8465 22.8699 56.8465 23.6914V23.9379C56.8465 24.7594 56.6569 25.4672 56.2777 26.0612C55.9112 26.6552 55.4119 27.1102 54.78 27.4262C54.1481 27.7422 53.4339 27.9002 52.6377 27.9002H49.4148V33H47.3672ZM49.4148 26.0422H52.4291C53.1496 26.0422 53.7246 25.8527 54.1544 25.4735C54.5841 25.0943 54.799 24.5761 54.799 23.9189V23.7293C54.799 23.0594 54.5841 22.5349 54.1544 22.1558C53.7246 21.7766 53.1496 21.587 52.4291 21.587H49.4148V26.0422ZM58.8473 33V23.6535H60.7621V24.7531H61.0655C61.2171 24.3613 61.4573 24.0769 61.7859 23.8999C62.1271 23.7103 62.5442 23.6156 63.0372 23.6156H64.1557V25.3787H62.9613C62.3294 25.3787 61.8112 25.5556 61.4067 25.9095C61.0023 26.2508 60.8001 26.7816 60.8001 27.502V33H58.8473ZM70.2251 33.2654C69.2898 33.2654 68.4556 33.0758 67.7226 32.6967C67.0021 32.3049 66.4334 31.7487 66.0163 31.0283C65.5992 30.3079 65.3907 29.4548 65.3907 28.4689V28.1845C65.3907 27.1987 65.5992 26.3519 66.0163 25.6441C66.4334 24.9237 67.0021 24.3676 67.7226 23.9758C68.4556 23.584 69.2898 23.3881 70.2251 23.3881C71.1604 23.3881 71.9945 23.584 72.7276 23.9758C73.4607 24.3676 74.0357 24.9237 74.4528 25.6441C74.8699 26.3519 75.0784 27.1987 75.0784 28.1845V28.4689C75.0784 29.4548 74.8699 30.3079 74.4528 31.0283C74.0357 31.7487 73.4607 32.3049 72.7276 32.6967C71.9945 33.0758 71.1604 33.2654 70.2251 33.2654ZM70.2251 31.5212C71.0845 31.5212 71.7797 31.2495 72.3105 30.706C72.854 30.1499 73.1257 29.3853 73.1257 28.4121V28.2414C73.1257 27.2682 72.8603 26.5099 72.3295 25.9664C71.7986 25.4103 71.0972 25.1322 70.2251 25.1322C69.3783 25.1322 68.6831 25.4103 68.1396 25.9664C67.6088 26.5099 67.3434 27.2682 67.3434 28.2414V28.4121C67.3434 29.3853 67.6088 30.1499 68.1396 30.706C68.6831 31.2495 69.3783 31.5212 70.2251 31.5212ZM69.0117 22.516L70.4336 19.8049H72.6897L70.7749 22.516H69.0117ZM76.1024 33L79.6665 28.2793L76.1782 23.6535H78.4722L80.9178 27.0091H81.2211L83.6668 23.6535H85.9797L82.4724 28.2793L86.0366 33H83.7047L81.2211 29.5685H80.9178L78.4342 33H76.1024ZM88.1367 33V23.6535H90.0894V33H88.1367ZM89.1225 22.3833C88.7434 22.3833 88.4211 22.2632 88.1556 22.023C87.9029 21.7703 87.7765 21.448 87.7765 21.0562C87.7765 20.6644 87.9029 20.3484 88.1556 20.1082C88.4211 19.8555 88.7434 19.7291 89.1225 19.7291C89.5143 19.7291 89.8366 19.8555 90.0894 20.1082C90.3422 20.3484 90.4686 20.6644 90.4686 21.0562C90.4686 21.448 90.3422 21.7703 90.0894 22.023C89.8366 22.2632 89.5143 22.3833 89.1225 22.3833ZM92.9874 33V23.6535H94.9022V24.7531H95.2055C95.3825 24.4245 95.6668 24.1338 96.0587 23.881C96.4505 23.6282 96.9813 23.5018 97.6512 23.5018C98.3463 23.5018 98.9024 23.6472 99.3195 23.9379C99.7492 24.2159 100.072 24.5761 100.286 25.0185H100.59C100.805 24.5888 101.114 24.2285 101.519 23.9379C101.936 23.6472 102.523 23.5018 103.282 23.5018C103.889 23.5018 104.426 23.6282 104.893 23.881C105.361 24.1211 105.734 24.4876 106.012 24.9806C106.29 25.4608 106.429 26.0612 106.429 26.7816V33H104.476V26.9333C104.476 26.3645 104.318 25.9285 104.002 25.6252C103.699 25.3092 103.263 25.1512 102.694 25.1512C102.087 25.1512 101.601 25.3471 101.234 25.7389C100.868 26.1307 100.685 26.6931 100.685 27.4262V33H98.7318V26.9333C98.7318 26.3645 98.5738 25.9285 98.2578 25.6252C97.9545 25.3092 97.5185 25.1512 96.9497 25.1512C96.343 25.1512 95.8564 25.3471 95.4899 25.7389C95.1234 26.1307 94.9401 26.6931 94.9401 27.4262V33H92.9874ZM113.622 33.2654C112.687 33.2654 111.853 33.0758 111.12 32.6967C110.399 32.3049 109.831 31.7487 109.413 31.0283C108.996 30.3079 108.788 29.4548 108.788 28.4689V28.1845C108.788 27.1987 108.996 26.3519 109.413 25.6441C109.831 24.9237 110.399 24.3676 111.12 23.9758C111.853 23.584 112.687 23.3881 113.622 23.3881C114.557 23.3881 115.392 23.584 116.125 23.9758C116.858 24.3676 117.433 24.9237 117.85 25.6441C118.267 26.3519 118.476 27.1987 118.476 28.1845V28.4689C118.476 29.4548 118.267 30.3079 117.85 31.0283C117.433 31.7487 116.858 32.3049 116.125 32.6967C115.392 33.0758 114.557 33.2654 113.622 33.2654ZM113.622 31.5212C114.482 31.5212 115.177 31.2495 115.708 30.706C116.251 30.1499 116.523 29.3853 116.523 28.4121V28.2414C116.523 27.2682 116.257 26.5099 115.727 25.9664C115.196 25.4103 114.494 25.1322 113.622 25.1322C112.775 25.1322 112.08 25.4103 111.537 25.9664C111.006 26.5099 110.741 27.2682 110.741 28.2414V28.4121C110.741 29.3853 111.006 30.1499 111.537 30.706C112.08 31.2495 112.775 31.5212 113.622 31.5212ZM125.739 36.7917V23.6535H127.654V24.9995H127.957C128.197 24.5824 128.557 24.2096 129.038 23.881C129.531 23.5524 130.232 23.3881 131.142 23.3881C131.926 23.3881 132.64 23.5776 133.284 23.9568C133.942 24.336 134.466 24.8858 134.858 25.6062C135.262 26.314 135.465 27.1734 135.465 28.1845V28.4689C135.465 29.48 135.269 30.3458 134.877 31.0662C134.485 31.774 133.961 32.3175 133.303 32.6967C132.646 33.0758 131.926 33.2654 131.142 33.2654C130.535 33.2654 130.024 33.1896 129.606 33.0379C129.189 32.8862 128.854 32.6967 128.602 32.4692C128.349 32.229 128.147 31.9826 127.995 31.7298H127.692V36.7917H125.739ZM130.573 31.5592C131.433 31.5592 132.134 31.2874 132.678 30.7439C133.221 30.2005 133.493 29.4232 133.493 28.4121V28.2414C133.493 27.2429 133.215 26.472 132.659 25.9285C132.115 25.385 131.42 25.1133 130.573 25.1133C129.739 25.1133 129.044 25.385 128.488 25.9285C127.944 26.472 127.673 27.2429 127.673 28.2414V28.4121C127.673 29.4232 127.944 30.2005 128.488 30.7439C129.044 31.2874 129.739 31.5592 130.573 31.5592ZM137.884 33V23.6535H139.799V24.7531H140.102C140.254 24.3613 140.494 24.0769 140.823 23.8999C141.164 23.7103 141.581 23.6156 142.074 23.6156H143.193V25.3787H141.998C141.366 25.3787 140.848 25.5556 140.444 25.9095C140.039 26.2508 139.837 26.7816 139.837 27.502V33H137.884ZM149.262 33.2654C148.327 33.2654 147.492 33.0758 146.759 32.6967C146.039 32.3049 145.47 31.7487 145.053 31.0283C144.636 30.3079 144.427 29.4548 144.427 28.4689V28.1845C144.427 27.1987 144.636 26.3519 145.053 25.6441C145.47 24.9237 146.039 24.3676 146.759 23.9758C147.492 23.584 148.327 23.3881 149.262 23.3881C150.197 23.3881 151.031 23.584 151.764 23.9758C152.497 24.3676 153.073 24.9237 153.49 25.6441C153.907 26.3519 154.115 27.1987 154.115 28.1845V28.4689C154.115 29.4548 153.907 30.3079 153.49 31.0283C153.073 31.7487 152.497 32.3049 151.764 32.6967C151.031 33.0758 150.197 33.2654 149.262 33.2654ZM149.262 31.5212C150.121 31.5212 150.816 31.2495 151.347 30.706C151.891 30.1499 152.163 29.3853 152.163 28.4121V28.2414C152.163 27.2682 151.897 26.5099 151.366 25.9664C150.835 25.4103 150.134 25.1322 149.262 25.1322C148.415 25.1322 147.72 25.4103 147.176 25.9664C146.646 26.5099 146.38 27.2682 146.38 28.2414V28.4121C146.38 29.3853 146.646 30.1499 147.176 30.706C147.72 31.2495 148.415 31.5212 149.262 31.5212ZM154.764 36.7917V35.1044H156.035C156.401 35.1044 156.584 34.9148 156.584 34.5356V23.6535H158.537V34.9148C158.537 35.4836 158.373 35.9386 158.044 36.2798C157.716 36.6211 157.254 36.7917 156.66 36.7917H154.764ZM157.57 22.3833C157.191 22.3833 156.869 22.2632 156.603 22.023C156.35 21.7703 156.224 21.448 156.224 21.0562C156.224 20.6644 156.35 20.3484 156.603 20.1082C156.869 19.8555 157.191 19.7291 157.57 19.7291C157.962 19.7291 158.284 19.8555 158.537 20.1082C158.79 20.3484 158.916 20.6644 158.916 21.0562C158.916 21.448 158.79 21.7703 158.537 22.023C158.284 22.2632 157.962 22.3833 157.57 22.3833ZM165.719 33.2654C164.771 33.2654 163.943 33.0695 163.235 32.6777C162.527 32.2733 161.971 31.7108 161.567 30.9904C161.175 30.2573 160.979 29.4105 160.979 28.45V28.2225C160.979 27.2493 161.175 26.4025 161.567 25.682C161.959 24.949 162.502 24.3865 163.197 23.9947C163.905 23.5903 164.72 23.3881 165.643 23.3881C166.54 23.3881 167.324 23.5903 167.994 23.9947C168.676 24.3865 169.207 24.9363 169.586 25.6441C169.965 26.3519 170.155 27.1797 170.155 28.1277V28.8671H162.97C162.995 29.6886 163.267 30.3458 163.785 30.8387C164.316 31.319 164.973 31.5592 165.757 31.5592C166.49 31.5592 167.04 31.3948 167.406 31.0662C167.785 30.7376 168.076 30.3585 168.278 29.9287L169.89 30.7629C169.713 31.1168 169.454 31.4896 169.112 31.8815C168.784 32.2733 168.348 32.6019 167.804 32.8673C167.261 33.1327 166.566 33.2654 165.719 33.2654ZM162.989 27.3693H168.164C168.114 26.6616 167.861 26.1118 167.406 25.7199C166.951 25.3155 166.357 25.1133 165.624 25.1133C164.891 25.1133 164.291 25.3155 163.823 25.7199C163.368 26.1118 163.09 26.6616 162.989 27.3693ZM175.661 33C175.092 33 174.637 32.8294 174.296 32.4881C173.968 32.1469 173.803 31.6919 173.803 31.1231V25.3029H171.225V23.6535H173.803V20.5632H175.756V23.6535H178.543V25.3029H175.756V30.7819C175.756 31.161 175.933 31.3506 176.287 31.3506H178.239V33H175.661ZM184.883 33.2654C183.948 33.2654 183.114 33.0758 182.381 32.6967C181.66 32.3049 181.091 31.7487 180.674 31.0283C180.257 30.3079 180.049 29.4548 180.049 28.4689V28.1845C180.049 27.1987 180.257 26.3519 180.674 25.6441C181.091 24.9237 181.66 24.3676 182.381 23.9758C183.114 23.584 183.948 23.3881 184.883 23.3881C185.818 23.3881 186.653 23.584 187.386 23.9758C188.119 24.3676 188.694 24.9237 189.111 25.6441C189.528 26.3519 189.736 27.1987 189.736 28.1845V28.4689C189.736 29.4548 189.528 30.3079 189.111 31.0283C188.694 31.7487 188.119 32.3049 187.386 32.6967C186.653 33.0758 185.818 33.2654 184.883 33.2654ZM184.883 31.5212C185.743 31.5212 186.438 31.2495 186.969 30.706C187.512 30.1499 187.784 29.3853 187.784 28.4121V28.2414C187.784 27.2682 187.518 26.5099 186.987 25.9664C186.457 25.4103 185.755 25.1322 184.883 25.1322C184.036 25.1322 183.341 25.4103 182.798 25.9664C182.267 26.5099 182.001 27.2682 182.001 28.2414V28.4121C182.001 29.3853 182.267 30.1499 182.798 30.706C183.341 31.2495 184.036 31.5212 184.883 31.5212Z"
            fill="white"
          />
        </svg>
      )}
    </button>
  );
};
