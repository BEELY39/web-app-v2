"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircleIcon, ThumbsUpIcon, LockIcon, RefreshCwIcon, HomeIcon } from "lucide-react"
import Link from "next/link"
import { DialogDemo } from "@/lib/dialoge"

export default function LocationOptionAchat() {
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
          Location de Site Web avec Option d&apos;Achat
        </h1>
        
        <p className="text-xl text-center text-gray-600 mb-12">
          Découvrez notre solution flexible pour obtenir un site web professionnel sans engagement à long terme.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Starter",
              price: "49€",
              features: [
                "Site vitrine 5 pages",
                "Design responsive",
                "Hébergement inclus",
                "Nom de domaine offert",
                "Maintenance mensuelle",
                "Certificat SSL inclus",
                "Optimisation pour les moteurs de recherche"
              ]
            },
            {
              title: "Business",
              price: "99€",
              features: [
                "Site jusqu'à 10 pages",
                "Design personnalisé",
                "E-commerce (jusqu'à 50 produits)",
                "SEO de base",
                "Support prioritaire",
                "Intégration de médias sociaux",
                "Formulaires de contact avancés",
                "Analyse de trafic"
              ]
            },
            {
              title: "Premium",
              price: "199€",
              features: [
                "Site illimité",
                "Design sur mesure",
                "E-commerce avancé",
                "SEO avancé",
                "Formations incluses",
                "Intégration CRM",
                "Chat en direct",
                "Optimisation des performances",
                "Sauvegarde quotidienne"
              ]
            }
          ].map((plan, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="px-6 py-8">
                <h3 className="text-2xl font-semibold text-center mb-4">{plan.title}</h3>
                <p className="text-4xl font-bold text-center mb-6">{plan.price}<span className="text-base font-normal">/mois</span></p>
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 pb-8">
                <Button onClick={(e) => {
                e.preventDefault();
                const selectedPlan = plan.title;
                const selectedPrice = plan.price;
                console.log(`Plan sélectionné : ${selectedPlan}, Prix : ${selectedPrice}`);
                
                // Fonction pour faire défiler jusqu'en bas de la page
                const scrollToBottom = () => {
                  window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: 'smooth'
                  });
                };
                
                // Appel de la fonction de défilement
                scrollToBottom();
                
                // Affichage d'une alerte après un court délai pour laisser le temps au défilement de s'effectuer
                setTimeout(() => {
                  alert(`Vous avez choisi le plan ${selectedPlan} à ${selectedPrice}/mois. Veuillez consulter les informations supplémentaires en bas de la page.`);
                }, 1000);
                }} className="w-full bg-primary hover:bg-primary-dark text-white">Choisir ce plan</Button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-8 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Avantages de notre offre</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <div className="flex justify-center"><ThumbsUpIcon className="h-12 w-12 text-primary" /></div>,
                title: "Flexibilité financière",
                description: "Pas de gros investissement initial, paiements mensuels adaptés à votre budget."
              },
              {
                icon: <div className="flex justify-center"><LockIcon className="h-12 w-12 text-primary" /></div>,
                title: "Sans engagement",
                description: "Possibilité de résilier à tout moment après la période minimale de 6 mois."
              },
              {
                icon: <div className="flex justify-center"><RefreshCwIcon className="h-12 w-12 text-primary" /></div>,
                title: "Mises à jour incluses",
                description: "Votre site reste toujours à jour avec les dernières technologies et fonctionnalités."
              },
              {
                icon: <div className="flex justify-center"><CheckCircleIcon className="h-12 w-12 text-primary" /></div>,
                title: "Option d'achat avantageuse",
                description: "Après 24 mois, devenez propriétaire de votre site pour seulement 1€ symbolique."
              }
            ].map((advantage, index) => (
              <div key={index} className="text-center">
                {advantage.icon}
                <h3 className="text-xl font-semibold my-4">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="text-3xl font-bold mb-4">Comment ça marche ?</h2>
          <p className="text-xl text-gray-600 mb-8">
            1. Choisissez votre plan<br />
            2. Nous créons votre site sur mesure<br />
            3. Payez un loyer mensuel pendant la durée de votre choix<br />
            4. Après 24 mois, optez pour l&apos;achat à 1€ ou continuez la location<br />
            5. Profitez d&apos;un support et de mises à jour continues
          </p>
          <DialogDemo />
        </motion.div>
      </motion.div>
    </div>  
    </>
   
  )
}
