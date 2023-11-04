"use client"
import FilterProject from "@/components/FilterProject";
import ProjectCard from "@/components/ProjectCard";
import ProjectCardSkeleton from "@/components/ProjectCardSkeleton";
import { useStoreProject } from "@/store";


export default function Home() {
  const projects = useStoreProject(state => state.projects)
  console.log(projects)
  return (
    <div className="flex flex-col flex-1 p-4 h-[70vh] overflow-y-auto">
      <FilterProject />
      <div className="w-full grid lg:grid-cols-4 gap-4 pt-4">
          {projects.map(item => <ProjectCard key={item.slug} data={item} />)}
      </div>
    </div>
  )
}
