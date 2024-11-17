import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { useTranslation } from "react-i18next";
import { LineMdExternalLink } from "@/components/icon/LineMdExternalLink";

const getUsername = (name: string, link: string): string => {
  const isSpecialCase = ["Email", "Phone"].includes(name);
  const parts = isSpecialCase ? link.split(":") : link.split("/");
  return isSpecialCase ? parts[1] : `/${parts[parts.length - 1]}`;
};

const Profile = () => {
  const { t } = useTranslation();
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex flex-col items-start gap-2">
          <div className="w-full flex flex-row md:flex-col items-center md:items-start gap-4">
            <Image
              width={150}
              height={150}
              quality={100}
              src="/avatar.jpg"
              alt="avatar"
              className="rounded-full size-20 md:w-full h-auto max-h-80 max-w-80 mx-auto object-cover border-2 shadow-lg"
            />
            <div className="flex flex-col items-start justify-center">
              <h1 className="font-bold md:mt-4 text-lg md:text-xl">
                Phanthakarn Khumphai
              </h1>
              <p className="text-sm md:text-base text-muted-foreground">
                Full Stack Developer
              </p>
            </div>
          </div>
          <p className="mt-2 text-start text-sm text-muted-foreground">
            {t("profile.description")}
          </p>
          <Button className="mt-4 w-full" asChild>
            <Link
              href="https://izephanthakarn.netlify.app/"
              target="_blank"
              className="font-semibold"
            >
              {t("profile.fullWebsite")}
              <LineMdExternalLink className="inline-block size-4" />
            </Link>
          </Button>
          <div className="mt-4 flex flex-col space-y-2 border-t border-border pt-4 w-full">
            {socials.map((social: Social) => {
              const username = getUsername(social.name, social.link);

              return (
                <Link
                  key={uuidv4()}
                  href={social.link}
                  target="_blank"
                  aria-label={`${social.name} Logo`}
                  className="cursor-pointer flex items-center gap-2 group"
                >
                  {social.icon}
                  <p className="text-sm text-muted-foreground group-hover:text-primary transition-color duration-200 ease-linear">
                    {username}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Profile;
