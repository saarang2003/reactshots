import React from 'react'
import {Card , CardContent , CardTitle} from "@/components/ui/card"
import {Link} from "react-router-dom"
import { ArrowRight } from 'lucide-react'


function ProjectCard({
    title,
    description,
    path,
    image
}) {
  return (
    <Card className="w-[350px] h-full flex flex-col bg-red-200 shadow-2xl">
    <CardTitle className="text-center  selection:bg-purple-300 selection:text-black  font-bold text-2xl">{title}</CardTitle>
    
    <div className="w-[80%] mx-auto h-48 bg-gray-300 rounded-lg flex items-center justify-center">
      {image ? <img src={image} alt={title} className="h-full object-cover rounded-lg" /> : 'Image hai i'}
    </div>
    
    <CardContent className="line-clamp-3 text-sm text-gray-800 mt-2 flex-grow">
      {description}
    </CardContent>

    <div className="px-5 mb-3 mt-3">
      <Link to={path}>
        <button className="bg-[#5417D7] hover:bg-[#3e0fb5] text-white cursor-pointer px-6 py-2 rounded-lg shadow-2xl transition duration-300 w-full flex items-center justify-center gap-2">
          View Project <ArrowRight size={18} />
        </button>
      </Link>
    </div>
  </Card>
  )
}

export default ProjectCard