import { HeaderRoot, HeaderSub } from '@/components/Headers/Header'
import ReturnPalTitle from '@/components/SvgComponents/ReturnPalTitle'
import {
  HomeSection,
  SectionDescription,
  SectionHeader,
  SectionHeaderHighlight,
} from '@/components/home/Home'
import { Card, CardContent } from '@/components/ui/card'
import { getLayout } from '@/layouts/ReturnProcessLayout'
import {
  faCheck,
  faChevronLeft,
  faChevronRight,
  faClose,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

function PickDateCard({ dayNum, day }: { dayNum: number; day: string }) {
  return (
    <Card className="w-[9.5rem] border-brand bg-paleBlue text-brand hover:cursor-pointer">
      <CardContent className="flex flex-col items-center space-y-4 pt-6">
        <p className="text-2xl font-semibold">Sep</p>
        <p className="text-5xl font-bold">{dayNum}</p>
        <p className="text-2xl font-semibold">{day}</p>
      </CardContent>
    </Card>
  )
}

function SelectedPickDateCard({
  dayNum,
  day,
}: {
  dayNum: number
  day: string
}) {
  return (
    <Card className="w-[9.5rem] scale-110 border-8 border-primary bg-white text-brand shadow-2xl">
      <CardContent className="flex flex-col items-center space-y-4 pt-6">
        <p className="text-2xl font-semibold">Sep</p>
        <p className="text-5xl font-bold">{dayNum}</p>
        <p className="text-2xl font-semibold">{day}</p>
      </CardContent>
    </Card>
  )
}

export default function PickDate() {
  return (
    <>
      <HeaderRoot className="border-brand bg-brand">
        <HeaderSub className="gap-x-12">
          <Link href="/">
            <div className="flex items-center space-x-2">
              <ReturnPalTitle className="hidden h-10 w-40 fill-white lg:flex" />
            </div>
          </Link>

          <ol className="items-center justify-center sm:flex">
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary">
                  <FontAwesomeIcon
                    icon={faCheck}
                    width="15"
                    height="15"
                    className="text-white"
                  />
                </div>
                <div className="hidden h-1 w-full bg-primary dark:bg-gray-700 sm:flex"></div>
              </div>
              <div className="abs mt-1 sm:pr-8">
                <p className="text-sm font-normal text-white">Pickup Date</p>
              </div>
            </li>
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-4 border-primary" />
                <div className="hidden h-1 w-full bg-primary dark:bg-gray-700 sm:flex" />
              </div>
              <div className="abs mt-1 sm:pr-8">
                <p className="text-sm font-normal text-white">Pickup Details</p>
              </div>
            </li>
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-primary" />
                <div className="hidden h-1 w-full bg-primary dark:bg-gray-700 sm:flex" />
              </div>
              <div className="abs mt-1 sm:pr-8">
                <p className="text-sm font-normal text-white">Pickup Date</p>
              </div>
            </li>
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-primary" />
                <div className="hidden h-1 w-full bg-primary dark:bg-gray-700 sm:flex" />
              </div>
              <div className="abs mt-1 sm:pr-8">
                <p className="text-sm font-normal text-white">Pickup Date</p>
              </div>
            </li>
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-primary" />
              </div>
              <div className="abs mt-1 sm:pr-8">
                <p className="text-sm font-normal text-white">Pickup Date</p>
              </div>
            </li>
          </ol>

          {/* <div className="w-full px-4">
            <div className="mx-auto w-full max-w-md">
              <div className="relative">
                <div className="absolute left-0 top-1/2 -mt-px h-0.5 w-full bg-primary" />
                <ul className="relative flex w-full justify-between">
                  <li className="relative">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full border-4 border-primary bg-primary">
                      <FontAwesomeIcon
                        icon={faCheck}
                        width="15"
                        height="15"
                        className="text-white"
                      />
                    </div>
                    <div className="absolute left-[-1rem] right-0 m-auto w-screen text-sm text-white">
                      Pickup Date
                    </div>
                  </li>
                  <li className="relative">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full border-4 border-primary bg-brand" />
                    <div className="absolute left-[-2rem]  right-0 m-auto w-screen text-sm font-bold text-white">
                      Pickup Details
                    </div>
                  </li>
                  <li>
                    <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-primary bg-brand" />
                  </li>
                  <li>
                    <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-primary bg-brand" />
                  </li>
                  <li>
                    <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-primary bg-brand" />
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
        </HeaderSub>
      </HeaderRoot>

      <div className="container space-y-20 bg-paleBlue pt-16">
        <HomeSection className="items-start space-y-3">
          <SectionHeader className="flex w-full justify-between font-semibold">
            <div>
              Choose a pickup{' '}
              <SectionHeaderHighlight>date</SectionHeaderHighlight>
            </div>
            <div className="flex flex-col items-center justify-center text-base text-primary hover:cursor-pointer hover:text-brand">
              <FontAwesomeIcon icon={faClose} width={'35'} height={'35'} />
              <p>Cancel</p>
            </div>
          </SectionHeader>
          <SectionDescription>
            We&apos;ll text you the morning of your pickup with an estimated
            time arrival.
          </SectionDescription>
        </HomeSection>

        <div className="flex-row justify-center gap-x-4 space-y-11">
          {/* <div className="flex  items-center justify-center space-y-4 text-center font-semibold text-brand"> */}
          <div className="flex justify-center gap-x-11">
            <div className="flex flex-col items-center justify-center space-y-4 text-center font-semibold text-brand hover:cursor-pointer hover:text-primary">
              <FontAwesomeIcon
                size="2x"
                width={'50'}
                height={'60'}
                icon={faChevronLeft}
              />
              <p className="text-2xl">Last Week</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 text-center font-semibold text-brand hover:cursor-pointer hover:text-primary">
              <FontAwesomeIcon
                size="2x"
                width={'50'}
                height={'60'}
                icon={faChevronRight}
              />
              <p className="text-2xl">Last Week</p>
            </div>
          </div>

          <div className="grid grid-cols-1 place-content-center place-items-center content-center items-center justify-center gap-x-7 gap-y-5 xs:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7">
            <PickDateCard dayNum={22} day="Fri" />
            <PickDateCard dayNum={23} day="Sat" />
            <PickDateCard dayNum={24} day="Sun" />
            <SelectedPickDateCard dayNum={25} day="Mon" />
            <PickDateCard dayNum={26} day="Tue" />
            <PickDateCard dayNum={27} day="Wed" />
            <PickDateCard dayNum={28} day="Thu" />
          </div>

          {/* <div className="flex flex-col items-center justify-center space-y-4 text-center font-semibold text-brand">
            <FontAwesomeIcon
              size="2x"
              width={'30'}
              height={'40'}
              icon={faChevronRight}
            />
            <p>Next Week</p>
          </div> */}
        </div>
      </div>
    </>
  )
}

// PickDate.getLayout = getLayout
