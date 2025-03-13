'use client';

import { Image, Link } from '@chakra-ui/react';
import React, { FC, useMemo, useRef, useState } from 'react';
import { PiCaretDown } from 'react-icons/pi';
import { Button } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { IoMenu } from 'react-icons/io5';
import { MdClose } from 'react-icons/md';

interface MenuItem {
  id: string;
  label: string;
  url: string;
}

const Header: FC = () => {
  const listMenu: MenuItem[] = useMemo(() => {
    return [
      {
        id: '1',
        label: 'Về chúng tôi',
        url: '/',
      },
      {
        id: '2',
        label: 'Giải pháp',
        url: '/',
      },
      {
        id: '3',
        label: 'Tài nguyên',
        url: '/tainguyen',
      },
      {
        id: '4',
        label: 'Liên hệ',
        url: '/',
      },
    ];
  }, []);

  const [isHoveredMenu, setIsHoveredMenu] = useState(false);
  const [isOpenMenuMobie, setIsOpenMenuMobie] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsHoveredMenu(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHoveredMenu(false);
    }, 200);
  };

  const handelOpenMenuMobile = () => {
    setIsOpenMenuMobie(!isOpenMenuMobie);
  };

  return (
    <div className="flex justify-between items-center px-[20px] xl:px-[70px] 2xl:px-[150px] py-3 shadow-lg lg:rounded-[40px]">
      <Link href="/">
        <Image
          src={'/images/FOSO_Logo_Final_1-1400x579.svg'}
          alt="logo FS"
          className="lg:flex w-[74px] h-[35px] lg:w-[114px] lg:h-[35px]"
        ></Image>
      </Link>
      <div className="hidden lg:flex gap-4 lg:text-[14px]">
        {listMenu.map((m, i) => {
          if (m.id == '1' || m.id == '4') {
            return (
              <div key={i} className="flex">
                <Link href={m.url}>{m.label}</Link>
              </div>
            );
          }

          if (m.id == '2') {
            return (
              <div key={i} className="flex gap-2 justify-center items-center">
                <Link href={m.url}>{m.label}</Link>
                <PiCaretDown />
              </div>
            );
          }

          if (m.id == '3') {
            return (
              <div
                key={i}
                className="relative flex gap-2 justify-center items-center font-bold hover:text-[#15AA7A]"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link href={m.url}>{m.label}</Link>
                <PiCaretDown />
                {isHoveredMenu && (
                  <Link
                    href="/tainguyen/blog"
                    className="absolute bottom-[-45px] left-0 p-2 pr-20 border-none shadow-lg  rounded-lg bg-white hover:text-[#15AA7A]"
                  >
                    Blog
                  </Link>
                )}
              </div>
            );
          }
        })}
      </div>
      <div className="hidden lg:flex gap-2 lg:text-[14px]">
        <Button className="flex gap-3 justify-center items-center px-3 py-2 bg-[#09090B1A] border border-[#09090B1A] rounded-[40px]">
          <Image src="/images/icon_country.svg"></Image>
          <div className="flex justify-center items-center gap-2 cursor-pointer">
            <Text>VN</Text>
            <PiCaretDown />
          </div>
        </Button>
        <Link
          href="/asd"
          className="flex gap-3 justify-center items-center px-3 py-2 bg-[#1AD598] border border-[#A3EED6] rounded-[40px] font-bold"
        >
          <Text>Trở thành khách hàng</Text>
          <Image src="/images/Frame_37.svg"></Image>
        </Link>
      </div>

      <IoMenu
        className="lg:hidden text-[32px] cursor-pointer"
        onClick={handelOpenMenuMobile}
      />

      {isOpenMenuMobie && (
        <div className="fixed top-0 right-0 w-[40%] h-full bg-white z-20">
          <div className="flex justify-end p-3 border-b border-[#F1F5F7]">
            <MdClose className="text-[32px]" />
          </div>
          <div className="flex flex-col gap-4 text-[18px] p-3">
            {listMenu.map((m, i) => {
              if (m.id == '1' || m.id == '4') {
                return (
                  <div key={i} className="flex">
                    <Link href={m.url}>{m.label}</Link>
                  </div>
                );
              }

              if (m.id == '2') {
                return (
                  <div key={i} className="flex gap-2 items-center">
                    <Link href={m.url}>{m.label}</Link>
                    <PiCaretDown />
                  </div>
                );
              }

              if (m.id == '3') {
                return (
                  <div
                    key={i}
                    className="relative flex gap-2 items-center font-bold hover:text-[#15AA7A]"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link href={m.url}>{m.label}</Link>
                    <PiCaretDown />
                    {isHoveredMenu && (
                      <Link
                        href="/tainguyen/blog"
                        className="absolute bottom-[-45px] left-0 p-2 pr-20 border-none shadow-lg  rounded-lg bg-white hover:text-[#15AA7A]"
                      >
                        Blog
                      </Link>
                    )}
                  </div>
                );
              }
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
