/**
* Ce code a été généré par v0 par Vercel.
* @see https://v0.dev/t/6vsnMEUJtWf
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Ajoutez des polices à votre projet Next.js:

import { Cabin } from 'next/font/google'
import { DM_Sans } from 'next/font/google'

cabin({
  subsets: ['latin'],
  display: 'swap',
})

dm_sans({
  subsets: ['latin'],
  display: 'swap',
})

Pour en savoir plus sur l'utilisation de ces polices, veuillez consulter la documentation Next.js:
- Répertoire App: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Répertoire Pages: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
"use client"
import Image from "next/image";
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form";
import axios from "axios";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { DialogDemo } from "@/lib/dialoge";
import { CodeIcon, PaletteIcon, SearchIcon, WrenchIcon, HomeIcon } from "lucide-react";
interface FormData {
  name: string;
  email: string;
  message: string;
}

export function Homepage() {
  const [formValues, setFormValues] = useState<Partial<FormData>>({});

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    const output = {
      ...data,
      timestamp: new Date().toISOString(),
    };
    
    try {
      const response = await axios.post("/api/handleform", output);
      console.log("Réponse de l'API:", response.data);
      alert("Formulaire envoyé avec succès !");
      reset(); // Réinitialise le formulaire après l'envoi réussi
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error);
      alert("Erreur lors de l'envoi du formulaire. Veuillez réessayer.");
    }
  };

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-primary text-primary-foreground py-6 px-4 md:px-8 flex items-center justify-between">
        <motion.div 
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <BrushIcon className="w-8 h-8" />
          <span className="text-2xl font-bold">DNservices</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-md bg-primary-foreground px-4 py-2 text-sm font-medium text-primary shadow-sm transition-colors hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            onClick={(e) => {
              e.preventDefault();
              const contactForm = document.querySelector('form');
              if (contactForm) {
                contactForm.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Obtenir un devis
          </Link>
        </motion.div>
      </header>
      <main className="flex-1">
        <motion.section 
          className="py-12 md:py-20 lg:py-24 px-4 md:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Développement d&apos;application web</h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              Notre équipe de designers et développeurs crée des applications web visuellement époustouflantes et
              fonctionnellement hautement performantes, adaptées à vos besoins commerciaux.
            </p>
            <div className="flex justify-center gap-4 items-center">
              <DialogDemo  />
              <Button variant="outline" className="mt-4 hover:bg-primary hover:text-primary-foreground">
                <Link href="/page/cv">
                Voir le CV
              </Link>
            </Button>
            </div>
          </div>
        </motion.section>
        
        <motion.section 
          className="bg-muted py-12 md:py-20 lg:py-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-8">
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <h2 className="text-3xl font-bold">Nos services</h2>
              <p className="text-muted-foreground">
                De la création d&apos;application web personnalisée à la conception UI/UX, nous offrons une gamme de services pour vous aider à
                réussir en ligne.
              </p>
              <ul className="grid gap-2">
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-primary" />
                  <span>Développement d&apos;application web</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-primary" />
                  <span>Conception UI/UX</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-primary" />
                  <span>Conception responsive</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-primary" />
                  <span>Optimisation SEO</span>
                </li>
              </ul>
            </motion.div>
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <h2 className="text-3xl font-bold">Nos réalisations</h2>
              <p className="text-muted-foreground">
                Découvrez quelques-unes de nos réalisations récentes et voyez comment nous pouvons vous aider à vous démarquer.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Link href="page/cv" passHref className="group relative">
                  <Image
                    src="/cv.png"
                    width={240}
                    height={160}
                    alt="CV"
                    className="rounded-lg object-cover cursor-pointer transition-transform duration-300 transform group-hover:scale-105"
                    quality={100}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">Voir le CV</span>
                  </div>
                </Link>
                <Link href="/page/wheater" passHref className="group relative">
                  <Image
                    src="/météo.png"
                    width={240}
                    height={160}
                    alt="Projet 2"
                    className="rounded-lg object-cover cursor-pointer transition-transform duration-300 transform group-hover:scale-105"
                    quality={100}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">Voir la météo</span>
                  </div>
                </Link>
                <Link href="/page/maintenace" passHref className="group relative">
                  <Image
                    src="/Maintenance-pana.svg"
                    width={240}
                    height={160}
                    alt="Projet 3"
                    className="rounded-lg object-cover cursor-pointer transition-transform duration-300 transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">En maintenance</span>
                  </div>
                </Link>
                <Link href="/page/maintenace" passHref className="group relative">
                  <Image
                    src="/Maintenance-pana.svg"
                    width={240}
                    height={160}
                    alt="Projet 4"
                    className="rounded-lg object-cover cursor-pointer transition-transform duration-300 transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">En maintenance</span>
                  </div>
                </Link>
              </div>
            </motion.div>

          </div>
        <motion.section 
          className="py-12 md:py-20 lg:py-24 px-4 md:px-8 bg-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Nos Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <CodeIcon className="w-6 h-6 mr-2 text-primary" />
                  <h3 className="text-xl font-semibold">Développement Web</h3>
                </div>
                <p className="text-gray-600">Nous créons des sites web modernes et réactifs, adaptés à vos besoins spécifiques.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <PaletteIcon className="w-6 h-6 mr-2 text-primary" />
                  <h3 className="text-xl font-semibold">Design UX/UI</h3>
                </div>
                <p className="text-gray-600">Nous concevons des interfaces utilisateur intuitives et esthétiques pour une expérience optimale.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <SearchIcon className="w-6 h-6 mr-2 text-primary" />
                  <h3 className="text-xl font-semibold">Optimisation SEO</h3>
                </div>
                <p className="text-gray-600">Nous améliorons la visibilité de votre site web dans les moteurs de recherche.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <WrenchIcon className="w-6 h-6 mr-2 text-primary" />
                  <h3 className="text-xl font-semibold">Maintenance et Support</h3>
                </div>
                <p className="text-gray-600">Nous assurons le bon fonctionnement de votre site web avec un support technique continu.</p>
              </div>
            </div>
            <div className="mt-12 bg-primary text-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <HomeIcon className="w-8 h-8 mr-3" />
                <h3 className="text-2xl font-bold">Location de Site Web avec Option d&apos;Achat</h3>
              </div>
              <p className="text-lg mb-4">Découvrez notre offre unique : louez votre site web et bénéficiez d&apos;une option d&apos;achat !</p>
              <ul className="list-disc list-inside mb-6">
                <li>Flexibilité financière</li>
                <li>Mise à jour et maintenance incluses</li>
                <li>Possibilité d&apos;acquérir votre site à tout moment</li>
              </ul>
              <Button className="bg-white text-primary hover:bg-gray-200">
                <Link href="/page/loasite">
                  En savoir plus
                </Link>
              </Button>
            </div>
            
          </div>
        </motion.section>
        <motion.section 
          className="py-12 md:py-20 lg:py-24 px-4 md:px-8 bg-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.05 }}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Nos Templates par Secteur</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { secteur: "E-commerce", Image: "/template-ecommerce.png" },
                { secteur: "Restaurant", Image: "/template-restaurant.jpg" },
                { secteur: "Immobilier", Image: "/template-immobilier.png" },
              ].map((item, index) => (
                <div key={index} className="relative group">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
                    <Image
                      src={item.Image}
                      alt={`Template ${item.secteur}`}
                      width={400}
                      height={225}
                      objectFit="cover"
                      className="transition-opacity duration-300 group-hover:opacity-75"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded">
                        {item.secteur}
                      </span>
                    </div>
                  </div>
                  <p className="mt-2 text-center font-semibold">{item.secteur}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button className="bg-primary text-white hover:bg-primary-dark">
                <Link href="/page/maintenace">
                  Voir tous nos templates
                </Link>
              </Button>
            </div>
          </div>
        </motion.section>
        </motion.section>
        <motion.section 
          className="py-12 md:py-20 lg:py-24 px-4 md:px-8 bg-gray-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Témoignages Clients</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">&quot; DNservices a transformé notre présence en ligne. Leur équipe est professionnelle et attentive à nos besoins.&quot;</p>
                <p className="font-semibold">- Marie Dupont, PDG de TechInno</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">&quot;Le service de location de site web est une solution parfaite pour notre startup. Flexibilité et qualité au rendez-vous !&quot;</p>
                <p className="font-semibold">- Pierre Martin, Fondateur de GreenStart</p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Button className="bg-primary text-white hover:bg-primary-dark">
                <Link href="/page/temoingnages">
                  Voir plus de témoignages
                </Link>
              </Button>
            </div>
          </div>
        </motion.section>
        
        <motion.section 
          className="py-12 md:py-20 lg:py-24 px-4 md:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Obtenir un devis</h2>
            <p className="text-muted-foreground text-lg md:text-xl">
              Remplissez le formulaire ci-dessous et un de nos experts vous contactera pour discuter de votre projet.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 max-w-md mx-auto">
              <Input 
                type="text" 
                placeholder="Nom" 
                className="w-full"
                {...register("name", { required: true })} 
              />
              <Input 
                type="email" 
                placeholder="Email" 
                className="w-full"
                {...register("email", { required: true, pattern: /^\S+@\S+$/i })} 
              />
              <Textarea 
                placeholder="Message" 
                rows={4} 
                className="w-full"
                {...register("message", { required: true })} 
              />
              <Button type="submit" className="w-full">
                Obtenir un devis
              </Button>
            </form>
          </div>
        </motion.section>
      </main>
      <motion.footer 
        className="bg-muted text-muted-foreground py-6 px-4 md:px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.4 }}
      >
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <BrushIcon className="w-6 h-6" />
            <span>&copy; 2024 DNservices</span>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="#" className="hover:underline" prefetch={false}>
              Mentions légales
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Politique de confidentialité
            </Link>
            <Link href="/page/cv" className="hover:underline" prefetch={false}>
              Contact
            </Link>
          </nav>
        </div>
      </motion.footer>
    </div>
  )
}

function BrushIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
      <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
    </svg>
  )
}


function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}