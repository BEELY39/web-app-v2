"use client"

import { motion } from "framer-motion"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"
import { HomeIcon } from "lucide-react"

const temoignages = [
  {
    nom: "Alexandre Martin",
    role: "Entrepreneur",
    texte: "DNservices a transformé mon entreprise. Leur solution de location de site web est exactement ce dont j'avais besoin pour démarrer sans investissement massif.",
    avatar: "https://ideogram.ai/assets/progressive-image/balanced/response/PQtYdOArTly0aBTYdSTKIg"
  },
  {
    nom: "Sophie Durand",
    role: "Artiste indépendante",
    texte: "Je suis ravie de mon expérience avec DNservices. Leur équipe a créé un site magnifique pour exposer mes œuvres, et le système de location est très abordable.",
    avatar: "https://github.com/avatars/marie-martin.jpg"
  },
  {
    nom: "Pierre Lefebvre",
    role: "Propriétaire de restaurant",
    texte: "Grâce à DNservices, j'ai pu obtenir un site web professionnel pour mon restaurant sans me ruiner. Le service client est exceptionnel !",
    avatar: "https://github.com/avatars/pierre-lefebvre.jpg"
  }
,
  {
    nom: "Sophie Dubois",
    role: "Propriétaire de boutique en ligne",
    texte: "DNservices m'a permis de lancer ma boutique en ligne sans stress financier. Leur solution est parfaite pour les petites entreprises comme la mienne.",
    avatar: "https://ideogram.ai/assets/image/lossless/response/TYHOdY-nTsK0nGRs3aGBlg"
  },
  {
    nom: "Lucas Moreau",
    role: "Consultant indépendant",
    texte: "Je recommande vivement DNservices. Leur approche flexible m'a permis d'avoir un site professionnel qui évolue avec mon activité.",
    avatar: "https://github.com/avatars/lucas-moreau.jpg"
  },
  {
    nom: "Émilie Rousseau",
    role: "Photographe freelance",
    texte: "DNservices a créé un portfolio en ligne qui met parfaitement en valeur mon travail. Le rapport qualité-prix est imbattable !",
    avatar: "https://ideogram.ai/assets/image/lossless/response/xGkTfPRFQK6zqhcrefUMUA"
  }
,
  {
    nom: "Claire Dubois",
    role: "Propriétaire de salon de beauté",
    texte: "DNservices a donné à mon salon une présence en ligne élégante et professionnelle. Leur service est impeccable et le site attire de nouveaux clients chaque jour.",
    avatar: "https://ideogram.ai/assets/image/lossless/response/zHkTfPRFQK6zqhcrefUMUA"
  },
  {
    nom: "Thomas Leroy",
    role: "Coach sportif",
    texte: "Grâce à DNservices, j'ai pu créer une plateforme en ligne pour mes cours de fitness. Le processus était simple et le résultat est au-delà de mes attentes.",
    avatar: "https://ideogram.ai/assets/image/lossless/response/yGkTfPRFQK6zqhcrefUMUA"
  },
  {
    nom: "Amélie Girard",
    role: "Auteure indépendante",
    texte: "DNservices m'a permis de créer un site web pour promouvoir mes livres sans me ruiner. Leur équipe est à l'écoute et très réactive.",
    avatar: "https://media.licdn.com/dms/image/v2/D4E0BAQGDczktZ9QNkg/company-logo_200_200/company-logo_200_200/0/1715783444657/altifund_management_logo?e=1732752000&v=beta&t=otmTH0Jw_jBl5-ALDkwaDk1ZJflsPPxJrR1JHaW4L38"
  }
]

export default function Temoignages() {
  return (
    <>
    <motion.div
      className="absolute top-4 left-4"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link href="/" className="flex items-center text-primary hover:text-primary-dark">
        <HomeIcon className="w-6 h-6 mr-2" />
        <span className="font-medium">Accueil</span>
      </Link>
    </motion.div>
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
          Témoignages de nos clients
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {temoignages.map((temoignage, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg shadow-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src={temoignage.avatar} alt={temoignage.nom} />
                  <AvatarFallback>{temoignage.nom.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold">{temoignage.nom}</h3>
                  <p className="text-sm text-gray-600">{temoignage.role}</p>
                </div>
              </div>
              <p className="text-gray-700">{temoignage.texte}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
    </>
    
  )
}