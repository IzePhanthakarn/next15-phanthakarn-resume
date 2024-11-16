import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { calculateDuration } from "@/lib/date";
import React from "react";

const AboutMe = () => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>About Me</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text">
          I started learning web development in 2022, beginning with projects
          using pure HTML/CSS from YouTube tutorials. Later, I explored
          frameworks to improve both front-end and back-end development,
          including building APIs with Golang. Now, with {calculateDuration("2022-01-01")} of experience,
          I{"'"}m able to take a website from its initial structure all the way
          to production deployment.
        </p>
      </CardContent>
    </Card>
  );
};

export default AboutMe;
