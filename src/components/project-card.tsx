import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  description: string;
  image?: string;
  video?: string;
  technologies: readonly string[];
  links: readonly {
    icon: React.ReactNode;
    label: string;
    url: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  description,
  image,
  video,
  technologies,
  links,
  className,
}: Props) {
  return (
    <Card
      className={cn(
        "flex flex-col overflow-hidden border border-gray-200 dark:border-gray-700 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg h-full",
        className
      )}
    >
      <Link
        href={links.find((link) => link.label === "Website")?.url || ""}
        target="_blank"
        rel="noopener noreferrer"
        className={cn("block cursor-pointer", className)}
      >
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top" // needed because random black line at bottom of video
          />
        )}
        {image && (
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="h-40 w-full overflow-hidden object-cover object-top"
          />
        )}
      </Link>

      <CardHeader className="px-2 py-2">
        <div className="space-y-1">
          <Link
            href={links.find((link) => link.label === "Website")?.url || ""}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-colors duration-200 hover:text-blue-600"
          >
            <CardTitle className="mt-1 text-base">{title}</CardTitle>
          </Link>
          <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
            {description}
          </Markdown>
        </div>
      </CardHeader>

      <CardContent className="mt-auto flex flex-col px-2">
        {technologies && technologies.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {technologies?.map((technology) => (
              <Badge
                className="px-1 py-0 text-[10px]"
                variant="secondary"
                key={technology}
              >
                {technology}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter className="px-2 py-2">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links?.map((link, idx) => (
              <Link href={link?.url} key={idx} target="_blank">
                <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
                  {link.icon}
                  {link.label}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
