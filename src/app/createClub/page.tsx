'use client';
import React, { useEffect, useState } from 'react';
import styles from './page.module.scss';
import { Typography } from '../_components/typography';
import InputBox from '../_components/input/InputBox';
import PlusIcon from '../_assets/icons/plus.svg';
import Label from '../_components/label/Label';
import Dropdown from '../_components/dropdown/Dropdown';
import LogoSmall from '../_assets/LogoSmall';
import Image from 'next/image';
import ClubCardSkeleton from '../_components/skeleton/ClubCardSkeleton';
import { createClub } from '../actions/createClub';

export default function Page() {
  const [department, setDepartment] = useState('소프트웨어과');
  const [lightLogo, setLightLogo] = useState('');
  const [darkLogo, setDarkLogo] = useState('');
  const [clubName, setClubName] = useState('');
  const [clubSubName, setClubSubName] = useState('');
  const [clubLocation, setClubLocation] = useState('');
  const [clubDescription, setClubDescription] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [facebook, setFacebook] = useState('');
  const [instagram, setInstagram] = useState('');
  const [website, setWebsite] = useState('');

  useEffect(() => {
    const preferScheme = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
    setDarkMode(preferScheme);
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => {
        setDarkMode(e.matches);
      });
  }, []);

  const handleLightLogo = (e: React.ChangeEvent<HTMLInputElement>) => {
    let reader = new FileReader();

    if (e?.target?.files?.[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onloadend = () => {
      const previewImgUrl = reader.result;

      if (previewImgUrl) {
        setLightLogo(previewImgUrl as string);
      }
    };
  };

  const handleDarkLogo = (e: React.ChangeEvent<HTMLInputElement>) => {
    let reader = new FileReader();

    if (e?.target?.files?.[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onloadend = () => {
      const previewImgUrl = reader.result;

      if (previewImgUrl) {
        setDarkLogo(previewImgUrl as string);
      }
    };
  };

  return (
    <div className={styles.layout}>
      <div className={styles.preview}>
        <div className={styles['preview-top']}>
          <Typography.TitleLarge color={90}>미리보기</Typography.TitleLarge>
          <div className={styles['preview-top-right']}>
            <div className={styles['preview-device-select']}>
              <Typography.Label color={90}>iPhone 13 Pro</Typography.Label>
            </div>
            <div className={styles['preview-theme-toggle']}>
              <Typography.Label bold color={90}>
                다크 모드
              </Typography.Label>
            </div>
          </div>
        </div>
        <div className={styles['preview-device']}>
          <div className={styles['preview-device-header']}>
            <div className={styles['preview-device-header-statusbar']}>
              <svg
                width="55"
                height="21"
                viewBox="0 0 55 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.0146 5.16748C19.2705 5.16748 21.2334 6.77148 21.2334 10.5801V10.5947C21.2334 14.1543 19.6294 16.2637 16.9707 16.2637C15.0298 16.2637 13.5796 15.1138 13.2427 13.4951L13.228 13.4146H15.0884L15.1104 13.4878C15.3887 14.2275 16.0405 14.7109 16.9707 14.7109C18.6479 14.7109 19.3584 13.0703 19.439 11.0488C19.439 10.9683 19.4463 10.8877 19.4463 10.8071H19.2998C18.9116 11.6421 17.9888 12.3818 16.5386 12.3818C14.5098 12.3818 13.0889 10.9023 13.0889 8.89551V8.88086C13.0889 6.73486 14.7222 5.16748 17.0146 5.16748ZM17.0073 10.9316C18.2012 10.9316 19.1167 10.0674 19.1167 8.87354V8.85889C19.1167 7.65039 18.2012 6.70557 17.0293 6.70557C15.8647 6.70557 14.9346 7.63574 14.9346 8.81494V8.82959C14.9346 10.0527 15.8062 10.9316 17.0073 10.9316ZM24.0586 9.15186C23.3921 9.15186 22.894 8.63916 22.894 7.99463C22.894 7.34277 23.3921 6.8374 24.0586 6.8374C24.7324 6.8374 25.2231 7.34277 25.2231 7.99463C25.2231 8.63916 24.7324 9.15186 24.0586 9.15186ZM24.0586 14.5864C23.3921 14.5864 22.894 14.0811 22.894 13.4292C22.894 12.7773 23.3921 12.272 24.0586 12.272C24.7324 12.272 25.2231 12.7773 25.2231 13.4292C25.2231 14.0811 24.7324 14.5864 24.0586 14.5864ZM32.0107 16V13.9712H26.8398V12.4258C28.2095 10.0454 29.7109 7.61377 31.1465 5.43115H33.8198V12.4111H35.2407V13.9712H33.8198V16H32.0107ZM28.5977 12.4551H32.04V6.93994H31.9302C30.8462 8.59521 29.623 10.5508 28.5977 12.3452V12.4551ZM39.1206 16V7.2915H38.9961L36.3667 9.15186V7.37207L39.1279 5.43115H41.0103V16H39.1206Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                width="67"
                height="12"
                viewBox="0 0 67 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.35"
                  d="M43 3.00004C43 1.80342 43.97 0.833374 45.1667 0.833374H61.8333C63.03 0.833374 64 1.80342 64 3.00004V9.00004C64 10.1967 63.03 11.1667 61.8333 11.1667H45.1667C43.97 11.1667 43 10.1967 43 9.00004V3.00004Z"
                  stroke="currentColor"
                />
                <path
                  opacity="0.4"
                  d="M65.5 4V8C66.3047 7.66122 66.828 6.87313 66.828 6C66.828 5.12687 66.3047 4.33878 65.5 4Z"
                  fill="currentColor"
                />
                <path
                  d="M44.5 3.43337C44.5 2.82586 44.9925 2.33337 45.6 2.33337H61.4C62.0075 2.33337 62.5 2.82586 62.5 3.43337V8.56671C62.5 9.17422 62.0075 9.66671 61.4 9.66671H45.6C44.9925 9.66671 44.5 9.17422 44.5 8.56671V3.43337Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M29.8305 2.60802C32.0463 2.60811 34.1775 3.45955 35.7835 4.98635C35.9044 5.10422 36.0977 5.10274 36.2168 4.98302L37.3728 3.81635C37.4331 3.75563 37.4667 3.67338 37.4662 3.58779C37.4657 3.50221 37.4311 3.42036 37.3701 3.36035C33.155 -0.679198 26.5052 -0.679198 22.2901 3.36035C22.2291 3.42032 22.1944 3.50215 22.1939 3.58773C22.1933 3.67331 22.2269 3.75558 22.2871 3.81635L23.4435 4.98302C23.5625 5.10292 23.7559 5.10441 23.8768 4.98635C25.4829 3.45945 27.6143 2.60801 29.8305 2.60802ZM29.8305 6.40368C31.0479 6.40361 32.222 6.85614 33.1245 7.67335C33.2465 7.78933 33.4388 7.78682 33.5578 7.66768L34.7125 6.50102C34.7733 6.43982 34.807 6.3568 34.8061 6.27054C34.8052 6.18427 34.7698 6.10196 34.7078 6.04202C31.9596 3.48563 27.7037 3.48563 24.9555 6.04202C24.8934 6.10196 24.858 6.18432 24.8571 6.27061C24.8563 6.3569 24.8902 6.43991 24.9511 6.50102L26.1055 7.66768C26.2244 7.78682 26.4167 7.78933 26.5388 7.67335C27.4407 6.85668 28.6138 6.40419 29.8305 6.40368ZM32.1434 8.9575C32.1452 9.04401 32.1112 9.12741 32.0495 9.18802L30.0521 11.2037C29.9936 11.2629 29.9137 11.2963 29.8305 11.2963C29.7472 11.2963 29.6673 11.2629 29.6088 11.2037L27.6111 9.18802C27.5494 9.12737 27.5155 9.04394 27.5173 8.95743C27.5191 8.87092 27.5566 8.789 27.6208 8.73102C28.8964 7.65213 30.7645 7.65213 32.0401 8.73102C32.1043 8.78905 32.1417 8.87099 32.1434 8.9575Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.1667 0.666626H15.1667C14.6145 0.666626 14.1667 1.11434 14.1667 1.66663V10.3333C14.1667 10.8856 14.6145 11.3333 15.1667 11.3333H16.1667C16.719 11.3333 17.1667 10.8856 17.1667 10.3333V1.66663C17.1667 1.11434 16.719 0.666626 16.1667 0.666626ZM10.5001 2.99996H11.5001C12.0524 2.99996 12.5001 3.44767 12.5001 3.99996V10.3333C12.5001 10.8856 12.0524 11.3333 11.5001 11.3333H10.5001C9.9478 11.3333 9.50008 10.8856 9.50008 10.3333V3.99996C9.50008 3.44767 9.9478 2.99996 10.5001 2.99996ZM6.83341 5.33329H5.83341C5.28113 5.33329 4.83341 5.78101 4.83341 6.33329V10.3333C4.83341 10.8856 5.28113 11.3333 5.83341 11.3333H6.83341C7.3857 11.3333 7.83341 10.8856 7.83341 10.3333V6.33329C7.83341 5.78101 7.3857 5.33329 6.83341 5.33329ZM2.16675 7.33329H1.16675C0.614463 7.33329 0.166748 7.78101 0.166748 8.33329V10.3333C0.166748 10.8856 0.614463 11.3333 1.16675 11.3333H2.16675C2.71903 11.3333 3.16675 10.8856 3.16675 10.3333V8.33329C3.16675 7.78101 2.71903 7.33329 2.16675 7.33329Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className={styles['preview-device-header-appbar']}>
              <LogoSmall />
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_4723_1891)">
                  <mask
                    id="mask0_4723_1891"
                    style={{ maskType: 'alpha' }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="25"
                    height="24"
                  >
                    <rect x="0.5" width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_4723_1891)">
                    <path
                      d="M10.1925 21.5L9.81168 18.4538C9.54373 18.3641 9.26905 18.2384 8.98763 18.0769C8.70621 17.9153 8.4546 17.7422 8.2328 17.5576L5.41165 18.7499L3.104 14.75L5.54438 12.9058C5.5213 12.757 5.50495 12.6077 5.49533 12.4577C5.48571 12.3077 5.4809 12.1583 5.4809 12.0096C5.4809 11.8673 5.48571 11.7227 5.49533 11.5759C5.50495 11.4291 5.5213 11.2686 5.54438 11.0942L3.104 9.24998L5.41165 5.26925L8.22318 6.45195C8.46421 6.26092 8.72159 6.08623 8.9953 5.9279C9.26904 5.76955 9.53795 5.6423 9.80205 5.54615L10.1925 2.5H14.8078L15.1885 5.55578C15.4885 5.66474 15.76 5.79198 16.003 5.9375C16.2459 6.08302 16.4911 6.2545 16.7386 6.45195L19.5886 5.26925L21.8962 9.24998L19.4174 11.123C19.4533 11.2846 19.4728 11.4355 19.476 11.5759C19.4792 11.7163 19.4808 11.8577 19.4808 12C19.4808 12.1359 19.4776 12.274 19.4712 12.4144C19.4648 12.5548 19.4417 12.7154 19.402 12.8962L21.8616 14.75L19.5539 18.7499L16.7386 17.548C16.4911 17.7455 16.2386 17.9201 15.9809 18.0721C15.7232 18.224 15.459 18.348 15.1885 18.4442L14.8078 21.5H10.1925ZM12.5116 15C13.3437 15 14.0517 14.708 14.6357 14.124C15.2196 13.54 15.5116 12.832 15.5116 12C15.5116 11.1679 15.2196 10.4599 14.6357 9.87595C14.0517 9.29198 13.3437 9 12.5116 9C11.6693 9 10.9588 9.29198 10.3799 9.87595C9.8011 10.4599 9.51168 11.1679 9.51168 12C9.51168 12.832 9.8011 13.54 10.3799 14.124C10.9588 14.708 11.6693 15 12.5116 15ZM12.5116 13.5C12.095 13.5 11.7408 13.3541 11.4491 13.0625C11.1575 12.7708 11.0116 12.4166 11.0116 12C11.0116 11.5833 11.1575 11.2291 11.4491 10.9375C11.7408 10.6458 12.095 10.5 12.5116 10.5C12.9283 10.5 13.2825 10.6458 13.5741 10.9375C13.8658 11.2291 14.0116 11.5833 14.0116 12C14.0116 12.4166 13.8658 12.7708 13.5741 13.0625C13.2825 13.3541 12.9283 13.5 12.5116 13.5ZM11.5001 20H13.4655L13.8251 17.3211C14.3354 17.1878 14.8017 16.9984 15.2241 16.7529C15.6466 16.5074 16.0539 16.1917 16.4463 15.8058L18.9309 16.85L19.9155 15.15L17.7463 13.5154C17.8296 13.2564 17.8863 13.0025 17.9165 12.7538C17.9466 12.5051 17.9616 12.2538 17.9616 12C17.9616 11.7397 17.9466 11.4884 17.9165 11.2461C17.8863 11.0038 17.8296 10.7564 17.7463 10.5038L19.9347 8.84998L18.9501 7.14998L16.4366 8.2096C16.102 7.8519 15.7011 7.53588 15.2338 7.26153C14.7664 6.98716 14.2937 6.79293 13.8155 6.67883L13.5001 3.99998H11.5155L11.1847 6.6692C10.6745 6.78972 10.2033 6.97433 9.77125 7.22305C9.3392 7.47177 8.92703 7.79228 8.53473 8.1846L6.0501 7.14998L5.06548 8.84998L7.2251 10.4596C7.14177 10.6968 7.08344 10.9436 7.0501 11.2C7.01677 11.4564 7.0001 11.7263 7.0001 12.0096C7.0001 12.2699 7.01677 12.525 7.0501 12.775C7.08344 13.025 7.13856 13.2718 7.21548 13.5154L5.06548 15.15L6.0501 16.85L8.5251 15.8C8.90459 16.1897 9.31035 16.509 9.7424 16.7577C10.1745 17.0064 10.652 17.1974 11.1751 17.3308L11.5001 20Z"
                      fill="#95A1B2"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_4723_1891">
                    <rect x="0.5" width="24" height="24" rx="4" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className={styles['preview-device-app-layout']}>
            <div className={styles['preview-device-app-category-select']}>
              <Typography.Title color={90}>{department}</Typography.Title>
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_4295_1893"
                  style={{ maskType: 'alpha' }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="25"
                  height="24"
                >
                  <rect x="0.5" width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_4295_1893)">
                  <path
                    d="M12.5 15.0384L6.84619 9.38464L7.90002 8.33081L12.5 12.9308L17.1 8.33081L18.1538 9.38464L12.5 15.0384Z"
                    fill="#718198"
                  />
                </g>
              </svg>
            </div>
            <div className={styles['club-card-group']}>
              <div className={styles['preview-club-card']}>
                <div className={styles['preview-club-card-top']}>
                  <div className={styles['preview-club-card-content-top']}>
                    <div
                      className={styles['preview-club-card-content-top-left']}
                    >
                      {(lightLogo || darkLogo) && (
                        <Image
                          width="32"
                          height="32"
                          src={darkMode && darkLogo ? darkLogo : lightLogo}
                          alt="light-logo"
                          className={styles['image-preview']}
                        />
                      )}
                      <div
                        className={
                          styles['preview-club-card-content-top-left-content']
                        }
                      >
                        <Typography.Label bold color={80}>
                          {clubName || '동아리 이름'}
                        </Typography.Label>
                        <Typography.Caption color={80}>
                          {clubSubName || '동아리 부제목'}
                        </Typography.Caption>
                      </div>
                    </div>
                    <Typography.Body color={60}>
                      {clubLocation || '동아리 위치'}
                    </Typography.Body>
                  </div>
                  <div className={styles['club-description']}>
                    <Typography.Body color={70}>
                      {clubDescription
                        ? clubDescription
                            .split('\n')
                            .map((line, index) => (
                              <div key={index}>{line}</div>
                            )) || '동아리 설명'
                        : '동아리 설명'}
                    </Typography.Body>
                  </div>
                </div>
                <div className={styles['preview-club-card-bottom']}>
                  <button
                    disabled={website === ''}
                    className={styles['preview-club-button']}
                  >
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_4295_1916"
                        style={{ maskType: 'alpha' }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="21"
                        height="20"
                      >
                        <rect
                          x="0.666748"
                          width="20"
                          height="20"
                          fill="#D9D9D9"
                        />
                      </mask>
                      <g mask="url(#mask0_4295_1916)">
                        <path
                          d="M9.05314 16.4358C8.7337 15.9454 8.44951 15.4123 8.20058 14.8364C7.95163 14.2606 7.75131 13.6687 7.5996 13.0608H4.77264C5.21817 13.9315 5.80311 14.6572 6.52747 15.2379C7.25185 15.8185 8.09374 16.2179 9.05314 16.4358ZM4.24862 11.8108H7.34639C7.29404 11.501 7.25612 11.1973 7.23262 10.8998C7.20912 10.6022 7.19737 10.3022 7.19737 9.9999C7.19737 9.69755 7.20912 9.3976 7.23262 9.10004C7.25612 8.8025 7.29404 8.49882 7.34639 8.18898H4.24862C4.16849 8.47211 4.10706 8.76645 4.06433 9.072C4.02159 9.37756 4.00022 9.68686 4.00022 9.9999C4.00022 10.3129 4.02159 10.6222 4.06433 10.9278C4.10706 11.2334 4.16849 11.5277 4.24862 11.8108ZM4.77264 6.93902H7.5996C7.74063 6.32577 7.93828 5.72721 8.19256 5.14334C8.44683 4.55946 8.7337 4.03301 9.05314 3.56398C8.12045 3.77125 7.2839 4.16922 6.54349 4.7579C5.80311 5.34658 5.21282 6.07362 4.77264 6.93902ZM8.88322 6.93902H12.4506C12.2679 6.25847 12.0312 5.63133 11.7406 5.05761C11.45 4.48389 11.0921 3.91497 10.6669 3.35086C10.2417 3.89359 9.88643 4.45182 9.60118 5.02554C9.31592 5.59927 9.0766 6.23709 8.88322 6.93902ZM13.7342 6.93902H16.5611C16.121 6.07362 15.5307 5.34525 14.7903 4.7539C14.0499 4.16255 13.2133 3.76591 12.2806 3.56398C12.5734 4.02766 12.8469 4.55144 13.1012 5.13532C13.3554 5.71919 13.5664 6.32043 13.7342 6.93902ZM10.6669 17.9165C9.58142 17.9165 8.55712 17.7085 7.59399 17.2923C6.63086 16.8762 5.79084 16.3097 5.07395 15.5928C4.35708 14.8759 3.79058 14.0359 3.37445 13.0728C2.95831 12.1097 2.75024 11.0854 2.75024 9.9999C2.75024 8.90588 2.95831 7.87945 3.37445 6.92059C3.79058 5.96172 4.35708 5.12385 5.07395 4.40696C5.79084 3.69009 6.63086 3.12359 7.59399 2.70746C8.55712 2.29132 9.58142 2.08325 10.6669 2.08325C11.7609 2.08325 12.7873 2.29132 13.7462 2.70746C14.7051 3.12359 15.5429 3.69009 16.2598 4.40696C16.9767 5.12385 17.5432 5.96172 17.9593 6.92059C18.3755 7.87945 18.5835 8.90588 18.5835 9.9999C18.5835 10.1441 18.5801 10.291 18.5731 10.4406C18.5662 10.5902 18.5531 10.7371 18.5338 10.8813H17.263C17.2908 10.7371 17.3095 10.5923 17.3191 10.447C17.3288 10.3017 17.3336 10.1527 17.3336 9.9999C17.3336 9.68686 17.3122 9.37756 17.2695 9.072C17.2267 8.76645 17.1653 8.47211 17.0852 8.18898H13.9874C14.0397 8.49882 14.0777 8.8025 14.1012 9.10004C14.1247 9.3976 14.1364 9.69755 14.1364 9.9999C14.1364 10.1527 14.1351 10.3004 14.1324 10.443C14.1297 10.5856 14.1215 10.7317 14.1076 10.8813H12.8576C12.8715 10.7371 12.8798 10.5923 12.8825 10.447C12.8851 10.3017 12.8865 10.1527 12.8865 9.9999C12.8865 9.68686 12.8747 9.38424 12.8512 9.09204C12.8277 8.79984 12.7898 8.49882 12.7374 8.18898H8.59637C8.54402 8.49882 8.50609 8.79984 8.48258 9.09204C8.45908 9.38424 8.44733 9.68686 8.44733 9.9999C8.44733 10.3129 8.45908 10.6156 8.48258 10.9078C8.50609 11.2 8.54402 11.501 8.59637 11.8108H11.5483V13.0608H8.88322C9.0766 13.7574 9.31993 14.3992 9.6132 14.9863C9.90647 15.5733 10.2577 16.1276 10.6669 16.6489C10.8303 16.4321 10.9842 16.2104 11.1284 15.9839C11.2727 15.7574 11.4126 15.5261 11.5483 15.29V17.8669C11.4041 17.8861 11.2593 17.8992 11.114 17.9061C10.9687 17.9131 10.8197 17.9165 10.6669 17.9165ZM17.2919 17.5159L14.6252 14.8492V16.9999H13.3752V12.7083H17.6669V13.9582H15.4954L18.1621 16.6249L17.2919 17.5159Z"
                          fill="currentColor"
                        />
                      </g>
                    </svg>
                  </button>
                  <button
                    disabled={instagram === ''}
                    className={styles['preview-club-button']}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M7.37563 10C7.37563 8.55031 8.55056 7.37479 10.0003 7.37479C11.4501 7.37479 12.6256 8.55031 12.6256 10C12.6256 11.4497 11.4501 12.6252 10.0003 12.6252C8.55056 12.6252 7.37563 11.4497 7.37563 10ZM5.95644 10C5.95644 12.2334 7.76688 14.0437 10.0003 14.0437C12.2338 14.0437 14.0442 12.2334 14.0442 10C14.0442 7.76665 12.2338 5.95628 10.0003 5.95628C7.76688 5.95628 5.95644 7.76665 5.95644 10ZM13.2592 5.79595C13.259 6.31786 13.682 6.74112 14.2039 6.74132C14.7258 6.74153 15.1491 6.31861 15.1493 5.7967C15.1495 5.27479 14.7266 4.85153 14.2047 4.85132C13.683 4.85157 13.2597 5.27429 13.2592 5.79595ZM6.81869 16.4101C6.05088 16.3751 5.63355 16.2472 5.35621 16.1392C4.98853 15.996 4.72619 15.8255 4.45036 15.5501C4.17454 15.2747 4.0038 15.0126 3.86129 14.6449C3.75317 14.3677 3.62528 13.9503 3.59038 13.1825C3.5522 12.3524 3.54457 12.1031 3.54457 10.0001C3.54457 7.89706 3.55283 7.6484 3.59038 6.81762C3.62534 6.04984 3.75418 5.63322 3.86129 5.3552C4.00443 4.98753 4.17491 4.7252 4.45036 4.44938C4.72581 4.17357 4.9879 4.00284 5.35621 3.86033C5.63342 3.75223 6.05088 3.62434 6.81869 3.58943C7.64881 3.55126 7.89817 3.54363 10.0003 3.54363C12.1025 3.54363 12.3521 3.55189 13.1829 3.58943C13.9507 3.6244 14.3673 3.75323 14.6454 3.86033C15.013 4.00284 15.2754 4.17395 15.5512 4.44938C15.827 4.72482 15.9971 4.98753 16.1403 5.3552C16.2484 5.6324 16.3763 6.04984 16.4112 6.81762C16.4494 7.6484 16.457 7.89706 16.457 10.0001C16.457 12.1031 16.4494 12.3517 16.4112 13.1825C16.3762 13.9503 16.2477 14.3676 16.1403 14.6449C15.9971 15.0126 15.8267 15.2749 15.5512 15.5501C15.2758 15.8253 15.013 15.996 14.6454 16.1392C14.3682 16.2473 13.9507 16.3752 13.1829 16.4101C12.3528 16.4482 12.1034 16.4559 10.0003 16.4559C7.89723 16.4559 7.64856 16.4482 6.81869 16.4101ZM6.75348 2.17269C5.91511 2.21087 5.34222 2.3438 4.84192 2.53847C4.32379 2.7395 3.88516 3.00921 3.44686 3.4468C3.00855 3.8844 2.73953 4.3237 2.53849 4.84181C2.34381 5.34241 2.21087 5.91495 2.17269 6.75329C2.13388 7.59296 2.125 7.8614 2.125 10C2.125 12.1386 2.13388 12.407 2.17269 13.2467C2.21087 14.0851 2.34381 14.6576 2.53849 15.1582C2.73953 15.676 3.00861 16.1158 3.44686 16.5532C3.8851 16.9906 4.32379 17.2599 4.84192 17.4615C5.34317 17.6562 5.91511 17.7891 6.75348 17.8273C7.59362 17.8655 7.86163 17.875 10.0003 17.875C12.139 17.875 12.4075 17.8661 13.2471 17.8273C14.0856 17.7891 14.6581 17.6562 15.1587 17.4615C15.6765 17.2599 16.1155 16.9908 16.5538 16.5532C16.9921 16.1156 17.2605 15.676 17.4621 15.1582C17.6568 14.6576 17.7904 14.085 17.8279 13.2467C17.8661 12.4064 17.875 12.1386 17.875 10C17.875 7.8614 17.8661 7.59296 17.8279 6.75329C17.7898 5.91489 17.6568 5.3421 17.4621 4.84181C17.2605 4.32402 16.9914 3.88509 16.5538 3.4468C16.1162 3.00851 15.6765 2.7395 15.1593 2.53847C14.6581 2.3438 14.0855 2.21024 13.2478 2.17269C12.4081 2.13451 12.1396 2.125 10.0009 2.125C7.86226 2.125 7.59362 2.13388 6.75348 2.17269Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                  <button
                    disabled={facebook === ''}
                    className={styles['preview-club-button']}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_4295_1920)">
                        <path
                          d="M20.3335 10C20.3335 4.47656 15.8569 0 10.3335 0C4.81006 0 0.333496 4.47656 0.333496 10C0.333496 14.9918 3.98818 19.1289 8.77178 19.8793V12.893H6.23467V10H8.77178V7.79727C8.77178 5.29297 10.262 3.90703 12.5472 3.90703C13.6429 3.90703 14.7882 4.1043 14.7882 4.1043V6.56445H13.528C12.2843 6.56445 11.9007 7.33711 11.9007 8.12617V10H14.6733L14.2296 12.893H11.9007V19.8793C16.6788 19.1289 20.3335 14.9918 20.3335 10Z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_4295_1920">
                          <rect
                            width="20"
                            height="20"
                            fill="white"
                            transform="translate(0.333496)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>
              <ClubCardSkeleton />
              <ClubCardSkeleton />
              <ClubCardSkeleton />
              <ClubCardSkeleton />
            </div>
          </div>
        </div>
      </div>
      <form action={createClub} className={styles.form}>
        <div className={styles['preview-form-top']}>
          <Typography.TitleLarge color={90}>
            동아리 추가하기
          </Typography.TitleLarge>
          <div className={styles['button-group']}>
            <button className={styles['button-week']}>
              <Typography.Label color={90}>취소</Typography.Label>
            </button>
            <button type="submit" className={styles['button-primary']}>
              <Typography.Label color={10}>다음</Typography.Label>
            </button>
          </div>
        </div>
        <div className={styles['form-container']}>
          <div className={styles['images-container']}>
            <Label label="동아리 이미지" required />
            <div className={styles['images-themes']}>
              <div className={styles['images-group']}>
                {lightLogo ? (
                  <label htmlFor="logo" className={styles['input-image']}>
                    <Image
                      width="80"
                      height="80"
                      src={lightLogo}
                      alt="light-logo"
                      className={styles['image-preview']}
                    />
                  </label>
                ) : (
                  <label htmlFor="logo" className={styles['input-image']}>
                    <PlusIcon
                      style={{
                        color: 'var(--grayscale-60)',
                      }}
                    />
                  </label>
                )}
                <input
                  id="logo"
                  onChange={handleLightLogo}
                  className={styles['input-file']}
                  name="logo"
                  type="file"
                  accept={'.svg,.jpeg,.png,.jpg'}
                />
                <Typography.Caption color={50}>라이트(기본)</Typography.Caption>
              </div>
              <div className={styles['images-group']}>
                {darkLogo ? (
                  <label htmlFor="logo_dark" className={styles['input-image']}>
                    <Image
                      width="80"
                      height="80"
                      src={darkLogo}
                      alt="dark-logo"
                      className={styles['image-preview']}
                    />
                  </label>
                ) : (
                  <label htmlFor="logo_dark" className={styles['input-image']}>
                    <PlusIcon
                      style={{
                        color: 'var(--grayscale-60)',
                      }}
                    />
                  </label>
                )}
                <input
                  id="logo_dark"
                  onChange={handleDarkLogo}
                  className={styles['input-file']}
                  name="logo_dark"
                  type="file"
                  accept={'.svg,.jpeg,.png,.jpg'}
                />
                <Typography.Caption color={50}>다크</Typography.Caption>
              </div>
            </div>
          </div>
          <InputBox
            type="text"
            placeholder="동아리 이름을 입력하세요"
            label="동아리 이름"
            name="displayName"
            required
            value={clubName}
            onChange={(e) => setClubName(e.target.value)}
          />
          <InputBox
            type="text"
            placeholder="동아리 부제목을 입력하세요"
            label="동아리 부제목"
            name="name"
            required
            value={clubSubName}
            onChange={(e) => setClubSubName(e.target.value)}
          />
          <InputBox
            type="text"
            name="room"
            placeholder="동아리 위치를 입력하세요"
            label="동아리 위치"
            required
            value={clubLocation}
            onChange={(e) => setClubLocation(e.target.value)}
          />

          <Dropdown
            label="동아리 분류"
            value={department}
            setValue={setDepartment}
            options={[
              '소프트웨어과',
              '정보보호과',
              '콘텐츠디자인과',
              'IT경영과',
              '일반동아리',
              '자율동아리',
            ]}
          />
          <input type="hidden" name="department" value={department} />
          <div className={styles['textarea-group']}>
            <Label label="동아리 설명" required />
            <textarea
              spellCheck="false"
              className={styles['input-textarea']}
              placeholder="내용을 입력하세요"
              name="description"
              value={clubDescription}
              onChange={(e) => setClubDescription(e.target.value)}
            />
          </div>
          <InputBox
            type="text"
            placeholder="동아리 웹사이트"
            label="동아리 웹사이트 주소 "
            value={website}
            name="homepage"
            onChange={(e) => setWebsite(e.target.value)}
          />
          <InputBox
            type="text"
            placeholder="동아리 인스타그램 아이디"
            label="동아리 instagram"
            value={instagram}
            name="instagram"
            onChange={(e) => setInstagram(e.target.value)}
          />
          <InputBox
            type="text"
            placeholder="동아리 페이스북 아이디를 입력하세요"
            label="동아리 facebook"
            value={facebook}
            name="facebook"
            onChange={(e) => setFacebook(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}
