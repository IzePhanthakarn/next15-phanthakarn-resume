import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator';
import React from 'react'

const PersonalInfomation = () => {
  return (
    <Card className="mb-6 w-full">
      <CardHeader className='py-2 px-4 mb-2 sm:mb-0'>
        <h2 className='font-semibold text-primary text-lg'>Personal Infomation</h2>
      </CardHeader>
      <CardContent className="flex flex-col sm:flex-row justify-between px-4 pb-4 space-y-1 sm:space-y-0">
        <div className="flex flex-col space-y-1 sm:space-y-0">
            <div className="flex">
                <h3 className='w-full sm:w-16 md:w-24 lg:w-16 xl:w-28 text-base sm:text-xs xl:text-sm 2xl:text-base font-semibold'>Nickname:</h3>
                <p className="ml-2 w-full sm:w-fit text-end sm:text-start text-base sm:text-xs xl:text-sm 2xl:text-base text-muted-foreground">Ize</p>
            </div>
            <div className="flex">
                <h3 className='w-full sm:w-16 md:w-24 lg:w-16 xl:w-28 text-base sm:text-xs xl:text-sm 2xl:text-base font-semibold'>Age:</h3>
                <p className="ml-2 w-full sm:w-fit text-end sm:text-start text-base sm:text-xs xl:text-sm 2xl:text-base text-muted-foreground">23 Years</p>
            </div>
        </div>
        <Separator orientation="vertical" className='h-auto' />
        <div className="flex flex-col space-y-1 sm:space-y-0">
            <div className="flex">
                <h3 className='w-full sm:w-20 md:w-28 lg:w-20 xl:w-36 text-base sm:text-xs xl:text-sm 2xl:text-base font-semibold whitespace-nowrap'>Date of Birth:</h3>
                <p className="ml-2 w-full sm:w-fit text-end sm:text-start text-base sm:text-xs xl:text-sm 2xl:text-base text-muted-foreground">17 June 2001</p>
            </div>
            <div className="flex">
                <h3 className='w-full sm:w-20 md:w-28 lg:w-20 xl:w-36 text-base sm:text-xs xl:text-sm 2xl:text-base font-semibold'>Nationality:</h3>
                <p className="ml-2 w-full sm:w-fit text-end sm:text-start text-base sm:text-xs xl:text-sm 2xl:text-base text-muted-foreground">Thai</p>
            </div>
        </div>
        <Separator orientation="vertical" />
        <div className="flex flex-col space-y-1 sm:space-y-0">
            <div className="flex">
                <h3 className='w-full sm:w-12 md:w-16 lg:w-12 xl:w-20 text-base sm:text-xs xl:text-sm 2xl:text-base font-semibold'>Height:</h3>
                <p className="ml-2 w-full sm:w-fit text-end sm:text-start text-base sm:text-xs xl:text-sm 2xl:text-base text-muted-foreground">160 cm</p>
            </div>
            <div className="flex">
                <h3 className='w-full sm:w-12 md:w-16 lg:w-12 xl:w-20 text-base sm:text-xs xl:text-sm 2xl:text-base font-semibold'>Weight:</h3>
                <p className="ml-2 w-full sm:w-fit text-end sm:text-start text-base sm:text-xs xl:text-sm 2xl:text-base text-muted-foreground">49 kg</p>
            </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default PersonalInfomation