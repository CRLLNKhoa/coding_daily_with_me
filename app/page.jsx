import FilterProject from "@/components/FilterProject";
import ProjectCard from "@/components/ProjectCard";
import ProjectCardSkeleton from "@/components/ProjectCardSkeleton";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 p-4 h-[70vh] overflow-y-auto">
      <FilterProject />
      <div className="w-full grid grid-cols-4 gap-4 pt-4">
          <ProjectCardSkeleton />
          <ProjectCard />
          <ProjectCardSkeleton />
          <ProjectCard />
          <ProjectCardSkeleton />
          <ProjectCard />
          <ProjectCardSkeleton />
          <ProjectCard />
          <ProjectCardSkeleton />
          <ProjectCard />
          <ProjectCardSkeleton />
          <ProjectCard />
      </div>
    </div>
  )
}
