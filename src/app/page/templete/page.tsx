"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { ShoppingCart, Home, Utensils, PenTool, Briefcase, GraduationCap } from "lucide-react"

export default function TemplatesPage() {
  const templates = [
    { secteur: "E-commerce", image: "/template-ecommerce.png", link: "/templete/e-commerce/index.html", description: "Des designs modernes pour votre boutique en ligne", icon: <ShoppingCart className="h-6 w-6" /> },
    { secteur: "Immobilier", image: "/template-immobilier.png", link: "/templete/immobilier/index.html", description: "Présentez vos biens immobiliers avec élégance", icon: <Home className="h-6 w-6" /> },
    { secteur: "Restauration", image: "/template-restaurant.jpg", link: "/templete/restauration/index.html", description: "Mettez en appétit vos clients avec nos designs culinaires", icon: <Utensils className="h-6 w-6" /> },
    { secteur: "Blog", image: "/template-blog.jpg", link: "/templete/blog/index.html", description: "Exprimez-vous avec style grâce à nos templates de blog", icon: <PenTool className="h-6 w-6" /> },
    { secteur: "Portfolio", image: "/template-portfolio.jpg", link: "/templete/portfolio/index.html", description: "Montrez vos créations sous leur meilleur jour", icon: <Briefcase className="h-6 w-6" /> },
    { secteur: "Éducation", image: "/template-education.jpg", link: "/templete/education/index.html", description: "Des designs parfaits pour les institutions éducatives", icon: <GraduationCap className="h-6 w-6" /> },
  ]

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-12"
    >
      <h1 className="text-4xl font-bold text-center mb-6">Nos Templates par Secteur</h1>
      <p className="text-center text-lg mb-12 text-gray-600">Découvrez notre large gamme de templates professionnels, conçus pour répondre aux besoins spécifiques de chaque secteur d&apos;activité.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {templates.map((template, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {template.icon}
                  {template.secteur}
                </CardTitle>
                <CardDescription>{template.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={template.link} target="_blank" rel="noopener noreferrer">
                  <div className="relative group cursor-pointer">
                    <Image 
                      src={template.image} 
                      alt={template.secteur} 
                      width={400} 
                      height={300} 
                      className="w-full h-64 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
                      <span className="text-white text-xl font-bold">Voir le template</span>
                    </div>
                  </div>
                </Link>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={template.link} target="_blank" rel="noopener noreferrer">
                    Voir le détail
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <p className="text-lg mb-6">Vous ne trouvez pas ce que vous cherchez ? Nous pouvons créer un template personnalisé pour votre entreprise.</p>
        <Button asChild size="lg">
          <Link href="/contact">Contactez-nous pour un devis</Link>
        </Button>
      </div>
    </motion.div>
  )
}



