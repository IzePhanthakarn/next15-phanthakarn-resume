import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator';
import React from 'react'
import { useTranslation } from 'react-i18next';

const PersonalInfomation = () => {
  const { t } = useTranslation();
  return (
    <Card className="mb-6 w-full">
      <CardHeader className='py-2 px-4 mb-2 sm:mb-0'>
        <h2 className='font-semibold text-primary text-lg'>{t("personalInfo.title")}</h2>
      </CardHeader>
      <CardContent className="flex flex-col sm:flex-row justify-between px-4 pb-4 space-y-1 sm:space-y-0">
        <div className="flex flex-col space-y-1 sm:space-y-0">
            <div className="flex">
                <h3 className='personalinfo_column1-title'>{t("personalInfo.nickname")}:</h3>
                <p className="personalinfo_column1-value">{t("personalInfo.nicknameValue")}</p>
            </div>
            <div className="flex">
                <h3 className='personalinfo_column1-title'>{t("personalInfo.age")}:</h3>
                <p className="personalinfo_column1-value">{t("personalInfo.ageValue")}</p>
            </div>
        </div>
        <Separator orientation="vertical" className='h-auto' />
        <div className="flex flex-col space-y-1 sm:space-y-0">
            <div className="flex">
                <h3 className='personalinfo_column2-title whitespace-nowrap'>{t("personalInfo.dateOfBirth")}:</h3>
                <p className="personalinfo_column2-value">{t("personalInfo.dateOfBirthValue")}</p>
            </div>
            <div className="flex">
                <h3 className='personalinfo_column2-title'>{t("personalInfo.nationality")}:</h3>
                <p className="personalinfo_column2-value">{t("personalInfo.nationalityValue")}</p>
            </div>
        </div>
        <Separator orientation="vertical" />
        <div className="flex flex-col space-y-1 sm:space-y-0">
            <div className="flex">
                <h3 className='personalinfo_column3-title'>{t("personalInfo.height")}:</h3>
                <p className="personalinfo_column3-value">{t("personalInfo.heightValue")}</p>
            </div>
            <div className="flex">
                <h3 className='personalinfo_column3-title'>{t("personalInfo.weight")}:</h3>
                <p className="personalinfo_column3-value">{t("personalInfo.weightValue")}</p>
            </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default PersonalInfomation