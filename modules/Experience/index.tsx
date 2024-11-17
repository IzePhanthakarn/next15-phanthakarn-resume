import { LineMdCalendar } from "@/components/icon/LineMdCalendar";
import { Card, CardContent } from "@/components/ui/card";
import { jobs } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";

const Experience = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">{t("workExperience.title")}</h2>
      <Card>
        <CardContent className="pt-6">
          <ul className="space-y-8">
            {jobs.map((job) => (
              <li key={uuidv4()} className="border-b last:border-b-0 pb-8 last:pb-0">
                <div className="flex items-center space-x-4">
                  <Image
                    src={job.logo}
                    alt={job.company}
                    width={60}
                    height={60}
                    className="rounded-md border shadow-md object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{t(`workExperience.${job.role}`)}</h3>
                    <Link href={job.link} className="text-sm text-muted-foreground hover:underline">{job.company}</Link>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2 flex items-center">
                  <LineMdCalendar className="size-5 mr-2" />
                  {t(`workExperience.${job.duration}`)}
                </p>
                <p className="text-sm mt-1.5">{t(`workExperience.${job.description}`)}</p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Experience;
