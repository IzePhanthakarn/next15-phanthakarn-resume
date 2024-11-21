import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";

const Language = () => {
  return (
    <Card className="mb-6">
      <CardHeader className="py-2 px-4 mb-0'">
        <h2 className="font-semibold text-primary text-lg">Language</h2>
      </CardHeader>
      <CardContent className="flex justify-between text-xs px-2 pl-8 sm:pl-6 pb-4">
        <ul className="list-disc">
            <li className="text-base sm:text-xs xl:text-sm 2xl:text-base text-muted-foreground">Thai</li>
            <li className="whitespace-nowrap text-base sm:text-xs xl:text-sm 2xl:text-base text-muted-foreground">English (intermediate)</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default Language;
